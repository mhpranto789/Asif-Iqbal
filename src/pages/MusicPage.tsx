import React, { useState } from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { musicItems, culturalAppointments } from '../data/siteContent';
import { assetConfig } from '../data/assetConfig';
import { Music, Play, ArrowUpRight, Award, Disc3, Mic2 } from 'lucide-react';

interface MusicPageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

export const MusicPage: React.FC<MusicPageProps> = ({ onNavigate, language }) => {
  const [activeEmbedSong, setActiveEmbedSong] = useState<string | null>(null);
  const t = translations[language];

  return (
    <div className="space-y-16 lg:space-y-24 py-12 pb-24">
      {/* Header */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
            {language === 'en' ? 'Lyrical Heritage' : 'গীতিকবিতা ও সুরের সাধনা'}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#101B25] tracking-tight">
            {language === 'en' ? 'Songwriting & Cultural Archive' : 'চার দশকের গীতিকবিতা ও সংস্কৃতি'}
          </h1>
          <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
            {language === 'en'
              ? 'Over 42 years of dedication to the craft of Bengali lyricism. From the seminal 1988 rock ballad "Anonna" to contemporary multi-generational anthems, Asif Iqbal’s poetry explores human vulnerability, love, and resilient hope.'
              : '৪২ বছরেরও বেশি সময় ধরে বাংলা গীতিকবিতার নিভৃত সাধনা। ১৯৮৮ সালের ঐতিহাসিক ব্যান্ড ক্লাসিক ‘অনন্যা’ থেকে সাম্প্রতিক প্রজন্মের হৃদয়স্পর্শী আধুনিক গান—আসিফ ইকবালের গীতিভাষায় ফুটে উঠেছে প্রেম, বিরহ ও আশাবাদের চিরন্তন আকুতি।'}
          </p>
          <div className="p-4 bg-white border border-[#D9E1E5] text-xs text-[#596774] flex items-center gap-3">
            <Award className="w-5 h-5 text-[#155E63] shrink-0" />
            <div>
              <span className="font-semibold text-[#101B25]">
                {language === 'en' ? 'Award-Winning Lyricist' : 'স্বীকৃত গীতিকবি'}:
              </span>{' '}
              {language === 'en'
                ? 'Honoured across his career with major industry lyricist recognitions. Asif is strictly credited as lyricist (never singer, composer, or producer).'
                : 'কর্মজীবনে বহু মর্যাদাপূর্ণ পুরস্কারে ভূষিত। তিনি কেবল গানের গীতিকার হিসেবেই কাজ করেছেন (কণ্ঠশিল্পী বা সুরকার হিসেবে নয়)।'}
            </div>
          </div>
        </div>
      </section>

      {/* PART 1: CURATED CATALOGUE */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Catalogue</span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
              {language === 'en' ? 'Selected Canonical Works' : 'নির্বাচিত কালজয়ী গানসমূহ'}
            </h2>
          </div>
          <span className="text-xs text-[#596774]">
            {language === 'en' ? 'Verified Credits' : 'যাচাইকৃত তথ্য'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicItems.map((song) => (
            <div
              key={song.id}
              className="p-8 bg-white border border-[#D9E1E5] flex flex-col justify-between space-y-6 hover:border-[#155E63] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#596774] border-b border-[#D9E1E5] pb-3">
                  <span className="font-mono text-[#155E63] font-semibold">
                    {language === 'en' ? song.roleEn : song.roleBn}: Asif Iqbal
                  </span>
                  <span>{song.yearText}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-3xl text-[#101B25]">
                    {language === 'en' ? song.titleEn : song.titleBn}
                  </h3>
                  <p className="text-xs text-[#596774] italic">
                    {song.artistCredit}
                  </p>
                </div>

                <p className="text-sm text-[#596774] leading-relaxed">
                  {language === 'en' ? song.contextEn : song.contextBn}
                </p>

                {/* Click-to-load embed preview player (No autoplay) */}
                {activeEmbedSong === song.id ? (
                  <div className="p-4 bg-[#101B25] text-white text-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#155E63]">Audio / Video Player</span>
                      <button
                        onClick={() => setActiveEmbedSong(null)}
                        className="text-white/60 hover:text-white"
                      >
                        Close
                      </button>
                    </div>
                    <p className="text-[#D9E1E5]/80">
                      {language === 'en'
                        ? 'Official recording destination ready. Click below to stream on verified platforms.'
                        : 'অফিসিয়াল রেকর্ডিং প্লেলিস্ট সংযুক্ত। শুনতে নিচের লিংকে ক্লিক করুন।'}
                    </p>
                    {song.externalLink && (
                      <a
                        href={song.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#155E63] text-white rounded hover:bg-[#155E63]/80"
                      >
                        <span>Listen on YouTube / GaanChill</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ) : null}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#D9E1E5] flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveEmbedSong(song.id)}
                  className="px-4 py-2 bg-[#101B25] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#155E63] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'en' ? 'Listen / Details' : 'শুনুন / বিবরণ'}</span>
                </button>

                {song.externalLink && (
                  <a
                    href={song.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#155E63] hover:text-[#101B25] font-semibold"
                  >
                    <span>GaanChill Music</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PART 2: CULTURAL APPOINTMENTS & ADVOCACY */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Leadership</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'Music Industry Governance & Platforms' : 'সংগীত শিল্পের প্রাতিষ্ঠানিক নেতৃত্ব'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'Institutional advocacy for songwriters’ rights, intellectual property protection, and cultural discovery.'
              : 'গীতিকারদের মেধা ও রয়্যালটি সুরক্ষা, প্রতিভা অন্বেষণ এবং সংগীতের প্রাতিষ্ঠানিক উন্নয়নে ভূমিকা।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {culturalAppointments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#D9E1E5] space-y-3"
            >
              <div className="text-xs font-mono text-[#155E63]">Role 0{idx + 1}</div>
              <h3 className="font-display text-xl text-[#101B25]">
                {language === 'en' ? item.titleEn : item.titleBn}
              </h3>
              <div className="text-xs font-semibold text-[#596774]">
                {language === 'en' ? item.roleEn : item.roleBn}
              </div>
              <p className="text-xs text-[#596774] leading-relaxed">
                {language === 'en' ? item.descEn : item.descBn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PART 3: GAANCHILL PLATFORM INVITATION */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="p-8 sm:p-12 bg-[#101B25] text-white flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#155E63] uppercase">Collaboration</span>
            <h3 className="font-display text-3xl text-white">
              {language === 'en' ? 'Collaborate on Original Music' : 'নতুন সংগীত ও সৃজনশীল মেলবন্ধন'}
            </h3>
            <p className="text-sm text-[#D9E1E5]/80 leading-relaxed">
              {language === 'en'
                ? 'For composers, vocalists, filmmakers, and cultural platforms seeking original lyric poetry or prospective GaanChill Music productions.'
                : 'চলচ্চিত্র, সুরকার ও সংগীতশিল্পীদের জন্য গান রচনা বা গানচিল মিউজিকের মাধ্যমে কাজ প্রকাশের প্রস্তাব পাঠাতে যোগাযোগ করুন।'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact', 'creative')}
            className="px-6 py-3.5 bg-white text-[#101B25] text-xs font-semibold uppercase tracking-wider hover:bg-[#D9E1E5] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            {language === 'en' ? 'Inquire for Music Project' : 'সংগীত সংক্রান্ত যোগাযোগ'}
          </button>
        </div>
      </section>
    </div>
  );
};
