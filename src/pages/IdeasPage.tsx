import React from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { publishedBooks, strategicPillars, aimFrameworks } from '../data/siteContent';
import { InteractiveFramework } from '../components/InteractiveFramework';
import { BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface IdeasPageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

export const IdeasPage: React.FC<IdeasPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  const publishedWorks = publishedBooks.filter((b) => b.type === 'published');
  const manuscriptWorks = publishedBooks.filter((b) => b.type === 'manuscript');

  return (
    <div className="space-y-16 lg:space-y-24 py-12 pb-24">
      {/* Header */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
            {language === 'en' ? 'Intellectual Architecture' : 'বুদ্ধিবৃত্তিক চিন্তন ও দর্শন'}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#101B25] tracking-tight">
            {language === 'en' ? 'Books, Strategic Pillars & Models' : 'বই, কৌশলগত স্তম্ভ ও চিন্তার রূপরেখা'}
          </h1>
          <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
            {language === 'en'
              ? 'Published books on focus and decision-making, core transformation pillars, executive mentoring frameworks, and the contemplative manuscript model "সাফল্যের পথ নক্সা".'
              : 'মানসিক দক্ষতার উন্নয়ন ও সিদ্ধান্ত গ্রহণের ওপর প্রকাশিত গ্রন্থ, চার কৌশলগত স্তম্ভ এবং পাণ্ডুলিপিভিত্তিক চিন্তন রূপরেখা।'}
          </p>
        </div>
      </section>

      {/* PART 1: PUBLISHED BOOKS */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Section 01</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'Published Books' : 'প্রকাশিত গ্রন্থসমূহ'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'Works translating lived leadership experience and Bengali proverbs into cognitive frameworks.'
              : 'বাস্তব জীবনের অভিজ্ঞতা ও বাঙালির চিরায়ত প্রজ্ঞার সমন্বয়ে রচিত গ্রন্থসমূহ।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publishedWorks.map((book) => (
            <div
              key={book.id}
              className="p-8 bg-white border border-[#D9E1E5] flex flex-col justify-between space-y-6 hover:border-[#155E63] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#596774] border-b border-[#D9E1E5] pb-3">
                  <span className="font-mono text-[#155E63] font-semibold">
                    {language === 'en' ? book.statusEn : book.statusBn}
                  </span>
                  <span>Asif Iqbal</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-3xl text-[#101B25]">
                    {language === 'en' ? book.titleEn : book.titleBn}
                  </h3>
                  <p className="text-xs text-[#596774] font-medium">
                    {language === 'en' ? book.subtitleEn : book.subtitleBn}
                  </p>
                </div>

                <p className="text-sm text-[#596774] leading-relaxed">
                  {language === 'en' ? book.descriptionEn : book.descriptionBn}
                </p>

                <div className="p-4 bg-[#F4F6F7] border border-[#D9E1E5] space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#101B25]">
                    {language === 'en' ? 'Core Themes & Mental Models' : 'মূল প্রতিপাদ্য বিষয়'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#596774]">
                    {(language === 'en' ? book.keyTakeawaysEn : book.keyTakeawaysBn).map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#155E63] font-bold">·</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9E1E5] flex items-center justify-between text-xs text-[#596774]">
                <span>
                  {language === 'en' ? 'Physical editions in print' : 'মুদ্রিত সংস্করণ সহজলভ্য'}
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-[#155E63] hover:text-[#101B25] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{language === 'en' ? 'Inquire about copies' : 'বই সংক্রান্ত তথ্য'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PART 2: THE INTERACTIVE MANUSCRIPT FRAMEWORK (সাফল্যের পথ নক্সা) */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-6">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Section 02</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'Manuscript Framework: A Path from Intention to Action' : 'পাণ্ডুলিপি চিন্তন: সাফল্যের পথ নক্সা'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'An interactive reading model adapted from the manuscript introduction "বৃক্ষ তোমার নাম কী?".'
              : 'আসিফ ইকবালের অপ্রকাশিত পাণ্ডুলিপি ‘বৃক্ষ তোমার নাম কী?’ থেকে গৃহীত রূপরেখা।'}
          </p>
        </div>

        {/* Embedded Interactive Framework */}
        <InteractiveFramework language={language} />
      </section>

      {/* PART 3: THE FOUR STRATEGIC PILLARS */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Section 03</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'Four Pillars of Strategic Transformation' : 'কৌশলগত রূপান্তরের চার ভিত্তি'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'The governing pillars behind Achieve Consulting and executive advisory engagements.'
              : 'অ্যাচিভ কনসাল্টিং এবং নেতৃত্ব পরামর্শের গভর্নিং প্রিন্সিপাল।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicPillars.map((p) => (
            <div
              key={p.number}
              className="p-6 bg-white border border-[#D9E1E5] space-y-3"
            >
              <div className="text-xs font-mono text-[#155E63] font-bold">
                Pillar {p.number}
              </div>
              <h3 className="font-display text-xl text-[#101B25]">
                {language === 'en' ? p.titleEn : p.titleBn}
              </h3>
              <p className="text-xs text-[#596774] leading-relaxed">
                {language === 'en' ? p.descEn : p.descBn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PART 4: AIM (ACHIEVE IGNITE MENTORING) & SEVEN NAMED FRAMEWORKS */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Section 04</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'AIM Frameworks: Achieve Ignite Mentoring' : 'এইম (AIM) কাঠামোর রূপরেখা'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'Executive cognitive and operational models deployed across enterprise advisory.'
              : 'শীর্ষ নির্বাহী এবং প্রতিষ্ঠানের জন্য প্রস্তুতকৃত সাতটি বিশেষায়িত মডেল।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aimFrameworks.map((fw, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-[#D9E1E5] space-y-2 hover:border-[#155E63] transition-colors"
            >
              <div className="text-[11px] font-mono text-[#155E63] font-semibold">
                Model 0{idx + 1}
              </div>
              <h4 className="font-display text-lg text-[#101B25]">
                {fw.name}
              </h4>
              <p className="text-xs text-[#596774]">
                {language === 'en' ? fw.focusEn : fw.focusBn}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#F4F6F7] border border-[#D9E1E5] text-xs text-[#596774]">
          {language === 'en'
            ? 'Detailed mechanics and proprietary toolkits are deployed exclusively during bespoke Achieve Consulting engagements.'
            : 'এই ফ্রেমওয়ার্কসমূহের বাস্তব প্রয়োগ ও ইন্টারনাল টুলকিট অ্যাচিভ কনসাল্টিংয়ের পরামর্শ সেবায় ব্যবহৃত হয়।'}
        </div>
      </section>
    </div>
  );
};
