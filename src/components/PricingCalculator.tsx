/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Bike 
} from 'lucide-react';

export default function PricingCalculator() {
  const whatsappLink = "https://wa.me/27768299919";
  const phoneCallLink = "tel:+27768299919";
  const phoneDisplay = "0768299919";

  return (
    <section id="pricing" className="py-10 sm:py-12 bg-neutral-900/10 relative">
      {/* Visual background effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand mb-3">
            Simple, Transparent Rates
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Pricing & <span className="text-brand">Packages</span>
          </p>
          <div className="w-16 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing Layout: 2 Main Service Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* Weekends Rate Card */}
          <div className="bg-neutral-900/50 rounded-3xl border-2 border-neutral-800 p-6 sm:p-10 flex flex-col justify-between hover:border-brand/35 transition-all">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="px-3.5 py-1.5 bg-brand/10 border border-brand/30 text-brand text-xs font-extrabold uppercase tracking-wider rounded-lg">
                  Saturdays & Sundays
                </span>
                <span className="text-neutral-500 font-mono text-xs">No Bookings Required</span>
              </div>
              
              <h3 className="font-display text-3xl font-extrabold text-white uppercase italic tracking-tight mb-2">
                Weekend Open Sessions
              </h3>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Show up, hop on, and ride! Perfect for individuals and families. Open every weekend.
              </p>
              
              <div className="space-y-4">
                <div className="bg-neutral-950/45 p-4 rounded-xl border border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs sm:text-sm">Rental Pit Bike</h4>
                    <span className="text-[11px] sm:text-xs text-neutral-500">Perfect entry level sizing for all riders</span>
                  </div>
                  <span className="font-mono text-lg sm:text-xl font-bold text-brand whitespace-nowrap">R250 <span className="text-[10px] sm:text-xs text-neutral-450 font-sans font-normal">/ 30m</span></span>
                </div>

                <div className="bg-neutral-950/45 p-4 rounded-xl border border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs sm:text-sm">Rental Quad Bike</h4>
                    <span className="text-[11px] sm:text-xs text-neutral-500">Stable, solid gravel and sand exploration</span>
                  </div>
                  <span className="font-mono text-lg sm:text-xl font-bold text-brand whitespace-nowrap">R300 <span className="text-[10px] sm:text-xs text-neutral-450 font-sans font-normal">/ 30m</span></span>
                </div>

                <div className="bg-neutral-950/45 p-4 rounded-xl border border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs sm:text-sm">Bring Your Own Bike</h4>
                    <span className="text-[11px] sm:text-xs text-neutral-500">All-day unlimited access to open lines</span>
                  </div>
                  <span className="font-mono text-lg sm:text-xl font-bold text-brand whitespace-nowrap">R150 <span className="text-[10px] sm:text-xs text-neutral-450 font-sans font-normal">/ Day</span></span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-850 text-neutral-450 text-xs flex flex-wrap gap-x-4 gap-y-1">
              <span>⏰ Sat: 9am - 3pm • Sun: 9am - 2:30pm</span>
              <span>• Open Public Holidays</span>
              <span>• Helmets Supplied and Guided</span>
            </div>
          </div>

          {/* Weekdays Group Packages Card */}
          <div className="bg-neutral-900/50 rounded-3xl border-2 border-neutral-850 p-6 sm:p-10 flex flex-col justify-between hover:border-brand/20 transition-all">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="px-3.5 py-1.5 bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider rounded-lg">
                  Mon - Fri (Active slot days)
                </span>
                <span className="text-brand font-semibold text-xs flex items-center gap-1">Booking Mandatory</span>
              </div>
              
              <h3 className="font-display text-3xl font-extrabold text-white uppercase italic tracking-tight mb-2">
                Weekday Group Packages
              </h3>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                Unlock exclusive track reservations for birthday celebrations, team building sessions, or client entertainment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="bg-neutral-950/40 p-4 rounded-xl border border-neutral-850 text-center">
                  <span className="font-mono font-bold text-[10px] text-neutral-500 block mb-1">30 MINUTE SLOTS</span>
                  <div className="font-mono text-brand font-black text-lg">R1,500 <span className="text-[10px] block text-neutral-400 font-sans font-normal">For 5 bikes</span></div>
                  <div className="font-mono text-neutral-400 font-bold text-[11px] mt-2 border-t border-neutral-900 pt-1.5">R3,000 <span className="text-[10px] block text-neutral-550 font-sans font-normal">For 10 bikes</span></div>
                </div>

                <div className="bg-neutral-950/40 p-4 rounded-xl border border-neutral-850 text-center">
                  <span className="font-mono font-bold text-[10px] text-neutral-500 block mb-1">60 MINUTE SLOTS</span>
                  <div className="font-mono text-brand font-black text-lg">R3,000 <span className="text-[10px] block text-neutral-400 font-sans font-normal font-normal">For 5 bikes</span></div>
                  <div className="font-mono text-neutral-400 font-bold text-[11px] mt-2 border-t border-neutral-900 pt-1.5">R5,000 <span className="text-[10px] block text-neutral-550 font-sans font-normal">For 10 bikes</span></div>
                </div>

                <div className="bg-neutral-950/40 p-4 rounded-xl border border-neutral-850 text-center">
                  <span className="font-mono font-bold text-[10px] text-neutral-550 block mb-1 font-bold">4 HOUR HALF-DAY</span>
                  <div className="font-mono text-brand font-black text-lg">R8,000 <span className="text-[10px] block text-neutral-400 font-sans font-normal">For 5 bikes</span></div>
                  <div className="font-mono text-neutral-400 font-bold text-[11px] mt-2 border-t border-neutral-900 pt-1.5">R15,200 <span className="text-[10px] block text-neutral-555 font-sans font-normal">For 10 bikes</span></div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-850 text-neutral-400 text-xs flex flex-wrap gap-x-4 gap-y-1">
              <span>🗓️ Weekdays: Booking Required (Wednesday to Friday)</span>
              <span>• Custom group builds welcome</span>
            </div>
          </div>

        </div>

        {/* Unique Invitation Text with Custom Accent Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-neutral-900/30 rounded-2xl border border-neutral-850 p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="md:col-span-8">
            <h4 className="font-display text-lg font-bold text-white mb-2 uppercase flex items-center gap-2">
              Looking for a Unique Day Out? 🎉
            </h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Break the routine and experience something unforgettable! Our pit bike rentals are perfect for families, groups of friends, parties, or team-building sessions. We provide everything you need for a safe and thrilling riding experience — just arrive ready to have fun!
            </p>
          </div>
          <div className="md:col-span-4 bg-brand/10 border border-brand/20 rounded-xl p-5 text-center">
            <span className="text-xs text-neutral-400 font-mono tracking-wider block mb-1">SAFETY FIRST</span>
            <p className="text-xs text-neutral-300 leading-normal">
              Every rental automatically includes premium helmets.
            </p>
          </div>
        </div>

        {/* Dynamic Professional Booking Callout Section (REVISED to Call/Message Only) */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl border border-brand/35 p-6 sm:p-10 text-center shadow-2xl shadow-black relative overflow-hidden">
          {/* Ambient Corner Orange Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-dark/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center border border-brand/40 shadow-lg shadow-brand/5 text-brand mb-2">
              <Phone className="w-6 h-6 animate-bounce" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase italic tracking-tight">
              Booking Available via <span className="text-brand">Phone & WhatsApp Only</span>
            </h3>
            
            <p className="text-brand text-xs sm:text-sm max-w-lg mx-auto uppercase font-bold font-mono tracking-wider mt-1">
              bookings for monday to friday only
            </p>

            <div className="w-12 h-0.5 bg-neutral-800 my-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mt-2">
              {/* Voice Call CTA button (minimum 44px touch target) */}
              <a
                href={phoneCallLink}
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-neutral-800 hover:bg-neutral-750 text-white font-bold rounded-xl transition-all border border-neutral-700 hover:border-neutral-550 text-sm active:scale-97 min-h-[48px]"
              >
                <Phone className="w-4.5 h-4.5 text-brand" />
                <span>Call {phoneDisplay}</span>
              </a>

              {/* WhatsApp Message CTA button (minimum 44px touch target) */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-brand hover:bg-brand-light text-black font-extrabold rounded-xl transition-all shadow-lg shadow-brand/20 hover:shadow-brand/30 text-sm active:scale-97 min-h-[48px]"
              >
                <MessageSquare className="w-4.5 h-4.5 text-black fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand/70" /> Weekday Bookings Required
              </span>
              <span className="hidden sm:inline text-neutral-800">|</span>
              <span className="flex items-center gap-1.5">
                <Bike className="w-4 h-4 text-brand/70" /> Weekends show up and ride!
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
