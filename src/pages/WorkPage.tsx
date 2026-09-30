import React from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { fourVentures, careerMilestones } from '../data/siteContent';
import { ArrowUpRight, ArrowRight, Building, CheckCircle2, Globe, Layers } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  return (
    <div className="space-y-16 lg:space-y-24 py-12 pb-24">
      {/* Header */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
            {language === 'en' ? 'Enterprise & Leadership' : 'উদ্যোগ ও করপোরেট নেতৃত্ব'}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#101B25] tracking-tight">
            {language === 'en' ? 'Ventures & Corporate Transformation' : 'উদ্যোগসমূহ ও বাণিজ্যিক রূপান্তর'}
          </h1>
          <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
            {language === 'en'
              ? 'Delineating active entrepreneurial ventures founded and co-founded by Asif Iqbal from three decades of executive corporate turnaround leadership across twelve industry verticals.'
              : 'আসিফ ইকবালের প্রতিষ্ঠিত ও পরিচালিত চারটি প্রাতিষ্ঠানিক উদ্যোগ এবং তিন দশকের শীর্ষ করপোরেট নেতৃত্বের বাস্তব অভিজ্ঞতার চালচিত্র।'}
          </p>
        </div>
      </section>

      {/* PART 1: THE FOUR ACTIVE VENTURES */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-10">
        <div className="border-b border-[#D9E1E5] pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Section 01</span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
              {language === 'en' ? 'Active Entrepreneurial Ventures' : 'সক্রিয় প্রাতিষ্ঠানিক উদ্যোগসমূহ'}
            </h2>
          </div>
          <span className="text-xs text-[#596774] hidden sm:inline">
            {language === 'en' ? 'Four Distinct Platforms' : '৪টি স্বকীয় ক্ষেত্র'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fourVentures.map((venture) => (
            <div
              key={venture.id}
              className="p-8 bg-white border border-[#D9E1E5] flex flex-col justify-between space-y-6 hover:border-[#155E63] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#155E63] font-semibold">
                    {language === 'en' ? venture.relationshipEn : venture.relationshipBn}
                  </span>
                  {venture.officialUrl && (
                    <span className="text-[11px] text-[#596774] flex items-center gap-1">
                      <Globe className="w-3 h-3 text-[#155E63]" />
                      <span>Verified Web</span>
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#101B25]">
                    {language === 'en' ? venture.name : venture.nameBn}
                  </h3>
                  <p className="text-xs font-medium text-[#596774]">
                    {language === 'en' ? venture.taglineEn : venture.taglineBn}
                  </p>
                </div>

                <p className="text-sm text-[#596774] leading-relaxed">
                  {language === 'en' ? venture.descriptionEn : venture.descriptionBn}
                </p>

                <div className="p-4 bg-[#F4F6F7] border border-[#D9E1E5] space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#101B25]">
                    {language === 'en' ? 'Operating Philosophy' : 'পরিচালনা দর্শন'}
                  </div>
                  <p className="text-xs text-[#596774] leading-relaxed">
                    {language === 'en' ? venture.operatingModelEn : venture.operatingModelBn}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#596774]">
                    {language === 'en' ? 'Core Capabilities' : 'মূল কার্যক্রম'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#101B25]">
                    {(language === 'en' ? venture.keyHighlightsEn : venture.keyHighlightsBn).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#155E63] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D9E1E5] flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('contact', venture.enquiryType)}
                  className="px-4 py-2 bg-[#101B25] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#155E63] transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Inquire / Collaborate' : 'পরামর্শ / যোগাযোগ'}
                </button>

                {venture.officialUrl && (
                  <a
                    href={venture.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#155E63] hover:text-[#101B25] transition-colors"
                  >
                    <span>Visit Venture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PART 2: SELECTED CORPORATE LEADERSHIP MILESTONES */}
      <section className="max-w-[1280px] mx-auto px-6 space-y-10">
        <div className="border-b border-[#D9E1E5] pb-4">
          <span className="text-xs font-mono uppercase text-[#155E63] font-semibold">Section 02</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
            {language === 'en' ? 'Corporate Leadership Record' : 'করপোরেট নেতৃত্বের বাস্তব অভিজ্ঞতা'}
          </h2>
          <p className="text-xs text-[#596774] pt-1">
            {language === 'en'
              ? 'Documented context, supported executive contribution, and reported outcomes across selected organisations.'
              : 'প্রতিষ্ঠানের প্রেক্ষাপট, নেতৃত্বমূলক ভূমিকা এবং বাস্তব ফলাফল সংক্রান্ত ঐতিহাসিক তথ্য।'}
          </p>
        </div>

        <div className="space-y-6">
          {careerMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className="p-8 bg-white border border-[#D9E1E5] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9E1E5] pb-4">
                <div>
                  <h3 className="font-display text-2xl text-[#101B25]">
                    {language === 'en' ? milestone.organisation : milestone.organisationBn}
                  </h3>
                  <div className="text-xs text-[#155E63] font-medium pt-0.5">
                    {language === 'en' ? milestone.periodOrRoleEn : milestone.periodOrRoleBn}
                  </div>
                </div>

                {milestone.isHistoricalNote && (
                  <span className="text-[11px] font-mono text-[#596774] bg-[#F4F6F7] border border-[#D9E1E5] px-2.5 py-1">
                    {language === 'en' ? 'Historical Milestone' : 'ঐতিহাসিক মাইলফলক'}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#596774]">
                    {language === 'en' ? 'Market Context' : 'বাজার প্রেক্ষাপট'}
                  </span>
                  <p className="text-[#596774] text-xs leading-relaxed">
                    {language === 'en' ? milestone.contextEn : milestone.contextBn}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#101B25]">
                    {language === 'en' ? 'Supported Contribution' : 'নেতৃত্ব ও ভূমিকা'}
                  </span>
                  <p className="text-[#101B25] text-xs leading-relaxed">
                    {language === 'en' ? milestone.contributionEn : milestone.contributionBn}
                  </p>
                </div>

                <div className="space-y-1 p-3 bg-[#F4F6F7] border border-[#D9E1E5]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#155E63]">
                    {language === 'en' ? 'Reported Milestone Outcome' : 'অর্জিত ফলাফল'}
                  </span>
                  <p className="font-display text-base text-[#101B25] leading-snug">
                    {language === 'en' ? milestone.reportedOutcomeEn : milestone.reportedOutcomeBn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PART 3: REVIEWS & EDITORIAL STANDARDS NOTICE */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="p-6 bg-[#F4F6F7] border border-[#D9E1E5] text-xs text-[#596774] space-y-2">
          <div className="font-semibold text-[#101B25] uppercase tracking-wider">
            {language === 'en' ? 'Editorial Transparency Note' : 'সম্পাদকীয় স্বচ্ছতা বিজ্ঞপ্তি'}
          </div>
          <p className="leading-relaxed">
            {language === 'en'
              ? 'All corporate achievements and revenue milestones presented on this page are historical profile claims sourced from February 2026 documentation. Numerical figures represent supplied records and are not presented as live financial counters. Claims regarding specific corporate entities are distinguished from personal legal ownership.'
              : 'এই পৃষ্ঠায় উল্লেখিত সকল করপোরেট সাফল্য ও রাজস্ব প্রবৃদ্ধির পরিসংখ্যান ফেব্রুয়ারি ২০২৬-এর তথ্যের ভিত্তিতে পরিবেশিত। কোনো পরিসংখ্যানকে বর্তমান লাইভ মেট্রিক হিসেবে উপস্থাপন করা হয়নি। শীর্ষ নেতৃত্বমূলক ভূমিকার সাথে বাণিজ্যিক মালিকানার পার্থক্য সুস্পষ্টভাবে বজায় রাখা হয়েছে।'}
          </p>
        </div>
      </section>
    </div>
  );
};
