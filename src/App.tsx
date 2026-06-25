/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Track from './components/Track';
import PricingCalculator from './components/PricingCalculator';
import EventsGallery from './components/EventsGallery';
import AboutContact from './components/AboutContact';

export default function App() {
  return (
    <div id="appRoot" className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col relative font-sans antialiased selection:bg-brand selection:text-black">
      
      {/* Modern Redesigned Header Menu */}
      <Navigation />

      {/* Main Grid content flow */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* Hero Welcome */}
        <Hero />

        {/* Tracks Highlight and Video tour */}
        <Track />

        {/* Pricing Lists & Live Quote Booking Forms */}
        <PricingCalculator />

        {/* Events Schedule & Image grid with lightboxes */}
        <EventsGallery />

        {/* Story, Map integration, hours and footer */}
        <AboutContact />

      </main>
    </div>
  );
}
