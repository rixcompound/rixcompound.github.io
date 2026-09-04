/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc,
  onSnapshot, 
  getDocFromServer 
} from 'firebase/firestore';
import { TrackClosureConfig } from '../types';
import { DEFAULT_CLOSURE_CONFIG } from './closure';
import configData from '../../firebase-applet-config.json';

// Ensure exact production-ready credentials are always available
export const firebaseConfig = {
  projectId: configData?.projectId || 'gen-lang-client-0120765724',
  appId: configData?.appId || '1:575775759368:web:273c0704f585a51b1bc5bd',
  apiKey: configData?.apiKey || 'AIzaSyDlAaDvww--DMOnP1DkMAZXtIN8DY2CjT8',
  authDomain: configData?.authDomain || 'gen-lang-client-0120765724.firebaseapp.com',
  firestoreDatabaseId: configData?.firestoreDatabaseId || 'ai-studio-rixcompound-1e8aa6f1-9a3e-4762-a271-4a9890c8f143',
  storageBucket: configData?.storageBucket || 'gen-lang-client-0120765724.firebasestorage.app',
  messagingSenderId: configData?.messagingSenderId || '575775759368',
};

// Initialize Firebase App
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore (utilizing custom provisioned database ID)
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

const CLOSURE_DOC_PATH = {
  collection: 'settings',
  doc: 'closure'
};

/**
 * Validates connection to Firestore on initial boot as required by system skill
 */
export async function testFirebaseConnection(): Promise<boolean> {
  try {
    const testDocRef = doc(db, CLOSURE_DOC_PATH.collection, CLOSURE_DOC_PATH.doc);
    await getDocFromServer(testDocRef);
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or initializing.');
    }
    return false;
  }
}

/**
 * Directly queries the current closure configuration from Firestore.
 * Used on page mount for instant retrieval.
 */
export async function getClosureConfigFromFirebase(): Promise<TrackClosureConfig | null> {
  try {
    const docRef = doc(db, CLOSURE_DOC_PATH.collection, CLOSURE_DOC_PATH.doc);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const data = snapshot.data();
      return {
        ...DEFAULT_CLOSURE_CONFIG,
        ...data,
        isClosed: Boolean(data.isClosed),
      };
    }
  } catch (err) {
    console.warn('Could not fetch closure configuration from Firestore:', err);
  }
  return null;
}

/**
 * Subscribes to real-time changes of the track closure state.
 * Any update made from the admin's phone will instantly update all visitors' screens worldwide.
 */
export function subscribeToClosureConfig(
  onUpdate: (config: TrackClosureConfig) => void
): () => void {
  try {
    const docRef = doc(db, CLOSURE_DOC_PATH.collection, CLOSURE_DOC_PATH.doc);
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const merged: TrackClosureConfig = {
            ...DEFAULT_CLOSURE_CONFIG,
            ...data,
            isClosed: Boolean(data.isClosed),
          };
          onUpdate(merged);
        } else {
          // Document does not exist yet; default open
          onUpdate(DEFAULT_CLOSURE_CONFIG);
        }
      },
      (error) => {
        console.warn('Firestore subscription notice:', error);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.error('Failed to subscribe to Firestore closure doc:', err);
    return () => {};
  }
}

/**
 * Saves closure config directly to Firestore.
 * Works seamlessly from mobile or desktop without needing GitHub access.
 */
export async function saveClosureConfigToFirebase(
  config: TrackClosureConfig
): Promise<{ success: boolean; message: string }> {
  try {
    const docRef = doc(db, CLOSURE_DOC_PATH.collection, CLOSURE_DOC_PATH.doc);
    const payload: TrackClosureConfig = {
      isClosed: config.isClosed,
      startDate: config.startDate || '',
      endDate: config.endDate || '',
      customText: config.customText || '',
      reason: config.reason || '',
      lastUpdated: new Date().toISOString(),
    };

    await setDoc(docRef, payload, { merge: true });
    return { 
      success: true, 
      message: config.isClosed
        ? '✓ Track closure successfully published to Firebase! Live for all visitors.'
        : '✓ Track marked open in Firebase. Closure banner removed for all visitors.'
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error('Error saving closure to Firestore:', err);
    return { 
      success: false, 
      message: `Failed to save to Firebase: ${errMsg}` 
    };
  }
}
