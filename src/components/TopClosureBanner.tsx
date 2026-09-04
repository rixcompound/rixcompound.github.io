/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlertTriangle } from 'lucide-react';
import { TrackClosureConfig } from '../types';
import { isClosureActive, getClosureBannerText } from '../utils/closure';

interface TopClosureBannerProps {
  config: TrackClosureConfig;
}

export default function TopClosureBanner({ config }: TopClosureBannerProps) {
  if (!isClosureActive(config)) {
    return null;
  }

  const bannerText = getClosureBannerText(config);

  return (
    <aside 
      id="top-closure-block"
      aria-label="Track Closure Notice"
      className="w-full bg-[#B91C1C] border-b border-red-900 text-white py-1.5 px-3 sm:px-4 shadow-md flex items-center justify-center gap-2 relative z-50 select-none animate-fadeIn"
    >
      <div className="flex items-center gap-2 max-w-5xl mx-auto justify-center flex-wrap">
        <span className="flex h-2 w-2 relative flex-shrink-0" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        
        <AlertTriangle className="w-3.5 h-3.5 text-white flex-shrink-0" aria-hidden="true" />

        <span className="font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider text-white text-center">
          {bannerText}
        </span>

        {config.reason && config.reason.trim().length > 0 && (
          <span className="text-[10px] font-mono text-red-100 bg-red-950/50 px-1.5 py-0.5 rounded border border-red-800/60 uppercase tracking-tight">
            {config.reason.trim()}
          </span>
        )}
      </div>
    </aside>
  );
}
