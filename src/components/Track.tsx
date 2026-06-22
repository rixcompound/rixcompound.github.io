/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, PlayCircle, X } from 'lucide-react';

export default function Track() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const tracks = [
    {
      title: "PitBike Track",
      description: "Professionally designed turns, rhythmic sections, and dirt obstacles engineered for both junior and adult riders.",
      image: "https://i.postimg.cc/J44p3K6T/Chat-GPT-Image-Jan-7-2026-03-01-22-PM.png"
    },
    {
      title: "Flat Track",
      description: "Practice your sliding, drifting, and precise throttle controls in a secure, fast, wide-open winelands setup. Full-size Big Bikes are welcome here!",
      image: "https://i.postimg.cc/xdmTR1fj/Chat-GPT-Image-Mar-4-2026-10-12-06-AM.png"
    }
  ];

  return (
    <section id="track" className="py-10 bg-neutral-950/60 border-y border-neutral-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand mb-2">
            The Compound Circuits
          </h2>
          <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            The <span className="text-brand">Tracks</span>
          </p>
          <div className="w-12 h-0.5 bg-brand mx-auto mt-3 rounded-full" />
        </div>

        {/* Tracks Grid - side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {tracks.map((track, idx) => (
            <div 
              key={idx}
              className="bg-neutral-900/30 rounded-2xl border border-neutral-850 p-4 hover:border-brand/35 transition-all group"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[1.6] mb-4">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1 uppercase group-hover:text-brand transition-colors">
                {track.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compact Video Feature */}
        <div className="max-w-3xl mx-auto">
          <div 
            onClick={() => setIsPlayingVideo(true)}
            className="relative rounded-xl overflow-hidden aspect-video border border-neutral-850 bg-neutral-900 cursor-pointer group shadow-xl transition-all hover:border-brand/40"
          >
            <img 
              src="https://img.youtube.com/vi/vgHBEpjlTRU/maxresdefault.jpg" 
              alt="Track video tour thumbnail"
              className="w-full h-full object-cover opacity-80"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/25 transition-colors">
              <div className="w-12 h-12 bg-brand text-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Play className="w-5 h-5 fill-black translate-x-0.5" />
              </div>
              <span className="mt-3 font-mono text-[10px] tracking-widest uppercase bg-black/80 px-3 py-1 rounded-full text-brand font-bold border border-neutral-800">
                Play Video Tour
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Screen */}
      {isPlayingVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <button 
            onClick={() => setIsPlayingVideo(false)}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden border border-brand/35 bg-neutral-950">
            <iframe 
              src="https://www.youtube.com/embed/vgHBEpjlTRU?autoplay=1"
              title="Rix Compound Track Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
