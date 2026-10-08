import React from 'react';
import { Calendar, PhoneCall, Bot, Rocket, ShieldCheck, Check, Clock, Headphones } from 'lucide-react';

export const ImplementationTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Free Clinical Consultation',
      days: 'Day 1',
      icon: Calendar,
      desc: '30-minute workflow mapping with our clinical operations engineer. We review your current phone volume, provider schedules, and EHR requirements.',
      deliverables: ['Inbound phone audit', 'EHR connector check', 'Provider scheduling rules brief']
    },
    {
      number: '02',
      title: 'Clinic Telephony & EHR Setup',
      days: 'Days 2–3',
      icon: PhoneCall,
      desc: 'We configure zero-hardware carrier call forwarding on your existing numbers and establish secure API credentials with your EHR.',
      deliverables: ['Keep existing phone numbers', 'Bi-directional EHR calendar sync', 'Secure HIPAA BAA signed']
    },
    {
      number: '03',
      title: 'AI Training & Voice Persona',
      days: 'Days 4–5',
      icon: Bot,
      desc: 'We customize AI Receptionist with your accepted insurance carriers, copay rules, clinical FAQs, provider pacing preferences, and emergency escalation guidelines.',
      deliverables: ['Practice FAQs ingested', 'Insurance eligibility rules', 'Multi-language voice tuning']
    },
    {
      number: '04',
      title: 'Staff Dry Run & Go Live',
      days: 'Days 6–7',
      icon: Rocket,
      desc: 'We run 20+ simulated patient test calls with your practice manager. Once approved, we activate forwarding with zero clinical downtime.',
      deliverables: ['Zero downtime rollout', 'Staff command dashboard training', 'Dedicated 24/7 support lead']
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Frictionless Healthcare Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            How Implementation Works <br />
            <span className="text-[#1C3496]">From Consultation to Live Calls in 3–7 Days</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            No IT headaches, no hardware to install, and zero disruption to your daily patient schedule.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F7FF] rounded-2xl p-6 border border-[#E5ECFF] shadow-xs flex flex-col justify-between hover:border-[#1C3496]/50 transition duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#1C3496] flex items-center justify-center font-bold text-base shadow-xs border border-[#E5ECFF]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#1C3496] bg-blue-100/70 px-2.5 py-1 rounded-md">
                      {step.days}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 font-bold block mb-1">
                    Step {step.number}
                  </span>

                  <h3 className="text-base font-bold text-[#1F2937] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5ECFF] space-y-1.5 bg-white -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    What we handle:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border-2 border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1F2937]">
                Guaranteed Zero Patient Call Disruption
              </h4>
              <p className="text-xs text-[#6B7280]">
                If your practice is not delighted within the first 30 days, we waive all platform fees and transfer lines back seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-[#F4F7FF] px-4 py-2.5 rounded-xl border border-[#E5ECFF]">
            <Clock className="w-4 h-4 text-[#1C3496]" />
            <span>Average Setup: 4.2 Business Days</span>
          </div>
        </div>

      </div>
    </section>
  );
};
