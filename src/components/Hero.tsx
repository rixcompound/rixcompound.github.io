/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Flame, CalendarDays, Compass } from 'lucide-react';

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
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#12161A] border border-neutral-800 text-neutral-400 text-[9px] font-mono tracking-wider uppercase rounded">
                <CalendarDays className="w-3 h-3 text-[#FF6600]" /> Sat 9am-3pm • Sun 9am-2:30pm
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
                A private pit bike and junior MX track on Bottelary Road. Bring your own bike (R150) or rent ours for a thrilling, secure day out on the dirt. Simple as that!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 mt-5">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center px-4 py-2.5 bg-[#FF6600] hover:bg-white text-black font-mono text-[10px] font-semibold uppercase tracking-wider rounded transition-all duration-300"
            >
              Packages & Contact
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

      </div>
    </section>
  );
}