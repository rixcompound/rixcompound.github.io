/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  Zap, 
  Bike, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Info 
} from 'lucide-react';

export default function PricingCalculator() {
  const whatsappLink = "https://wa.me/27768299919";
  const phoneCallLink = "tel:+27768299919";
  const phoneDisplay = "0768299919";

  return (
    <section 
      id="pricing" 
      className="py-10 sm:py-14 bg-[#12161A] relative border-b border-neutral-800/60 scroll-mt-14"
    >
      {/* Anchor for any links or floating pills targeting rental-requirements */}
      <div id="rental-requirements" className="absolute -top-16" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6 gap-2">
          <div>
            <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
              Rider Guide, Rates &amp; Hours
            </span>
            <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
              Rental Info, Pricing &amp; <span className="text-[#22C55E] italic font-extrabold">Open Hours</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1F242A] border border-neutral-800 text-[#22C55E] font-mono text-[9px] font-bold uppercase tracking-wider rounded">
              <Zap className="w-3 h-3 text-[#22C55E]" /> Show Up &amp; Pay On Site
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1F242A] border border-neutral-800 text-neutral-300 font-mono text-[9px] font-semibold uppercase tracking-wider rounded">
              <ShieldCheck className="w-3 h-3 text-[#22C55E]" /> Safe &amp; Fun Riding
            </span>
          </div>
        </div>

        {/* 3 Main Rental Vehicle Cards - Combining Specs, Rules & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          {/* Card 1: Pit Bike Rentals (110cc) */}
          <div className="bg-[#1F242A] p-4 sm:p-5 rounded border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className="px-2 py-0.5 bg-[#12161A] border border-neutral-800 text-neutral-300 text-[8px] font-mono uppercase rounded">
                  Experience Required
                </span>
                <span className="font-mono text-sm font-bold text-[#22C55E] whitespace-nowrap">
                  R250 <span className="text-[9px] text-neutral-400 font-sans font-normal">/ 30m</span>
                </span>
              </div>

              <h3 className="font-display font-bold text-sm uppercase text-[#F8F9FA] tracking-wide mb-1.5">
                Pit Bike Rental (110cc)
              </h3>

              <div className="bg-[#12161A] border border-neutral-800/80 p-2.5 rounded mb-3">
                <p className="text-neutral-300 text-[11px] leading-relaxed font-sans">
                  Prior dirt bike riding experience is required. For safety, beginners are invited to ride our rental quad bikes or offroad go-karts instead.
                </p>
              </div>

              <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong className="text-white">110cc semi-automatic</strong> pit bike</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Age:</strong> 14+ years old</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Max weight:</strong> 100 kg</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Session:</strong> 30 minutes on track</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Quad Bike Rentals (80cc) */}
          <div className="bg-[#1F242A] p-4 sm:p-5 rounded border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className="px-2 py-0.5 bg-emerald-950/40 border border-emerald-800/40 text-[#22C55E] text-[8px] font-mono font-bold uppercase rounded">
                  Beginners Welcome
                </span>
                <span className="font-mono text-sm font-bold text-[#22C55E] whitespace-nowrap">
                  R300 <span className="text-[9px] text-neutral-400 font-sans font-normal">/ 30m</span>
                </span>
              </div>

              <h3 className="font-display font-bold text-sm uppercase text-[#F8F9FA] tracking-wide mb-1.5">
                ATV Quad Rental (80cc)
              </h3>

              <div className="bg-[#12161A] border border-neutral-800/80 p-2.5 rounded mb-3">
                <p className="text-neutral-300 text-[11px] leading-relaxed font-sans">
                  Beginners are welcome on rental quad bikes! Great 80cc quad riding for both first-timers and experienced riders.
                </p>
              </div>

              <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong className="text-white">80cc automatic</strong> quad bike</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Age:</strong> 14+ (passengers under 14 with guardian)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Max weight:</strong> 80 kg</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Session:</strong> 30 minutes on track</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Offroad Go-Kart (Kids) */}
          <div className="bg-[#1F242A] p-4 sm:p-5 rounded border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 bg-[#12161A] border border-neutral-800 text-neutral-300 text-[8px] font-mono uppercase rounded">
                    Kids Only
                  </span>
                  <span className="px-2 py-0.5 bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-[8px] font-mono font-bold uppercase rounded">
                    Sat &amp; Sun Only
                  </span>
                </div>
                <span className="font-mono text-sm font-bold text-[#22C55E] whitespace-nowrap">
                  R150 <span className="text-[9px] text-neutral-400 font-sans font-normal">/ 10m</span>
                </span>
              </div>

              <h3 className="font-display font-bold text-sm uppercase text-[#F8F9FA] tracking-wide mb-1.5">
                Offroad Go-Kart
              </h3>

              <div className="bg-[#12161A] border border-neutral-800/80 p-2.5 rounded mb-3">
                <p className="text-neutral-300 text-[11px] leading-relaxed font-sans">
                  Junior offroad go-karting for young drivers. Action-packed dirt driving on our junior circuit.
                </p>
              </div>

              <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong className="text-[#22C55E]">Availability:</strong> Saturdays &amp; Sundays ONLY</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Age:</strong> 7 – 13 years old</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Height limit:</strong> 120 cm – 160 cm</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span><strong>Session:</strong> 10 minutes on track</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bring Your Own Bike (BYOB) Card */}
        <div className="bg-[#1F242A] p-4 sm:p-5 rounded border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#12161A] border border-neutral-800 flex items-center justify-center text-[#22C55E] flex-shrink-0">
              <Bike className="w-5 h-5 text-[#22C55E]" />
            </div>
            <div>
              <h4 className="font-bold text-[#F8F9FA] uppercase text-xs sm:text-sm">
                Bring Your Own Bike (BYOB)
              </h4>
              <p className="text-[10px] sm:text-[11px] text-neutral-400 font-sans mt-0.5">
                Have your own pit bike or junior MX bike? Enjoy all-day unlimited track access across our open track lines.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 self-end sm:self-center">
            <span className="font-mono text-sm sm:text-base font-bold text-[#22C55E] whitespace-nowrap">
              R150 <span className="text-[10px] text-neutral-400 font-sans font-normal">/ Full Day</span>
            </span>
          </div>
        </div>

        {/* Operating Hours Box */}
        <div className="bg-[#1F242A] rounded border border-neutral-800 p-5 sm:p-6 mb-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#22C55E]" />

          <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b border-neutral-800/80">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#F8F9FA] font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#22C55E]" /> Track Operating Hours
            </span>
            <span className="text-[9px] font-mono text-[#22C55E] font-semibold">
              First-Come, First-Served • No Bookings Needed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Regular Weekend Schedule */}
            <div className="bg-[#12161A] p-3.5 rounded border border-neutral-800">
              <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                <span className="font-semibold text-neutral-300">Regular Weekend Schedule</span>
                <span className="text-neutral-500">Normal Terms</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-neutral-300 font-mono text-center">
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800">
                  <span className="text-neutral-400 block text-[8px] uppercase">Fri &amp; Sat</span>
                  <span className="font-bold text-[#F8F9FA] text-[10px]">9:00 AM – 3:00 PM</span>
                </div>
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800">
                  <span className="text-neutral-400 block text-[8px] uppercase">Sunday</span>
                  <span className="font-bold text-[#F8F9FA] text-[10px]">9:00 AM – 2:15 PM</span>
                </div>
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800">
                  <span className="text-neutral-400 block text-[8px] uppercase">Public Hol.</span>
                  <span className="font-bold text-[#F8F9FA] text-[10px]">9:00 AM – 3:00 PM</span>
                </div>
              </div>
            </div>

            {/* School Holidays Extended Schedule */}
            <div className="bg-[#12161A] p-3.5 rounded border border-[#22C55E]/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#22C55E]" />
              <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider mb-2">
                <span className="text-[#22C55E] font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" /> School Holidays Schedule
                </span>
                <span className="px-1.5 py-0.2 bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 rounded text-[8px] font-bold">
                  Wed – Sun Open
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-neutral-300 font-mono text-center">
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800">
                  <span className="text-neutral-400 block text-[8px] uppercase">Wed – Fri</span>
                  <span className="font-bold text-[#F8F9FA] text-[10px]">9:00 AM – 4:00 PM</span>
                </div>
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800">
                  <span className="text-neutral-400 block text-[8px] uppercase">Saturday</span>
                  <span className="font-bold text-[#F8F9FA] text-[10px]">9:00 AM – 3:30 PM</span>
                </div>
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800">
                  <span className="text-neutral-400 block text-[8px] uppercase">Sunday</span>
                  <span className="font-bold text-[#F8F9FA] text-[10px]">9:00 AM – 3:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Dedicated Go-Karts Availability Notice */}
          <div className="mt-3.5 pt-3 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] font-mono text-neutral-300">
            <Info className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
            <span>
              <strong>Go-Kart Availability:</strong> Offroad go-karts operate on <strong>Saturdays and Sundays only</strong> (not open Wednesdays through Fridays).
            </span>
          </div>
        </div>

        {/* Track Guidelines & Care */}
        <div className="bg-[#1F242A] p-4 sm:p-5 rounded border border-neutral-800 mb-6">
          <h3 className="font-display font-bold text-xs sm:text-sm uppercase text-[#F8F9FA] tracking-wide mb-2 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#22C55E]" /> Track Guidelines &amp; Care
          </h3>
          <p className="text-neutral-300 text-[11px] leading-relaxed font-sans mb-1.5">
            One rider per vehicle (sharing is not permitted). Ride safely and follow track marshals at all times.
          </p>
          <p className="text-neutral-400 text-[11px] leading-relaxed font-sans border-t border-neutral-800 pt-1.5">
            Riders are responsible for taking good care of bikes, ATVs, go-karts, and safety equipment during their session.
          </p>
        </div>

        {/* Dynamic Contact & Live Query Callout Section */}
        <div className="bg-[#1F242A] text-white rounded p-5 sm:p-6 text-center relative overflow-hidden shadow-md border border-neutral-800">
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-[#12161A] rounded-full flex items-center justify-center border border-neutral-800 text-[#22C55E]">
              <Phone className="w-4 h-4 text-[#22C55E]" />
            </div>

            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-[#F8F9FA] leading-tight">
              Have Questions or Need Track Info?
            </h3>
            
            <p className="text-[#22C55E] text-[9px] uppercase font-bold font-mono tracking-widest mt-0.5">
              No Bookings • Just Show Up &amp; Ride
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-sm mt-3">
              {/* Voice Call CTA button */}
              <a
                href={phoneCallLink}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-black font-mono font-bold rounded transition-all text-[10px] uppercase tracking-wider min-h-[44px] shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>Call {phoneDisplay}</span>
              </a>

              {/* WhatsApp Message CTA button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-mono font-bold rounded transition-all text-[10px] uppercase tracking-wider min-h-[44px] shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-black fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-[9px] text-neutral-400 font-mono text-center">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#22C55E]" /> Open Weekends &amp; School Holidays (Wed–Sun)
              </span>
              <span className="hidden sm:inline text-neutral-800">|</span>
              <span className="flex items-center gap-1">
                <Bike className="w-3 h-3 text-[#22C55E]" /> Show up and ride!
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
