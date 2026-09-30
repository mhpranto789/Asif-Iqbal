import React from 'react';
import { RoutePath, Language } from '../types';
import { translations } from '../data/translations';
import { assetConfig } from '../data/assetConfig';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  return (
    <footer className="bg-[#101B25] text-[#F4F6F7] border-t border-[#101B25]">
      {/* Restrained continuous line of The Cultural Bridge */}
      <div className="bridge-line" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display text-3xl tracking-tight text-white">
              {language === 'en' ? 'Asif Iqbal' : 'আসিফ ইকবাল'}
            </div>
            <p className="font-display italic text-lg text-[#D9E1E5]/80 max-w-sm">
              "{t.footer.brandStatement}"
            </p>
            <p className="text-xs text-[#596774] leading-relaxed max-w-md pt-2">
              {t.footer.editorialNotice}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#D9E1E5]/60">
              {t.footer.navigationHeader}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.story}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.work}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('music')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.music}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ideas')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.ideas}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('speaking')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.speaking}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-[#D9E1E5]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.blog}
                </button>
              </li>
            </ul>
          </div>

          {/* Ventures & Verified Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#D9E1E5]/60">
              {t.footer.venturesHeader}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D9E1E5]/80">
              <li className="flex items-center justify-between">
                <span>Achieve Consulting</span>
                <span className="text-xs text-[#596774]">Transformation</span>
              </li>
              <li className="flex items-center justify-between">
                <span>ACIS</span>
                <span className="text-xs text-[#596774]">Creative AI</span>
              </li>
              <li className="flex items-center justify-between">
                {assetConfig.ventureLinks.asix ? (
                  <a
                    href={assetConfig.ventureLinks.asix}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>ASIX (Artisan Craft)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#155E63]" />
                  </a>
                ) : (
                  <span>ASIX</span>
                )}
                <span className="text-xs text-[#596774]">900+ Artisans</span>
              </li>
              <li className="flex items-center justify-between">
                {assetConfig.ventureLinks.gaanChill ? (
                  <a
                    href={assetConfig.ventureLinks.gaanChill}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>GaanChill Music</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#155E63]" />
                  </a>
                ) : (
                  <span>GaanChill Music</span>
                )}
                <span className="text-xs text-[#596774]">Bangla Sound</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-[#D9E1E5]/60">
              {assetConfig.socialLinks.linkedin && (
                <a
                  href={assetConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {assetConfig.socialLinks.youtube && (
                <a
                  href={assetConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#596774] gap-4">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-4">
            <span>Dhaka · Chittagong · Global</span>
            <span aria-hidden="true">·</span>
            <span>English / বাংলা</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
