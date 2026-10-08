import React, { useState } from 'react';
import { TrendingUp, ArrowRight, CheckCircle2, Star, Quote, Building2, Stethoscope, Award } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  const comparisonData = [
    {
      metric: 'Calls Answered',
      before: '68%',
      beforeVal: 68,
      after: '99.4%',
      afterVal: 99.4,
      note: '32% previously lost to voicemail & rush-hour hang-ups'
    },
    {
      metric: 'No-Show Rate',
      before: '18.2%',
      beforeVal: 18.2,
      after: '4.1%',
      afterVal: 4.1,
      note: 'Conversational 2-way SMS alerts eliminated empty doctor chairs'
    },
    {
      metric: 'Front-Desk Phone Time',
      before: '32 hrs/wk',
      beforeVal: 80,
      after: '4.5 hrs/wk',
      afterVal: 15,
      note: 'Staff redirected 27+ hours to in-clinic patient care'
    },
    {
      metric: 'Monthly Completed Bookings',
      before: '460 visits',
      beforeVal: 460,
      after: '653 visits',
      afterVal: 653,
      note: '+42% growth in billable clinical encounters in 90 days'
    }
  ];

  return (
    <section id="case-study" className="py-20 lg:py-28 bg-[#F4F7FF]/50 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Clinical Evidence & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            How A Medical Clinic Increased <br />
            <span className="text-[#1C3496]">Appointment Bookings By 42%</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Apex Specialty Clinic & Orthopedics unlocked $514,000 in annual billings while dramatically cutting receptionist burnout.
          </p>
        </div>

        {/* Case Study Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5ECFF] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Clinic Profile & Testimonial (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Practice Profile Box */}
              <div className="bg-[#F4F7FF] p-5 rounded-2xl border border-[#E5ECFF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1C3496]">
                  <Building2 className="w-4 h-4" />
                  <span>Practice Overview</span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937]">
                  Apex Specialty Clinic & Orthopedics
                </h3>
                <div className="text-xs text-[#6B7280] space-y-1">
                  <div>• 5 Board-Certified Orthopedic Surgeons & PAs</div>
                  <div>• 2 Surgical & Outpatient Clinical Facilities</div>
                  <div>• AthenaHealth EHR & Voip Telecom Integration</div>
                </div>
              </div>

              {/* Quote Card */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E5ECFF] shadow-xs space-y-4">
                <Quote className="w-8 h-8 text-[#1C3496]/20" />
                <p className="text-xs sm:text-sm text-[#1F2937] italic leading-relaxed">
                  "Before AI Receptionist, our phones were constantly ringing off the hook while patients stood waiting at the reception counter. Within 2 weeks of deploying AI Receptionist, our unanswered call rate dropped to zero, our no-shows evaporated, and we added 193 new patient visits in our very first quarter without hiring additional staff."
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150"
                    alt="Dr. Robert Hayes, MD"
                    className="w-12 h-12 rounded-full object-cover border border-[#1C3496]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#1F2937]">Dr. Robert Hayes, MD</h4>
                    <p className="text-[11px] text-[#6B7280]">Chief Medical Officer, Apex Orthopedics</p>
                    <div className="flex text-amber-400 text-xs mt-0.5">★★★★★</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Before vs After Interactive Comparison & Graph (7 cols) */}
            <div className="lg:col-span-7 bg-[#F4F7FF] rounded-2xl p-6 sm:p-8 border border-[#E5ECFF] space-y-6">
              
              {/* Header with state toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5ECFF] gap-3">
                <div>
                  <h4 className="text-sm font-bold text-[#1F2937]">Clinical Outcome Comparison</h4>
                  <p className="text-xs text-[#6B7280]">Real audited metrics 90 days post-implementation</p>
                </div>

                <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E5ECFF]">
                  <button
                    onClick={() => setActiveTab('before')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                      activeTab === 'before' ? 'bg-slate-700 text-white' : 'text-slate-600'
                    }`}
                  >
                    Before AI Receptionist
                  </button>
                  <button
                    onClick={() => setActiveTab('after')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                      activeTab === 'after' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    After AI Receptionist
                  </button>
                </div>
              </div>

              {/* Comparison Metric Bars */}
              <div className="space-y-4">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                    <div className="flex justify-between items-center mb-1 text-xs font-bold">
                      <span className="text-[#1F2937]">{item.metric}</span>
                      <div className="flex items-center gap-3">
                        <span className={`line-through text-slate-400 ${activeTab === 'before' ? 'text-base font-extrabold text-red-600 no-underline' : ''}`}>
                          {item.before}
                        </span>
                        <span className={`text-base font-extrabold text-emerald-700 ${activeTab === 'after' ? 'scale-105' : 'opacity-60'}`}>
                          {item.after}
                        </span>
                      </div>
                    </div>

                    {/* Progress representation */}
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex my-2">
                      <div
                        className="h-full bg-slate-300 transition-all duration-500"
                        style={{ width: `${Math.min(100, (item.beforeVal / (item.afterVal || 1)) * 50)}%` }}
                      />
                      <div
                        className="h-full bg-[#1C3496] transition-all duration-500"
                        style={{ width: `${Math.min(100, ((item.afterVal - item.beforeVal) / (item.afterVal || 1)) * 50)}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-[#6B7280]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Net bottom summary card */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-900 font-bold block">Annual Practice Impact</span>
                  <span className="text-[11px] text-emerald-700">+193 Net New Consultations / Quarter</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-emerald-700">+$42,800 / mo</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
