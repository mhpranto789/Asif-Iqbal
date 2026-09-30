import React from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { speakingThemes, educationAndService } from '../data/siteContent';
import { Mic, Users, GraduationCap, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SpeakingPageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

export const SpeakingPage: React.FC<SpeakingPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  return (
    <div className="space-y-16 lg:space-y-24 py-12 pb-24">
      {/* Header */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
            {language === 'en' ? 'Keynotes & Education' : 'বক্তৃতা ও অ্যাকাডেমিক সম্পৃক্ততা'}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#101B25] tracking-tight">
            {language === 'en' ? 'Speaking Themes & Dialogue' : 'মূল বক্তব্য ও ভাবনার বিনিময়'}
          </h1>
          <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
            {language === 'en'
              ? 'Addressing executive leadership summits, university business cohorts, and national youth forums on the intersection of strategic rigor, creative storytelling, and personal resilience.'
              : 'কৌশলগত দূরদর্শিতা, সৃজনশীল নেতৃত্ব এবং মানসিক শক্তির বিকাশ নিয়ে করপোরেট শীর্ষ সম্মেলন ও বিশ্ববিদ্যালয়ের শিক্ষার্থীদের সাথে নিয়মিত মতবিনিময়।'}
          </p>
        </div>
      </section>

      {/* PART 1: CORE SPEAKING THEMES */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Keynotes</span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
              {language === 'en' ? 'Proposed Keynote Topics' : 'বক্তৃতার মূল বিষয়সমূহ'}
            </h2>
          </div>
          <span className="text-xs text-[#596774]">
            {language === 'en' ? 'Bespoke Curations' : 'অনুরোধ অনুযায়ী নির্বাচিত'}
          </span>
        </div>

        <div className="space-y-8">
          {speakingThemes.map((theme, idx) => (
            <div
              key={theme.id}
              className="p-8 bg-white border border-[#D9E1E5] hover:border-[#155E63] transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-2">
                <div className="text-xs font-mono text-[#155E63] font-semibold">
                  Theme 0{idx + 1}
                </div>
                <h3 className="font-display text-2xl text-[#101B25]">
                  {language === 'en' ? theme.titleEn : theme.titleBn}
                </h3>
                <div className="text-xs text-[#596774] pt-1">
                  <span className="font-semibold text-[#101B25]">
                    {language === 'en' ? 'Ideal Audiences' : 'উপযুক্ত শ্রোতা'}:
                  </span>{' '}
                  {language === 'en' ? theme.audienceEn : theme.audienceBn}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm text-[#596774] leading-relaxed">
                  {language === 'en' ? theme.summaryEn : theme.summaryBn}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#D9E1E5]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#101B25]">
                    {language === 'en' ? 'Key Audience Takeaways' : 'মূল শিক্ষণীয় বিষয়'}
                  </span>
                  <ul className="space-y-1 text-xs text-[#596774]">
                    {(language === 'en' ? theme.takeawaysEn : theme.takeawaysBn).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#155E63] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <button
                  onClick={() => onNavigate('contact', 'speaking')}
                  className="px-5 py-2.5 bg-[#101B25] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#155E63] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'en' ? 'Invite Asif' : 'বক্তা হিসেবে আমন্ত্রণ'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PART 2: ACADEMIC TEACHING & MENTORSHIP PLATFORMS */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-8">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Education</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'Academic Teaching & Institutional Engagement' : 'শ্রেণিকক্ষ ও মেন্টরশিপের বিস্তার'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'Classroom instruction, national skill initiatives, and executive development.'
              : 'ঢাকা বিশ্ববিদ্যালয় ও বিভিন্ন শীর্ষ প্ল্যাটফর্মে তরুণদের দক্ষতা উন্নয়ন।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-[#D9E1E5] space-y-4">
            <div className="w-10 h-10 bg-[#F4F6F7] border border-[#D9E1E5] flex items-center justify-center text-[#155E63]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl text-[#101B25]">
              {language === 'en' ? 'IBA, University of Dhaka' : 'আইবিএ, ঢাকা বিশ্ববিদ্যালয়'}
            </h3>
            <p className="text-sm text-[#596774] leading-relaxed">
              {language === 'en' ? educationAndService.academicEn : educationAndService.academicBn}
            </p>
          </div>

          <div className="p-8 bg-white border border-[#D9E1E5] space-y-4">
            <div className="w-10 h-10 bg-[#F4F6F7] border border-[#D9E1E5] flex items-center justify-center text-[#155E63]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl text-[#101B25]">
              {language === 'en' ? 'Professional Platforms & Institutes' : 'জাতীয় দক্ষতা ও মেন্টরিং প্ল্যাটফর্ম'}
            </h3>
            <ul className="space-y-2 text-xs text-[#596774]">
              {(language === 'en' ? educationAndService.institutesEn : educationAndService.institutesBn).map((inst, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#155E63] font-bold">·</span>
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PART 3: HUMANITARIAN VALUES */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="p-8 sm:p-12 bg-[#101B25] text-white space-y-6">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-6 h-6 text-[#155E63]" />
            <span className="text-xs font-mono uppercase text-[#155E63] font-semibold tracking-wider">
              {language === 'en' ? 'Humanitarian Foundation' : 'সমাজসেবা ও নৈতিক ভিত্তি'}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-white">
            {language === 'en' ? 'Privilege Demands Direct Responsibility' : 'সামাজিক সুযোগ মানেই প্রত্যক্ষ দায়বদ্ধতা'}
          </h3>

          <p className="text-base sm:text-lg text-[#D9E1E5]/90 leading-relaxed max-w-3xl">
            {language === 'en' ? educationAndService.humanitarianEn : educationAndService.humanitarianBn}
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#D9E1E5]/70">
            <div>
              {language === 'en' ? 'Available for non-profit and educational keynote invitations.' : 'অলাভজনক ও শিক্ষামূলক আয়োজনের জন্য উন্মুক্ত।'}
            </div>
            <button
              onClick={() => onNavigate('contact', 'speaking')}
              className="px-5 py-2.5 bg-white text-[#101B25] font-semibold uppercase tracking-wider hover:bg-[#D9E1E5] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Inquire for Speaking' : 'যোগাযোগ করুন'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
