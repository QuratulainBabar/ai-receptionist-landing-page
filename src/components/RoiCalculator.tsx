import React, { useState } from 'react';
import { DollarSign, Clock, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Calculator } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [monthlyCalls, setMonthlyCalls] = useState(2500);
  const [missedRate, setMissedRate] = useState(28);
  const [staffHoursPerDay, setStaffHoursPerDay] = useState(6);
  const [avgValue, setAvgValue] = useState(240);

  // Math calculations
  const totalMissedCalls = Math.round(monthlyCalls * (missedRate / 100));
  // Conservative healthcare benchmark: 40% of missed callers would have booked a visit if answered
  const recoverableAppointments = Math.round(totalMissedCalls * 0.40);
  const monthlyRevenueRecovered = recoverableAppointments * avgValue;
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;
  const hoursSavedPerMonth = Math.round(staffHoursPerDay * 22 * 0.70); // 70% of phone admin automated
  const platformCostMonthly = 699;
  const roiMultiplier = Math.max(1, Math.round((monthlyRevenueRecovered / platformCostMonthly) * 10) / 10);

  const applyPreset = (calls: number, miss: number, hours: number, value: number) => {
    setMonthlyCalls(calls);
    setMissedRate(miss);
    setStaffHoursPerDay(hours);
    setAvgValue(value);
  };

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-white border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Interactive Practice Economics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Clinic ROI Calculator <br />
            <span className="text-[#1C3496]">Quantify Your Practice's Recoverable Revenue</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Adjust the sliders to match your clinic's monthly call volume and discover the immediate financial return of 24/7 AI receptionist coverage.
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
            <span className="text-xs text-slate-400 font-medium">Quick Presets:</span>
            <button
              onClick={() => applyPreset(1000, 25, 4, 180)}
              className="px-3 py-1 bg-[#F4F7FF] hover:bg-blue-100 text-[#1C3496] font-semibold text-xs rounded-lg border border-[#E5ECFF] transition"
            >
              Solo Practice (1 Provider)
            </button>
            <button
              onClick={() => applyPreset(2500, 28, 6, 240)}
              className="px-3 py-1 bg-[#F4F7FF] hover:bg-blue-100 text-[#1C3496] font-semibold text-xs rounded-lg border border-[#E5ECFF] transition"
            >
              Group Clinic (3–5 Providers)
            </button>
            <button
              onClick={() => applyPreset(6000, 32, 10, 320)}
              className="px-3 py-1 bg-[#F4F7FF] hover:bg-blue-100 text-[#1C3496] font-semibold text-xs rounded-lg border border-[#E5ECFF] transition"
            >
              Multi-Specialty Center (6+ Providers)
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="bg-[#F4F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5ECFF] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Inputs Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5ECFF] shadow-xs">
              
              {/* Input 1: Monthly Calls */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#1F2937]">Monthly Inbound Phone Calls</label>
                  <span className="text-base font-extrabold text-[#1C3496] font-mono">
                    {monthlyCalls.toLocaleString()} calls
                  </span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="10000"
                  step="100"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1C3496]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>400</span>
                  <span>5,000</span>
                  <span>10,000+</span>
                </div>
              </div>

              {/* Input 2: Missed Calls Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#1F2937]">Estimated Missed / After-Hours Call Rate</label>
                  <span className="text-base font-extrabold text-[#EF4444] font-mono">
                    {missedRate}% missed (~{totalMissedCalls} calls)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="1"
                  value={missedRate}
                  onChange={(e) => setMissedRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1C3496]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>10% (Low)</span>
                  <span>28% (National Average)</span>
                  <span>50% (High Volume)</span>
                </div>
              </div>

              {/* Input 3: Staff Phone Hours */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#1F2937]">Front Desk Hours Spent on Phones / Day</label>
                  <span className="text-base font-extrabold text-[#1C3496] font-mono">
                    {staffHoursPerDay} hrs / day
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="1"
                  value={staffHoursPerDay}
                  onChange={(e) => setStaffHoursPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1C3496]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>2 hrs</span>
                  <span>8 hrs</span>
                  <span>16 hrs (Multiple Staff)</span>
                </div>
              </div>

              {/* Input 4: Average Appointment Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#1F2937]">Average Patient Encounter / Visit Value</label>
                  <span className="text-base font-extrabold text-emerald-700 font-mono">
                    ${avgValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="1200"
                  step="20"
                  value={avgValue}
                  onChange={(e) => setAvgValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1C3496]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>$80 (Follow-up)</span>
                  <span>$240 (Specialty Avg)</span>
                  <span>$1,200 (Surgical/Procedure)</span>
                </div>
              </div>

            </div>

            {/* Outputs Column (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1C3496] to-[#122363] rounded-2xl p-7 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    Projected Practice Return
                  </span>
                  <div className="px-2.5 py-0.5 rounded bg-emerald-400 text-slate-950 font-black text-xs font-mono">
                    {roiMultiplier}x ROI
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <span className="text-xs text-blue-200 block">Monthly Recovered Revenue</span>
                    <div className="text-4xl font-black text-emerald-300 mt-1">
                      ${monthlyRevenueRecovered.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-blue-100">
                      ~{recoverableAppointments} additional booked patient visits / month
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <span className="text-xs text-blue-200 block">Annual Revenue Boost</span>
                    <div className="text-2xl font-bold text-white mt-0.5">
                      ${annualRevenueRecovered.toLocaleString()} / year
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-blue-200 block">Staff Hours Saved</span>
                      <strong className="text-lg font-bold text-white">
                        {hoursSavedPerMonth} hrs / mo
                      </strong>
                    </div>
                    <div>
                      <span className="text-xs text-blue-200 block">Calls Captured</span>
                      <strong className="text-lg font-bold text-white">
                        100% of {monthlyCalls.toLocaleString()}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3.5 bg-white hover:bg-blue-50 text-[#1C3496] font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lock In These Returns — Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-blue-200 text-center mt-2">
                  Based on conservative 40% conversion of recovered patient calls.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
