/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldAlert, 
  Bike
} from 'lucide-react';

export default function AboutContact() {
  const socialInstagramHandle = "rix.compound.mini.dirt.track";
  const emailAddress = "rixcompound@gmail.com";
  const phoneFormatted = "0768299919";
  const whatsappLink = "https://wa.me/27768299919";

  return (
    <div className="space-y-6">
      
      {/* 1. Combined About, Rules & Location Map Bento */}
      <section id="about" className="py-10 bg-neutral-950/60 relative border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand mb-2">
              Who We Are & Where We Are
            </h2>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              About & <span className="text-brand">Location</span>
            </p>
            <div className="w-12 h-0.5 bg-brand mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
            
            {/* Box 1: Short summary */}
            <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-850 rounded-2xl p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-extrabold text-white uppercase italic tracking-tight mb-3">
                  The Cape Winelands Dirt Arena
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Nestled in the heart of Stellenbosch, Rix Compound is a premier private tracks playground built specifically for managed, confidence-building fun. We offer safe, supervised loops perfect for juniors, beginners, and social riders.
                </p>

                <div className="p-4 bg-neutral-950/60 rounded-xl border border-neutral-850/60 mb-4">
                  <div className="flex items-center gap-2 mb-1.5 text-brand text-xs font-bold uppercase">
                    <ShieldAlert className="w-4 h-4" /> Keep It Clean & Safe
                  </div>
                  <p className="text-[11px] text-neutral-450 leading-relaxed">
                    Designed strictly for pit bikes, quads, and junior MX vehicles. Please note that full-size Big Bikes are allowed on our Flat Track only.
                  </p>
                </div>
              </div>

              {/* Instant Contact Details Row */}
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-850 pt-4 text-xs">
                <div>
                  <span className="text-neutral-500 font-mono block text-[10px] uppercase">Email us</span>
                  <a href={`mailto:${emailAddress}`} className="text-white hover:text-brand font-semibold break-all text-[11px] underline">
                    {emailAddress}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono block text-[10px] uppercase">Instagram</span>
                  <a 
                    href={`https://www.instagram.com/${socialInstagramHandle}?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-white hover:text-brand font-semibold break-all text-[11px] underline"
                  >
                    @{socialInstagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Box 2: Google Map */}
            <div className="lg:col-span-5 bg-neutral-900 border border-neutral-850 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-brand font-mono text-[10px] sm:text-xs uppercase font-extrabold tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" /> Bottelary Road, Cape Town
                </div>
                <p className="text-white font-bold text-xs mb-3">
                  Protea Farms, Cape Town (Stellenbosch Winelands Area)
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden h-48 border border-neutral-850/70 shadow bg-neutral-950">
                <iframe 
                  src="https://www.google.com/maps?q=Rix+Compound+Bottelary+Road+Protea+Farms+Cape+Town&output=embed"
                  allowFullScreen
                  loading="lazy"
                  title="Google maps map of Rix Compound location"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 absolute inset-0"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Combined Contact Detail & Daily Operating Hours */}
      <section id="contact" className="py-8 bg-neutral-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            
            {/* Left: Quick operating times card */}
            <div className="bg-neutral-900/40 border border-neutral-850 rounded-2xl p-5 sm:p-6">
              <h3 className="font-display text-lg font-extrabold text-white uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand" /> Track Operating Hours
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-neutral-950/65 border-l-3 border-brand rounded-r-xl flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-brand uppercase font-extrabold block">Weekend Open Sessions (Open Public Holidays)</span>
                  <div className="flex justify-between items-center text-white font-bold">
                    <span>Saturdays</span>
                    <span className="font-mono text-brand">9:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-white font-bold">
                    <span>Sundays</span>
                    <span className="font-mono text-brand">9:00 AM – 2:30 PM</span>
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-950/30 border-l-3 border-neutral-600 rounded-r-xl flex justify-between items-center">
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold block">Weekdays Reservation Only</span>
                    <span className="text-neutral-350">Monday to Friday</span>
                  </div>
                  <span className="text-[10px] text-neutral-550 font-sans font-medium">Group Slots Only</span>
                </div>
              </div>
            </div>

            {/* Right: Emergency call & contact */}
            <div className="bg-neutral-900/40 border border-neutral-850 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-extrabold text-white uppercase italic tracking-tight mb-1.5 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand" /> Live Booking Support
                </h3>
                <p className="text-neutral-450 text-xs leading-relaxed mb-4">
                  For sudden weather changes, live track queries, or customized group bookings, tap to chat directly.
                </p>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand/10 border border-brand/20 hover:bg-brand text-neutral-300 hover:text-black font-extrabold rounded-xl transition-all text-xs uppercase"
              >
                <span>{phoneFormatted}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">Tap to Chat</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Modern Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900/60 py-8 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Logo & Trademark */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-1.5">
              <Bike className="w-4.5 h-4.5 text-brand" />
              <h4 className="font-display font-black text-white uppercase tracking-wider italic text-sm">
                RIX<span className="text-brand">COMPOUND</span>
              </h4>
            </div>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
              Ride • Race • Repeat
            </p>
          </div>

          <div className="w-8 h-px bg-neutral-900 mx-auto" />

          {/* Copyright description */}
          <div className="space-y-0.5 text-[10px] text-neutral-600">
            <p>© 2026 Rix Compound. All rights reserved.</p>
            <p>Made for motorsport enthusiasts in Stellenbosch, Western Cape, South Africa.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
