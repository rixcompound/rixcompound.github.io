/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Track from './components/Track';
import PricingCalculator from './components/PricingCalculator';
import EventsGallery from './components/EventsGallery';
import AboutContact from './components/AboutContact';
import { ShieldAlert, X } from 'lucide-react';

export default function App() {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div id="appRoot" className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col relative font-sans antialiased selection:bg-brand selection:text-black">
      
      {/* Modern Redesigned Header Menu */}
      <Navigation />

      {/* Floating Notification Bubble for Rental Requirements */}
      {showNotification && (
        <div
          className="fixed top-24 left-4 sm:left-6 lg:left-8 z-40 cursor-pointer max-w-[210px] sm:max-w-[240px] group select-none animate-float-rotate transition-all duration-300"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('.close-btn')) return;
            document.getElementById('rental-requirements')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="relative overflow-hidden rounded-xl bg-neutral-950/95 border-2 border-amber-500 shadow-[0_15px_35px_rgba(234,179,8,0.3)] backdrop-blur-md p-3 pr-8 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(234,179,8,0.45)] transition-all duration-300">
            {/* Background Hazard Stripe Accent inside */}
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_6px,#000_6px,#000_12px)]" />
            
            <div className="pl-2 flex items-start gap-2">
              <div className="flex-shrink-0 bg-amber-500/10 border border-amber-500/30 text-amber-500 p-1.5 rounded-lg mt-0.5 animate-pulse">
                <ShieldAlert className="w-4 h-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-mono text-[9px] text-amber-500 font-black tracking-widest block uppercase">
                    RENTAL ALERT
                  </span>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                  </span>
                </div>
                <h4 className="text-white font-extrabold text-xs uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                  Rider Rules
                </h4>
                <p className="text-neutral-400 text-[10px] sm:text-[11px] mt-0.5 leading-relaxed">
                  Competent experience is strictly mandatory. Tap to view requirements.
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="close-btn absolute top-2 right-2 p-1 text-neutral-500 hover:text-white rounded-full bg-neutral-950/40 hover:bg-neutral-950/80 transition-colors z-50"
              aria-label="Dismiss notification"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Main Grid content flow */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* Hero Welcome */}
        <Hero />

        {/* Tracks Highlight and Video tour */}
        <Track />

        {/* Pricing Lists & Live Quote Booking Forms */}
        <PricingCalculator />

        {/* Events Schedule & Image grid with lightboxes */}
        <EventsGallery />

        {/* Story, Map integration, hours and footer */}
        <AboutContact />

      </main>
    </div>
  );
}
