import React from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { fourVentures, careerMilestones, musicItems, publishedBooks, educationAndService } from '../data/siteContent';
import { PortraitSlot } from '../components/PortraitSlot';
import { assetConfig } from '../data/assetConfig';
import { ArrowRight, ArrowUpRight, BookOpen, Music, Briefcase, Mic, Sparkles, HeartHandshake } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* SECTION A: HERO (Asymmetric Composition) */}
      <section className="bg-[#101B25] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#101B25]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="text-xs font-semibold tracking-widest uppercase text-[#D9E1E5]/70 flex items-center gap-2">
                <span>{t.brand.eyebrow}</span>
              </div>

              {/* H1 & Dual Typography */}
              <div className="space-y-2">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white text-balance">
                  {language === 'en' ? t.brand.name : t.brand.bengaliName}
                </h1>
                {language === 'en' && (
                  <div className="text-xl sm:text-2xl text-[#D9E1E5]/70 font-bengali-heading">
                    {t.brand.bengaliName}
                  </div>
                )}
                {language === 'bn' && (
                  <div className="text-xl sm:text-2xl text-[#D9E1E5]/70 font-display">
                    {t.brand.name}
                  </div>
                )}
              </div>

              {/* Positioning Statement */}
              <div className="text-lg sm:text-xl font-medium text-[#155E63] text-balance">
                {t.brand.positioning}
              </div>

              {/* Body Summary */}
              <p className="text-base sm:text-lg text-[#D9E1E5]/90 leading-relaxed max-w-xl text-balance">
                "{t.brand.heroSummary}"
              </p>

              {/* Secondary Brand Line */}
              <div className="pt-2 text-sm text-[#D9E1E5]/70 italic border-l-2 border-[#155E63] pl-4">
                "{t.brand.brandLine}"
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('work')}
                  className="px-6 py-3.5 bg-white text-[#101B25] text-xs font-semibold uppercase tracking-wider hover:bg-[#D9E1E5] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.brand.ctaWork}</span>
                  <ArrowRight className="w-4 h-4 text-[#155E63]" />
                </button>
                <button
                  onClick={() => onNavigate('story')}
                  className="px-6 py-3.5 border border-[#D9E1E5]/40 text-white text-xs font-semibold uppercase tracking-wider hover:border-white transition-colors cursor-pointer"
                >
                  <span>{t.brand.ctaStory}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Authentic Portrait / Typography-Led Slot (5 cols) */}
            <div className="lg:col-span-5">
              <PortraitSlot
                photoUrl={assetConfig.heroPortraitUrl}
                altText={language === 'en' ? 'Asif Iqbal – The Polymath Builder' : 'আসিফ ইকবাল'}
                className="w-full min-h-[460px] sm:min-h-[520px] shadow-2xl"
                language={language}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: THE CONNECTING IDEA & FOUR DISCIPLINARY ROUTES */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Core Philosophy' : 'মূল দর্শন'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B25] tracking-tight">
              {t.home.connectingIdeaHeading}
            </h2>
            <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
              {t.home.connectingIdeaParagraph}
            </p>
          </div>

          {/* 4 Interactive Pathways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onNavigate('work')}
              className="p-6 bg-white border border-[#D9E1E5] text-left hover:border-[#155E63] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between pb-6">
                <Briefcase className="w-5 h-5 text-[#155E63]" />
                <ArrowRight className="w-4 h-4 text-[#596774] group-hover:text-[#101B25] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#596774]">01. Enterprise</div>
              <div className="font-display text-xl text-[#101B25] pt-1">
                {language === 'en' ? 'Business Transformation' : 'করপোরেট রূপান্তর'}
              </div>
              <p className="text-xs text-[#596774] pt-2 leading-relaxed">
                {language === 'en'
                  ? '30+ years turning enterprise strategy into ground-level operational success.'
                  : 'তিন দশকের অভিজ্ঞতা ও মাঠপর্যায়ের নিখুঁত বাস্তবায়ন।'}
              </p>
            </button>

            <button
              onClick={() => onNavigate('music')}
              className="p-6 bg-white border border-[#D9E1E5] text-left hover:border-[#155E63] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between pb-6">
                <Music className="w-5 h-5 text-[#155E63]" />
                <ArrowRight className="w-4 h-4 text-[#596774] group-hover:text-[#101B25] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#596774]">02. Culture</div>
              <div className="font-display text-xl text-[#101B25] pt-1">
                {language === 'en' ? 'Songwriting & Music' : 'গীতিরচনা ও সংস্কৃতি'}
              </div>
              <p className="text-xs text-[#596774] pt-2 leading-relaxed">
                {language === 'en'
                  ? '42+ years of lyric writing spanning rock classics and global popular anthems.'
                  : 'চার দশকের বেশি সময় ধরে বাংলা আধুনিক গানের রূপরেখা তৈরি।'}
              </p>
            </button>

            <button
              onClick={() => onNavigate('ideas')}
              className="p-6 bg-white border border-[#D9E1E5] text-left hover:border-[#155E63] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between pb-6">
                <BookOpen className="w-5 h-5 text-[#155E63]" />
                <ArrowRight className="w-4 h-4 text-[#596774] group-hover:text-[#101B25] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#596774]">03. Mindset</div>
              <div className="font-display text-xl text-[#101B25] pt-1">
                {language === 'en' ? 'Books & Practical Ideas' : 'বই ও চিন্তন রূপরেখা'}
              </div>
              <p className="text-xs text-[#596774] pt-2 leading-relaxed">
                {language === 'en'
                  ? 'Published frameworks on mental skills, decision-making, and disciplined action.'
                  : 'মানসিক দক্ষতার উন্নয়ন ও বাঙালির লোকজ প্রজ্ঞায় সিদ্ধান্ত গ্রহণ।'}
              </p>
            </button>

            <button
              onClick={() => onNavigate('speaking')}
              className="p-6 bg-white border border-[#D9E1E5] text-left hover:border-[#155E63] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between pb-6">
                <HeartHandshake className="w-5 h-5 text-[#155E63]" />
                <ArrowRight className="w-4 h-4 text-[#596774] group-hover:text-[#101B25] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#596774]">04. Purpose</div>
              <div className="font-display text-xl text-[#101B25] pt-1">
                {language === 'en' ? 'Education & Service' : 'শিক্ষা ও সমাজসেবা'}
              </div>
              <p className="text-xs text-[#596774] pt-2 leading-relaxed">
                {language === 'en'
                  ? 'IBA teaching, artisan livelihoods through ASIX, and humanitarian crisis relief.'
                  : 'আইবিএ শিক্ষকতা, কারুশিল্পী উন্নয়ন ও আজীবন মানবকল্যাণ।'}
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION C: SELECTED MILESTONES (Quiet Editorial Evidence Strip) */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="p-8 sm:p-12 bg-white border border-[#D9E1E5] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Substantive Evidence' : 'কাজের নির্মোহ চালচিত্র'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B25]">
              {t.home.milestonesHeading}
            </h2>
            <p className="text-sm text-[#596774]">
              {t.home.milestonesSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#D9E1E5]">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#155E63]">Historical Corporate Scale</div>
              <div className="font-display text-2xl text-[#101B25]">
                {language === 'en' ? 'US$88M to US$388M' : '৮৮M থেকে ৩৮৮M মার্কিন ডলার'}
              </div>
              <p className="text-xs text-[#596774] leading-relaxed">
                {language === 'en'
                  ? 'Meghna Group revenue expansion credited during corporate turnaround leadership.'
                  : 'মেঘনা গ্রুপের বাণিজ্যিক নেতৃত্ব প্রদানকালে অর্জিত রাজস্ব প্রবৃদ্ধি।'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#155E63]">Retail Expansion</div>
              <div className="font-display text-2xl text-[#101B25]">
                {language === 'en' ? '0 to 59 Stores' : '০ থেকে ৫৯টি সুপারস্টোর'}
              </div>
              <p className="text-xs text-[#596774] leading-relaxed">
                {language === 'en'
                  ? 'Helped build Shwapno retail operations from scratch in under two years.'
                  : 'দুই বছরেরও কম সময়ে শূন্য থেকে ‘স্বপ্ন’ রিটেল নেটওয়ার্ক গঠন।'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#155E63]">Artisan Impact</div>
              <div className="font-display text-2xl text-[#101B25]">
                {language === 'en' ? '900+ Women Artisans' : '৯০০+ নারী কারুশিল্পী'}
              </div>
              <p className="text-xs text-[#596774] leading-relaxed">
                {language === 'en'
                  ? 'Co-founded ASIX to export authentic Bangladeshi craft to 20+ global markets.'
                  : 'এসিক্সের মাধ্যমে বিশ্বের ২০টিরও বেশি দেশে ঐতিহ্যবাহী পণ্যের বাজার সৃষ্টি।'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#155E63]">Lyrical Heritage</div>
              <div className="font-display text-2xl text-[#101B25]">
                {language === 'en' ? '42+ Years of Songs' : '৪২+ বছরের গীতিকবিতা'}
              </div>
              <p className="text-xs text-[#596774] leading-relaxed">
                {language === 'en'
                  ? 'From 1988’s "Anonna" with James to multi-generational cultural anthems.'
                  : '১৯৮৮ সালের জেমসের ‘অনন্যা’ থেকে শুরু করে আধুনিক বাংলা গানের স্বর্ণযুগ।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: FOUR VENTURES (Editorial Rows) */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E1E5] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Active Enterprise' : 'প্রতিষ্ঠিত উদ্যোগসমূহ'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B25]">
              {t.home.venturesHeading}
            </h2>
            <p className="text-sm text-[#596774]">
              {t.home.venturesSubheading}
            </p>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="text-xs font-semibold uppercase tracking-wider text-[#155E63] hover:text-[#101B25] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>{language === 'en' ? 'View all ventures' : 'সকল উদ্যোগ দেখুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {fourVentures.map((venture) => (
            <div
              key={venture.id}
              className="p-8 bg-white border border-[#D9E1E5] hover:border-[#155E63]/60 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-mono text-[#155E63]">
                  {language === 'en' ? venture.relationshipEn : venture.relationshipBn}
                </div>
                <h3 className="font-display text-2xl text-[#101B25]">
                  {language === 'en' ? venture.name : venture.nameBn}
                </h3>
                <p className="text-xs text-[#596774] font-medium">
                  {language === 'en' ? venture.taglineEn : venture.taglineBn}
                </p>
              </div>

              <div className="lg:col-span-5 text-sm text-[#596774] leading-relaxed">
                {language === 'en' ? venture.descriptionEn : venture.descriptionBn}
              </div>

              <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-2 justify-end">
                <button
                  onClick={() => onNavigate('work')}
                  className="px-4 py-2 border border-[#D9E1E5] text-xs font-semibold text-[#101B25] hover:bg-[#F4F6F7] transition-colors text-center cursor-pointer"
                >
                  {language === 'en' ? 'Details' : 'বিবরণ'}
                </button>
                {venture.officialUrl && (
                  <a
                    href={venture.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#101B25] text-white text-xs font-semibold hover:bg-[#155E63] transition-colors inline-flex items-center justify-center gap-1 text-center"
                  >
                    <span>Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: THE PERSON BEHIND THE WORK (Story Preview) */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#101B25] text-white grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Biographical Chapter' : 'জীবনের গল্প'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight">
              {t.home.storyPreviewHeading}
            </h2>
            <p className="text-base sm:text-lg text-[#D9E1E5]/90 leading-relaxed font-body">
              {t.home.storyPreviewExcerpt}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('story')}
                className="px-6 py-3 bg-[#155E63] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#155E63]/80 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{t.home.storyPreviewLink}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 bg-white/5 border border-white/10 space-y-4 text-xs text-[#D9E1E5]/80">
            <div className="font-display italic text-lg text-white">
              "{language === 'en'
                ? 'True effort is the sovereign currency under our control. The tree is known by its fruits.'
                : 'চেষ্টাই মানুষের একমাত্র সার্বভৌম শক্তি। ফলেই বৃক্ষের আসল পরিচয়।'}"
            </div>
            <p className="leading-relaxed">
              {language === 'en'
                ? 'From Red Crescent volunteering in his youth to the classrooms of Dhaka University, learning through action remains his compass.'
                : 'কৈশোরের সমাজসেবা থেকে বিশ্ববিদ্যালয়ের শ্রেণিকক্ষ—কাজের মধ্য দিয়ে শেখাই তাঁর জীবনের ব্রত।'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION F: SELECTED MUSIC */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E1E5] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Lyricist Archive' : 'সংগীত ও সাহিত্য'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B25]">
              {t.home.musicPreviewHeading}
            </h2>
            <p className="text-sm text-[#596774]">
              {t.home.musicPreviewSubheading}
            </p>
          </div>
          <button
            onClick={() => onNavigate('music')}
            className="text-xs font-semibold uppercase tracking-wider text-[#155E63] hover:text-[#101B25] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>{language === 'en' ? 'Explore music catalogue' : 'সব গান দেখুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicItems.map((song) => (
            <div
              key={song.id}
              className="p-8 bg-white border border-[#D9E1E5] space-y-4 hover:border-[#155E63]/60 transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-[#596774]">
                <span className="font-mono text-[#155E63]">
                  {language === 'en' ? song.roleEn : song.roleBn}: Asif Iqbal
                </span>
                <span>{song.yearText}</span>
              </div>
              <h3 className="font-display text-2xl text-[#101B25]">
                {language === 'en' ? song.titleEn : song.titleBn}
              </h3>
              <p className="text-xs text-[#596774] italic">
                {song.artistCredit}
              </p>
              <p className="text-sm text-[#596774] leading-relaxed">
                {language === 'en' ? song.contextEn : song.contextBn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION G: BOOKS & IDEAS PREVIEW */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E1E5] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Intellectual Architecture' : 'বই ও বুদ্ধিবৃত্তিক কাজ'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B25]">
              {t.home.ideasPreviewHeading}
            </h2>
            <p className="text-sm text-[#596774]">
              {t.home.ideasPreviewSubheading}
            </p>
          </div>
          <button
            onClick={() => onNavigate('ideas')}
            className="text-xs font-semibold uppercase tracking-wider text-[#155E63] hover:text-[#101B25] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>{language === 'en' ? 'Open interactive framework' : 'ভাবনা ও মডেল দেখুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publishedBooks.map((book) => (
            <div
              key={book.id}
              className={`p-6 border flex flex-col justify-between space-y-4 ${
                book.type === 'manuscript'
                  ? 'bg-[#101B25] text-white border-[#101B25]'
                  : 'bg-white text-[#101B25] border-[#D9E1E5]'
              }`}
            >
              <div className="space-y-2">
                <span className={`text-[11px] font-mono uppercase tracking-wider ${
                  book.type === 'manuscript' ? 'text-[#155E63]' : 'text-[#155E63]'
                }`}>
                  {language === 'en' ? book.statusEn : book.statusBn}
                </span>
                <h3 className="font-display text-xl sm:text-2xl pt-1">
                  {language === 'en' ? book.titleEn : book.titleBn}
                </h3>
                <p className={`text-xs ${book.type === 'manuscript' ? 'text-[#D9E1E5]/70' : 'text-[#596774]'}`}>
                  {language === 'en' ? book.subtitleEn : book.subtitleBn}
                </p>
              </div>

              <p className={`text-xs leading-relaxed ${book.type === 'manuscript' ? 'text-[#D9E1E5]/90' : 'text-[#596774]'}`}>
                {language === 'en' ? book.themeEn : book.themeBn}
              </p>

              <button
                onClick={() => onNavigate('ideas')}
                className={`text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer ${
                  book.type === 'manuscript' ? 'text-[#155E63] hover:text-white' : 'text-[#155E63] hover:text-[#101B25]'
                }`}
              >
                <span>{language === 'en' ? 'Read framework' : 'মডেলটি পড়ুন'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION H: SPEAKING & SERVICE PREVIEW */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="p-8 sm:p-12 bg-white border border-[#D9E1E5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Dialogue & Platforms' : 'বক্তৃতা ও মানবকল্যাণ'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#101B25]">
              {t.home.speakingPreviewHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#596774] leading-relaxed">
              {language === 'en' ? educationAndService.academicEn : educationAndService.academicBn}
            </p>
            <p className="text-xs text-[#596774] leading-relaxed">
              {language === 'en' ? educationAndService.humanitarianEn : educationAndService.humanitarianBn}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={() => onNavigate('speaking')}
              className="px-6 py-3 bg-[#101B25] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#155E63] transition-colors text-center cursor-pointer"
            >
              {language === 'en' ? 'Explore Keynote Themes' : 'বক্তৃতার বিষয়সমূহ'}
            </button>
            <button
              onClick={() => onNavigate('contact', 'speaking')}
              className="px-6 py-3 border border-[#D9E1E5] text-[#101B25] text-xs font-semibold uppercase tracking-wider hover:bg-[#F4F6F7] transition-colors text-center cursor-pointer"
            >
              {language === 'en' ? 'Invite Asif' : 'বক্তা হিসেবে আমন্ত্রণ'}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION I: CLOSING INVITATION (Dark Background with Preselected Routes) */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="bg-[#101B25] text-white p-8 sm:p-12 lg:p-16 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Direct Communication' : 'সরাসরি যোগাযোগ'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {t.home.closingHeading}
            </h2>
            <p className="text-base text-[#D9E1E5]/80 leading-relaxed">
              {t.home.closingSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => onNavigate('contact', 'business')}
              className="p-5 bg-white/5 border border-white/10 hover:border-white text-left transition-colors cursor-pointer group"
            >
              <div className="text-xs font-mono text-[#155E63]">Route 01</div>
              <div className="font-display text-lg text-white pt-1">
                {language === 'en' ? 'Business Transformation' : 'করপোরেট রূপান্তর'}
              </div>
              <div className="text-xs text-[#D9E1E5]/60 pt-2 flex items-center gap-1 group-hover:text-white">
                <span>{language === 'en' ? 'Consulting Inquiries' : 'পরামর্শ সেবা'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('contact', 'speaking')}
              className="p-5 bg-white/5 border border-white/10 hover:border-white text-left transition-colors cursor-pointer group"
            >
              <div className="text-xs font-mono text-[#155E63]">Route 02</div>
              <div className="font-display text-lg text-white pt-1">
                {language === 'en' ? 'Speaking & Keynotes' : 'সম্মেলন ও বক্তৃতা'}
              </div>
              <div className="text-xs text-[#D9E1E5]/60 pt-2 flex items-center gap-1 group-hover:text-white">
                <span>{language === 'en' ? 'University / Summits' : 'আমন্ত্রণ জানান'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('contact', 'creative')}
              className="p-5 bg-white/5 border border-white/10 hover:border-white text-left transition-colors cursor-pointer group"
            >
              <div className="text-xs font-mono text-[#155E63]">Route 03</div>
              <div className="font-display text-lg text-white pt-1">
                {language === 'en' ? 'Music Collaboration' : 'সংগীত ও সাহিত্য'}
              </div>
              <div className="text-xs text-[#D9E1E5]/60 pt-2 flex items-center gap-1 group-hover:text-white">
                <span>{language === 'en' ? 'GaanChill Platform' : 'সৃজনশীল মেলবন্ধন'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('contact', 'media')}
              className="p-5 bg-white/5 border border-white/10 hover:border-white text-left transition-colors cursor-pointer group"
            >
              <div className="text-xs font-mono text-[#155E63]">Route 04</div>
              <div className="font-display text-lg text-white pt-1">
                {language === 'en' ? 'Journalism & Media' : 'গণমাধ্যম ও তথ্য'}
              </div>
              <div className="text-xs text-[#D9E1E5]/60 pt-2 flex items-center gap-1 group-hover:text-white">
                <span>{language === 'en' ? 'Press & Bio Assets' : 'প্রেস যোগাযোগ'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
