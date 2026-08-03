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
  Calendar
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
              Pricing & <span className="text-[#FF6600] italic font-extrabold">Open Hours</span>
            </h2>
          </div>
          <div className="text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase font-semibold">
            Show Up & Pay On Site
          </div>
        </div>

        {/* Pricing Layout: Main Rates & Operating Hours Card */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="bg-[#1F242A] rounded border border-neutral-800 p-5 sm:p-6 flex flex-col justify-between hover:border-[#FF6600]/40 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#22C55E]" />

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-4 pb-3 border-b border-neutral-800/80">
                <span className="px-2 py-0.5 bg-[#12161A] text-white text-[9px] font-mono tracking-wider uppercase rounded border border-neutral-800">
                  Fridays, Saturdays, Sundays & Public Holidays
                </span>
                <span className="text-[#22C55E] font-mono text-[9px] uppercase font-bold tracking-wider">
                  No Bookings Needed • Pay On Site
                </span>
              </div>
              
              <h3 className="font-display text-base sm:text-lg font-bold text-[#F8F9FA] uppercase tracking-tight mb-1">
                Standard Rental & Track Rates
              </h3>
              <p className="text-neutral-400 text-[11px] mb-4 leading-normal font-sans">
                Ridden exclusively on our Mini MX and Pit Bike Track. Operated on a first-come, first-served basis.
              </p>
              
              <div className="space-y-2">
                <div className="bg-[#12161A] p-3 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[12px]">Pit Bike Rental</h4>
                    <span className="text-[10px] text-neutral-400 block leading-tight mt-0.5">110cc semi-automatic pit bike</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#22C55E] whitespace-nowrap">R250 <span className="text-[9px] text-neutral-500 font-sans font-normal">/ 30m</span></span>
                </div>

                <div className="bg-[#12161A] p-3 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[12px]">ATV Quad Rental</h4>
                    <span className="text-[10px] text-neutral-400 block leading-tight mt-0.5">80cc quad bike.</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#22C55E] whitespace-nowrap">R300 <span className="text-[9px] text-neutral-500 font-sans font-normal">/ 30m</span></span>
                </div>

                <div className="bg-[#12161A] p-3 rounded border border-neutral-800 flex flex-row items-center justify-between gap-2 shadow-sm">
                  <div>
                    <h4 className="font-bold text-[#F8F9FA] uppercase text-[12px]">Bring Your Own Bike</h4>
                    <span className="text-[9px] text-neutral-400 block leading-none mt-0.5">All-day unlimited access to open track lines</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#22C55E] whitespace-nowrap">R150 <span className="text-[9px] text-neutral-500 font-sans font-normal">/ Day</span></span>
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="mt-5 pt-4 border-t border-neutral-800/80 text-neutral-300 text-[11px] flex flex-col gap-2 bg-[#12161A] p-3 rounded border border-neutral-800">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#F8F9FA] font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF6600]" /> Open Operating Hours:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-neutral-300 font-mono">
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800 text-center">
                  <span className="text-neutral-400 block text-[8px] uppercase">Fri & Sat</span>
                  <span className="font-bold text-[#F8F9FA]">09:00 AM – 03:00 PM</span>
                </div>
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800 text-center">
                  <span className="text-neutral-400 block text-[8px] uppercase">Sunday</span>
                  <span className="font-bold text-[#F8F9FA]">09:00 AM – 02:15 PM</span>
                </div>
                <div className="bg-[#1F242A] p-2 rounded border border-neutral-800 text-center">
                  <span className="text-neutral-400 block text-[8px] uppercase">Public Holidays</span>
                  <span className="font-bold text-[#F8F9FA]">09:00 AM – 03:00 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SHOW UP & PAY ON SITE CALLOUT */}
        <div className="bg-[#1F242A] rounded border border-neutral-800 p-5 mb-6 max-w-2xl mx-auto shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-md">
              <span className="px-2 py-0.5 bg-[#12161A] border border-neutral-800 text-[#22C55E] text-[8px] font-mono uppercase tracking-wider rounded font-bold inline-flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#22C55E]" /> No Bookings Required
              </span>
              <h4 className="font-display text-[#F8F9FA] font-bold text-sm uppercase tracking-tight mt-1.5">
                Just Show Up & Pay On Site
              </h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed mt-1 font-sans">
                Rix Compound operates strictly on a first-come, first-served basis. No advance bookings are needed or taken. Simply show up during open hours, pay on site, and enjoy your 30-minute riding sessions!
              </p>
            </div>
            <div className="flex-shrink-0 bg-[#12161A] border border-neutral-800 rounded p-3 text-left sm:text-right min-w-[140px] shadow-sm">
              <span className="text-[8px] text-neutral-500 font-mono block uppercase tracking-wider">ENTRY FORMAT</span>
              <span className="text-[#F8F9FA] font-bold text-xs font-mono">First-Come First-Served</span>
            </div>
          </div>
        </div>

        {/* Dynamic Contact & Live Query Callout Section */}
        <div className="max-w-2xl mx-auto bg-[#1F242A] text-white rounded p-5 sm:p-6 text-center relative overflow-hidden shadow-md border border-neutral-800">
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-[#12161A] rounded-full flex items-center justify-center border border-neutral-800 text-[#FF6600]">
              <Phone className="w-4 h-4 text-[#FF6600]" />
            </div>

            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-[#F8F9FA] leading-tight">
              Have Questions or Need Track Info?
            </h3>
            
            <p className="text-[#22C55E] text-[9px] uppercase font-bold font-mono tracking-widest mt-0.5">
              No Bookings • Just Show Up & Ride
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

            <div className="mt-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-[9px] text-neutral-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#FF6600]" /> Fri & Sat 9:00 AM–3:00 PM • Sun 9:00 AM–2:15 PM
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
