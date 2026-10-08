import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall, Mail } from 'lucide-react';
import { faqs } from '../data/landingData';

interface FaqSectionProps {
  onOpenDemo: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDemo }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#E5ECFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Physician & Practice Manager Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
            Everything doctors, practice administrators, and clinical operations teams need to know about AI Receptionist.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E5ECFF] bg-white transition overflow-hidden shadow-2xs hover:border-[#1C3496]/40"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F2937] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#F4F7FF] text-[#1C3496] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#1C3496] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B7280] leading-relaxed border-t border-slate-100/70 bg-[#F4F7FF]/30">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F4F7FF] border border-[#E5ECFF] text-center space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-[#1F2937]">
            Have a specific clinical workflow or customized EHR setup question?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto">
            Our medical integration team is available to review your telephony routing and EHR requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-xl bg-[#1C3496] hover:bg-[#162973] text-white font-semibold text-xs transition"
            >
              Ask an Implementation Specialist
            </button>
            <a
              href="tel:18002872633"
              className="px-5 py-2.5 rounded-xl bg-white text-slate-800 border border-[#E5ECFF] hover:bg-slate-50 font-semibold text-xs transition flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1C3496]" />
              <span>Call +1 (800) CURA-MED</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
