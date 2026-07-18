/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Track from './components/Track';
import PricingCalculator from './components/PricingCalculator';
import EventsGallery from './components/EventsGallery';
import AboutContact from './components/AboutContact';
import { ShieldAlert, X } from 'lucide-react';

const CRITICAL_IMAGES = [
  "https://i.postimg.cc/KYG36gnP/IMG_20251112_WA0108_1024x683.jpg",
  "https://i.postimg.cc/GhTnJcSP/social-cat-instagram-instagram-5.jpg",
  "https://i.postimg.cc/J44p3K6T/Chat-GPT-Image-Jan-7-2026-03-01-22-PM.png",
  "https://i.postimg.cc/xdmTR1fj/Chat-GPT-Image-Mar-4-2026-10-12-06-AM.png",
  "https://img.youtube.com/vi/vgHBEpjlTRU/maxresdefault.jpg",
  "https://i.postimg.cc/GpXTdhQx/RC-LOGO.jpg",
  "https://lh3.googleusercontent.com/d/1T1wcEUFgq5E6Gg4_SAw0wh7dvJhpCW-K=s800",
  "https://lh3.googleusercontent.com/d/1kZyLMKXdsabDqyivA9mGQ3exA1YXYNdW=s800",
  "https://lh3.googleusercontent.com/d/1R9OYQT8Oe161DYKUpb1xMiQ4bAjRUbWs=s800",
  "https://lh3.googleusercontent.com/d/17oCnPzDF_N1YU2ZSbDoh-vTdvHcNi69Z=s800",
  "https://lh3.googleusercontent.com/d/1vgj5Jv6519sz5ioIppFYFbOTXNqUWPJU=s800",
  "https://lh3.googleusercontent.com/d/1opRk9DVra42yLuZUDqxuq9ijEWQURugE=s800",
  "https://lh3.googleusercontent.com/d/1jqdT4pedi3b5aaw2biEmFfxtVm5XpxSj=s800",
  "https://lh3.googleusercontent.com/d/108-4wXp6z2yCSjZnLj-e2vuE-rr-WFeB=s800",
  "https://lh3.googleusercontent.com/d/1ndv4CQUciUdf0E9QIDsASSNXYzoOMUY-=s800",
  "https://lh3.googleusercontent.com/d/1b5QTW9_Y3L3UyqpcldbhKDvg4A2CWcXf=s800",
  "https://lh3.googleusercontent.com/d/1qx7fYGB2UaBKrlTKYHcAHsLCJrUBG5fk=s800"
];

