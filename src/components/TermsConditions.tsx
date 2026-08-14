/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, ShieldAlert, AlertOctagon } from 'lucide-react';

export default function TermsConditions() {
  const termsList = [
    "No refunds will be issued under any circumstances.",
    "If Rix Compound closes due to unsafe weather conditions, bookings will be rescheduled to the next available suitable date.",
    "All riders must arrive 15 minutes before their booking time. Riding time starts at the scheduled time, and late arrivals will not receive extra time.",
    "All riders must have prior dirt bike riding experience. Beginners are not permitted on rental pit bikes.",
    "Riders must be 14 years or older and weigh 100 kg or less.",
    "Children under 14 with no riding experience may only ride as a passenger on a Rix Compound ATV with a parent or legal guardian, and only with prior management approval.",
    "One rider per rental vehicle. Sharing is strictly prohibited.",
    "If a rider falls twice, the rental will be stopped immediately without refund.",
    "Reckless or dangerous riding will result in the immediate termination of the ride without refund.",
    "I accept full responsibility for any loss or damage to Rix Compound’s bikes, ATVs, equipment, or property caused by myself or anyone in my booking. All repair or replacement costs must be paid before leaving the premises.",
    "I understand that all activities are undertaken entirely at my own risk. Rix Compound, its owners, management, and staff shall not be liable for any injury, loss, theft, damage, or death, except where required by law."
  ];

  return (
    <section id="terms" className="py-10 sm:py-14 bg-[#12161A] relative border-t border-neutral-800 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-3 mb-6">
          <div>
            <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block mb-0.5">
              Legal & Safety Agreement
            </span>
            <h2 className="font-display text-lg sm:text-xl font-bold text-[#F8F9FA] uppercase tracking-tight">
              Terms & <span className="text-[#FF6600] italic font-extrabold">Conditions</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-1 text-[10px] text-neutral-400 font-mono mt-1 sm:mt-0 uppercase">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Rider Agreement & Rules</span>
          </div>
        </div>

        {/* T&C Content Card */}
        <div className="bg-[#1F242A] border border-neutral-800 rounded p-5 sm:p-7 shadow-sm relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FF6600]" />

          <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF6600]" />
              <h3 className="font-display text-sm sm:text-base font-bold text-[#F8F9FA] uppercase tracking-wide">
                Track Rules & Rental Agreement
              </h3>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#12161A] text-neutral-300 border border-neutral-800 rounded font-bold">
              Mandatory Compliance
            </span>
          </div>

          <div className="space-y-3">
            {termsList.map((term, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-2.5 sm:p-3 bg-[#12161A] border border-neutral-800/80 rounded hover:border-neutral-700 transition-colors"
              >
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#1F242A] border border-neutral-700 flex items-center justify-center font-mono text-[9px] font-bold text-[#FF6600]">
                  {index + 1}
                </span>
                <p className="text-[11px] sm:text-xs text-neutral-300 font-sans leading-relaxed flex-1">
                  {term}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
            <AlertOctagon className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
            <span>By entering Rix Compound or renting equipment, all riders and visitors agree to adhere strictly to these terms.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
