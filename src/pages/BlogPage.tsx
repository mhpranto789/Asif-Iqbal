import React, { useState } from 'react';
import { RoutePath, Language, BlogArticle } from '../types';
import { translations } from '../data/translations';
import { blogArticles } from '../data/siteContent';
import { calculateReadingTime, toBengaliDigits } from '../utils/readingTime';
import { Clock, ArrowRight, ArrowLeft, BookOpen, Share2, Check } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (route: RoutePath) => void;
  language: Language;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, language }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = translations[language].blog;

  // Selected active article if in single reading view
  const activeArticle = blogArticles.find((a) => a.id === selectedArticleId);

  // Extract unique categories
  const categories = [
    'all',
    ...Array.from(new Set(blogArticles.map((a) => (language === 'en' ? a.categoryEn : a.categoryBn)))),
  ];

  const filteredArticles = blogArticles.filter((article) => {
    if (activeCategory === 'all') return true;
    const cat = language === 'en' ? article.categoryEn : article.categoryBn;
    return cat === activeCategory;
  });

  const handleCopyLink = (articleId: string) => {
    const url = `${window.location.origin}/blog#${articleId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(articleId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // If viewing a full single article
  if (activeArticle) {
    const articleText = (language === 'en' ? activeArticle.paragraphsEn : activeArticle.paragraphsBn).join(' ');
    const readingStats = calculateReadingTime(articleText, language);

    return (
      <div className="max-w-[1280px] mx-auto px-6 py-12 pb-24 space-y-12">
        {/* Back control */}
        <div>
          <button
            onClick={() => setSelectedArticleId(null)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#155E63] hover:text-[#101B25] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToList}</span>
          </button>
        </div>

        {/* Article Container */}
        <article className="max-w-3xl space-y-8">
          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#596774]">
            <span className="font-semibold uppercase tracking-wider text-[#155E63]">
              {language === 'en' ? activeArticle.categoryEn : activeArticle.categoryBn}
            </span>
            <span aria-hidden="true">·</span>
            <span>{language === 'en' ? activeArticle.publishDateEn : activeArticle.publishDateBn}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 font-medium text-[#101B25]">
              <Clock className="w-3 h-3 text-[#155E63]" />
              <span>{readingStats.text}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{readingStats.wordCountText}</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl text-[#101B25] tracking-tight leading-tight">
              {language === 'en' ? activeArticle.titleEn : activeArticle.titleBn}
            </h1>
            <p className="font-display italic text-lg sm:text-xl text-[#596774] leading-relaxed">
              "{language === 'en' ? activeArticle.subtitleEn : activeArticle.subtitleBn}"
            </p>
          </div>

          <div className="bridge-line" aria-hidden="true" />

          {/* Article Body */}
          <div className="space-y-6 text-base sm:text-lg text-[#101B25] leading-relaxed font-body">
            {(language === 'en' ? activeArticle.paragraphsEn : activeArticle.paragraphsBn).map((p, idx) => (
              <p key={idx} className="leading-relaxed text-[#101B25]/90">
                {p}
              </p>
            ))}
          </div>

          {/* Bottom Article Actions */}
          <div className="pt-8 border-t border-[#D9E1E5] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setSelectedArticleId(null)}
              className="px-5 py-2.5 bg-[#101B25] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#155E63] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToList}</span>
            </button>

            <button
              onClick={() => handleCopyLink(activeArticle.id)}
              className="px-4 py-2 border border-[#D9E1E5] text-xs font-semibold text-[#101B25] hover:bg-[#F4F6F7] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              {copiedId === activeArticle.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.copiedLink}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#155E63]" />
                  <span>{t.shareArticle}</span>
                </>
              )}
            </button>
          </div>
        </article>
      </div>
    );
  }

  // Articles List View
  return (
    <div className="space-y-16 lg:space-y-24 py-12 pb-24">
      {/* Page Header */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
            {t.eyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#101B25] tracking-tight">
            {t.heading}
          </h1>
          <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
            {t.subheading}
          </p>
        </div>
      </section>

      {/* Category Filter Controls */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#D9E1E5] pb-4">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const label = cat === 'all' ? t.filterAll : cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#101B25] text-white shadow-sm'
                    : 'bg-white text-[#596774] border border-[#D9E1E5] hover:text-[#101B25]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Articles Feed */}
      <section className="max-w-[1280px] mx-auto px-6">
        <div className="space-y-8">
          {filteredArticles.map((article) => {
            const articleText = (language === 'en' ? article.paragraphsEn : article.paragraphsBn).join(' ');
            const readingStats = calculateReadingTime(articleText, language);

            return (
              <article
                key={article.id}
                className="p-8 bg-white border border-[#D9E1E5] hover:border-[#155E63] transition-colors space-y-4 group"
              >
                {/* Clean unboxed metadata with dynamic reading time */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#596774]">
                  <span className="font-semibold uppercase tracking-wider text-[#155E63]">
                    {language === 'en' ? article.categoryEn : article.categoryBn}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{language === 'en' ? article.publishDateEn : article.publishDateBn}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#101B25]">
                    <Clock className="w-3.5 h-3.5 text-[#155E63]" />
                    <span>{readingStats.text}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{readingStats.wordCountText}</span>
                </div>

                <div className="space-y-2">
                  <h2
                    onClick={() => setSelectedArticleId(article.id)}
                    className="font-display text-2xl sm:text-3xl text-[#101B25] group-hover:text-[#155E63] transition-colors cursor-pointer"
                  >
                    {language === 'en' ? article.titleEn : article.titleBn}
                  </h2>
                  <p className="text-xs font-medium text-[#596774]">
                    {language === 'en' ? article.subtitleEn : article.subtitleBn}
                  </p>
                </div>

                <p className="text-sm text-[#596774] leading-relaxed max-w-4xl">
                  {language === 'en' ? article.excerptEn : article.excerptBn}
                </p>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticleId(article.id)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#155E63] group-hover:text-[#101B25] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleCopyLink(article.id)}
                    className="text-xs text-[#596774] hover:text-[#101B25] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    title={t.shareArticle}
                  >
                    {copiedId === article.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.copiedLink}</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-[#596774]" />
                        <span>{t.shareArticle}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