export default function App() {
  const [showNotification, setShowNotification] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Engine...");

  useEffect(() => {
    let loadedCount = 0;
    const totalCount = CRITICAL_IMAGES.length;

    const messages = [
      "Securing Helmet Straps...",
      "Fuelling Pit Bike Tanks...",
      "Prepping Wineland Dirt Corners...",
      "Igniting Compound Engines...",
      "Checking Track Tyre Pressure...",
      "Clearing Main Starting Grid..."
    ];

    const textInterval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setLoadingText(randomMsg);
    }, 550);

    // Fallback timer to ensure site opens under any condition
    const fallbackTimer = setTimeout(() => {
      setLoadingProgress(100);
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      clearInterval(textInterval);
    }, 3500);

    // Sequence loading each critical asset
    CRITICAL_IMAGES.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        const pct = Math.min(100, Math.floor((loadedCount / totalCount) * 100));
        setLoadingProgress((prev) => Math.max(prev, pct));
        
        if (loadedCount >= totalCount) {
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 500);
            clearInterval(textInterval);
            clearTimeout(fallbackTimer);
          }, 400);
        }
      };
    });

    return () => {
      clearInterval(textInterval);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 relative overflow-x-hidden">
      
      {/* 1. Master Preloader Overlay - Highly detailed, GPU-Accelerated */}
      {isLoading && (
        <div 
          className={`fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-500 ease-in-out ${
            isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Detailed Glowing Spinning Sprocket Emblem */}
          <div className="relative w-28 h-28 mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-brand/20 animate-ping duration-1000" />
            <div className="absolute inset-2 rounded-full bg-neutral-900 border border-brand/30 flex items-center justify-center shadow-[0_0_35px_rgba(255,140,0,0.3)]">
              <svg 
                className="w-16 h-16 text-brand animate-spin" 
                style={{ animationDuration: '4s' }} 
                viewBox="0 0 48 48" 
                fill="currentColor"
              >
                <circle cx="24" cy="24" r="16" fill="none" stroke="#ff8c00" strokeWidth="2" />
                <circle cx="24" cy="24" r="8" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                <circle cx="24" cy="24" r="3" fill="#000" stroke="#ff8c00" strokeWidth="1" />
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 360) / 6;
                  const rad = (angle * Math.PI) / 180;
                  return (
                    <circle
                      key={i}
                      cx={24 + 11 * Math.cos(rad)}
                      cy={24 + 11 * Math.sin(rad)}
                      r="1.5"
                      fill="#000"
                      stroke="#ff8c00"
                      strokeWidth="0.5"
                    />
                  );
                })}
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = (i * 360) / 18;
                  const rad = (angle * Math.PI) / 180;
                  const radL = ((angle - 6) * Math.PI) / 180;
                  const radR = ((angle + 6) * Math.PI) / 180;
                  return (
                    <polygon
                      key={i}
                      points={`
                        ${24 + 15 * Math.cos(radL)},${24 + 15 * Math.sin(radL)}
                        ${24 + 20 * Math.cos(rad)},${24 + 20 * Math.sin(rad)}
                        ${24 + 15 * Math.cos(radR)},${24 + 15 * Math.sin(radR)}
                      `}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Core App Info */}
          <div className="text-center space-y-2 max-w-xs">
            <h2 className="font-display font-black text-white text-lg uppercase tracking-wider italic">
              RIX<span className="text-brand">COMPOUND</span>
            </h2>
            <p className="text-neutral-500 text-[10px] uppercase font-mono tracking-widest">
              Stellenbosch Winelands
            </p>
            
            {/* Live Progress Indicator */}
            <div className="w-48 h-1.5 bg-neutral-900 border border-neutral-850 rounded-full mx-auto overflow-hidden relative">
              <div 
                className="h-full bg-brand rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 px-1 pt-1">
              <span className="animate-pulse">{loadingText}</span>
              <span className="font-bold text-brand">{loadingProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Website Layout - Rendered ahead of time to optimize layout paints */}
      <div 
        id="appRoot" 
        className={`min-h-screen bg-neutral-950 text-neutral-100 flex flex-col relative font-sans antialiased selection:bg-brand selection:text-black transition-opacity duration-1000 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Navigation Menu */}
        <Navigation />

        {/* Floating Notification Bubble for Rental Requirements */}
        {showNotification && (
          <div
            className="fixed top-24 left-4 sm:left-6 lg:left-8 z-40 cursor-pointer max-w-[210px] sm:max-w-[240px] group select-none animate-float-rotate transition-all duration-300"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('.close-btn')) return;
              document.getElementById('rental-requirements')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-950/95 border-2 border-amber-500 shadow-[0_15px_35px_rgba(234,179,8,0.3)] backdrop-blur-md p-3 pr-8 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(234,179,8,0.45)] transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_6px,#000_6px,#000_12px)]" />
              
              <div className="pl-2 flex items-start gap-2">
                <div className="flex-shrink-0 bg-amber-500/10 border border-amber-500/30 text-amber-500 p-1.5 rounded-lg mt-0.5 animate-pulse">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-mono text-[9px] text-amber-500 font-black tracking-widest block uppercase">
                      RENTAL ALERT
                    </span>
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                    </span>
                  </div>
                  <h4 className="text-white font-extrabold text-xs uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                    Rider Rules
                  </h4>
                  <p className="text-neutral-400 text-[10px] sm:text-[11px] mt-0.5 leading-relaxed">
                    Competent experience is strictly mandatory. Tap to view requirements.
                  </p>
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                className="close-btn absolute top-2 right-2 p-1 text-neutral-500 hover:text-white rounded-full bg-neutral-950/40 hover:bg-neutral-950/80 transition-colors z-50"
                aria-label="Dismiss notification"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Main Sections */}
        <main className="flex-1 w-full flex flex-col">
          <Hero />
          <Track />
          <PricingCalculator />
          <EventsGallery />
          <AboutContact />
        </main>
      </div>
    </div>
  );
}

