import React, { useState } from 'react';
import { Calendar, Users, Clock, AlertCircle, DollarSign, Activity, CheckCircle, Search, Filter, PhoneIncoming, ArrowUpRight, ShieldCheck, Stethoscope } from 'lucide-react';

export const DoctorDashboardPreview: React.FC = () => {
  const [filterState, setFilterState] = useState<'all' | 'confirmed' | 'in-progress' | 'ai-booked'>('all');

  const appointmentsList = [
    {
      id: 'APT-101',
      patient: 'Sarah Jenkins',
      time: '10:15 AM',
      type: 'New Consult',
      status: 'Checked In',
      insurance: 'BlueCross PPO',
      source: 'AI Receptionist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: 'APT-102',
      patient: 'Marcus Vance',
      time: '11:00 AM',
      type: 'Follow-up (BP)',
      status: 'Confirmed',
      insurance: 'Aetna POS',
      source: 'AI SMS Reminder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: 'APT-103',
      patient: 'Elena Rostova',
      time: '11:30 AM',
      type: 'Post-Op Knee',
      status: 'Confirmed',
      insurance: 'UnitedHealth',
      source: 'AI Rescheduled',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: 'APT-104',
      patient: 'Arthur Pendelton',
      time: '01:15 PM',
      type: 'Recall Consult',
      status: 'Confirmed',
      insurance: 'Medicare B',
      source: 'AI Voice Outreach',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
    },
    {
      id: 'APT-105',
      patient: 'Clara Oswald',
      time: '02:00 PM',
      type: 'Cardiac Holter',
      status: 'Pending Lab',
      insurance: 'Cigna Open',
      source: 'Staff Inbound',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    }
  ];

  const filtered = appointmentsList.filter((item) => {
    if (filterState === 'all') return true;
    if (filterState === 'confirmed') return item.status === 'Confirmed' || item.status === 'Checked In';
    if (filterState === 'ai-booked') return item.source.startsWith('AI');
    return true;
  });

  return (
    <section id="dashboard" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Clinical Command Center
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Doctor Dashboard Preview <br />
            <span className="text-[#1C3496]">Full Visibility into Practice Operations</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            A unified, clutter-free cockpit designed for busy physicians and practice managers. No training required.
          </p>
        </div>

        {/* Big Premium Mockup Frame */}
        <div className="bg-slate-900 rounded-3xl p-2 sm:p-4 shadow-2xl border border-slate-800">
          <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200">
            
            {/* Top Navigation Bar of the Doctor App */}
            <div className="bg-white border-b border-[#E5ECFF] px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C3496] text-white flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#1F2937]">Apex Health Pavilion</h3>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      AthenaHealth EHR Sync: 100%
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    Logged in as: <strong>Dr. Sarah Chen, MD</strong> (Internal Medicine & Primary Care)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-[#F4F7FF] px-3 py-1.5 rounded-lg border border-[#E5ECFF]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>AI Receptionist: Answering Calls</span>
                </div>
                <div className="text-xs text-[#6B7280] font-mono hidden sm:block">
                  Today: Oct 08, 2026
                </div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 space-y-6">
              
              {/* 6 Key Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
                <div className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                  <span className="text-[11px] text-[#6B7280] block font-medium">Today's Visits</span>
                  <div className="text-xl font-extrabold text-[#1F2937] mt-1">18 Patients</div>
                  <span className="text-[10px] text-emerald-600 font-semibold mt-0.5 block">+4 AI Booked</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                  <span className="text-[11px] text-[#6B7280] block font-medium">Patients Seen</span>
                  <div className="text-xl font-extrabold text-[#1C3496] mt-1">11 / 18</div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">61% On Pace</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                  <span className="text-[11px] text-[#6B7280] block font-medium">Pending Refills</span>
                  <div className="text-xl font-extrabold text-amber-600 mt-1">3 Tasks</div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Pre-triaged by AI</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                  <span className="text-[11px] text-[#6B7280] block font-medium">Calls Covered</span>
                  <div className="text-xl font-extrabold text-[#1F2937] mt-1">142 Calls</div>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">0 Missed</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                  <span className="text-[11px] text-[#6B7280] block font-medium">Revenue Today</span>
                  <div className="text-xl font-extrabold text-emerald-700 mt-1">$5,420</div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Est. Billable</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5ECFF] shadow-2xs">
                  <span className="text-[11px] text-[#6B7280] block font-medium">Staff Time Saved</span>
                  <div className="text-xl font-extrabold text-[#1C3496] mt-1">5.4 Hours</div>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">Phone time zeroed</span>
                </div>
              </div>

              {/* Two Column Layout: Appointments Schedule + Live Activity Stream */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Schedule Table (8 cols) */}
                <div className="lg:col-span-8 bg-white rounded-2xl p-5 border border-[#E5ECFF] shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5ECFF] gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-[#1F2937]">Today's Clinical Appointment Schedule</h4>
                      <p className="text-xs text-[#6B7280]">Live synced with AthenaHealth and exam room assignments</p>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex items-center gap-1.5 bg-[#F4F7FF] p-1 rounded-lg border border-[#E5ECFF]">
                      <button
                        onClick={() => setFilterState('all')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                          filterState === 'all' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        All (5)
                      </button>
                      <button
                        onClick={() => setFilterState('confirmed')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                          filterState === 'confirmed' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        Confirmed
                      </button>
                      <button
                        onClick={() => setFilterState('ai-booked')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                          filterState === 'ai-booked' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        AI Managed
                      </button>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 font-semibold border-b border-slate-100 pb-2">
                          <th className="pb-2">Time</th>
                          <th className="pb-2">Patient</th>
                          <th className="pb-2">Encounter Type</th>
                          <th className="pb-2">Insurance</th>
                          <th className="pb-2">Status</th>
                          <th className="pb-2 text-right">Intake Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filtered.map((row) => (
                          <tr key={row.id} className="hover:bg-slate-50/80 transition">
                            <td className="py-3 font-bold text-slate-800 font-mono">{row.time}</td>
                            <td className="py-3">
                              <div className="flex items-center gap-2">
                                <img
                                  src={row.avatar}
                                  alt={row.patient}
                                  className="w-6 h-6 rounded-full object-cover"
                                />
                                <span className="font-semibold text-slate-900">{row.patient}</span>
                              </div>
                            </td>
                            <td className="py-3 text-slate-600">{row.type}</td>
                            <td className="py-3 text-slate-500 font-mono text-[11px]">{row.insurance}</td>
                            <td className="py-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                row.status === 'Checked In'
                                  ? 'bg-blue-100 text-blue-800'
                                  : row.status === 'Confirmed'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="py-3 text-right">
                              <span className="text-[11px] font-medium text-[#1C3496] bg-[#F4F7FF] px-2 py-0.5 rounded border border-[#E5ECFF]">
                                {row.source}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right: Live AI Receptionist Activity Timeline (4 cols) */}
                <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-[#E5ECFF] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5ECFF]">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#1C3496]" />
                        <h4 className="text-sm font-bold text-[#1F2937]">Live AI Activity Stream</h4>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Real-Time Feed
                      </span>
                    </div>

                    <div className="mt-4 space-y-3.5 text-xs">
                      <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                        <div className="flex justify-between text-[11px] text-slate-400 font-mono mb-1">
                          <span>Phone Call Handled</span>
                          <span>2 mins ago</span>
                        </div>
                        <p className="text-slate-800 font-semibold">
                          Booked Marcus Vance for Tomorrow 10:15 AM
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Verified BlueCross eligibility & sent digital pre-visit intake.
                        </p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between text-[11px] text-slate-400 font-mono mb-1">
                          <span>Refill Routing</span>
                          <span>8 mins ago</span>
                        </div>
                        <p className="text-slate-800 font-semibold">
                          Lisinopril 20mg Refill to CVS Pharmacy #4218
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Patient Robert Vance · Queued for doctor electronic sign-off.
                        </p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between text-[11px] text-slate-400 font-mono mb-1">
                          <span>SMS Reminder</span>
                          <span>15 mins ago</span>
                        </div>
                        <p className="text-slate-800 font-semibold">
                          Elena Rostova Confirmed 11:30 AM Visit
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Two-way SMS verified · Fasting reminder delivered.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E5ECFF] text-[11px] text-[#6B7280] flex items-center justify-between">
                    <span>Audit Log: 142 actions today</span>
                    <span className="text-emerald-700 font-semibold">100% HIPAA Secured</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
