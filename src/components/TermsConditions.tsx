/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, AlertOctagon } from 'lucide-react';

export default function TermsConditions() {
  const termsList = [
    "No refunds will be issued under any circumstances.",
    "If Rix Compound closes due to unsafe weather conditions, riding sessions will be rescheduled or transferred to the next available open track day.",
    "Rix Compound operates strictly on a walk-in, first-come, first-served basis (no advance bookings). Rental sessions run strictly for 30 minutes on the clock.",
    "All pit bike riders must have prior dirt bike riding experience. Beginners are strictly not permitted on rental pit bikes (beginners are welcome on rental quad bikes).",
    "Riders must be 14 years or older. Max rider weight is 100 kg for pit bikes and 80 kg for quad bikes.",
    "Children under 14 with no riding experience may only ride as a passenger on a Rix Compound ATV quad with a parent or legal guardian, and only with prior management approval.",
    "One rider per rental vehicle. Sharing is strictly prohibited.",
    "If a rider falls twice, the rental will be stopped immediately without refund.",
    "Reckless or dangerous riding will result in the immediate termination of the ride without refund.",
    "Clients and riders accept full responsibility for any loss or damage to Rix Compound’s bikes, ATVs, equipment, or property caused by themselves or anyone in their group. All repair or replacement costs must be paid before leaving the premises.",
    "All activities are undertaken entirely at the client's and rider's own risk. Rix Compound, its owners, management, and staff shall not be liable for any injury, loss, theft, damage, or death, except where required by law."
  ];

  return (
    <section id="terms" className="py-6 sm:py-8 bg-[#12161A] relative border-t border-neutral-800 scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 mb-4">
          <div>
            <span className="text-neutral-400 font-mono text-[9px] uppercase tracking-[0.15em] block">
              Legal & Safety
            </span>
            <h2 className="font-display text-base sm:text-lg font-bold text-[#F8F9FA] uppercase tracking-tight">
              Terms & <span className="text-[#FF6600] italic font-extrabold">Conditions</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] text-neutral-400 font-mono uppercase bg-[#1F242A] px-2.5 py-1 rounded border border-neutral-800">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Track Rules & Agreement</span>
          </div>
        </div>

        {/* Compact T&C Bullet Card */}
        <div className="bg-[#1F242A] border border-neutral-800 rounded p-4 sm:p-5 shadow-sm">
          <ul className="space-y-2 text-[11px] sm:text-xs text-neutral-300 font-sans">
            {termsList.map((term, index) => (
              <li key={index} className="flex items-start gap-2.5 leading-snug">
                <span className="text-[#FF6600] font-bold text-sm leading-none select-none mt-0.5">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3.5 pt-2.5 border-t border-neutral-800/80 flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
            <AlertOctagon className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
            <span>All riders and visitors entering Rix Compound agree to adhere strictly to these terms and safety policies.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
