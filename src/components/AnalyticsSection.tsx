import React, { useState } from 'react';
import { PhoneCall, CalendarCheck, TrendingDown, Clock, DollarSign, Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'month' | 'quarter' | 'year'>('month');

  const metricsData = {
    month: {
      callsAnswered: '3,840',
      callsGrowth: '+100% (Zero missed)',
      appointmentsBooked: '842',
      appointmentsGrowth: '+42% vs manual lines',
      noShowsReduced: '38%',
      noShowsDetail: 'Dropped from 19% to 4.2%',
      hoursSaved: '154 hrs',
      hoursDetail: '~38 hrs / week front desk',
      revenueRecovered: '$94,200',
      revenueDetail: 'Calculated at $220 avg encounter',
      satisfaction: '98.4%',
      satisfactionDetail: 'Post-call survey CSAT'
    },
    quarter: {
      callsAnswered: '11,520',
      callsGrowth: '+100% coverage',
      appointmentsBooked: '2,526',
      appointmentsGrowth: '+44% vs previous quarter',
      noShowsReduced: '39%',
      noShowsDetail: 'Sustained sub-5% no-show rate',
      hoursSaved: '462 hrs',
      hoursDetail: 'Saved 2.5 full-time administrative roles',
      revenueRecovered: '$282,600',
      revenueDetail: 'Direct incremental encounter billings',
      satisfaction: '98.6%',
      satisfactionDetail: 'Based on 4,100+ patient reviews'
    },
    year: {
      callsAnswered: '46,080',
      callsGrowth: '+100% coverage',
      appointmentsBooked: '10,104',
      appointmentsGrowth: '+46% year-over-year practice expansion',
      noShowsReduced: '41%',
      noShowsDetail: 'Over 1,200 prevented cancellations',
      hoursSaved: '1,848 hrs',
      hoursDetail: 'Returned entirely to patient care',
      revenueRecovered: '$1,130,400',
      revenueDetail: 'Validated across 8 clinic locations',
      satisfaction: '98.8%',
      satisfactionDetail: 'Industry leading patient retention'
    }
  };

  const current = metricsData[timeframe];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FF]/60 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
              Measurable Clinical Performance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
              See Exactly How Much Time <br />
              <span className="text-[#1C3496]">and Revenue AI Saves Your Practice</span>
            </h2>
            <p className="text-base text-[#6B7280]">
              Real-time analytics transparently benchmarked against your practice’s historical performance.
            </p>
          </div>

          {/* Timeframe segmented control */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#E5ECFF] shadow-xs">
            <button
              onClick={() => setTimeframe('month')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition ${
                timeframe === 'month' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeframe('quarter')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition ${
                timeframe === 'quarter' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Last 90 Days
            </button>
            <button
              onClick={() => setTimeframe('year')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition ${
                timeframe === 'year' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Year Impact
            </button>
          </div>
        </div>

        {/* 6 Core Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Calls Answered */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5ECFF] shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1C3496] flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                100% Answer Rate
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              {current.callsAnswered}
            </div>
            <h3 className="text-sm font-bold text-[#1C3496] mt-1 mb-2">Calls Answered 24/7</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Every ring answered in under 2 rings with zero busy signals or abandoned voicemails.
            </p>
            <div className="pt-4 mt-4 border-t border-[#E5ECFF] text-[11px] font-semibold text-emerald-700">
              {current.callsGrowth}
            </div>
          </div>

          {/* 2. Appointments Booked */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5ECFF] shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Direct EHR Lock
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              {current.appointmentsBooked}
            </div>
            <h3 className="text-sm font-bold text-[#1C3496] mt-1 mb-2">Appointments Booked</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              New patient consultations and recall follow-ups safely scheduled right into doctor calendar templates.
            </p>
            <div className="pt-4 mt-4 border-t border-[#E5ECFF] text-[11px] font-semibold text-emerald-700">
              {current.appointmentsGrowth}
            </div>
          </div>

          {/* 3. No-Shows Reduced */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5ECFF] shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <TrendingDown className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                Two-Way Confirmations
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              -{current.noShowsReduced}
            </div>
            <h3 className="text-sm font-bold text-[#1C3496] mt-1 mb-2">No-Shows Reduced</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Two-way conversational SMS alerts and gentle phone check-ins virtually eliminate empty doctor chairs.
            </p>
            <div className="pt-4 mt-4 border-t border-[#E5ECFF] text-[11px] font-semibold text-slate-700">
              {current.noShowsDetail}
            </div>
          </div>

          {/* 4. Staff Hours Saved */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5ECFF] shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Staff Burnout Prevented
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              {current.hoursSaved}
            </div>
            <h3 className="text-sm font-bold text-[#1C3496] mt-1 mb-2">Staff Hours Saved</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Front-desk and medical assistants are relieved from phone fatigue to focus on clinical patient care.
            </p>
            <div className="pt-4 mt-4 border-t border-[#E5ECFF] text-[11px] font-semibold text-slate-700">
              {current.hoursDetail}
            </div>
          </div>

          {/* 5. Revenue Recovered */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5ECFF] shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                Pure Net Profit
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#10B981] tracking-tight">
              {current.revenueRecovered}
            </div>
            <h3 className="text-sm font-bold text-[#1C3496] mt-1 mb-2">Revenue Recovered</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Captured after-hours and overflow callers who would otherwise have booked with competing practices.
            </p>
            <div className="pt-4 mt-4 border-t border-[#E5ECFF] text-[11px] font-semibold text-emerald-700">
              {current.revenueDetail}
            </div>
          </div>

          {/* 6. Patient Satisfaction */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5ECFF] shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                Patient Approved
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
              {current.satisfaction}
            </div>
            <h3 className="text-sm font-bold text-[#1C3496] mt-1 mb-2">Patient Satisfaction (CSAT)</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Patients rave about immediate access, clear answers to insurance inquiries, and zero phone hold music.
            </p>
            <div className="pt-4 mt-4 border-t border-[#E5ECFF] text-[11px] font-semibold text-slate-700">
              {current.satisfactionDetail}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
