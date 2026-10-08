import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Building, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter Practice',
      badge: 'Solo Specialists',
      desc: 'Designed for single-physician practices looking to eliminate missed calls and phone tag.',
      priceMonthly: 299,
      priceAnnual: 239,
      callsIncluded: 'Up to 800 inbound patient calls / mo',
      features: [
        '1 Practicing Doctor / Provider Schedule',
        '24/7 Call Answering & Overflow Coverage',
        'Direct Calendar & EHR Sync (Athena, Google, O365)',
        'Automated Two-Way SMS Reminders',
        'Custom Clinic FAQs & Directions Voice Engine',
        'HIPAA Compliance with Signed BAA',
        'Email & Chat Technical Support'
      ],
      popular: false
    },
    {
      name: 'Growth Clinic',
      badge: 'Most Popular',
      desc: 'The complete autonomous reception suite for high-volume 2–5 provider medical practices.',
      priceMonthly: 699,
      priceAnnual: 559,
      callsIncluded: 'Up to 2,500 inbound patient calls / mo',
      features: [
        'Up to 5 Doctor / Provider Schedules',
        'Everything in Starter, plus:',
        'Real-Time 270/271 Insurance Verification',
        'Smart Rescheduling & Waitlist Backfilling',
        'Prescription Refill Request Triage Queue',
        'Multi-Language Support (English + Spanish)',
        'Doctor Daily Triage & Follow-up Command Center',
        'Dedicated Medical Account Manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise Network',
      badge: 'Multi-Location Practices',
      desc: 'Custom infrastructure for multi-specialty centers, DSOs, surgery centers, and healthcare groups.',
      priceMonthly: 1499,
      priceAnnual: 1199,
      callsIncluded: 'Unlimited patient calls & minutes',
      features: [
        'Unlimited Providers & Exam Rooms',
        'Multi-Clinic Central Routing & Float Rules',
        'Enterprise EHR Integration (Epic, Cerner, Allscripts)',
        'Custom Telecom Trunking & Regional Voice Personas',
        'Shared Master Patient Index (MPI) Lookup',
        'Executive Cross-Branch Analytics Suite',
        'Custom Business Associate Agreement (BAA)',
        'Dedicated 24/7 Priority SLA & Onsite Onboarding'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F4F7FF]/50 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Transparent Healthcare Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Predictable Plans for <br />
            <span className="text-[#1C3496]">Practices of Every Size</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Costs less than 15% of a single human receptionist, while delivering 24/7 coverage with zero sick days or overtime.
          </p>

          {/* Billing Interval Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-[#1F2937]' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-13 h-7 bg-[#1C3496] rounded-full p-1 transition-colors relative cursor-pointer"
              aria-label="Toggle annual or monthly billing"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-[#1F2937]' : 'text-slate-400'}`}>
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                Save 20% + Setup Waived
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 transition-all duration-200 flex flex-col justify-between relative ${
                  plan.popular
                    ? 'bg-white border-2 border-[#1C3496] shadow-xl ring-4 ring-[#1C3496]/10'
                    : 'bg-white border border-[#E5ECFF] shadow-xs hover:border-[#1C3496]/40'
                }`}
              >
                {/* Popular Banner */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1C3496] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
                    Most Popular for Medical Clinics
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#1F2937]">{plan.name}</h3>
                    <span className="text-[11px] font-semibold text-[#1C3496] bg-blue-50 px-2 py-0.5 rounded">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#1F2937]">${price}</span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {isAnnual ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Billed month-to-month'}
                    </span>
                  </div>

                  {/* Inbound volume line */}
                  <div className="p-2.5 bg-[#F4F7FF] rounded-xl text-xs font-semibold text-[#1C3496] mb-6 border border-[#E5ECFF]">
                    {plan.callsIncluded}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2 text-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#1C3496] hover:bg-[#162973] text-white shadow-md shadow-[#1C3496]/20'
                        : 'bg-[#F4F7FF] hover:bg-blue-100 text-[#1C3496] border border-[#E5ECFF]'
                    }`}
                  >
                    <span>Get Started with {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Founding clinic setup fee waived · Cancel anytime
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom enterprise contact banner */}
        <div className="mt-12 text-center text-xs text-[#6B7280]">
          Need custom enterprise pricing for 20+ locations or hospital systems?{' '}
          <button
            onClick={onOpenDemo}
            className="text-[#1C3496] font-bold underline underline-offset-4 hover:text-[#162973] cursor-pointer"
          >
            Speak with our Clinical Enterprise Architect
          </button>
        </div>

      </div>
    </section>
  );
};
