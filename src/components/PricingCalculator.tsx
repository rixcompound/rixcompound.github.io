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
    <section id="pricing" className="py-10 sm:py-14 bg-[#12161A] relative border-b border-neutral-800/60">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6">
          <div>
            <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
              Simple, Transparent Rates
            </span>
            <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
              Pricing & <span className="text-brand italic font-extrabold">Packages</span>
            </h2>
          </div>
          <div className="text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase">
            No Hidden Fees
          </div>
        </div>

        {/* Pricing Layout: 2 Main Service Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch mb-6 max-w-4xl mx-auto">
          
          {/* Weekends Rate Card */}
          <div className="bg-[#1F242A] rounded border border-neutral-800 p-4 sm:p-5 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 shadow-sm">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-4 pb-2 border-b border-neutral-800/80">
                <span className="px-1.5 py-0.5 bg-[#12161A] text-white text-[8px] font-mono tracking-wider uppercase rounded">
                  Saturdays, Sundays & Holidays
                </span>
                <span className="text-neutral-400 font-mono text-[8px] uppercase">No Bookings Required</span>
              </div>
              
              <h3 className="font-display text-base font-bold text-[#F8F9FA] uppercase tracking-tight mb-1">
                Weekend & Holiday Rentals
              </h3>
              <p className="text-neutral-400 text-[11px] mb-4 leading-normal font-sans">
                Ridden exclusively on our Mini MX and Pit Bike Track. Operated on a first-come, first-served basis.
              </p>
              
              <div className="space-y-1.5">
                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[11px]">Pit Bike Rental</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">Fun, responsive ride on our mini track</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FF6600] whitespace-nowrap">R250 <span className="text-[9px] text-neutral-500 font-sans font-normal">/ 30m</span></span>
                </div>

                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[11px]">ATV Rental</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">Stable and solid dirt quad bike action</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FF6600] whitespace-nowrap">R300 <span className="text-[9px] text-neutral-500 font-sans font-normal">/ 30m</span></span>
                </div>

                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[11px]">Bring Your Own Bike</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">All-day unlimited access to open lines</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FF6600] whitespace-nowrap">R150 <span className="text-[9px] text-neutral-500 font-sans font-normal">/ Day</span></span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-neutral-300 text-[10px] flex flex-col gap-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#F8F9FA] font-semibold">⏰ Operating Hours:</span>
              <div className="grid grid-cols-3 gap-1 text-[9px] text-neutral-400 font-mono">
                <span>Sat: 09:00–15:00</span>
                <span>Sun: 09:00–14:30</span>
                <span>Holidays: 09:00–17:00</span>
              </div>
            </div>
          </div>

          {/* Weekdays Group Packages Card */}
          <div className="bg-[#1F242A] rounded border border-neutral-800 p-4 sm:p-5 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 shadow-sm">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-4 pb-2 border-b border-neutral-800/80">
                <span className="px-1.5 py-0.5 bg-[#12161A] border border-neutral-800 text-neutral-300 text-[8px] font-mono tracking-wider uppercase rounded">
                  Wednesday - Friday
                </span>
                <span className="text-[#FF6600] font-mono text-[8px] uppercase tracking-wider font-bold">Booking Mandatory</span>
              </div>
              
              <h3 className="font-display text-base font-bold text-[#F8F9FA] uppercase tracking-tight mb-1">
                Weekday Group Packages
              </h3>
              <p className="text-neutral-400 text-[11px] mb-4 leading-normal font-sans">
                Unlock exclusive track reservations for birthday celebrations, team building sessions, or client entertainment.
              </p>
              
              <div className="space-y-1.5">
                
                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[11px]">30 Minute Slots</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">Perfect for quick, focused private runs</span>
                  </div>
                  <div className="flex flex-col items-end leading-none">
                    <span className="font-mono text-xs font-bold text-[#FF6600] whitespace-nowrap">R1,500 <span className="text-[8px] text-neutral-500 font-sans font-normal">/ 5 bikes</span></span>
                    <span className="font-mono text-[10px] font-semibold text-neutral-400 mt-1">R3,000 <span className="text-[8px] text-neutral-500 font-sans font-normal">/ 10 bikes</span></span>
                  </div>
                </div>

                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[11px]">60 Minute Slots</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">More track time for transitions & skill building</span>
                  </div>
                  <div className="flex flex-col items-end leading-none">
                    <span className="font-mono text-xs font-bold text-[#FF6600] whitespace-nowrap">R3,000 <span className="text-[8px] text-neutral-500 font-sans font-normal">/ 5 bikes</span></span>
                    <span className="font-mono text-[10px] font-semibold text-neutral-400 mt-1">R5,000 <span className="text-[8px] text-neutral-500 font-sans font-normal">/ 10 bikes</span></span>
                  </div>
                </div>

                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[11px]">4 Hour Half-Day</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">Exclusive facility use for events, parties, & teams</span>
                  </div>
                  <div className="flex flex-col items-end leading-none">
                    <span className="font-mono text-xs font-bold text-[#FF6600] whitespace-nowrap">R8,000 <span className="text-[8px] text-neutral-500 font-sans font-normal">/ 5 bikes</span></span>
                    <span className="font-mono text-[10px] font-semibold text-neutral-400 mt-1">R15,200 <span className="text-[8px] text-neutral-500 font-sans font-normal">/ 10 bikes</span></span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-neutral-400 text-[9px] font-mono flex items-center justify-between">
              <span>🗓️ Weekdays Only (Wed–Fri)</span>
              <span className="text-[#FF6600] font-bold uppercase">Advanced Booking Required</span>
            </div>
          </div>

        </div>

        {/* BOOKINGS FIRST-COME FIRST-SERVED CALLOUT */}
        <div className="bg-[#1F242A] rounded border border-neutral-800 p-4 mb-6 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="px-2 py-0.5 bg-[#12161A] border border-neutral-850 text-[#FF6600] text-[8px] font-mono uppercase tracking-wider rounded font-bold">
                ⚡ Walk-in Guidelines
              </span>
              <h4 className="font-display text-[#F8F9FA] font-bold text-xs uppercase tracking-tight mt-1.5">
                First-Come, First-Served Basis
              </h4>
              <p className="text-neutral-400 text-[10px] leading-relaxed mt-1 font-sans">
                No bookings are required on weekends and public holidays. Rix Compound operates on a first-come, first-served basis, allowing riders the flexibility to arrive and enjoy the track at their convenience within the dedicated time frame of the 30-minute ride.
              </p>
            </div>
            <div className="flex-shrink-0 bg-[#12161A] border border-neutral-800 rounded p-2 text-left sm:text-right min-w-[140px] shadow-sm">
              <span className="text-[8px] text-neutral-500 font-mono block uppercase tracking-wider">RIDE WINDOWS</span>
              <span className="text-[#F8F9FA] font-bold text-xs font-mono">30-Minute Sessions</span>
            </div>
          </div>
        </div>

        {/* STANDOUT GUIDELINES: Rider Requirements & Rental Policies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto">
          
          {/* Rider Requirements Box */}
          <div id="rental-requirements" className="bg-[#1F242A] rounded border border-neutral-800 p-4 relative overflow-hidden scroll-mt-16 flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#FF6600]" />
            
            <div>
              <h3 className="font-display text-sm font-bold text-[#F8F9FA] uppercase tracking-tight mb-1 mt-1">
                Rental Rider Requirements
              </h3>
              <p className="text-neutral-400 text-[10px] mb-3 font-sans">
                At Rix Compound, safety remains our highest priority.
              </p>

              <div className="space-y-2">
                
                {/* MANDATORY WARNING: NO BEGINNERS PERMITTED */}
                <div className="bg-red-950/20 border border-red-900/40 p-2.5 rounded flex items-start gap-2.5 shadow-sm">
                  <span className="text-sm mt-0.5">🚨</span>
                  <div>
                    <h4 className="text-red-400 font-bold uppercase text-[9px] tracking-wider font-mono">
                      No Beginners Permitted
                    </h4>
                    <p className="text-neutral-400 text-[10px] mt-0.5 leading-normal font-sans">
                      No beginners are permitted to operate our rental units under any circumstances. You must have competent off-road riding skills.
                    </p>
                  </div>
                </div>

                {/* MANDATORY WARNING: PRIOR RIDING EXPERIENCE REQUIRED */}
                <div className="bg-[#12161A] p-2.5 rounded border border-neutral-800 flex items-start gap-2.5 shadow-sm">
                  <span className="text-sm mt-0.5">🔥</span>
                  <div>
                    <h4 className="text-[#F8F9FA] font-bold uppercase text-[9px] tracking-wider font-mono">
                      Prior Riding Experience Required
                    </h4>
                    <p className="text-neutral-400 text-[10px] mt-0.5 leading-normal font-sans">
                      All rental riders must have prior off-road riding experience. Please note that riding lessons or training sessions are not offered.
                    </p>
                  </div>
                </div>

                {/* Requirements list */}
                <ul className="space-y-1.5 pl-1 pt-1.5 text-[10px] text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 flex-shrink-0" />
                    <span className="font-sans">
                      <strong className="text-[#F8F9FA]">Minimum Age:</strong> Riders must be 14 years of age or older to operate our Pit Bike or ATV rentals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 flex-shrink-0" />
                    <span className="font-sans">
                      <strong className="text-[#F8F9FA]">Safety Briefing:</strong> A comprehensive safety briefing is conducted before every riding session.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Rental Information */}
          <div className="bg-[#1F242A] rounded border border-neutral-800 p-4 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-display text-sm font-bold text-[#F8F9FA] uppercase tracking-tight mb-1">
                Important Rental Info
              </h3>
              <p className="text-neutral-400 text-[10px] mb-3 font-sans">
                All rental bikes and ATVs are ridden exclusively on our Mini MX and Pit Bike Track.
              </p>

              <ul className="space-y-2.5 pl-0.5">
                <li className="flex items-start gap-2 text-[10px] text-neutral-400">
                  <span className="text-[#FF6600] mt-0.5 text-[10px]">🔒</span>
                  <div>
                    <strong className="text-[#F8F9FA] block uppercase text-[8px] tracking-wider font-mono mb-0.5">Rider Responsibility</strong>
                    <span className="font-sans">All riders are responsible for the rental they sign for and operate.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-neutral-400">
                  <span className="text-[#FF6600] mt-0.5 text-[10px]">✍️</span>
                  <div>
                    <strong className="text-[#F8F9FA] block uppercase text-[8px] tracking-wider font-mono mb-0.5">Liability Waiver</strong>
                    <span className="font-sans">A waiver must be completed before riding.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-neutral-400">
                  <span className="text-[#FF6600] mt-0.5 text-[10px]">💥</span>
                  <div>
                    <strong className="text-[#F8F9FA] block uppercase text-[8px] tracking-wider font-mono mb-0.5">Damage Charges Policy</strong>
                    <span className="font-sans">Any damage caused to a rental unit, including broken, bent, snapped, or damaged parts, will be charged accordingly before departure.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-[10px] text-neutral-400">
                  <span className="text-[#FF6600] mt-0.5 text-[10px]">🪖</span>
                  <div>
                    <strong className="text-[#F8F9FA] block uppercase text-[8px] tracking-wider font-mono mb-0.5">Helmets Provided</strong>
                    <span className="font-sans">Helmets are provided once registration, waiver completion, and full payment are received.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Parents & Guardians Policy */}
            <div className="mt-3 p-2.5 rounded bg-[#12161A] border border-neutral-800">
              <h4 className="text-[9px] font-bold text-[#F8F9FA] uppercase tracking-wider mb-0.5 flex items-center gap-1 font-mono">
                <span>👨‍👩‍👦</span> Parents and Guardians
              </h4>
              <p className="text-[10px] text-neutral-400 leading-normal font-sans">
                Children under 14 with no prior riding experience need to be accompanied by a parent or guardian as a passenger on <strong className="text-[#F8F9FA] font-semibold">ATV rentals ONLY</strong>, subject to management approval.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic Professional Booking Callout Section (REVISED to Call/Message Only) */}
        <div className="max-w-2xl mx-auto bg-[#1F242A] text-white rounded p-5 sm:p-6 text-center relative overflow-hidden shadow-md border border-neutral-800">
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-[#12161A] rounded-full flex items-center justify-center border border-neutral-800 text-[#FF6600]">
              <Phone className="w-4 h-4" />
            </div>

            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-[#F8F9FA] leading-tight">
              Booking Available via <span className="text-[#FF6600] italic font-extrabold">Phone & WhatsApp Only</span>
            </h3>
            
            <p className="text-[#FF6600] text-[8px] uppercase font-bold font-mono tracking-widest mt-0.5">
              bookings for monday to friday only
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-sm mt-3">
              {/* Voice Call CTA button (minimum 44px touch target) */}
              <a
                href={phoneCallLink}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#12161A] hover:bg-neutral-800 text-white font-mono font-bold rounded transition-all text-[10px] uppercase tracking-wider min-h-[44px] border border-neutral-800"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6600]" />
                <span>Call {phoneDisplay}</span>
              </a>

              {/* WhatsApp Message CTA button (minimum 44px touch target) */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FF6600] hover:bg-white text-black font-mono font-bold rounded transition-all text-[10px] uppercase tracking-wider min-h-[44px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-black fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-[9px] text-neutral-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#FF6600]" /> Weekday Bookings Required
              </span>
              <span className="hidden sm:inline text-neutral-800">|</span>
              <span className="flex items-center gap-1">
                <Bike className="w-3 h-3 text-[#FF6600]" /> Weekends show up and ride!
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
