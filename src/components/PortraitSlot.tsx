import React, { useState } from 'react';
import { Language } from '../types';
import { Camera, Check } from 'lucide-react';

interface PortraitSlotProps {
  photoUrl?: string | null;
  altText: string;
  className?: string;
  language: Language;
  variant?: 'hero' | 'editorial' | 'compact';
}

export const PortraitSlot: React.FC<PortraitSlotProps> = ({
  photoUrl,
  altText,
  className = '',
  language,
  variant = 'hero',
}) => {
  const [customUrl, setCustomUrl] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [imgError, setImgError] = useState(false);

  const activeUrl = customUrl || photoUrl;

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setCustomUrl(inputVal.trim());
      setImgError(false);
      setShowInput(false);
    }
  };

  if (activeUrl && !imgError) {
    return (
      <div className={`relative overflow-hidden bg-[#101B25] border border-[#D9E1E5] ${className}`}>
        <img
          src={activeUrl}
          alt={altText}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B25]/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
          <span className="font-display tracking-wide">
            {language === 'en' ? 'Asif Iqbal' : 'আসিফ ইকবাল'}
          </span>
          <span className="text-[11px] text-white/60">Approved Portrait</span>
        </div>
      </div>
    );
  }

  // Intentional Typography-Led Composition with Abstract Shapes & The Cultural Bridge Motif
  return (
    <div
      className={`relative overflow-hidden bg-[#101B25] text-white border border-[#101B25]/40 flex flex-col justify-between p-8 md:p-10 select-none ${className}`}
      aria-label="Editorial visual composition for Asif Iqbal"
    >
      {/* Background Architectural & Cultural Bridge Geometry */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 400 500"
      >
        <path
          d="M 50 0 L 50 500 M 150 0 L 150 500 M 250 0 L 250 500 M 350 0 L 350 500"
          stroke="#D9E1E5"
          strokeWidth="0.75"
        />
        <path
          d="M 0 100 L 400 100 M 0 250 L 400 250 M 0 400 L 400 400"
          stroke="#D9E1E5"
          strokeWidth="0.75"
        />
        {/* The Cultural Bridge diagonal arc */}
        <path
          d="M 0 450 C 150 400, 250 150, 400 50"
          stroke="#155E63"
          strokeWidth="2"
        />
        <circle cx="200" cy="250" r="120" stroke="#155E63" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Top Header Information */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="text-[10px] tracking-widest uppercase text-[#D9E1E5]/70 font-semibold">
            {language === 'en' ? 'The Cultural Bridge' : 'সংস্কৃতি ও কর্মের মেলবন্ধন'}
          </div>
          <div className="text-xs text-[#155E63] font-medium pt-0.5">
            1988 — 2026 Archive
          </div>
        </div>

        {/* Monogram Seal */}
        <div className="w-12 h-12 rounded border border-[#155E63] flex flex-col items-center justify-center bg-[#101B25]/80 text-[#D9E1E5]">
          <span className="font-display font-bold text-base leading-none text-white">AI</span>
          <span className="text-[9px] text-[#155E63] leading-none mt-0.5">আ.ই</span>
        </div>
      </div>

      {/* Centerpiece: Expressive Typography */}
      <div className="relative z-10 py-12 text-center md:text-left space-y-4">
        <div className="space-y-1">
          <div className="text-xs tracking-wider uppercase text-[#D9E1E5]/60">
            {language === 'en' ? 'Portrait Archive Slot' : 'অনুমোদিত প্রতিকৃতি স্থান'}
          </div>
          <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
            {language === 'en' ? 'Asif Iqbal' : 'আসিফ ইকবাল'}
          </div>
        </div>

        <p className="font-display italic text-base sm:text-lg text-[#D9E1E5]/80 max-w-sm">
          "{language === 'en'
            ? 'Where strategy meets soul, and profit serves purpose.'
            : 'যেখানে কৌশলের সাথে আত্মার মেলবন্ধন, আর মুনাফা নিয়োজিত মহৎ উদ্দেশ্যে।'}"
        </p>

        <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-[#D9E1E5]/70">
          <span>Enterprise</span>
          <span aria-hidden="true">·</span>
          <span>Songwriting</span>
          <span aria-hidden="true">·</span>
          <span>Artisan Livelihood</span>
          <span aria-hidden="true">·</span>
          <span>Education</span>
        </div>
      </div>

      {/* Bottom Editorial Caption & Optional Live Asset Testing Utility */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#D9E1E5]/60 gap-3">
        <div className="text-[11px]">
          {language === 'en'
            ? 'Approved studio photography reserved for official asset release.'
            : 'অফিসিয়াল অনুমোদিত ছবি সংযুক্তির জন্য সংরক্ষিত স্থান।'}
        </div>

        {/* Quiet asset tester toggle for reviewers */}
        {!showInput ? (
          <button
            onClick={() => setShowInput(true)}
            className="text-[10px] text-[#D9E1E5]/50 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
            title="Preview an official image URL"
          >
            <Camera className="w-3 h-3 text-[#155E63]" />
            <span>Test Image URL</span>
          </button>
        ) : (
          <form onSubmit={handleApplyUrl} className="flex items-center gap-1 w-full sm:w-auto">
            <input
              type="url"
              placeholder="Paste portrait URL..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="bg-[#101B25] text-white border border-[#155E63] text-xs px-2 py-1 rounded w-full sm:w-44 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#155E63] text-white p-1 rounded hover:bg-[#155E63]/80 cursor-pointer"
              title="Apply"
            >
              <Check className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setShowInput(false)}
              className="text-xs text-white/50 px-1 hover:text-white"
            >
              ✕
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
