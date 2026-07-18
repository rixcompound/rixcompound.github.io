/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Bike } from 'lucide-react';

export default function Navigation() {
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
    { name: 'Pricing & Packages', href: '#pricing' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        id="mainNav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
          isScrolled
            ? 'h-12 bg-[#12161A]/95 backdrop-blur-md border-b border-neutral-800/70 shadow-lg shadow-neutral-950/20'
            : 'h-14 bg-[#12161A]/90 border-b border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Profile Container */}
          <a href="#home" onClick={triggerTurbo} className="relative w-[184px] h-10 flex-shrink-0 group z-10 scale-90 sm:scale-100 origin-left">
            {/* Master Sprocket and Chain SVG Container */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 184 48">
              {/* Mathematics for exact external tangents */}
              {(() => {
                const bigSprocketX = 24;
                const smallSprocketX = 94.5;
                const cy = 24;
                const r1 = 20; // Big sprocket radius
                const r2 = 6.5; // Small sprocket radius

                const d = smallSprocketX - bigSprocketX;
                const angleRad = Math.asin((r1 - r2) / d);
                const cosA = Math.cos(angleRad);
                const sinA = Math.sin(angleRad);

                // Tangents on Big Sprocket
                const tx1_top = bigSprocketX + r1 * sinA;
                const ty1_top = cy - r1 * cosA;
                const tx1_bot = bigSprocketX + r1 * sinA;
                const ty1_bot = cy + r1 * cosA;

                // Tangents on Small Sprocket
                const tx2_top = smallSprocketX + r2 * sinA;
                const ty2_top = cy - r2 * cosA;
                const tx2_bot = smallSprocketX + r2 * sinA;
                const ty2_bot = cy + r2 * cosA;

                // Closed path wrapping clockwise around both sprockets
                const pathD = `M ${tx1_top},${ty1_top} L ${tx2_top},${ty2_top} A ${r2},${r2} 0 0,1 ${tx2_bot},${ty2_bot} L ${tx1_bot},${ty1_bot} A ${r1},${r1} 0 1,1 ${tx1_top},${ty1_top}`;

                return (
                  <>
                    <defs>
                      <clipPath id="logo-clip">
                        <circle cx="24" cy="24" r="14.5" />
                      </clipPath>
                    </defs>

                    {/* 1. Underlying Inner Chain Plate (Dark Base Link Structure) */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#1F242A"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />

                     {/* 2. Outer Chain Plates / Rollers (Dashed Moving Line) */}
                    <path
                      className={isTurbo ? "animate-chain-turbo" : "animate-chain-slow"}
                      d={pathD}
                      fill="none"
                      stroke="#FF6600"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="5 3.5"
                    />

                    {/* 3. Big Sprocket Group (Behind we go, centered at 24, 24) */}
                    <g className={isTurbo ? "animate-spin-big-turbo" : "animate-spin-big-slow"}>
                      {/* Sprocket Base Ring */}
                      <circle cx="24" cy="24" r="18" fill="none" stroke="#FF6600" strokeWidth="1" className="opacity-90" />
                      <circle cx="24" cy="24" r="14.5" fill="none" stroke="#FF6600" strokeWidth="0.75" className="opacity-75" />
                      
                      {/* Weight reduction drill holes */}
                      {Array.from({ length: 6 }).map((_, i) => {
                        const angle = (i * 360) / 6;
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <circle
                            key={i}
                            cx={24 + 11 * Math.cos(rad)}
                            cy={24 + 11 * Math.sin(rad)}
                            r="1.75"
                            fill="none"
                            stroke="#FF6600"
                            strokeWidth="0.75"
                            className="opacity-80"
                          />
                        );
                      })}

                      {/* Big sprocket solid teeth */}
                      {Array.from({ length: 18 }).map((_, i) => {
                        const angle = (i * 360) / 18;
                        const angleWidth = 6.2;
                        const radBaseLeft = ((angle - angleWidth) * Math.PI) / 180;
                        const radBaseRight = ((angle + angleWidth) * Math.PI) / 180;
                        const radTip = (angle * Math.PI) / 180;
                        const rBase = 16.5;
                        const rTip = 22.0;
                        return (
                          <polygon
                            key={i}
                            points={`
                              ${24 + rBase * Math.cos(radBaseLeft)},${24 + rBase * Math.sin(radBaseLeft)}
                              ${24 + rTip * Math.cos(radTip)},${24 + rTip * Math.sin(radTip)}
                              ${24 + rBase * Math.cos(radBaseRight)},${24 + rBase * Math.sin(radBaseRight)}
                            `}
                            fill="#FF6600"
                            className="opacity-100"
                          />
                        );
                      })}
                    </g>

                    {/* Centered Profile Image - Inside the SVG for 100% perfect mathematical alignment */}
                    <image
                      href="https://i.postimg.cc/GhTnJcSP/social-cat-instagram-instagram-5.jpg"
                      x="9.5"
                      y="9.5"
                      width="29"
                      height="29"
                      clipPath="url(#logo-clip)"
                      referrerPolicy="no-referrer"
                    />

                    {/* 4. Small Sprocket Group (Centered at 94.5, 24) */}
                    <g className={isTurbo ? "animate-spin-small-turbo" : "animate-spin-small-slow"}>
                      <circle cx="94.5" cy="24" r="5" fill="none" stroke="#FF6600" strokeWidth="1" />
                      <circle cx="94.5" cy="24" r="2.5" fill="none" stroke="#FF6600" strokeWidth="0.75" />
                      
                      {/* Small Sprocket Teeth */}
                      {Array.from({ length: 8 }).map((_, i) => {
                        const angle = (i * 360) / 8;
                        const angleWidth = 14.5;
                        const radBaseLeft = ((angle - angleWidth) * Math.PI) / 180;
                        const radBaseRight = ((angle + angleWidth) * Math.PI) / 180;
                        const radTip = (angle * Math.PI) / 180;
                        const rBase = 4.25;
                        const rTip = 7.5;
                        return (
                          <polygon
                            key={i}
                            points={`
                              ${94.5 + rBase * Math.cos(radBaseLeft)},${24 + rBase * Math.sin(radBaseLeft)}
                              ${94.5 + rTip * Math.cos(radTip)},${24 + rTip * Math.sin(radTip)}
                              ${94.5 + rBase * Math.cos(radBaseRight)},${24 + rBase * Math.sin(radBaseRight)}
                            `}
                            fill="#FF6600"
                            className="opacity-100"
                          />
                        );
                      })}
                    </g>

                    {/* 5. Mathematically aligned SVG typography */}
                    <text
                      x="83.5"
                      y="29.5"
                      textAnchor="end"
                      fill="#F8F9FA"
                      className="font-display font-black text-[13px] sm:text-sm uppercase italic tracking-tight"
                    >
                      RIX <tspan fill="#FF6600">C</tspan>
                    </text>

                    <text
                      x="105.5"
                      y="29.5"
                      textAnchor="start"
                      fill="#FF6600"
                      className="font-display font-black text-[13px] sm:text-sm uppercase italic tracking-tight"
                    >
                      MPOUND
                    </text>
                  </>
                );
              })()}
            </svg>

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
              <Bike className="w-3 h-3" /> Call to Book
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
            Call to Book
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
