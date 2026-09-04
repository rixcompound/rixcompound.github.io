/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  CalendarX, 
  CheckCircle2, 
  X, 
  Trash2, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  Save, 
  CalendarDays,
  AlertCircle,
  Download,
  Copy,
  Check,
  GitBranch,
  UploadCloud
} from 'lucide-react';
import { TrackClosureConfig } from '../types';
import { 
  isClosureActive, 
  getClosureBannerText, 
  downloadClosureJson, 
  pushClosureToGitHub,
  STORAGE_KEY_GH_SETTINGS
} from '../utils/closure';

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
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  // GitHub integration state
  const [copied, setCopied] = useState(false);
  const [showGithubSync, setShowGithubSync] = useState(false);
  const [ghRepo, setGhRepo] = useState('');
  const [ghToken, setGhToken] = useState('');
  const [ghPushing, setGhPushing] = useState(false);
  const [ghStatus, setGhStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  // Load stored GitHub credentials on admin open
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_GH_SETTINGS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.repo) setGhRepo(parsed.repo);
        if (parsed.token) setGhToken(parsed.token);
      }
    } catch {
      // ignore
    }
  }, []);

  // Sync state when config changes or when opened
  useEffect(() => {
    if (isOpen) {
      setStartDate(config.startDate || '');
      setEndDate(config.endDate || '');
      setCustomText(config.customText || '');
      setReason(config.reason || '');
      setIsClosed(config.isClosed);
      setSavedMessage(null);
      setGhStatus(null);
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
      const dayOfWeek = today.getDay(); // 0 is Sun, 5 is Fri, 6 is Sat
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

  const handleSave = () => {
    const hasAnyContent = Boolean(startDate.trim() || customText.trim());
    const finalClosed = hasAnyContent ? isClosed : false;

    const newConfig = constructCurrentConfig(finalClosed);
    onSave(newConfig);

    setSavedMessage(
      finalClosed
        ? '✓ Track closure saved and published to homepage!'
        : '✓ Track marked as open. Closure banner removed from homepage.'
    );
    setTimeout(() => setSavedMessage(null), 4000);
  };

  const handleClear = () => {
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

    onSave(clearedConfig);
    setSavedMessage('✓ All closed dates cleared! Top block removed from homepage.');
    setTimeout(() => setSavedMessage(null), 4000);
  };

  const handleDownload = () => {
    const currentCfg = constructCurrentConfig();
    downloadClosureJson(currentCfg);
  };

  const handleCopyJson = async () => {
    const currentCfg = constructCurrentConfig();
    try {
      await navigator.clipboard.writeText(JSON.stringify(currentCfg, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handlePushToGithub = async () => {
    if (!ghRepo.trim() || !ghToken.trim()) {
      setGhStatus({ 
        success: false, 
        message: 'Please provide both your GitHub Repository (e.g. your-username/repo) and a Personal Access Token.' 
      });
      return;
    }

    setGhPushing(true);
    setGhStatus(null);

    const currentCfg = constructCurrentConfig();

    // Persist repo & token locally for convenience
    try {
      localStorage.setItem(STORAGE_KEY_GH_SETTINGS, JSON.stringify({
        repo: ghRepo.trim(),
        token: ghToken.trim(),
      }));
    } catch {
      // ignore
    }

    // Save locally first
    onSave(currentCfg);

    // Call GitHub API
    const result = await pushClosureToGitHub(ghRepo, ghToken, currentCfg);
    setGhPushing(false);
    setGhStatus(result);
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
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] text-[9px] font-mono font-bold uppercase tracking-wider rounded">
                <ShieldCheck className="w-3 h-3" /> Admin Portal
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-[#F8F9FA] mt-1 flex items-center gap-2">
              Track Closure <span className="text-[#FF6600] italic">Manager</span>
            </h2>
            <p className="text-neutral-400 text-xs mt-0.5 font-sans">
              Choose which dates the track is closed. When no dates are closed, the top banner is hidden from the website.
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
        {savedMessage && (
          <div className="p-3 bg-[#22C55E]/15 border border-[#22C55E]/40 rounded text-[#22C55E] text-xs font-mono flex items-center justify-between animate-fadeIn">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              {savedMessage}
            </span>
          </div>
        )}

        {/* Live Top Banner Preview */}
        <div className="bg-[#171B20] border border-neutral-800 rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#FF6600]" />
              Live Homepage Preview:
            </span>
            <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
              previewActive ? 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30' : 'bg-neutral-800 text-neutral-400'
            }`}>
              {previewActive ? 'Banner Active' : 'Banner Hidden (Track Open)'}
            </span>
          </div>

          {previewActive ? (
            <div className="bg-[#B91C1C] border border-[#DC2626] text-white px-4 py-2 rounded flex items-center justify-between text-xs font-mono shadow-inner animate-pulse">
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
                    className="w-full bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
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
                    className="w-full bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
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
                  className="px-2.5 py-1 bg-[#1F242A] hover:bg-neutral-700 text-neutral-300 rounded text-[10px] font-mono border border-neutral-700 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#FF6600]" /> Tomorrow
                </button>
                <button
                  type="button"
                  onClick={() => setQuickPreset('weekend')}
                  className="px-2.5 py-1 bg-[#1F242A] hover:bg-neutral-700 text-neutral-300 rounded text-[10px] font-mono border border-neutral-700 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#FF6600]" /> This Weekend
                </button>
                <button
                  type="button"
                  onClick={() => setQuickPreset('next-weekend')}
                  className="px-2.5 py-1 bg-[#1F242A] hover:bg-neutral-700 text-neutral-300 rounded text-[10px] font-mono border border-neutral-700 transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#FF6600]" /> Next Weekend
                </button>
              </div>
            </div>

            {/* Closure Status Toggle */}
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-300">Track Closure Status:</span>
              <button
                type="button"
                onClick={() => setIsClosed(!isClosed)}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors font-bold ${
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
                className="w-full bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
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
                className="w-full bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-2 text-xs font-mono text-[#F8F9FA] outline-none transition-colors"
              />
            </div>

            <div className="p-2.5 bg-[#1F242A] rounded border border-neutral-800 flex items-start gap-2 text-[10px] text-neutral-400 font-sans">
              <AlertCircle className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0 mt-0.5" />
              <span>
                To remove the top block from the homepage completely, click <strong>&quot;Clear Dates &amp; Open Track&quot;</strong> below.
              </span>
            </div>
          </div>

        </div>

        {/* GitHub Hosting Sync Section */}
        <div className="bg-[#171B20] border border-neutral-800 rounded-lg p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#F8F9FA] font-bold flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#FF6600]" />
                GitHub Hosting Compatibility
              </h3>
              <p className="text-[11px] text-neutral-400 font-sans mt-0.5">
                When hosted on GitHub Pages, the site loads closure data from <code className="text-[#FF6600] font-mono text-[10px]">public/closure.json</code>.
              </p>
            </div>

            {/* Quick action buttons: Download or Copy JSON */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#1F242A] hover:bg-neutral-700 text-neutral-300 text-xs font-mono rounded border border-neutral-700 transition-colors"
                title="Copy closure JSON"
              >
                {copied ? <Check className="w-3 h-3 text-[#22C55E]" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied!' : 'Copy JSON'}
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#1F242A] hover:bg-neutral-700 text-[#FF6600] text-xs font-mono rounded border border-neutral-700 transition-colors"
                title="Download closure.json file"
              >
                <Download className="w-3 h-3" />
                Download closure.json
              </button>
            </div>
          </div>

          {/* GitHub Direct Push Toggle */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setShowGithubSync(!showGithubSync)}
              className="text-xs font-mono text-neutral-400 hover:text-[#FF6600] transition-colors flex items-center gap-1.5"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              {showGithubSync ? '▼ Hide 1-Click GitHub API Direct Push' : '▶ Publish directly to your GitHub repository in 1 click'}
            </button>

            {showGithubSync && (
              <div className="bg-[#12161A] p-4 rounded border border-neutral-800 space-y-3 animate-fadeIn text-xs">
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Enter your GitHub repository and personal access token to update <code className="text-[#FF6600]">public/closure.json</code> directly from this browser. GitHub Pages will then automatically deploy and all visitors will see the updated banner.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                      GitHub Repository (owner/repo):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. rixcompound/rixcompound.github.io"
                      value={ghRepo}
                      onChange={(e) => setGhRepo(e.target.value)}
                      className="w-full bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-1.5 text-xs font-mono text-[#F8F9FA] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                      Personal Access Token:
                    </label>
                    <input
                      type="password"
                      placeholder="ghp_xxxxxxxxxxxx"
                      value={ghToken}
                      onChange={(e) => setGhToken(e.target.value)}
                      className="w-full bg-[#1F242A] border border-neutral-700 focus:border-[#FF6600] rounded px-3 py-1.5 text-xs font-mono text-[#F8F9FA] outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1">
                  <span className="text-[10px] text-neutral-500 font-sans">
                    Requires a token with <code className="text-neutral-400">repo</code> (or <code className="text-neutral-400">contents:write</code>) permission. Stored only in your browser.
                  </span>

                  <button
                    type="button"
                    onClick={handlePushToGithub}
                    disabled={ghPushing}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FF6600] hover:bg-[#ff7a1a] text-[#12161A] font-display font-bold uppercase italic text-xs rounded transition-colors disabled:opacity-50"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    {ghPushing ? 'Publishing to GitHub...' : 'Commit Live to GitHub'}
                  </button>
                </div>

                {ghStatus && (
                  <div className={`p-2.5 rounded font-mono text-xs ${
                    ghStatus.success 
                      ? 'bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E]' 
                      : 'bg-red-500/15 border border-red-500/40 text-red-400'
                  }`}>
                    {ghStatus.message}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-800">
          <button
            type="button"
            onClick={handleClear}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 rounded font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5 text-neutral-400" />
            Clear Dates &amp; Open Track
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 bg-[#1F242A] hover:bg-neutral-800 text-neutral-300 border border-neutral-700 rounded font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Exit
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#FF6600] hover:bg-[#ff7a1a] text-[#12161A] font-display font-black uppercase italic tracking-wider rounded transition-colors shadow-md"
            >
              <Save className="w-4 h-4" />
              Save &amp; Publish Banner
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
