/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  X, 
  Trash2, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  Save, 
  CalendarDays,
  AlertCircle,
  Cloud,
  Loader2,
  Smartphone,
  Check
} from 'lucide-react';
import { TrackClosureConfig } from '../types';
import { 
  isClosureActive, 
  getClosureBannerText
} from '../utils/closure';
import { 
  saveClosureConfigToFirebase 
} from '../utils/firebase';

interface AdminClosureMenuProps {
  isOpen: boolean;
  onClose: () => void;
  config: TrackClosureConfig;
  onSave: (newConfig: TrackClosureConfig) => void;
}

export default function AdminClosureMenu({
  isOpen,
  onClose,
  config,
  onSave,
}: AdminClosureMenuProps) {
  const [startDate, setStartDate] = useState(config.startDate || '');
  const [endDate, setEndDate] = useState(config.endDate || '');
  const [customText, setCustomText] = useState(config.customText || '');
  const [reason, setReason] = useState(config.reason || '');
  const [isClosed, setIsClosed] = useState(config.isClosed);
  const [isSaving, setIsSaving] = useState(false);
  const [statusFeedback, setStatusFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Sync state when config changes or when opened
  useEffect(() => {
    if (isOpen) {
      setStartDate(config.startDate || '');
      setEndDate(config.endDate || '');
      setCustomText(config.customText || '');
      setReason(config.reason || '');
      setIsClosed(config.isClosed);
      setStatusFeedback(null);
    }
  }, [isOpen, config]);

  if (!isOpen) {
    return null;
  }

  // Temporary config for live preview
  const previewConfig: TrackClosureConfig = {
    isClosed,
    startDate,
    endDate,
    customText,
    reason,
  };

  const previewActive = isClosureActive(previewConfig);
  const previewText = previewActive ? getClosureBannerText(previewConfig) : '';

  // Quick preset dates generator
  const setQuickPreset = (preset: 'weekend' | 'tomorrow' | 'next-weekend') => {
    const today = new Date();
    const formatDate = (d: Date) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    if (preset === 'tomorrow') {
      const tom = new Date(today);
      tom.setDate(today.getDate() + 1);
      const tomStr = formatDate(tom);
      setStartDate(tomStr);
      setEndDate(tomStr);
      setCustomText('');
      setIsClosed(true);
    } else if (preset === 'weekend') {
      const fri = new Date(today);
      const dayOfWeek = today.getDay();
      const diffToFri = (5 - dayOfWeek + 7) % 7;
      fri.setDate(today.getDate() + diffToFri);

      const sun = new Date(fri);
      sun.setDate(fri.getDate() + 2);

      setStartDate(formatDate(fri));
      setEndDate(formatDate(sun));
      setCustomText('');
      setIsClosed(true);
    } else if (preset === 'next-weekend') {
      const nextFri = new Date(today);
      const dayOfWeek = today.getDay();
      const diffToNextFri = ((5 - dayOfWeek + 7) % 7) + 7;
      nextFri.setDate(today.getDate() + diffToNextFri);

      const nextSun = new Date(nextFri);
      nextSun.setDate(nextFri.getDate() + 2);

      setStartDate(formatDate(nextFri));
      setEndDate(formatDate(nextSun));
      setCustomText('');
      setIsClosed(true);
    }
  };

  const constructCurrentConfig = (overrideClosed?: boolean): TrackClosureConfig => {
    const finalClosed = overrideClosed !== undefined ? overrideClosed : isClosed;
    return {
      isClosed: finalClosed,
      startDate: startDate.trim(),
      endDate: endDate.trim() || startDate.trim(),
      customText: customText.trim(),
      reason: reason.trim(),
      lastUpdated: new Date().toISOString(),
    };
  };

  const handleSave = async () => {
    const hasAnyContent = Boolean(startDate.trim() || customText.trim());
    const finalClosed = hasAnyContent ? isClosed : false;

    const newConfig = constructCurrentConfig(finalClosed);

    setIsSaving(true);
    setStatusFeedback(null);

    // 1. Immediately update local state
    onSave(newConfig);

    // 2. Persist directly to Firebase Firestore
    const result = await saveClosureConfigToFirebase(newConfig);
    setIsSaving(false);

    if (result.success) {
      setStatusFeedback({
        type: 'success',
        message: finalClosed
          ? '✓ Track closure successfully saved to Firebase Cloud! The alert banner is now live for all visitors worldwide.'
          : '✓ Track marked as open in Firebase Cloud! Closure banner removed for all visitors.',
      });
    } else {
      setStatusFeedback({
        type: 'error',
        message: result.message || 'Error saving to Firebase cloud database.',
      });
    }

    setTimeout(() => {
      setStatusFeedback(null);
    }, 6000);
  };

  const handleClear = async () => {
    setStartDate('');
    setEndDate('');
    setCustomText('');
    setReason('');
    setIsClosed(false);

    const clearedConfig: TrackClosureConfig = {
      isClosed: false,
      startDate: '',
      endDate: '',
      customText: '',
      reason: '',
      lastUpdated: new Date().toISOString(),
    };

    setIsSaving(true);
    setStatusFeedback(null);

    // 1. Update local state
    onSave(clearedConfig);

    // 2. Clear in Firebase
    const result = await saveClosureConfigToFirebase(clearedConfig);
    setIsSaving(false);

    if (result.success) {
      setStatusFeedback({
        type: 'success',
        message: '✓ All closed dates cleared in Firebase! Top alert block removed from the website.',
      });
    } else {
      setStatusFeedback({
        type: 'error',
        message: result.message || 'Error updating Firebase cloud database.',
      });
    }

    setTimeout(() => {
      setStatusFeedback(null);
    }, 6000);
  };

  return (
    <div 
      id="admin-closure-menu"
      className="bg-[#0D1013] border-t-2 border-[#FF6600] text-[#F8F9FA] py-8 px-4 sm:px-6 lg:px-8 relative z-40 transition-all duration-300 shadow-2xl animate-fadeIn"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] text-[9px] font-mono font-bold uppercase tracking-wider rounded">
                <ShieldCheck className="w-3 h-3" /> Admin Portal
              </span>

              {/* Live Firebase Cloud sync status badge */}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-[9px] font-mono font-bold uppercase tracking-wider rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <Cloud className="w-3 h-3" /> Firebase Cloud Synced
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-[#F8F9FA] mt-1.5 flex items-center gap-2">
              Track Closure <span className="text-[#FF6600] italic">Manager</span>
            </h2>
            <p className="text-neutral-400 text-xs mt-0.5 font-sans">
              Change track closed dates directly from your phone. When no dates are closed, the top banner is hidden from the website.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white bg-[#1F242A] hover:bg-neutral-800 border border-neutral-700/60 rounded-md transition-colors flex items-center gap-1 text-xs font-mono"
            title="Close Admin Panel"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Feedback alert */}
        {statusFeedback && (
          <div className={`p-3 rounded text-xs font-mono flex items-center justify-between animate-fadeIn ${
            statusFeedback.type === 'success'
              ? 'bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E]'
              : 'bg-red-500/15 border border-red-500/40 text-red-400'
          }`}>
            <span className="flex items-center gap-2">
              {statusFeedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              )}
              {statusFeedback.message}
            </span>
          </div>
        )}

        {/* Live Top Banner Preview */}
        <div className="bg-[#171B20] border border-neutral-800 rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#FF6600]" />
              Live Website Preview:
            </span>
            <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
              previewActive ? 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30' : 'bg-neutral-800 text-neutral-400'
            }`}>
              {previewActive ? 'Banner Active (Visible)' : 'Banner Hidden (Track Open)'}
            </span>
          </div>

          {previewActive ? (
            <div className="bg-[#B91C1C] border border-[#DC2626] text-white px-4 py-2.5 rounded flex items-center justify-between text-xs font-mono shadow-inner">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="font-bold tracking-wide uppercase">{previewText}</span>
              </div>
              {reason && (
                <span className="text-[10px] text-red-100 hidden sm:inline">
                  Reason: {reason}
                </span>
              )}
            </div>
          ) : (
            <div className="border border-dashed border-neutral-700/60 rounded p-3 text-center text-xs font-mono text-neutral-400 bg-[#12161A]">
              Top closure banner is currently <span className="text-[#22C55E] font-bold">HIDDEN</span> on the homepage.
            </div>
          )}
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#171B20] border border-neutral-800 rounded-lg p-5">
          
          {/* Column 1: Date Pickers & Presets */}
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-[#FF6600]" />
                Select Closed Dates
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="block text-[10px] font-mono text-neutral-400 mb-1">Start Date:</span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      if (!endDate || endDate < e.target.value) {
                        setEndDate(e.target.value);
                      }
                      setIsClosed(true);
                    }}
                    className="w-full min-h-[42px] bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
                  />
                </div>

                <div>
                  <span className="block text-[10px] font-mono text-neutral-400 mb-1">End Date:</span>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      setIsClosed(true);
                    }}
                    className="w-full min-h-[42px] bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Quick Shortcuts */}
            <div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                Quick Shortcuts:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setQuickPreset('tomorrow')}
                  className="min-h-[36px] px-3 py-1.5 bg-[#1F242A] hover:bg-neutral-700 active:scale-95 text-neutral-300 rounded text-xs font-mono border border-neutral-700 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#FF6600]" /> Tomorrow
                </button>
                <button
                  type="button"
                  onClick={() => setQuickPreset('weekend')}
                  className="min-h-[36px] px-3 py-1.5 bg-[#1F242A] hover:bg-neutral-700 active:scale-95 text-neutral-300 rounded text-xs font-mono border border-neutral-700 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#FF6600]" /> This Weekend
                </button>
                <button
                  type="button"
                  onClick={() => setQuickPreset('next-weekend')}
                  className="min-h-[36px] px-3 py-1.5 bg-[#1F242A] hover:bg-neutral-700 active:scale-95 text-neutral-300 rounded text-xs font-mono border border-neutral-700 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#FF6600]" /> Next Weekend
                </button>
              </div>
            </div>

            {/* Closure Status Toggle */}
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-300">Track Closure Status:</span>
              <button
                type="button"
                onClick={() => setIsClosed(!isClosed)}
                className={`min-h-[36px] px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors font-bold ${
                  isClosed
                    ? 'bg-[#EF4444] text-white'
                    : 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40'
                }`}
              >
                {isClosed ? 'Track Marked Closed' : 'Track Marked Open'}
              </button>
            </div>
          </div>

          {/* Column 2: Custom Text & Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-neutral-300 uppercase tracking-wider mb-1 font-bold">
                Custom Banner Text Override (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Closed from 12 Sept - 16 Sept"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  setIsClosed(true);
                }}
                className="w-full min-h-[42px] bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
              />
              <span className="text-[10px] text-neutral-500 font-sans mt-1 block">
                Leave blank to automatically format from the chosen dates above.
              </span>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Reason / Extra Note (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Track Maintenance, Heavy Rain, etc."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full min-h-[42px] bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
              />
            </div>

            <div className="p-3 bg-[#1F242A] rounded border border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-400 font-sans leading-relaxed">
              <Smartphone className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Mobile Phone Friendly:</strong> Changes you save here sync directly to Firebase Cloud. Every visitor opening your site on any phone or laptop immediately sees the updated status.
              </span>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-800">
          <button
            type="button"
            onClick={handleClear}
            disabled={isSaving}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 rounded font-mono text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4 text-neutral-400" />
            Clear Dates &amp; Open Track
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-[#1F242A] hover:bg-neutral-800 text-neutral-300 border border-neutral-700 rounded font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Exit
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-2.5 bg-[#FF6600] hover:bg-[#ff7a1a] text-[#12161A] font-display font-black uppercase italic tracking-wider rounded transition-colors shadow-lg disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving to Cloud...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save &amp; Publish Banner
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
