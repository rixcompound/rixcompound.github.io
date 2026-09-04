/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TrackClosureConfig } from '../types';

export const STORAGE_KEY_CLOSURE = 'rix_track_closure_config';
export const STORAGE_KEY_GH_SETTINGS = 'rix_admin_github_settings';

export const DEFAULT_CLOSURE_CONFIG: TrackClosureConfig = {
  isClosed: false,
  startDate: '',
  endDate: '',
  customText: '',
  reason: '',
  lastUpdated: '',
};

export function loadClosureConfig(): TrackClosureConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CLOSURE);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_CLOSURE_CONFIG,
        ...parsed,
      };
    }
  } catch (err) {
    console.error('Failed to load closure config from localStorage:', err);
  }
  return DEFAULT_CLOSURE_CONFIG;
}

export function saveClosureConfig(config: TrackClosureConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY_CLOSURE, JSON.stringify(config));
  } catch (err) {
    console.error('Failed to save closure config to localStorage:', err);
  }
}

/**
 * Loads closure config from public/closure.json on the server/GitHub Pages.
 * This ensures that when hosted on GitHub, all visitors worldwide fetch the
 * latest published closure status without relying on local browser storage.
 */
export async function fetchRemoteClosureConfig(): Promise<TrackClosureConfig | null> {
  try {
    const res = await fetch(`./closure.json?_t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      const data = await res.json();
      if (typeof data === 'object' && data !== null) {
        return {
          ...DEFAULT_CLOSURE_CONFIG,
          ...data,
        };
      }
    }
  } catch {
    // Silently fall back if offline or file is unreachable
  }
  return null;
}

export function isClosureActive(config: TrackClosureConfig): boolean {
  if (!config.isClosed) return false;
  const hasDates = Boolean(config.startDate && config.startDate.trim().length > 0);
  const hasCustomText = Boolean(config.customText && config.customText.trim().length > 0);
  return hasDates || hasCustomText;
}

export function getClosureBannerText(config: TrackClosureConfig): string {
  if (config.customText && config.customText.trim().length > 0) {
    const text = config.customText.trim();
    if (/^closed/i.test(text)) {
      return text;
    }
    return `Closed from ${text}`;
  }

  if (!config.startDate) {
    return 'Closed';
  }

  try {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const [sY, sM, sD] = config.startDate.split('-').map(Number);
    const startStr = `${sD} ${monthNames[sM - 1]}`;

    if (!config.endDate || config.startDate === config.endDate) {
      return `Closed on ${startStr}`;
    }

    const [eY, eM, eD] = config.endDate.split('-').map(Number);
    const endStr = `${eD} ${monthNames[eM - 1]}`;

    return `Closed from ${startStr} - ${endStr}`;
  } catch {
    if (config.endDate && config.endDate !== config.startDate) {
      return `Closed from ${config.startDate} - ${config.endDate}`;
    }
    return `Closed on ${config.startDate}`;
  }
}

/**
 * Downloads closure.json for manual upload or commit to GitHub.
 */
export function downloadClosureJson(config: TrackClosureConfig): void {
  const jsonString = JSON.stringify(config, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'closure.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Directly commits updated closure.json to the GitHub repository using the GitHub REST API.
 */
export async function pushClosureToGitHub(
  repo: string, // e.g. "owner/repo"
  token: string,
  config: TrackClosureConfig
): Promise<{ success: boolean; message: string }> {
  try {
    const cleanRepo = repo.trim().replace(/^https:\/\/github\.com\//, '').replace(/\/$/, '');
    const path = 'public/closure.json';
    const apiUrl = `https://api.github.com/repos/${cleanRepo}/contents/${path}`;

    // 1. Check existing file to retrieve current SHA
    let existingSha = '';
    try {
      const getRes = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token.trim()}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      if (getRes.ok) {
        const fileData = await getRes.json();
        existingSha = fileData.sha || '';
      }
    } catch {
      // If file doesn't exist yet, SHA remains empty
    }

    // 2. Put / Commit the updated file content
    const contentPayload = JSON.stringify(config, null, 2);
    // Safe utf-8 base64 encoding
    const base64Content = btoa(unescape(encodeURIComponent(contentPayload)));

    const bodyData: { message: string; content: string; sha?: string } = {
      message: config.isClosed 
        ? `Update track closure: ${getClosureBannerText(config)}` 
        : 'Update track closure: Track Marked as Open',
      content: base64Content,
    };

    if (existingSha) {
      bodyData.sha = existingSha;
    }

    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token.trim()}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    });

    if (putRes.ok) {
      return { 
        success: true, 
        message: 'Successfully published to your GitHub repository! GitHub Pages will auto-update in ~30 seconds.' 
      };
    } else {
      const errJson = await putRes.json().catch(() => ({}));
      return { 
        success: false, 
        message: errJson.message || `GitHub error (Status: ${putRes.status})` 
      };
    }
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    return { success: false, message: `Failed to connect to GitHub: ${errMsg}` };
  }
}
