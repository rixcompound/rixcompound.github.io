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
      image: "https://i.postimg.cc/J44p3K6T/Chat-GPT-Image-Jan-7-2026-03-01-22-PM.png",
      underConstruction: false
    },
    {
      title: "Flat Track",
      description: "Practice your sliding, drifting, and precise throttle controls in a secure, fast, wide-open winelands setup. Full-size Big Bikes are welcome here!",
      image: "https://i.postimg.cc/xdmTR1fj/Chat-GPT-Image-Mar-4-2026-10-12-06-AM.png",
      underConstruction: true
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

        {/* Tracks Grid - Side by side, ultra-compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {tracks.map((track, idx) => (
            <div 
              key={idx}
              className={`rounded border p-3 transition-all duration-300 group relative overflow-hidden bg-[#12161A] shadow-sm flex flex-col justify-between ${
                track.underConstruction 
                  ? 'border-neutral-800/80 opacity-90' 
                  : 'border-neutral-800 hover:border-brand/60'
              }`}
            >
              <div>
                {/* Image Container - Reduced aspect ratio & padding */}
                <div className="relative rounded overflow-hidden aspect-[1.7] mb-3 border border-neutral-800 bg-[#1F242A]">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      track.underConstruction ? 'opacity-20 filter grayscale contrast-125' : 'group-hover:scale-102'
                    }`}
                  />

                  {track.underConstruction && (
                    <div className="absolute inset-0 bg-neutral-950/60 flex items-center justify-center p-3">
                      <div className="bg-[#1F242A] border border-neutral-800 p-2.5 rounded shadow max-w-[90%] text-center">
                        <div className="text-[8px] font-mono font-bold tracking-wider text-[#FF6600] mb-0.5 uppercase">
                          FLAT TRACK PROGRESS
                        </div>
                        <h4 className="text-xs font-bold uppercase text-[#F8F9FA] font-display">
                          Under Construction
                        </h4>
                        <p className="mt-1 text-[9px] text-neutral-400 max-w-[160px] mx-auto leading-normal">
                          Expanding layout for full-size Big Bike action.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title & Description Area */}
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <h3 className="font-display text-sm font-bold text-[#F8F9FA] uppercase">
                    {track.title}
                  </h3>
                  {track.underConstruction && (
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-[#1F242A] border border-neutral-800 text-[#FF6600] font-mono text-[8px] uppercase tracking-wider rounded font-semibold">
                      In Progress
                    </span>
                  )}
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
                className="w-full h-full object-cover opacity-70 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                <div className="w-8 h-8 bg-brand text-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-3.5 h-3.5 fill-black translate-x-0.5 text-black" />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-neutral-500 font-mono text-[8px] uppercase tracking-[0.1em] block mb-0.5">
                Compound Media Tour
              </span>
              <h4 className="font-display text-xs font-bold text-[#F8F9FA] uppercase tracking-tight">
                Track Video
              </h4>
              <p className="text-[10px] text-neutral-400 leading-normal mt-1 max-w-sm">
                Get a dirt-level view of our professional pit bike tracks, turns, and winelands scenic surroundings. See the action before you arrive.
              </p>
              <button 
                onClick={() => setIsPlayingVideo(true)}
                className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] text-[#FF6600] hover:text-white font-bold uppercase tracking-wider cursor-pointer"
              >
                <Play className="w-2.5 h-2.5 fill-current" /> Watch Track Video
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Screen with GPU-Accelerated motion */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900 p-1.5 rounded-full transition-colors"
              aria-label="Close video player"
            >
              <X className="w-4 h-4" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.97, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="w-full max-w-2xl aspect-video rounded overflow-hidden border border-neutral-850 bg-black shadow-2xl"
            >
              <iframe 
                src="https://www.youtube.com/embed/vgHBEpjlTRU?autoplay=1"
                title="Rix Compound Track Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
