/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EventsGallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Raw Google Drive hosted files provided in the original code
  const galleryImages = [
    { url: "https://lh3.googleusercontent.com/d/1R9OYQT8Oe161DYKUpb1xMiQ4bAjRUbWs", alt: "Riding Mud Corner" },
    { url: "https://lh3.googleusercontent.com/d/17oCnPzDF_N1YU2ZSbDoh-vTdvHcNi69Z", alt: "Double Pit Bike Jump" },
    { url: "https://lh3.googleusercontent.com/d/1vgj5Jv6519sz5ioIppFYFbOTXNqUWPJU", alt: "Winning Lean Slide" },
    { url: "https://lh3.googleusercontent.com/d/1opRk9DVra42yLuZUDqxuq9ijEWQURugE", alt: "Track Overview" },
    { url: "https://lh3.googleusercontent.com/d/1jqdT4pedi3b5aaw2biEmFfxtVm5XpxSj", alt: "Junior Track Prep" },
    { url: "https://lh3.googleusercontent.com/d/108-4wXp6z2yCSjZnLj-e2vuE-rr-WFeB", alt: "Team Lineup Session" },
    { url: "https://lh3.googleusercontent.com/d/1ndv4CQUciUdf0E9QIDsASSNXYzoOMUY-", alt: "Fields Near Winelands" },
    { url: "https://lh3.googleusercontent.com/d/1b5QTW9_Y3L3UyqpcldbhKDvg4A2CWcXf", alt: "Stellenbosch Sunset" },
    { url: "https://lh3.googleusercontent.com/d/1qx7fYGB2UaBKrlTKYHcAHsLCJrUBG5fk", alt: "Bikes Stationary" }
  ];

  type EventItem = {
    imgUrl: string;
    title: string;
    badge: string;
    highlight?: boolean;
    schedule?: string[];
  };

  const upcomingEvents: EventItem[] = [
    {
      imgUrl: "https://lh3.googleusercontent.com/d/1T1wcEUFgq5E6Gg4_SAw0wh7dvJhpCW-K",
      title: "Track Showcase Flyer",
      badge: "Featured Event"
    }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === 0 ? galleryImages.length - 1 : activeLightboxIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === galleryImages.length - 1 ? 0 : activeLightboxIndex + 1
    );
  };

  return (
    <div className="space-y-4">
      
      {/* 1. Upcoming Events Section */}
      <section id="events" className="py-10 sm:py-14 bg-[#1F242A] relative border-t border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6">
            <div>
              <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
                Action & Events
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
                Upcoming <span className="text-brand italic font-extrabold">Events</span>
              </h2>
            </div>
            <div className="text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase">
              Limited Availability
            </div>
          </div>

          {/* Compact visual grids of the event posters */}
          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
            {upcomingEvents.map((event, idx) => (
              <div 
                key={idx} 
                id={event.highlight ? "public-holidays-flyer" : undefined}
                className="group relative overflow-hidden rounded p-3 transition-all duration-300 flex flex-col justify-between border border-neutral-800 bg-[#12161A] hover:border-brand/60 shadow-sm"
              >
                <div>
                  {/* Image flyer */}
                  <div className="rounded overflow-hidden bg-[#1F242A] relative aspect-[4/5] border border-neutral-800 shadow-sm">
                    <img
                      src={`${event.imgUrl}=s800`}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-[1.03]"
                    />
                    {/* Badge */}
                    <div className="absolute top-2 left-2 text-[8px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-neutral-950/90 text-[#FF6600] border border-neutral-800">
                      {event.badge}
                    </div>
                  </div>

                  <div className="mt-2.5 flex justify-between items-center px-0.5">
                    <h3 className="font-display font-bold text-xs uppercase text-[#F8F9FA] tracking-tight">
                      {event.title}
                    </h3>
                    <a 
                      href="#contact"
                      className="text-[#F8F9FA] flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider whitespace-nowrap ml-2 bg-[#1F242A] hover:bg-[#FF6600] hover:text-black border border-neutral-800 hover:border-[#FF6600] px-2 py-0.5 rounded transition-colors shadow-sm"
                    >
                      Ask <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-black" />
                    </a>
                  </div>
                </div>

                {/* Schedule list underneath flyer if highlighted / scheduled */}
                {event.schedule && (
                  <div className="mt-3 pt-3 border-t border-neutral-800 bg-[#1F242A] rounded p-2 shadow-sm">
                    <ul className="space-y-1">
                      {event.schedule.map((item, sIdx) => (
                        <li key={sIdx} className="text-[10px] text-neutral-300 font-sans flex items-center gap-1.5 bg-[#12161A] px-2 py-1 rounded border border-neutral-800">
                          <span className="w-1 h-1 rounded-full bg-[#FF6600] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Photo Gallery Section */}
      <section id="gallery" className="py-10 sm:py-14 bg-[#12161A] border-y border-neutral-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6">
            <div>
              <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
                Action Captured
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
                Photo <span className="text-brand italic font-extrabold">Gallery</span>
              </h2>
            </div>
            <div className="text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase">
              #RixCompound
            </div>
          </div>

          {/* Grid layout - Strictly 3x3 block on all screens */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative aspect-square rounded overflow-hidden border border-neutral-800 bg-[#1F242A] cursor-pointer hover:border-[#FF6600]/80 transition-all duration-300 shadow-sm"
              >
                {/* Visual Image */}
                <img
                  src={`${img.url}=s800`}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Overlaid expansion icon on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-neutral-900/90 text-white p-1.5 rounded-full border border-neutral-800 shadow-md">
                    <Eye className="w-3.5 h-3.5 text-[#FF6600]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Banner */}
          <div className="mt-6 text-center">
            <a 
              href="https://instagram.com/_rix.visuals_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase text-neutral-400 hover:text-brand transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
              </svg>
              @_rix.visuals_
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox Popover Component with GPU-Accelerated motion */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 bg-neutral-950/95 z-[100] flex items-center justify-center p-4"
          >
            {/* Close Trigger */}
            <button 
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900 p-2 rounded-full border border-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white bg-neutral-900/60 p-2 rounded-full border border-neutral-800 transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Main Visual */}
            <motion.div 
              initial={{ scale: 0.97, y: 5 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 5 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center relative"
            >
              <img 
                src={`${galleryImages[activeLightboxIndex].url}=s1600`} 
                alt={galleryImages[activeLightboxIndex].alt}
                decoding="async"
                className="max-w-full max-h-[70vh] object-contain rounded border border-neutral-800 shadow-2xl"
              />
              <p className="mt-3 font-mono text-[9px] text-neutral-400 uppercase tracking-widest text-center">
                {activeLightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white bg-neutral-900/60 p-2 rounded-full border border-neutral-800 transition-colors z-50 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}