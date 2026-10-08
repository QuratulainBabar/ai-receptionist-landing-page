import React from 'react';
import { PhoneOff, CalendarX, Clock, CopySlash, FileSpreadsheet, DollarSign, ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: PhoneOff,
      title: 'Missed Patient Calls',
      badge: '34% of Calls Missed',
      description: 'Over a third of inbound calls occur after 5:00 PM, on weekends, or during peak morning rush when staff are swamped checking in arrivals.',
      impact: 'Patients hang up and call the next provider on Google within 90 seconds.'
    },
    {
      icon: CalendarX,
      title: 'Appointment Scheduling Bottlenecks',
      badge: 'Endless Phone Tag',
      description: 'Receptionists spend 8–12 minutes per call checking physician calendars, insurance policies, and reading out slots over the phone.',
      impact: 'Limits front desk capacity and frustrates patients seeking prompt access.'
    },
    {
      icon: Clock,
      title: 'Long Hold Times',
      badge: '4.2 Min Avg Wait',
      description: 'Callers placed on hold while receptionists tend to physical rooming or handle billing inquiries regularly drop off.',
      impact: 'High abandonment rate leads to negative online reviews and lost patient loyalty.'
    },
    {
      icon: CopySlash,
      title: 'Double Bookings & Human Errors',
      badge: 'Calendar Mismatches',
      description: 'Manual scheduling notes taken on scratch pads during chaos lead to double-booked exam rooms, provider fatigue, and angry patients.',
      impact: 'Creates scheduling chaos and harms doctor workflow efficiency.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Manual Administrative Overload',
      badge: '4.5 Hrs / Day Wasted',
      description: 'Qualified medical assistants and front-desk staff burn out answering the same 10 routine inquiries: directions, copays, prep instructions, and refills.',
      impact: 'Drives high medical staff turnover and ballooning overtime expenses.'
    },
    {
      icon: DollarSign,
      title: 'Lost Revenue Opportunities',
      badge: '$180,000+ Lost / Doctor / Year',
      description: 'Each unbooked new patient call represents an average lifetime clinical value of $1,200 to $4,500 depending on specialty.',
      impact: 'Silent revenue drain that marketing spend alone cannot fix.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#EF4444]">
            The Healthcare Front-Desk Dilemma
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Your Clinic Is Losing Patients <br />
            <span className="text-[#1C3496]">Before They Ever Walk Through The Door</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Medical practices invest heavily in marketing, facilities, and clinical excellence — only to leak high-intent patients through overwhelmed telephone lines.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl border border-[#E5ECFF] bg-white hover:border-[#1C3496]/40 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                      {problem.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1C3496] transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-5">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5ECFF] bg-[#F4F7FF]/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    <strong className="text-slate-800 font-semibold">Clinical Impact: </strong>
                    {problem.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concluding callout banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F4F7FF] border border-[#E5ECFF] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-[#1F2937]">
              Is your practice losing up to 30% of new patient revenue?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Run our automated phone diagnostic audit to measure your practice's exact call leakage.
            </p>
          </div>
          <a
            href="#roi-calculator"
            className="shrink-0 px-5 py-3 rounded-xl bg-[#1C3496] text-white font-semibold text-xs sm:text-sm hover:bg-[#162973] transition flex items-center gap-2"
          >
            <span>Calculate Lost Clinic Revenue</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
