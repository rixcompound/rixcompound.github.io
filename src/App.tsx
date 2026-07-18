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
    <div className="min-h-screen bg-[#12161A] text-[#F8F9FA] relative overflow-x-hidden">
      
      {/* Main Website Layout - Mounts and renders instantly */}
      <div 
        id="appRoot" 
        className="min-h-screen bg-[#12161A] text-[#F8F9FA] flex flex-col relative font-sans antialiased selection:bg-[#FF6600] selection:text-[#12161A] animate-fade-in"
      >
        {/* Navigation Menu */}
        <Navigation />

        {/* Floating Notification Bubble for Rental Requirements */}
        {showNotification && (
          <div
            className="fixed bottom-4 left-4 sm:left-6 lg:left-8 z-40 cursor-pointer max-w-[210px] sm:max-w-[250px] group select-none hover:-translate-y-0.5 transition-transform duration-300"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('.close-btn')) return;
              document.getElementById('rental-requirements')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="relative overflow-hidden rounded-md bg-[#1F242A] border border-neutral-800 p-3 pr-7 shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#FF6600]" />
              
              <div className="pl-1 flex items-start gap-2">
                <div className="flex-shrink-0 text-[#FF6600] mt-0.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-mono text-[8px] text-neutral-400 font-medium tracking-wider block uppercase">
                      Protocol
                    </span>
                    <span className="flex h-1 w-1 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6600]/50 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1 w-1 bg-[#FF6600]"></span>
                    </span>
                  </div>
                  <h4 className="text-[#F8F9FA] font-display text-[11px] font-bold uppercase tracking-tight group-hover:text-[#FF6600] transition-colors">
                    Rider Requirements
                  </h4>
                  <p className="text-neutral-400 text-[10px] mt-0.5 leading-relaxed font-sans">
                    Prior off-road experience required. Tap to verify.
                  </p>
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                className="close-btn absolute top-1.5 right-1.5 p-0.5 text-neutral-400 hover:text-[#F8F9FA] rounded-full hover:bg-neutral-800 transition-colors z-50"
                aria-label="Dismiss notification"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Main Sections */}
        <main className="flex-1 w-full flex flex-col">
          <Hero />
          <Track />
          <PricingCalculator />
          <EventsGallery />
          <AboutContact />
        </main>
      </div>
    </div>
  );
}

