/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, PlayCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    <section id="track" className="py-10 sm:py-14 bg-[#1F242A] border-y border-neutral-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Highly aligned & Compact */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6">
          <div>
            <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
              The Compound Circuits
            </span>
            <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
              The <span className="text-brand italic font-extrabold">Tracks</span>
            </h2>
          </div>
          <p className="text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase">
            EST. 2024 / Stellenbosch
          </p>
        </div>

        {/* Tracks Grid - Side by side, open and active */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {tracks.map((track, idx) => (
            <div 
              key={idx}
              className="rounded border border-neutral-800 hover:border-brand/60 p-3 transition-all duration-300 group relative overflow-hidden bg-[#12161A] shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative rounded overflow-hidden aspect-[1.7] mb-3 border border-neutral-800 bg-[#1F242A]">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Title & Badge Area */}
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <h3 className="font-display text-sm font-bold text-[#F8F9FA] uppercase">
                    {track.title}
                  </h3>
                  <span className="inline-flex items-center px-1.5 py-0.5 bg-[#1F242A] border border-neutral-800 text-[#22C55E] font-mono text-[8px] uppercase tracking-wider rounded font-semibold">
                    Open Track
                  </span>
                </div>
              </div>

              <p className="text-[11px] leading-relaxed text-neutral-400 font-sans mt-1">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compact Video Feature */}
        <div className="max-w-2xl mx-auto bg-[#12161A] border border-neutral-800 rounded p-3 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div 
              onClick={() => setIsPlayingVideo(true)}
              className="relative rounded overflow-hidden w-full sm:w-48 aspect-video border border-neutral-800 bg-neutral-950 cursor-pointer group flex-shrink-0"
            >
              <img 
                src="https://img.youtube.com/vi/vgHBEpjlTRU/maxresdefault.jpg" 
                alt="Track video tour thumbnail"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="p-2 rounded-full bg-[#FF6600] text-black shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF6600] font-bold block mb-1">
                Video Tour
              </span>
              <h3 className="font-display text-sm font-bold text-[#F8F9FA] uppercase mb-1">
                Watch Track Tour
              </h3>
              <p className="text-[11px] text-neutral-400 font-sans mb-3 line-clamp-2">
                Experience the adrenaline and check out our lines in action before your visit.
              </p>
              <button
                onClick={() => setIsPlayingVideo(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1F242A] hover:bg-[#FF6600] hover:text-black border border-neutral-800 hover:border-[#FF6600] rounded text-[10px] font-mono uppercase tracking-wider text-neutral-300 transition-colors shadow-sm cursor-pointer"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Play Tour (0:45)</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsPlayingVideo(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#12161A] border border-neutral-800 rounded-lg overflow-hidden max-w-3xl w-full shadow-2xl relative"
            >
              <div className="flex items-center justify-between p-3 border-b border-neutral-800 bg-[#1F242A]">
                <span className="font-display text-xs font-bold text-[#F8F9FA] uppercase tracking-wider">
                  Rix Compound Tour
                </span>
                <button 
                  onClick={() => setIsPlayingVideo(false)}
                  className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/vgHBEpjlTRU?autoplay=1&rel=0"
                  title="Rix Compound Track Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
