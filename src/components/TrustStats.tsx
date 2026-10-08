import React from 'react';
import { Clock, ShieldCheck, CheckCircle2, Zap, Award, Sparkles, Building2, UserCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      value: '24/7/365',
      label: 'Call Coverage',
      sublabel: 'Never misses calls during night shifts, weekends, or lunch rush hours',
      highlight: 'Zero unanswered rings'
    },
    {
      value: '92.4%',
      label: 'Automated Patient Inquiries',
      sublabel: 'Appointments, triage, insurance checks & refill requests resolved end-to-end',
      highlight: 'Without human escalation'
    },
    {
      value: '68%',
      label: 'Reduced Front Desk Workload',
      sublabel: 'Frees clinical staff to focus on in-person patient hospitality and care',
      highlight: '14+ hours saved/week per doctor'
    },
    {
      value: '< 45s',
      label: 'Average Booking Speed',
      sublabel: 'Instant EHR calendar sync eliminates endless back-and-forth phone tag',
      highlight: 'Frictionless patient experience'
    }
  ];

  return (
    <section className="py-12 bg-[#F4F7FF] border-y border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-[#E5ECFF]/80 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1F2937] tracking-wider uppercase text-[11px]">
              Compliance & Security
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">HIPAA BAA Fully Executed</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Award className="w-4 h-4 text-[#1C3496]" />
              <span className="font-semibold">SOC-2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">256-Bit Encrypted Data Flow</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Building2 className="w-4 h-4 text-[#1C3496]" />
              <span className="font-semibold">FHIR & HL7 Standard Compliant</span>
            </div>
          </div>
        </div>

        {/* 4 Core Quantitative Proof Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-[#E5ECFF] shadow-xs hover:shadow-md transition duration-200"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1C3496] tracking-tight mb-1">
                {stat.value}
              </div>
              <h3 className="text-base font-bold text-[#1F2937] mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                {stat.sublabel}
              </p>
              <div className="pt-3 border-t border-[#E5ECFF] flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{stat.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
