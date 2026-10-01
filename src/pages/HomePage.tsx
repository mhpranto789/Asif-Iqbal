import React, { useRef, useEffect, useState } from 'react';
import { RoutePath, Language, EnquiryCategory } from '../types';
import { translations } from '../data/translations';
import { fourVentures, publishedBooks } from '../data/siteContent';
import { assetConfig } from '../data/assetConfig';
import { ArrowRight, ArrowUpRight, Sparkles, ChevronRight, Play, X, Video } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'motion/react';
import { GaanChillSoundLounge } from '../components/GaanChillSoundLounge';
import { PolymathMatrix } from '../components/PolymathMatrix';
import { ThoughtTicker } from '../components/ThoughtTicker';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollSection, ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

// Subtle staggered entrance animation variants for editorial polish
const heroTextContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const heroTextItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1], // fluid cubic-bezier for natural editorial deceleration
    },
  },
};

const sectionHeaderContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const sectionHeaderItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface HomePageProps {
  onNavigate: (route: RoutePath, preselectedCategory?: EnquiryCategory) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoIframeReady, setIsVideoIframeReady] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* SECTION A: HERO (Extends up behind floating navbar so hero background shines through) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#080E15] via-[#0E1722] to-[#0A121A] text-white -mt-20 sm:-mt-24 pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 border-b border-teal-500/20 min-h-[580px] sm:min-h-[640px] flex items-center">
        {/* Background YouTube Video with Smooth Scale & Entrance Animation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
          {/* High-Resolution Poster Backdrop from YouTube */}
          <img
            src="/images/asif-hero-poster.jpg"
            alt="Asif Iqbal"
            className="absolute inset-0 w-full h-full object-cover object-[75%_25%] sm:object-[70%_28%] lg:object-[82%_25%] filter brightness-[0.88] contrast-[1.05]"
          />

          {/* Seamless Looping YouTube Video Embed */}
          <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${assetConfig.heroYouTubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${assetConfig.heroYouTubeId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3&enablejsapi=1`}
              title="Asif Iqbal Hero Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              onLoad={() => setIsVideoIframeReady(true)}
              className={`w-[180vw] h-[180vh] min-w-[130%] min-h-[130%] pointer-events-none border-0 transition-opacity duration-1000 ${
                isVideoIframeReady ? 'opacity-75' : 'opacity-0'
              }`}
              style={{
                width: 'max(100%, 177.78vh)',
                height: 'max(100%, 56.25vw)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.18)',
                filter: 'brightness(0.92) contrast(1.06)',
              }}
            />
          </div>
        </div>

        {/* Master Filmic Vignette & High-Contrast Gradient Masking */}
        {/* Deep dark gradient on left so text is crystal clear; transparent on right so Asif Iqbal is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E15] via-[#080E15]/90 to-[#080E15]/40 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A121A] via-[#080E15]/45 to-[#080E15]/80 pointer-events-none" />

        {/* Ambient Glowing Radial Mesh */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#0A121A] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Content Column with Staggered Entrance (8 cols) */}
            <div className="lg:col-span-8 max-w-2xl lg:max-w-3xl">
              <motion.div
                variants={heroTextContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 sm:space-y-8"
              >
                {/* Eyebrow with Pulsing Live Status Dot */}
                <motion.div variants={heroTextItemVariants}>
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-teal-950/70 border border-teal-500/35 text-teal-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-teal-950/40">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span>{t.brand.eyebrow}</span>
                  </div>
                </motion.div>

                {/* H1 & Dual Typography */}
                <motion.div variants={heroTextItemVariants} className="space-y-3">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.08] drop-shadow-sm">
                    {language === 'en' ? (
                      <>
                        <span>Asif Iqbal</span>
                        <span className="block text-2xl sm:text-3xl font-bengali-heading font-medium text-teal-400/90 pt-2 tracking-normal">
                          আসিফ ইকবাল
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-bengali-heading">আসিফ ইকবাল</span>
                        <span className="block text-2xl sm:text-3xl font-display font-medium text-teal-400/90 pt-2 tracking-normal">
                          Asif Iqbal
                        </span>
                      </>
                    )}
                  </h1>

                  {/* Subtitle / Positioning Tagline */}
                  <div className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200">
                    {t.brand.positioning}
                  </div>
                </motion.div>

                {/* Body Summary */}
                <motion.p
                  variants={heroTextItemVariants}
                  className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl text-balance drop-shadow-xs"
                >
                  "{t.brand.heroSummary}"
                </motion.p>

                {/* Prestigious Brand Philosophy Line */}
                <motion.div
                  variants={heroTextItemVariants}
                  className="p-4 sm:p-5 rounded-xl bg-black/40 backdrop-blur-md border-l-2 border-teal-400 border-y border-r border-white/10 text-sm sm:text-base text-slate-100 font-editorial italic max-w-2xl shadow-xl"
                >
                  "{t.brand.brandLine}"
                </motion.div>

                {/* Action Buttons with Interactive Springs */}
                <motion.div variants={heroTextItemVariants} className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('work')}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{t.brand.ctaWork}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <button
                    onClick={() => onNavigate('story')}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/25 hover:border-white/40 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
                  >
                    <span>{t.brand.ctaStory}</span>
                  </button>

                  {/* Watch Video Button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-5 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/40 hover:border-teal-400 text-teal-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg group"
                  >
                    <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </span>
                    <span>{language === 'en' ? 'Watch Video' : 'ভিডিও দেখুন'}</span>
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side Video Presence Anchor (4 cols) */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-end self-end pb-2">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-teal-500/40 hover:border-teal-400 text-xs text-teal-300 hover:text-white font-medium flex items-center gap-2.5 shadow-xl transition-all group cursor-pointer"
              >
                <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span className="font-mono uppercase tracking-wider text-[11px] text-slate-200">
                  {language === 'en' ? 'Watch Keynote (Sound On)' : 'মূল ভিডিওটি শুনুন'}
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Cinema Video Modal for YouTube Player */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden border border-teal-500/40 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800 text-slate-200 text-sm">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-teal-400" />
                  <span className="font-semibold text-white">
                    {language === 'en' ? 'Asif Iqbal – Keynote & Leadership' : 'আসিফ ইকবাল – বক্তব্য ও প্রজ্ঞা'}
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 16:9 YouTube Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${assetConfig.heroYouTubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title="Asif Iqbal Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-5 py-3 bg-slate-900/80 text-xs text-slate-400 border-t border-slate-800">
                <span>{language === 'en' ? 'YouTube Official Video' : 'ইউটিউব অফিসিয়াল ভিডিও'}</span>
                <a
                  href={assetConfig.heroYouTubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1 hover:underline"
                >
                  <span>{language === 'en' ? 'Open in YouTube' : 'ইউটিউবে খুলুন'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION B: LATEST THOUGHTS TICKER (Enhances Polymath Branding) */}
      <ThoughtTicker language={language} onNavigate={onNavigate} />

      {/* SECTION C: STATS COUNTERS (Intersection Observer Scroll Animation) */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-lg p-8 sm:p-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <StaggerItem className="space-y-1 pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#0D161F] tracking-tight">
                <AnimatedCounter value={30} suffix="+" className="text-teal-700" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                {language === 'en' ? 'Years Corporate Turnaround' : 'বছর করপোরেট রূপান্তর'}
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Meghna, City Group, Shwapno</p>
            </StaggerItem>

            <StaggerItem className="space-y-1 pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#0D161F] tracking-tight">
                <AnimatedCounter value={1000} suffix="+" className="text-amber-600" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                {language === 'en' ? 'Recorded Lyric Compositions' : 'রেকর্ডকৃত আধুনিক গান'}
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">42+ years poetic craftsmanship</p>
            </StaggerItem>

            <StaggerItem className="space-y-1 pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#0D161F] tracking-tight">
                <AnimatedCounter value={900} suffix="+" className="text-emerald-700" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                {language === 'en' ? 'Women Artisans Empowered' : 'নারী কারুশিল্পীর ক্ষমতায়ন'}
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">ASIX craft exports to 20+ countries</p>
            </StaggerItem>

            <StaggerItem className="space-y-1 pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#0D161F] tracking-tight">
                <AnimatedCounter value={12} suffix="M+" className="text-cyan-700" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                {language === 'en' ? 'Audience & Cultural Reach' : 'শ্রোতা ও তরুণদের স্পর্শ'}
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Songs, books & IBA classrooms</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </ScrollSection>

      {/* SECTION D: THE FOUR POLYMATH PILLARS (Interactive Tabbed Explorer with Scroll Reveal) */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6 space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderContainerVariants}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <motion.div variants={sectionHeaderItemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>{language === 'en' ? 'The Convergence Architecture' : 'চারটি মূল শক্তির মেলবন্ধন'}</span>
          </motion.div>
          <motion.h2 variants={sectionHeaderItemVariants} className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            {t.home.connectingIdeaHeading}
          </motion.h2>
          <motion.p variants={sectionHeaderItemVariants} className="text-base sm:text-lg text-slate-300 leading-relaxed font-body">
            {t.home.connectingIdeaParagraph}
          </motion.p>
        </motion.div>

        {/* Dynamic Polymath Matrix Component */}
        <ScrollReveal delay={0.15}>
          <PolymathMatrix language={language} onNavigate={onNavigate} />
        </ScrollReveal>
      </ScrollSection>

      {/* SECTION E: GAANCHILL SOUND LOUNGE (Scroll Fade and Slide In) */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6">
        <GaanChillSoundLounge
          language={language}
          onExploreMore={() => onNavigate('music')}
        />
      </ScrollSection>

      {/* SECTION F: FOUR VENTURES (Staggered Bento Grid on Scroll) */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6 space-y-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderContainerVariants}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6"
        >
          <div className="space-y-2">
            <motion.span variants={sectionHeaderItemVariants} className="block text-xs font-semibold tracking-wider uppercase text-teal-600">
              {language === 'en' ? 'Operating Architecture' : 'প্রতিষ্ঠিত উদ্যোগসমূহ'}
            </motion.span>
            <motion.h2 variants={sectionHeaderItemVariants} className="font-display text-3xl sm:text-4xl font-bold text-[#0D161F]">
              {t.home.venturesHeading}
            </motion.h2>
            <motion.p variants={sectionHeaderItemVariants} className="text-sm text-slate-600">
              {t.home.venturesSubheading}
            </motion.p>
          </div>
          <motion.div variants={sectionHeaderItemVariants}>
            <button
              onClick={() => onNavigate('work')}
              className="text-xs font-bold uppercase tracking-wider text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>{language === 'en' ? 'View all ventures' : 'সকল উদ্যোগ দেখুন'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fourVentures.map((venture) => (
            <StaggerItem key={venture.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-teal-800 font-semibold px-2.5 py-1 rounded bg-teal-50 border border-teal-200/50">
                      {language === 'en' ? venture.relationshipEn : venture.relationshipBn}
                    </span>
                    {venture.officialUrl && (
                      <a
                        href={venture.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                        title="Visit official website"
                      >
                        <span className="text-[11px] font-medium">Official Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#0D161F] group-hover:text-teal-600 transition-colors">
                    {language === 'en' ? venture.name : venture.nameBn}
                  </h3>

                  <div className="text-xs font-semibold text-amber-600">
                    {language === 'en' ? venture.taglineEn : venture.taglineBn}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed pt-1 font-body">
                    {language === 'en' ? venture.descriptionEn : venture.descriptionBn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('work')}
                    className="text-xs font-bold text-teal-600 hover:text-teal-800 uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Learn more' : 'বিস্তারিত জানুন'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400">Active</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </ScrollSection>

      {/* SECTION G: BIOGRAPHICAL ESSAY SPOTLIGHT */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#0B131B] via-[#101D2A] to-[#0A121A] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-teal-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionHeaderContainerVariants}
              className="lg:col-span-8 space-y-6"
            >
              <motion.span variants={sectionHeaderItemVariants} className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
                <span>{language === 'en' ? 'Biographical Chapter' : 'জীবনের গল্প'}</span>
                <span>·</span>
                <span className="text-slate-400">{language === 'en' ? 'From Chittagong to Global Stage' : 'চট্টগ্রাম থেকে বিশ্বমঞ্চে'}</span>
              </motion.span>

              <motion.h2 variants={sectionHeaderItemVariants} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
                {t.home.storyPreviewHeading}
              </motion.h2>

              <motion.p variants={sectionHeaderItemVariants} className="text-base sm:text-lg text-slate-300 leading-relaxed font-body">
                {t.home.storyPreviewExcerpt}
              </motion.p>

              <motion.div variants={sectionHeaderItemVariants} className="pt-2">
                <button
                  onClick={() => onNavigate('story')}
                  className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-teal-500/20"
                >
                  <span>{t.home.storyPreviewLink}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-4"
            >
              <div className="font-editorial italic text-xl text-amber-300 leading-relaxed">
                "{language === 'en'
                  ? 'True effort is the sovereign currency under our control. The tree is known by its fruits.'
                  : 'চেষ্টাই মানুষের একমাত্র সার্বভৌম শক্তি। ফলেই বৃক্ষের আসল পরিচয়।'}"
              </div>
              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                {language === 'en'
                  ? 'From Red Crescent volunteering in his youth to the classrooms of Dhaka University, learning through action remains his compass.'
                  : 'কৈশোরের সমাজসেবা থেকে বিশ্ববিদ্যালয়ের শ্রেণিকক্ষ—কাজের মধ্য দিয়ে শেখাই তাঁর জীবনের ব্রত।'}
              </p>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* SECTION H: BOOKS & INTELLECTUAL FRAMEWORKS (Staggered Grid) */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6 space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderContainerVariants}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6"
        >
          <div className="space-y-2">
            <motion.span variants={sectionHeaderItemVariants} className="block text-xs font-semibold tracking-wider uppercase text-teal-600">
              {language === 'en' ? 'Intellectual Architecture' : 'বই ও বুদ্ধিবৃত্তিক কাজ'}
            </motion.span>
            <motion.h2 variants={sectionHeaderItemVariants} className="font-display text-3xl sm:text-4xl font-bold text-[#0D161F]">
              {t.home.ideasPreviewHeading}
            </motion.h2>
            <motion.p variants={sectionHeaderItemVariants} className="text-sm text-slate-600">
              {t.home.ideasPreviewSubheading}
            </motion.p>
          </div>
          <motion.div variants={sectionHeaderItemVariants}>
            <button
              onClick={() => onNavigate('ideas')}
              className="text-xs font-bold uppercase tracking-wider text-teal-600 hover:text-teal-800 inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>{language === 'en' ? 'Open interactive framework' : 'ভাবনা ও মডেল দেখুন'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publishedBooks.map((book) => (
            <StaggerItem key={book.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`h-full p-7 rounded-2xl border flex flex-col justify-between space-y-4 shadow-sm transition-all ${
                  book.type === 'manuscript'
                    ? 'bg-gradient-to-br from-[#0D161F] to-[#12202E] text-white border-teal-500/30 shadow-xl'
                    : 'bg-white text-[#0D161F] border-slate-200 hover:border-teal-500/40'
                }`}
              >
                <div className="space-y-3">
                  <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                    book.type === 'manuscript' ? 'text-teal-400' : 'text-teal-700'
                  }`}>
                    {language === 'en' ? book.statusEn : book.statusBn}
                  </span>
                  <h3 className="font-display text-2xl font-bold">
                    {language === 'en' ? book.titleEn : book.titleBn}
                  </h3>
                  <p className={`text-xs ${book.type === 'manuscript' ? 'text-slate-300' : 'text-slate-500'}`}>
                    {language === 'en' ? book.subtitleEn : book.subtitleBn}
                  </p>
                </div>

                <p className={`text-xs leading-relaxed ${book.type === 'manuscript' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {language === 'en' ? book.themeEn : book.themeBn}
                </p>

                <button
                  onClick={() => onNavigate('ideas')}
                  className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer pt-2 ${
                    book.type === 'manuscript' ? 'text-teal-300 hover:text-white' : 'text-teal-600 hover:text-teal-800'
                  }`}
                >
                  <span>{language === 'en' ? 'Read framework' : 'মডেলটি পড়ুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </ScrollSection>

      {/* SECTION I: CLOSING INVITATION WITH INTERACTIVE CARDS */}
      <ScrollSection className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#080E15] via-[#0E1722] to-[#0A121A] text-white p-8 sm:p-12 lg:p-16 space-y-8 border border-teal-500/20 shadow-2xl relative overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionHeaderContainerVariants}
            className="max-w-2xl space-y-3"
          >
            <motion.div variants={sectionHeaderItemVariants} className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              {language === 'en' ? 'Direct Communication' : 'সরাসরি যোগাযোগ'}
            </motion.div>
            <motion.h2 variants={sectionHeaderItemVariants} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.home.closingHeading}
            </motion.h2>
            <motion.p variants={sectionHeaderItemVariants} className="text-base text-slate-300 leading-relaxed font-body">
              {t.home.closingSubheading}
            </motion.p>
          </motion.div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <StaggerItem>
              <button
                onClick={() => onNavigate('contact', 'business')}
                className="w-full h-full p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/50 text-left transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="text-xs font-mono text-teal-400 font-semibold">Route 01</div>
                <div className="font-display text-lg font-bold text-white pt-1">
                  {language === 'en' ? 'Business Transformation' : 'করপোরেট রূপান্তর'}
                </div>
                <div className="text-xs text-slate-400 pt-3 flex items-center gap-1 group-hover:text-teal-300">
                  <span>{language === 'en' ? 'Consulting Inquiries' : 'পরামর্শ সেবা'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </StaggerItem>

            <StaggerItem>
              <button
                onClick={() => onNavigate('contact', 'speaking')}
                className="w-full h-full p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/50 text-left transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="text-xs font-mono text-teal-400 font-semibold">Route 02</div>
                <div className="font-display text-lg font-bold text-white pt-1">
                  {language === 'en' ? 'Speaking & Keynotes' : 'সম্মেলন ও বক্তৃতা'}
                </div>
                <div className="text-xs text-slate-400 pt-3 flex items-center gap-1 group-hover:text-teal-300">
                  <span>{language === 'en' ? 'University / Summits' : 'আমন্ত্রণ জানান'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </StaggerItem>

            <StaggerItem>
              <button
                onClick={() => onNavigate('contact', 'creative')}
                className="w-full h-full p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/50 text-left transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="text-xs font-mono text-teal-400 font-semibold">Route 03</div>
                <div className="font-display text-lg font-bold text-white pt-1">
                  {language === 'en' ? 'Music Collaboration' : 'সংগীত ও সাহিত্য'}
                </div>
                <div className="text-xs text-slate-400 pt-3 flex items-center gap-1 group-hover:text-teal-300">
                  <span>{language === 'en' ? 'GaanChill Platform' : 'সৃজনশীল মেলবন্ধন'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </StaggerItem>

            <StaggerItem>
              <button
                onClick={() => onNavigate('contact', 'media')}
                className="w-full h-full p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/50 text-left transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="text-xs font-mono text-teal-400 font-semibold">Route 04</div>
                <div className="font-display text-lg font-bold text-white pt-1">
                  {language === 'en' ? 'Journalism & Media' : 'গণমাধ্যম ও তথ্য'}
                </div>
                <div className="text-xs text-slate-400 pt-3 flex items-center gap-1 group-hover:text-teal-300">
                  <span>{language === 'en' ? 'Press & Bio Assets' : 'প্রেস যোগাযোগ'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </ScrollSection>
    </div>
  );
};
