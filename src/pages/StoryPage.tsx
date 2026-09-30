import React from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { PortraitSlot } from '../components/PortraitSlot';
import { assetConfig } from '../data/assetConfig';
import { calculateReadingTime, toBengaliDigits } from '../utils/readingTime';
import { ArrowRight, Compass, Shield, Feather, Building2, Heart, Clock } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

interface StoryChapter {
  id: string;
  chapterNumber: string;
  chapterNumberBn: string;
  icon: typeof Shield;
  titleEn: string;
  titleBn: string;
  paragraphsEn: string[];
  paragraphsBn: string[];
}

const storyChapters: StoryChapter[] = [
  {
    id: 'chapter-01',
    chapterNumber: 'Chapter 01',
    chapterNumberBn: 'অধ্যায় ০১',
    icon: Shield,
    titleEn: 'Beginnings, Moral Roots & Early Service',
    titleBn: 'শুরুর দিনগুলি, পারিবারিক শেকড় ও সমাজসেবা',
    paragraphsEn: [
      'Asif Iqbal’s foundational worldview was formed in a family rooted in dignity, education, and moral duty. His father’s active service in the 1971 Liberation War of Bangladesh stood as an enduring moral anchor: the understanding that freedom and citizenship require direct, unhesitating sacrifice.',
      'From his early youth, he was drawn to voluntary humanitarian engagement with the Red Crescent. Rather than observing social realities from a distance, he experienced early on the realities of relief work and grassroots support—an intuition that later defined both his business leadership and his social enterprises.'
    ],
    paragraphsBn: [
      'আসিফ ইকবালের জীবনের মূল্যবোধের ভিত্তি রচিত হয়েছিল একটি ঐতিহ্যবাহী ও শিক্ষানুরাগী পরিবারে। ১৯৭১ সালে মহান মুক্তিযুদ্ধে তাঁর বাবার সক্রিয় অংশগ্রহণ পরিবারের নৈতিক বাতিঘর হিসেবে কাজ করেছে—যা তাঁকে শিখিয়েছে দেশের প্রতি দায়িত্ব এবং নিঃস্বার্থ আত্মত্যাগের মহিমা।',
      'কৈশোর থেকেই তিনি রেড ক্রিসেন্টের সমাজসেবামূলক কর্মকাণ্ডের সাথে যুক্ত ছিলেন। কেবল দূর থেকে পর্যবেক্ষণ নয়, বরং সংকটকালে সরাসরি মানুষের পাশে দাঁড়ানোর অভিজ্ঞতা তাঁর মনস্তত্ত্বে এক স্থায়ী ছাপ ফেলে যায়, যা পরবর্তী সময়ে তাঁর ব্যবসায়িক ও সামাজিক উদ্যোগগুলোকে গভীরভাবে প্রভাবিত করেছে।'
    ]
  },
  {
    id: 'chapter-02',
    chapterNumber: 'Chapter 02',
    chapterNumberBn: 'অধ্যায় ০২',
    icon: Feather,
    titleEn: 'Setbacks, Turning Points & The Discovery of Song',
    titleBn: 'বাস্তবতার অভিঘাত, আত্মোপলব্ধি ও গানের ভুবন',
    paragraphsEn: [
      'As reflected in his autobiographical manuscript introduction "বৃক্ষ তোমার নাম কী?", the path was neither smooth nor predetermined. When early conventional academic expectations met unexpected setbacks, he was forced to look inward, shedding youthful pride to confront reality with sober humility.',
      'It was during this period of deliberate soul-searching that songwriting emerged not as an escape, but as a discipline of absolute emotional honesty. In 1988, his collaboration with James on the rock ballad "Anonna" struck a generational chord across Bangladesh. Words became a bridge between human vulnerability and collective resilience.'
    ],
    paragraphsBn: [
      'তাঁর অপ্রকাশিত পাণ্ডুলিপি ‘বৃক্ষ তোমার নাম কী?’-তে তিনি অকপটে বর্ণনা করেছেন জীবনের প্রথম দিকের অনিশ্চয়তার কথা। পারিবারিক প্রচলিত প্রত্যাশার সাথে বাস্তবতার সংঘাত যখন তাঁকে এক অচেনা সংকটে ফেলে দেয়, তখন অহংকার ভুলে তিনি নিজেকে নতুনভাবে আবিষ্কার করতে বাধ্য হন।',
      'আত্মানুসন্ধানের সেই কঠিন দিনগুলোতেই গান লেখার সূত্রপাত—যা কোনো অলস বিলাসিতা ছিল না, বরং মনের ভাব প্রকাশের এক গভীর সত্য সাধনা। ১৯৮৮ সালে জেমসের সাথে রচিত ‘অনন্যা’ গানটি বাংলা আধুনিক রক সংগীতের এক মাইলফলক হয়ে ওঠে। শব্দ হয়ে ওঠে মানুষের অব্যক্ত বেদনার ভাষা।'
    ]
  },
  {
    id: 'chapter-03',
    chapterNumber: 'Chapter 03',
    chapterNumberBn: 'অধ্যায় ০৩',
    icon: Building2,
    titleEn: 'Three Decades of Enterprise Transformation',
    titleBn: 'তিন দশকের করপোরেট রূপান্তর ও সমান্তরাল সৃষ্টিশীলতা',
    paragraphsEn: [
      'While many viewed business and the arts as opposing forces, Asif treated them as two sides of the same coin: rigorous understanding of human psychology. Joining Unilever provided deep marketing discipline and an executive assignment in Pakistan, mastering consumer insight and channel distribution.',
      'Over the next thirty years across twelve industry sectors, he led major commercial transformations: steering Meghna Group through historic revenue expansion from US$88M to US$388M, building Shwapno from zero to 59 stores in under two years, and leading disruptive telecom subscriber growth at AKTEL.'
    ],
    paragraphsBn: [
      'অনেকে ব্যবসা ও শিল্পকে সম্পূর্ণ বিপরীতমুখী মনে করলেও আসিফ ইকবাল তাদের দেখেছেন একই মুদ্রার দুই পিঠ হিসেবে: মানুষের মনস্তত্ত্বকে গভীরভাবে উপলব্ধি করার বিজ্ঞান। ইউনিলিভারে কাজ করার অভিজ্ঞতা এবং পাকিস্তানে আন্তর্জাতিক দায়িত্ব তাঁর পেশাগত ভিত্তিকে আরও সুসংহত করে তোলে।',
      'পরবর্তী তিন দশকে ১২টি ভিন্ন শিল্প খাতে তিনি উল্লেখযোগ্য বাণিজ্যিক রূপান্তরের নেতৃত্ব দেন: মেঘনা গ্রুপের রাজস্ব ৮৮ মিলিয়ন থেকে ৩৮৮ মিলিয়ন ডলারে উন্নীত করার ঐতিহাসিক যাত্রা, শূন্য থেকে দুই বছরে ‘স্বপ্ন’ সুপারশপের ৫৯টি স্টোর গড়ে তোলা এবং একটেল-এ বৈপ্লবিক টেলিকম প্রবৃদ্ধি অর্জন।'
    ]
  },
  {
    id: 'chapter-04',
    chapterNumber: 'Chapter 04',
    chapterNumberBn: 'অধ্যায় ০৪',
    icon: Heart,
    titleEn: 'Building Ventures Where Profit Serves Purpose',
    titleBn: 'উদ্যোগে দায়বদ্ধতা ও মানবিক মূল্যবোধ',
    paragraphsEn: [
      'Recognising that personal corporate milestones eventually reach a plateau of meaning, he channelled his experience into entrepreneurial ventures built around enduring service: founding Achieve Consulting for strategic transformation, launching ACIS for human-grounded creative AI, establishing GaanChill Music to institutionalise artist rights, and co-founding ASIX to connect 900+ rural women artisans to 20+ export countries.',
      'Whether in the classrooms of IBA, Dhaka University, mentoring emerging marketers at Bangladesh Brand Forum, or providing oxygen supplies during the pandemic in Chattogram, his conviction remains steadfast: true leadership begins when our efforts build lasting value for others.'
    ],
    paragraphsBn: [
      'করপোরেট সাফল্যের ঊর্ধ্বে উঠে মানুষের স্থায়ী কল্যাণে কিছু করার তাগিদ থেকে তিনি প্রতিষ্ঠা করেন নতুন নতুন উদ্যোগ: কৌশলগত রূপান্তরের জন্য ‘অ্যাচিভ কনসাল্টিং’, প্রযুক্তি ও সৃজনশীলতার মেলবন্ধনে ‘ACIS’, বাংলা গান ও শিল্পীদের অধিকার সুরক্ষায় ‘গানচিল মিউজিক’, এবং ৯০০+ গ্রামীণ নারী কারুশিল্পীর বিশ্বায়নে ‘এসিক্স’।',
      'ঢাকা বিশ্ববিদ্যালয়ের আইবিএ-র শ্রেণিকক্ষে পাঠদান হোক কিংবা করোনা মহামারির সময় জরুরি চিকিৎসা সহায়তা প্রদান—আসিফ ইকবালের বিশ্বাস অবিচল: অন্যের জন্য কিছু করতে পারার মাঝেই নেতৃত্বের আসল সার্থকতা।'
    ]
  }
];

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  // Calculate cumulative story statistics based on active language
  const fullStoryText = storyChapters
    .map((ch) => (language === 'en' ? ch.paragraphsEn : ch.paragraphsBn).join(' '))
    .join(' ');
  const totalStats = calculateReadingTime(fullStoryText, language);

  return (
    <div className="space-y-16 lg:space-y-24 py-12 pb-24">
      {/* Page Header with Dynamic Overall Reading Time */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl space-y-4">
          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#596774]">
            <span className="font-semibold tracking-wider uppercase text-[#155E63]">
              {language === 'en' ? 'Biographical Narrative' : 'জীবন ও ভাবনার ইতিহাস'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 font-medium text-[#101B25]">
              <Clock className="w-3 h-3 text-[#155E63]" />
              <span>{totalStats.text}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {language === 'en'
                ? `4 Chapters (${totalStats.wordCountText})`
                : `৪টি অধ্যায় (${totalStats.wordCountText})`}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#101B25] tracking-tight">
            {language === 'en' ? 'The Journey of a Polymath Builder' : 'এক নির্মাতার জীবনগাথা'}
          </h1>
          <p className="font-display italic text-xl text-[#596774]">
            "{t.brand.brandLine}"
          </p>
          <p className="text-base sm:text-lg text-[#596774] leading-relaxed pt-2">
            {language === 'en'
              ? 'A life connecting corporate boardrooms, recording studios, university lecture halls, and rural handloom clusters. Grounded in Bengali cultural wisdom, Islamic ethical values, and the conviction that human worth is defined by what we build for others.'
              : 'করপোরেট বোর্ডরুম, সুরের স্টুডিও, বিশ্ববিদ্যালয়ের শ্রেণিকক্ষ এবং গ্রামীণ তাঁতপল্লী—সবকিছুকে এক সূত্রে গেঁথে চলা এক জীবনের গল্প। বাঙালির সাংস্কৃতিক শেকড়, আধ্যাত্মিক মূল্যবোধ এবং মানুষের কল্যাণে কাজ করার গভীর বিশ্বাসেই এর ভিত্তি।'}
          </p>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative Chapters (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {storyChapters.map((chapter, idx) => {
              const Icon = chapter.icon;
              const chapterText = (language === 'en' ? chapter.paragraphsEn : chapter.paragraphsBn).join(' ');
              const chapterStats = calculateReadingTime(chapterText, language);

              return (
                <article
                  key={chapter.id}
                  className={`space-y-4 ${idx < storyChapters.length - 1 ? 'border-b border-[#D9E1E5] pb-12' : ''}`}
                >
                  {/* Clean unboxed chapter metadata with dynamic reading time */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#596774]">
                    <span className="font-mono font-semibold uppercase text-[#155E63]">
                      {language === 'en' ? chapter.chapterNumber : chapter.chapterNumberBn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#101B25]">
                      <Clock className="w-3 h-3 text-[#155E63]" />
                      <span>{chapterStats.text}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{chapterStats.wordCountText}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl text-[#101B25]">
                    {language === 'en' ? chapter.titleEn : chapter.titleBn}
                  </h2>

                  <div className="text-base text-[#596774] leading-relaxed space-y-4 font-body">
                    {(language === 'en' ? chapter.paragraphsEn : chapter.paragraphsBn).map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right Column: Editorial Sidebars & Milestones Timeline (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <PortraitSlot
              photoUrl={assetConfig.secondaryPortraitUrl}
              altText={language === 'en' ? 'Asif Iqbal – The Polymath Builder' : 'আসিফ ইকবাল'}
              className="w-full min-h-[360px]"
              language={language}
              variant="editorial"
            />

            {/* Timeline Snapshot */}
            <div className="p-6 bg-white border border-[#D9E1E5] space-y-6">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#101B25] border-b border-[#D9E1E5] pb-3">
                {language === 'en' ? 'Chronological Chapters' : 'জীবনের গুরুত্বপূর্ণ মাইলফলক'}
              </h3>
              <ol className="relative border-l border-[#D9E1E5] ml-2 space-y-6 text-xs">
                <li className="ml-4 space-y-1">
                  <span className="font-mono text-[#155E63] font-semibold">1971 & Youth</span>
                  <div className="font-medium text-[#101B25]">
                    {language === 'en' ? 'Moral Anchor & Red Crescent Service' : 'বাবার মুক্তিযুদ্ধ ও রেড ক্রিসেন্টে স্বেচ্ছাসেবা'}
                  </div>
                  <p className="text-[#596774]">
                    {language === 'en' ? 'Early upbringing in Chattogram; values of national duty.' : 'চট্টগ্রামে বেড়ে ওঠা ও সেবার আদর্শে দীক্ষা।'}
                  </p>
                </li>

                <li className="ml-4 space-y-1">
                  <span className="font-mono text-[#155E63] font-semibold">1988</span>
                  <div className="font-medium text-[#101B25]">
                    {language === 'en' ? '"Anonna" with James' : 'জেমসের কণ্ঠে ‘অনন্যা’'}
                  </div>
                  <p className="text-[#596774]">
                    {language === 'en' ? 'Landmark Bengali rock ballad written as lyricist.' : 'বাংলা আধুনিক ব্যান্ডের ইতিহাসে যুগান্তকারী গান।'}
                  </p>
                </li>

                <li className="ml-4 space-y-1">
                  <span className="font-mono text-[#155E63] font-semibold">1990s — 2000s</span>
                  <div className="font-medium text-[#101B25]">
                    {language === 'en' ? 'Unilever & Regional Assignment' : 'ইউনিলিভার ও আঞ্চলিক বিপণন'}
                  </div>
                  <p className="text-[#596774]">
                    {language === 'en' ? 'FMCG marketing mastery; Pakistan leadership assignment.' : 'আন্তর্জাতিক মানের বিপণন বিজ্ঞানে দক্ষতা অর্জন।'}
                  </p>
                </li>

                <li className="ml-4 space-y-1">
                  <span className="font-mono text-[#155E63] font-semibold">2000s — 2010s</span>
                  <div className="font-medium text-[#101B25]">
                    {language === 'en' ? 'Building Shwapno & Meghna Turnaround' : '‘স্বপ্ন’ রিটেল চেইন ও মেঘনা গ্রুপ'}
                  </div>
                  <p className="text-[#596774]">
                    {language === 'en' ? '59 stores in <2 yrs; historic $88M to $388M revenue growth.' : 'শূন্য থেকে রিটেল সাম্রাজ্য ও করপোরেট প্রবৃদ্ধি।'}
                  </p>
                </li>

                <li className="ml-4 space-y-1">
                  <span className="font-mono text-[#155E63] font-semibold">2010s — Present</span>
                  <div className="font-medium text-[#101B25]">
                    {language === 'en' ? 'Four Ventures & Livelihood Impact' : 'চারটি উদ্যোগ ও সমাজসেবা'}
                  </div>
                  <p className="text-[#596774]">
                    {language === 'en' ? 'Achieve Consulting, ACIS, ASIX (900+ artisans), GaanChill.' : 'এসিক্স, গানচিল, অ্যাচিভ কনসাল্টিং ও আইবিএ শিক্ষকতা।'}
                  </p>
                </li>
              </ol>
            </div>

            {/* CTA Box */}
            <div className="p-6 bg-[#101B25] text-white space-y-4">
              <span className="text-xs font-mono text-[#155E63] uppercase">Dialogue</span>
              <h4 className="font-display text-xl text-white">
                {language === 'en' ? 'Explore the Ventures' : 'উদ্যোগগুলো দেখুন'}
              </h4>
              <p className="text-xs text-[#D9E1E5]/80 leading-relaxed">
                {language === 'en'
                  ? 'Examine how these philosophies translate into practical enterprise and creative infrastructure.'
                  : 'এই জীবনদর্শন কীভাবে ব্যবসা ও সৃজনশীল প্রতিষ্ঠানে রূপ পেয়েছে তা দেখুন।'}
              </p>
              <button
                onClick={() => onNavigate('work')}
                className="w-full py-2.5 bg-white text-[#101B25] text-xs font-semibold uppercase tracking-wider hover:bg-[#D9E1E5] transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'en' ? 'View Work' : 'কাজের বিবরণ'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#155E63]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
