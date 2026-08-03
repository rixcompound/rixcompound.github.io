/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Flame, CalendarDays, Compass, ShieldAlert, AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#12161A]"
    >
      {/* Precision hairline grid lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-neutral-800" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-neutral-800" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-neutral-800" />
        <div className="absolute top-[40%] left-0 right-0 h-px bg-neutral-800" />
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        
        {/* Left Column: Core content card with sharp borders */}
        <div className="lg:col-span-7 bg-[#1F242A] border border-neutral-800/80 p-5 sm:p-7 rounded flex flex-col justify-between shadow-sm relative overflow-hidden">
          {/* Subtle brand marker */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF6600]" />

          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#12161A] border border-neutral-800 text-neutral-300 text-[9px] font-mono tracking-wider uppercase rounded">
                <Compass className="w-3 h-3 text-[#FF6600]" /> Stellenbosch Winelands
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#12161A] border border-neutral-800 text-neutral-300 text-[9px] font-mono tracking-wider uppercase rounded font-bold">
                <CalendarDays className="w-3 h-3 text-[#FF6600]" /> Fri & Sat 9:00 AM–3:00 PM • Sun 9:00 AM–2:15 PM
              </span>
            </div>

            <div>
              <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-[0.2em] block mb-1 font-semibold">
                Bottelary Road Moto Park
              </span>
              <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F8F9FA] uppercase leading-[1.05]">
                Welcome to <span className="text-[#FF6600] italic font-extrabold">RixCompound</span>
              </h1>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans max-w-lg">
                A private pit bike and junior MX track on Bottelary Road. Bring your own bike (R150/day) or rent ours for a thrilling day on the dirt. No bookings needed — show up and pay on site!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 mt-5">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center px-4 py-2.5 bg-[#FF6600] hover:bg-white text-black font-mono text-[10px] font-semibold uppercase tracking-wider rounded transition-all duration-300"
            >
              Pricing & Hours
            </a>
            <a
              href="#track"
              className="w-full sm:w-auto text-center px-4 py-2.5 bg-transparent hover:bg-[#12161A] text-neutral-300 border border-neutral-800 hover:border-neutral-700 font-mono text-[10px] font-semibold uppercase tracking-wider rounded transition-all duration-300"
            >
              Track Layouts
            </a>
          </div>
        </div>

        {/* Right Column: High-density showcase media */}
        <div className="lg:col-span-5 bg-[#1F242A] border border-neutral-800/80 p-2.5 rounded shadow-sm flex flex-col justify-between">
          <div className="relative rounded overflow-hidden aspect-[1.4] bg-[#12161A] border border-neutral-850">
            <img
              src="https://i.postimg.cc/KYG36gnP/IMG_20251112_WA0108_1024x683.jpg"
              alt="Riders on the dirt at Rix Compound"
              className="w-full h-full object-cover transition-all duration-500 hover:scale-103"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="pt-2 px-1.5 flex justify-between items-center text-[10px] font-mono text-neutral-400">
            <span>📍 PROTEA FARMS, STELLENBOSCH</span>
            <span className="text-neutral-500">EST. 2024</span>
          </div>
        </div>

        {/* Essential Guidelines & Rules (Rider Requirements & Rental Info) */}
        <div id="rental-requirements" className="lg:col-span-12 bg-[#1F242A] border border-neutral-800 rounded p-5 sm:p-6 shadow-md relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FF6600]" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-3 mb-4 gap-2">
            <div>
              <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
                Essential Guidelines & Rules
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold text-[#F8F9FA] uppercase tracking-tight">
                Rider Requirements & <span className="text-[#FF6600] italic font-extrabold">Rental Info</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-950/40 border border-red-800/60 text-red-400 font-mono text-[9px] font-bold uppercase tracking-wider rounded self-start sm:self-auto">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" /> Safety First
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pit Bike Rentals (110cc) */}
            <div className="bg-[#12161A] p-4 rounded border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-xs sm:text-sm uppercase text-[#F8F9FA] tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF6600]" /> Pit Bike Rentals (110cc)
                  </h3>
                  <span className="px-1.5 py-0.5 bg-red-950/60 border border-red-900/60 text-red-400 text-[8px] font-mono font-bold uppercase rounded">
                    Experience Required
                  </span>
                </div>

                <div className="bg-red-950/20 border border-red-900/40 p-2.5 rounded mb-3">
                  <p className="text-[#F8F9FA] text-[11px] font-semibold leading-relaxed font-sans">
                    Prior dirt bike riding experience is mandatory. Beginners are strictly NOT permitted on rental pit bikes (no lessons offered).
                  </p>
                </div>

                <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6600] font-bold">•</span>
                    <span><strong className="text-white">110cc semi-automatic pit bike</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6600] font-bold">•</span>
                    <span><strong>Age 14+ years old</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6600] font-bold">•</span>
                    <span><strong>Max weight:</strong> 100 kg</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quad Bike Rentals (80cc) */}
            <div className="bg-[#12161A] p-4 rounded border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-xs sm:text-sm uppercase text-[#F8F9FA] tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" /> Quad Bike Rentals (80cc)
                  </h3>
                  <span className="px-1.5 py-0.5 bg-green-950/60 border border-green-900/60 text-[#22C55E] text-[8px] font-mono font-bold uppercase rounded">
                    Beginners Welcome
                  </span>
                </div>

                <div className="bg-green-950/20 border border-green-900/40 p-2.5 rounded mb-3">
                  <p className="text-[#F8F9FA] text-[11px] font-semibold leading-relaxed font-sans">
                    Beginners ARE permitted on rental quad bikes! 80cc quad bike riding for beginners and experienced riders alike.
                  </p>
                </div>

                <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="text-[#22C55E] font-bold">•</span>
                    <span><strong className="text-white">80cc quad bike.</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#22C55E] font-bold">•</span>
                    <span><strong>Max weight:</strong> 80 kg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E] font-bold mt-0.5">•</span>
                    <span>Kids under 14 with no experience may ride as passenger with a guardian (prior approval required).</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Rules & Damage Responsibility */}
          <div className="mt-4 bg-[#12161A] p-4 rounded border border-neutral-800">
            <h3 className="font-display font-bold text-xs sm:text-sm uppercase text-[#F8F9FA] tracking-wide mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#FF6600]" /> Rules & Damage Responsibility
            </h3>
            <p className="text-neutral-300 text-[11px] leading-relaxed font-sans mb-2">
              One rider per vehicle (sharing strictly prohibited). If a rider falls twice or rides recklessly, the ride will be terminated immediately without refund.
            </p>
            <p className="text-[#F8F9FA] text-[11px] font-semibold leading-relaxed font-sans border-t border-neutral-800 pt-2">
              Riders are fully responsible for any loss or damage to bikes, ATVs, or equipment.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}