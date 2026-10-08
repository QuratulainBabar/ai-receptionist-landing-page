import React from 'react';
import { Calendar, PhoneCall, ShieldCheck, ArrowRight, CheckCircle2, Clock, Zap, Star } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenDemo: () => void;
  onOpenAudit: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDemo, onOpenAudit }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F4F7FF] to-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1C3496]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5ECFF] shadow-xs text-xs font-semibold text-[#1C3496]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Founding Clinic Cohort Open</span>
          <span className="text-slate-300">·</span>
          <span>Free AI Setup for Limited Practices</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2937] tracking-tight leading-tight">
          Never Miss Another <br />
          <span className="text-[#1C3496]">Patient Opportunity.</span>
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          Book a personalized demo and see your AI Receptionist handle real patient calls, verify insurances, and lock slots in your exact EHR.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1C3496] hover:bg-[#162973] text-white font-bold text-base shadow-xl shadow-[#1C3496]/25 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#F4F7FF] text-[#1C3496] font-semibold text-base border-2 border-[#E5ECFF] transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Consultation & Audit</span>
          </button>
        </div>

        {/* Trust proofs list */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#6B7280]">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% HIPAA BAA Guarantee
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <Clock className="w-4 h-4 text-[#1C3496]" />
            Go-live in 3–7 business days
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Zero disruption to your staff
          </span>
        </div>

      </div>
    </section>
  );
};
