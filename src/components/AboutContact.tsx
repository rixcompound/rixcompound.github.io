/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MapPin, 
  Phone, 
  ShieldAlert, 
  Bike
} from 'lucide-react';

export default function AboutContact() {
  const socialInstagramHandle = "rix.compound.mini.dirt.track";
  const emailAddress = "rixcompound@gmail.com";
  const phoneFormatted = "0768299919";
  const whatsappLink = "https://wa.me/27768299919";

  return (
    <div className="space-y-4">
      
      {/* 1. Combined About, Rules & Location Map Bento */}
      <section id="about" className="py-10 sm:py-14 bg-[#1F242A] relative border-t border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6">
            <div>
              <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
                Who We Are & Where We Are
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
                About & <span className="text-brand italic font-extrabold">Location</span>
              </h2>
            </div>
            <div className="text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase">
              Stellenbosch PRIVATE Track
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch max-w-4xl mx-auto">
            
            {/* Box 1: Short summary */}
            <div className="lg:col-span-7 bg-[#12161A] border border-neutral-800 rounded p-4 sm:p-5 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-display text-sm font-bold text-[#F8F9FA] uppercase italic tracking-tight mb-2">
                  The Cape Winelands Dirt Arena
                </h3>
                <p className="text-neutral-400 text-[11px] leading-normal mb-4 font-sans">
                  Nestled in the heart of Stellenbosch, Rix Compound is a premier private tracks playground built specifically for managed, confidence-building fun.
                </p>

                <div className="p-3 bg-[#1F242A] rounded border border-neutral-800 mb-4 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1 text-[#FF6600] text-[10px] font-mono font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#FF6600]" /> Keep It Clean & Safe
                  </div>
                  <p className="text-[10px] text-neutral-400 leading-normal font-sans">
                    Designed strictly for pit bikes, quads, and junior MX vehicles. Please note that full-size Big Bikes are allowed on our Flat Track only.
                  </p>
                </div>
              </div>

              {/* Instant Contact Details Row */}
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-850 pt-3 text-[10px]">
                <div>
                  <span className="text-neutral-500 font-mono block text-[8px] uppercase tracking-wider mb-0.5">Email us</span>
                  <a href={`mailto:${emailAddress}`} className="text-[#F8F9FA] hover:text-[#FF6600] font-mono font-bold break-all text-[10px] underline">
                    {emailAddress}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono block text-[8px] uppercase tracking-wider mb-0.5">Instagram</span>
                  <a 
                    href={`https://www.instagram.com/${socialInstagramHandle}?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#F8F9FA] hover:text-[#FF6600] font-mono font-bold break-all text-[10px] underline"
                  >
                    @{socialInstagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Box 2: Google Map */}
            <div className="lg:col-span-5 bg-[#12161A] border border-neutral-800 rounded p-4 flex flex-col justify-between shadow-sm">
              <div className="mb-3">
                <div className="flex items-center gap-1 text-[#FF6600] font-mono text-[9px] uppercase font-bold tracking-wider mb-1">
                  <MapPin className="w-3 h-3" /> Bottelary Road, Cape Town
                </div>
                <p className="text-[#F8F9FA] font-bold text-[11px]">
                  Protea Farms, Cape Town (Stellenbosch Winelands Area)
                </p>
              </div>

              <div className="relative rounded overflow-hidden h-36 sm:h-40 border border-neutral-800 bg-[#1F242A] shadow-sm">
                <iframe 
                  src="https://www.google.com/maps?q=Rix+Compound+Bottelary+Road+Protea+Farms+Cape+Town&output=embed"
                  allowFullScreen
                  loading="lazy"
                  title="Google maps map of Rix Compound location"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 absolute inset-0 opacity-90"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Combined Contact Detail */}
      <section id="contact" className="py-8 sm:py-10 bg-[#12161A] border-t border-b border-neutral-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-md mx-auto">
            
            {/* Live Booking Support */}
            <div className="bg-[#1F242A] border border-neutral-800 rounded p-4 sm:p-5 flex flex-col justify-between text-center items-center shadow-sm">
              <div className="flex flex-col items-center">
                <h3 className="font-display text-xs sm:text-sm font-bold text-[#F8F9FA] uppercase italic tracking-tight mb-1 flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF6600]" /> Live Booking Support
                </h3>
                <p className="text-neutral-400 text-[10px] leading-normal mb-3 max-w-xs font-sans">
                  For sudden weather changes, live track queries, or customized group bookings, tap to chat directly.
                </p>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FF6600] hover:bg-white text-black font-mono font-bold rounded transition-all text-[11px] uppercase tracking-wider min-h-[44px] shadow-sm"
              >
                <span>{phoneFormatted}</span>
                <span className="text-[8px] font-mono px-1.5 py-0.5 bg-black/15 text-black group-hover:bg-white/20 rounded font-bold">Tap to Chat</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Modern Footer */}
      <footer className="bg-[#1F242A] border-t border-neutral-800 py-8 sm:py-10 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          {/* Logo & Trademark */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5">
              <Bike className="w-3.5 h-3.5 text-[#FF6600]" />
              <h4 className="font-display font-black text-[#F8F9FA] uppercase tracking-wider italic text-xs">
                RIX<span className="text-[#FF6600]">COMPOUND</span>
              </h4>
            </div>
            <p className="text-[8px] text-neutral-400 uppercase tracking-[0.15em] font-mono">
              Ride • Race • Repeat
            </p>
          </div>

          <div className="w-6 h-px bg-neutral-800 mx-auto" />

          {/* Copyright description */}
          <div className="space-y-0.5 text-[9px] text-neutral-400 font-sans leading-normal">
            <p>© 2026 Rix Compound. All rights reserved.</p>
            <p>Made for motorsport enthusiasts in Stellenbosch, Western Cape, South Africa.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
