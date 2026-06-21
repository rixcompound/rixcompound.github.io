/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

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

  const upcomingEvents = [
    {
      imgUrl: "https://lh3.googleusercontent.com/d/1T1wcEUFgq5E6Gg4_SAw0wh7dvJhpCW-K",
      title: "Track Showcase Flyer",
      badge: "Featured Event"
    },
    {
      imgUrl: "https://lh3.googleusercontent.com/d/1kZyLMKXdsabDqyivA9mGQ3exA1YXYNdW",
      title: "Weekend Open Session Flyer",
      badge: "Every Sat & Sun"
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
    <div className="space-y-10">
      
      {/* 1. Upcoming Events Section */}
      <section id="events" className="py-10 bg-neutral-950/40 relative border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand mb-2">
              Action & Events
            </h2>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              Upcoming <span className="text-brand">Events</span>
            </p>
            <div className="w-12 h-0.5 bg-brand mx-auto mt-3 rounded-full" />
          </div>

          {/* Compact visual grids of the event posters side-by-side or stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-sm sm:max-w-3xl mx-auto">
            {upcomingEvents.map((event, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-xl border border-neutral-850 bg-neutral-900/30 p-2 sm:p-3 transition-all hover:border-brand/35 block"
              >
                {/* Image flyer */}
                <div className="rounded-lg overflow-hidden aspect-[3/4] bg-neutral-950 relative">
                  <img
                    src={`${event.imgUrl}=w800`}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  {/* Badge */}
                  <div className="absolute top-2 left-2 bg-black/85 border border-brand/20 text-brand text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded z-10">
                    {event.badge}
                  </div>
                </div>

                <div className="mt-2.5 flex justify-between items-center px-0.5">
                  <h3 className="font-display font-bold text-xs sm:text-sm text-neutral-350 truncate">
                    {event.title}
                  </h3>
                  <a 
                    href="#contact"
                    className="text-brand flex items-center gap-0.5 text-[9px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap ml-1"
                  >
                    Ask <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Photo Gallery Section */}
      <section id="gallery" className="py-10 bg-neutral-900/10 border-y border-neutral-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand mb-2">
              Action Captured
            </h2>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              Photo <span className="text-brand">Gallery</span>
            </p>
            <div className="w-12 h-0.5 bg-brand mx-auto mt-3 rounded-full" />
          </div>

          {/* Grid layout - Strictly 3x3 block on all screens */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden border border-neutral-850 bg-neutral-900 cursor-pointer shadow hover:border-brand/45 transition-all duration-300"
              >
                {/* Visual Image */}
                <img
                  src={`${img.url}=w420`}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlaid expansion icon on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-brand text-black p-1.5 rounded-full shadow">
                    <Eye className="w-3.5 h-3.5" />
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
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-brand transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
              </svg>
              rixvisuals
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox Popover Component */}
      {activeLightboxIndex !== null && (
        <div 
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
        >
          {/* Close Trigger */}
          <button 
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white bg-neutral-900/60 p-2 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Visual */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center relative"
          >
            <img 
              src={`${galleryImages[activeLightboxIndex].url}=w1200`} 
              alt={galleryImages[activeLightboxIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg border border-neutral-800 shadow-2xl"
            />
            <p className="mt-3 font-mono text-[10px] text-neutral-450 uppercase tracking-widest text-center">
              {activeLightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white bg-neutral-900/60 p-2 rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}
