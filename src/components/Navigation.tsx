/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Bike } from 'lucide-react';
import { TrackClosureConfig } from '../types';
import TopClosureBanner from './TopClosureBanner';

interface NavigationProps {
  closureConfig?: TrackClosureConfig;
}

export default function Navigation({ closureConfig }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sprocket & Chain Animation state (Turbo triggered on clicks/nav)
  const [isTurbo, setIsTurbo] = useState(false);

  const triggerTurbo = () => {
    setIsTurbo(true);
    const timer = setTimeout(() => {
      setIsTurbo(false);
    }, 1500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          setIsScrolled((prevScrolled) => {
            if (prevScrolled !== scrolled) {
              return scrolled;
            }
            return prevScrolled;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Track', href: '#track' },
    { name: 'Pricing & Hours', href: '#pricing' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'T&C', href: '#terms' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Hidden SVG Filter for logo transparency */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="transparent-logo" colorInterpolationFilters="sRGB">
            <feColorMatrix 
              type="matrix" 
              values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  -0.333 -0.333 -0.333 0 1" 
            />
          </filter>
        </defs>
      </svg>

      <header className="fixed top-0 left-0 w-full z-50">
        {closureConfig && <TopClosureBanner config={closureConfig} />}
        <nav
          id="mainNav"
          className={`w-full transition-all duration-350 ${
            isScrolled
              ? 'h-12 bg-[#12161A]/95 backdrop-blur-md border-b border-neutral-800/70 shadow-lg shadow-neutral-950/20'
              : 'h-14 bg-[#12161A]/90 border-b border-neutral-800/40'
          }`}
        >
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Monogram Container */}
          <a href="#home" onClick={triggerTurbo} className="flex items-center gap-2.5 group z-10 scale-90 sm:scale-100 origin-left">
            {/* Real isolated Monogram from the official Logo */}
            <div className="relative w-14 h-7 overflow-hidden bg-transparent flex-shrink-0">
              <img 
                src="https://i.postimg.cc/RV690snh/Rix-Compound-Logo-1.webp" 
                alt="Rix Compound RC Logo"
                className="absolute max-w-none"
                style={{ 
                  width: '123.5%',
                  height: '188.5%',
                  left: '-11.7%',
                  top: '-17%',
                  filter: 'url(#transparent-logo)',
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Wordmark next to the Monogram */}
            <div className="flex flex-col justify-center">
              <span className="font-display font-black text-sm uppercase italic tracking-wider text-[#F8F9FA]">
                RIX <span className="text-[#FF6600]">COMPOUND</span>
              </span>
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-400 font-medium">
                JUNIOR MX & PIT BIKE TRACK
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Super compact & mono-styled */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={triggerTurbo}
                className="relative px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all duration-200 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1 left-3 right-3 h-[1px] bg-[#FF6600] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a
              href="#pricing"
              onClick={triggerTurbo}
              className="ml-3 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF6600] hover:bg-white text-black rounded transition-all duration-300 flex items-center gap-1"
            >
              <Bike className="w-3 h-3" /> Show Up & Ride
            </a>
            <a
              href="https://www.instagram.com/rix.compound.mini.dirt.track?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="ml-2 p-1.5 text-neutral-300 hover:text-[#FF6600] hover:bg-neutral-800 transition-all rounded border border-neutral-800 bg-[#1F242A]"
              title="Follow @rix.compound.mini.dirt.track on Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
              </svg>
            </a>
          </div>

          {/* Hamburger Mobile Toggle & Small Always-on Mobile Instagram Link */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href="https://www.instagram.com/rix.compound.mini.dirt.track?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-neutral-300 hover:text-[#FF6600] transition-colors rounded-full border border-neutral-800 bg-[#1F242A]"
              title="Follow @rix.compound.mini.dirt.track on Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-neutral-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#12161A] flex flex-col justify-center transition-all duration-350 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                triggerTurbo();
              }}
              className={`font-display text-lg font-bold uppercase tracking-wide text-neutral-200 hover:text-[#FF6600] transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => {
              setMobileMenuOpen(false);
              triggerTurbo();
            }}
            className={`mt-3 px-6 py-2.5 bg-[#FF6600] text-black font-mono text-xs font-bold uppercase tracking-wider rounded text-center w-full max-w-xs shadow-md shadow-neutral-950/20 transition-all ${
              mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ transitionDelay: `${navLinks.length * 40}ms` }}
          >
            Show Up & Ride
          </a>

          {/* Expanded Instagram link in Mobile Tray */}
          <a
            href="https://www.instagram.com/rix.compound.mini.dirt.track?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 border border-neutral-800 hover:border-[#FF6600] rounded text-[10px] font-mono tracking-wider uppercase text-neutral-400 transition-all ${
              mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ transitionDelay: `${(navLinks.length + 1) * 40}ms` }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
            </svg>
            @rix.compound
          </a>
        </div>
      </div>
    </>
  );
}
