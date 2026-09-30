import React, { useState } from 'react';
import { Language } from '../types';
import { frameworkSteps } from '../data/siteContent';
import { translations } from '../data/translations';
import { ArrowRight, ChevronDown, ChevronUp, RefreshCw, Compass, ShieldAlert, Sparkles } from 'lucide-react';

interface InteractiveFrameworkProps {
  language: Language;
}

export const InteractiveFramework: React.FC<InteractiveFrameworkProps> = ({ language }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [expandedMobileStep, setExpandedMobileStep] = useState<number | null>(0);
  const t = translations[language].framework;

  const currentStep = frameworkSteps[activeStepIndex];

  return (
    <div className="bg-white border border-[#D9E1E5] rounded-none p-6 sm:p-10 lg:p-12 shadow-sm space-y-12">
      {/* Title & Introduction */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
          {language === 'en' ? 'Manuscript Model' : 'পাণ্ডুলিপিভিত্তিক রূপরেখা'}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#101B25] tracking-tight">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-[#596774] leading-relaxed">
          {t.subtitle}
        </p>
        <p className="text-sm text-[#596774] leading-relaxed border-l-2 border-[#155E63] pl-4 italic">
          {t.intro}
        </p>
      </div>

      {/* Part 1: Three Foundational Resources (Active Throughout) */}
      <div className="pt-4 border-t border-[#D9E1E5]">
        <h3 className="text-xs font-semibold tracking-wider uppercase text-[#101B25] mb-4">
          {t.resourcesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.resourcesList.map((resourceText, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#F4F6F7] border border-[#D9E1E5] space-y-2"
            >
              <div className="text-xs font-mono text-[#155E63]">Resource 0{idx + 1}</div>
              <p className="text-sm text-[#101B25] leading-relaxed">
                {resourceText}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Three Forces (Talent, Luck, Effort) */}
      <div className="pt-4 border-t border-[#D9E1E5] space-y-4">
        <h3 className="text-xs font-semibold tracking-wider uppercase text-[#101B25]">
          {t.forcesTitle}
        </h3>
        <p className="text-sm text-[#596774] max-w-3xl leading-relaxed">
          {t.forcesDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {t.forcesItems.map((force, idx) => (
            <div
              key={idx}
              className={`p-5 border transition-all ${
                idx === 2
                  ? 'bg-[#101B25] text-white border-[#101B25]'
                  : 'bg-[#F4F6F7] text-[#101B25] border-[#D9E1E5]'
              }`}
            >
              <div className="flex items-center justify-between pb-2">
                <span className={`text-base font-semibold ${idx === 2 ? 'text-white' : 'text-[#101B25]'}`}>
                  {force.name}
                </span>
                {idx === 2 && (
                  <span className="text-[10px] uppercase tracking-wider text-[#155E63] bg-white/10 px-2 py-0.5 rounded">
                    Direct Control
                  </span>
                )}
              </div>
              <p className={`text-xs leading-relaxed ${idx === 2 ? 'text-[#D9E1E5]/80' : 'text-[#596774]'}`}>
                {force.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 3: The Eight Steps */}
      <div className="pt-6 border-t border-[#D9E1E5] space-y-6">
        <div>
          <h3 className="text-xs font-semibold tracking-wider uppercase text-[#101B25]">
            {t.stepsTitle}
          </h3>
          <p className="text-xs text-[#596774] pt-1">
            {t.stepsSubtitle}
          </p>
        </div>

        {/* Desktop Step Selector (Horizontal calm timeline tabs) */}
        <div className="hidden lg:block space-y-6">
          <div className="grid grid-cols-8 border border-[#D9E1E5] bg-[#F4F6F7] divide-x divide-[#D9E1E5]">
            {frameworkSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 text-left transition-colors cursor-pointer focus-visible:outline-none ${
                    isSelected
                      ? 'bg-white border-b-2 border-b-[#155E63] text-[#101B25]'
                      : 'hover:bg-white/60 text-[#596774]'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="text-[11px] font-mono text-[#155E63] font-semibold">
                    0{step.stepNumber}
                  </div>
                  <div className="text-xs font-medium truncate pt-1">
                    {language === 'en' ? step.labelEn.split(' ')[0] : step.labelBn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop Step Detail Pane */}
          <div className="p-8 bg-[#F4F6F7] border border-[#D9E1E5] space-y-6">
            <div className="flex items-center justify-between border-b border-[#D9E1E5] pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#155E63] font-semibold tracking-wider">
                  Step 0{currentStep.stepNumber} of 08
                </span>
                <h4 className="font-display text-2xl text-[#101B25] pt-1">
                  {language === 'en' ? currentStep.labelEn : currentStep.labelBn}
                </h4>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className="px-3 py-1.5 text-xs border border-[#D9E1E5] bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(frameworkSteps.length - 1, prev + 1))}
                  disabled={activeStepIndex === frameworkSteps.length - 1}
                  className="px-3 py-1.5 text-xs bg-[#101B25] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#155E63] transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#596774]">
                  Summary Grounded in Manuscript
                </span>
                <p className="text-base text-[#101B25] leading-relaxed pt-1.5">
                  {language === 'en' ? currentStep.summaryEn : currentStep.summaryBn}
                </p>
              </div>

              <div className="p-4 bg-white border border-[#D9E1E5]/80 space-y-1">
                <span className="text-xs font-semibold text-[#155E63] uppercase tracking-wider">
                  Contemplative Reflection Prompt
                </span>
                <p className="text-sm font-display italic text-[#101B25]">
                  "{language === 'en' ? currentStep.reflectionPromptEn : currentStep.reflectionPromptBn}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden divide-y divide-[#D9E1E5] border border-[#D9E1E5] bg-white">
          {frameworkSteps.map((step, idx) => {
            const isExpanded = expandedMobileStep === idx;
            return (
              <div key={step.stepNumber} className="overflow-hidden">
                <button
                  onClick={() => setExpandedMobileStep(isExpanded ? null : idx)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-[#F4F6F7] transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#155E63]">
                      0{step.stepNumber}
                    </span>
                    <span className="text-sm font-medium text-[#101B25]">
                      {language === 'en' ? step.labelEn : step.labelBn}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#596774]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#596774]" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 bg-[#F4F6F7] space-y-3 text-sm">
                    <p className="text-[#101B25] leading-relaxed">
                      {language === 'en' ? step.summaryEn : step.summaryBn}
                    </p>
                    <div className="p-3 bg-white border border-[#D9E1E5] text-xs font-display italic text-[#155E63]">
                      "{language === 'en' ? step.reflectionPromptEn : step.reflectionPromptBn}"
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 4: External Outcomes Outside the Process (Success & Failure feeding back to Review) */}
      <div className="pt-6 border-t border-[#D9E1E5] space-y-4">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-[#155E63]" />
          <h3 className="text-xs font-semibold tracking-wider uppercase text-[#101B25]">
            {t.outcomesTitle}
          </h3>
        </div>
        <p className="text-sm text-[#596774] leading-relaxed max-w-3xl">
          {t.outcomesDesc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-[#F4F6F7] border border-[#D9E1E5]">
            <div className="text-xs font-semibold text-[#155E63] uppercase tracking-wide">
              {language === 'en' ? 'Outcome A: Success (সাফল্য)' : 'সম্ভাব্য ফল ১: সাফল্য'}
            </div>
            <p className="text-xs text-[#596774] pt-1">
              {language === 'en'
                ? 'External fruit confirmed. Must not foster complacency; feeds directly into Step 8 to evaluate humility and next commitments.'
                : 'সাফল্য অহংকারের জন্ম দিতে পারে। এটি কোনো চূড়ান্ত গন্তব্য নয়, বরং ৮ম ধাপে গিয়ে আত্মমূল্যায়ন প্রয়োজন।'}
            </p>
          </div>
          <div className="p-4 bg-[#F4F6F7] border border-[#D9E1E5]">
            <div className="text-xs font-semibold text-[#596774] uppercase tracking-wide">
              {language === 'en' ? 'Outcome B: Failure (ব্যর্থতা)' : 'সম্ভাব্য ফল ২: ব্যর্থতা'}
            </div>
            <p className="text-xs text-[#596774] pt-1">
              {language === 'en'
                ? 'Outcome fallen short. Not an indictment of human dignity; feeds directly into Step 8 for unsparing review and correction.'
                : 'ব্যর্থতা কোনো স্থায়ী লজ্জা নয়। এটি সরাসরি ৮ম ধাপে গিয়ে ভুল চিহ্নিত করা ও নতুন করে চেষ্টা করার সুযোগ তৈরি করে।'}
            </p>
          </div>
        </div>
      </div>

      {/* Part 5: Three Exact Closing Inquiries (Reflective Reading, No AI/Grading) */}
      <div className="pt-8 border-t border-[#101B25]/20 bg-[#101B25] text-white p-6 sm:p-8 -mx-6 sm:-mx-10 lg:-mx-12 -mb-6 sm:-mb-10 lg:-mb-12">
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#155E63]">
            {language === 'en' ? 'Closing Contemplation' : 'সমাপনী আত্মজিজ্ঞাসা'}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white">
            {t.closingTitle}
          </h3>
          <p className="text-xs text-[#D9E1E5]/70">
            {language === 'en'
              ? 'The manuscript concludes that every builder must answer three unsparing questions upon the conclusion of any major work:'
              : 'পাণ্ডুলিপির সমাপ্তিতে বলা হয়েছে, যেকোনো বড় কাজ শেষ করার পর নির্মাতাকে অবশ্যই এই তিনটি নির্মোহ প্রশ্নের মুখোমুখি হতে হয়:'}
          </p>

          <div className="space-y-3 pt-2">
            {t.closingQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 border border-white/10 text-white font-display text-base sm:text-lg italic"
              >
                {q}
              </div>
            ))}
          </div>

          <div className="text-[11px] text-[#D9E1E5]/50 pt-2">
            {language === 'en'
              ? 'A private, reflective reading aid drawn from "বৃক্ষ তোমার নাম কী?". No user data is stored, evaluated, or transmitted.'
              : '‘বৃক্ষ তোমার নাম কী?’ থেকে গৃহীত একটি ব্যক্তিগত পাঠ অভিজ্ঞতা। কোনো তথ্য সংরক্ষণ বা প্রক্রিয়াকরণ করা হয় না।'}
          </div>
        </div>
      </div>
    </div>
  );
};
