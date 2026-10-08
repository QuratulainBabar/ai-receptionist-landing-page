import React, { useState } from 'react';
import { User, FileText, Phone, MessageSquare, Clock, ShieldCheck, Heart, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { samplePatients } from '../data/landingData';

export const PatientManagement: React.FC = () => {
  const [selectedPatientId, setSelectedPatientId] = useState('PT-9021');
  const [activeTab, setActiveTab] = useState<'timeline' | 'history' | 'communication' | 'recall'>('timeline');

  const patient = samplePatients.find((p) => p.id === selectedPatientId) || samplePatients[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Integrated Healthcare CRM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Patient Management System <br />
            <span className="text-[#1C3496]">Complete Longitudinal Patient Records</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Every inbound phone conversation, symptom description, and appointment history connects directly to the patient's verified EHR profile.
          </p>
        </div>

        {/* Patient Dossier Container */}
        <div className="bg-[#F4F7FF] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5ECFF] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Patient Selector List */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Active Clinic Patient Charts
              </span>

              {samplePatients.map((p) => {
                const isSelected = p.id === selectedPatientId;
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPatientId(p.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#1C3496] shadow-md ring-1 ring-[#1C3496]'
                        : 'bg-white/80 border-[#E5ECFF] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-[#1F2937]">{p.name}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        p.status === 'Confirmed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : p.status === 'Pending Lab'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {p.status}
                      </span>
                    </div>

                    <div className="text-xs text-[#6B7280] space-y-0.5">
                      <div>Chart: <strong className="text-slate-700 font-mono">{p.id}</strong> · {p.dob}</div>
                      <div>Doctor: <strong className="text-slate-700">{p.doctor}</strong></div>
                      <div className="text-[11px] text-slate-400 mt-1 truncate">Next: {p.upcomingVisit}</div>
                    </div>
                  </div>
                );
              })}

              <div className="p-4 bg-white rounded-2xl border border-[#E5ECFF] text-xs text-[#6B7280] space-y-2 mt-4">
                <div className="font-bold text-[#1F2937] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>HIPAA Security Audit Trail</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  All chart reads, phone logs, and transcription views are cryptographically logged with provider NPI and timestamp.
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Patient Profile & Tabbed Records */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5ECFF] shadow-xs flex flex-col justify-between">
              <div>
                
                {/* Patient Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5ECFF]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#1C3496] text-white flex items-center justify-center font-bold text-lg">
                      {patient.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-[#1F2937]">{patient.name}</h3>
                        <span className="text-xs font-mono text-slate-400">({patient.id})</span>
                      </div>
                      <p className="text-xs text-[#6B7280]">
                        {patient.dob} · {patient.phone}
                      </p>
                      <p className="text-xs font-semibold text-[#1C3496] mt-0.5">
                        Insurance: {patient.insurance} ({patient.policyId})
                      </p>
                    </div>
                  </div>

                  <div className="text-right sm:text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Upcoming Appointment</span>
                    <span className="text-sm font-bold text-emerald-700">{patient.upcomingVisit}</span>
                    <span className="text-xs text-slate-500 block">{patient.doctor}</span>
                  </div>
                </div>

                {/* Sub-tabs */}
                <div className="flex items-center gap-2 border-b border-[#E5ECFF] pt-4 pb-2 text-xs font-semibold overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('timeline')}
                    className={`px-3 py-1.5 rounded-lg transition ${
                      activeTab === 'timeline'
                        ? 'bg-[#1C3496] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Appointment Timeline
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`px-3 py-1.5 rounded-lg transition ${
                      activeTab === 'history'
                        ? 'bg-[#1C3496] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Visit History
                  </button>
                  <button
                    onClick={() => setActiveTab('communication')}
                    className={`px-3 py-1.5 rounded-lg transition ${
                      activeTab === 'communication'
                        ? 'bg-[#1C3496] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Communication History
                  </button>
                  <button
                    onClick={() => setActiveTab('recall')}
                    className={`px-3 py-1.5 rounded-lg transition ${
                      activeTab === 'recall'
                        ? 'bg-[#1C3496] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Follow-up Tracking
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="pt-6">
                  {activeTab === 'timeline' && (
                    <div className="space-y-4">
                      <div className="text-xs font-bold text-slate-700">Chronological Care Timeline</div>
                      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E5ECFF]">
                        {patient.timeline.map((item, idx) => (
                          <div key={idx} className="relative group">
                            <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#1C3496] ring-4 ring-blue-50" />
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-bold text-[#1F2937]">{item.event}</span>
                              <span className="text-[11px] text-slate-400 font-mono">{item.date}</span>
                            </div>
                            <p className="text-xs text-[#6B7280] leading-relaxed bg-[#F4F7FF] p-2.5 rounded-lg border border-[#E5ECFF]">
                              {item.note}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                        <div className="flex justify-between font-bold text-[#1F2937]">
                          <span>Encounter: Annual Comprehensive Physical</span>
                          <span className="text-slate-400">Oct 02, 2026</span>
                        </div>
                        <p className="text-slate-600 mt-1">Provider: {patient.doctor} · Clinic Room 4B</p>
                        <p className="text-slate-600 mt-1 font-mono text-[11px]">ICD-10: I10 (Essential Hypertension), E78.5 (Hyperlipidemia)</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between font-bold text-[#1F2937]">
                          <span>Previous Encounter: Follow-up Medication Titration</span>
                          <span className="text-slate-400">Jun 14, 2026</span>
                        </div>
                        <p className="text-slate-600 mt-1">Patient tolerated Lisinopril 20mg well; blood pressure target achieved.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'communication' && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
                        <div className="flex justify-between font-bold text-[#1C3496]">
                          <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" />
                            AI Inbound Voice Call (3 min 12 sec)
                          </span>
                          <span className="text-slate-400">Oct 08, 08:14 AM</span>
                        </div>
                        <p className="text-slate-700 mt-1">
                          Patient inquired about lab fasting. AI instructed 8-hour water-only fast and verified appointment slot.
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span className="flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                            Two-Way SMS Reminder
                          </span>
                          <span className="text-slate-400">Oct 07, 04:00 PM</span>
                        </div>
                        <p className="text-slate-600 mt-1">
                          "St. Jude Clinic: Hi Marcus, reply 1 to confirm your visit tomorrow with Dr. Chen at 9:30 AM." Patient replied: "1".
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'recall' && (
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-2">
                      <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        <span>Automated Patient Recall Protocol Configured</span>
                      </div>
                      <p className="text-emerald-800">
                        Scheduled for automated 6-month preventive screening outreach on <strong>April 02, 2027</strong>.
                        AI Receptionist will proactively contact the patient via SMS and smart voice call to secure their follow-up booking.
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom chief complaint tag */}
              <div className="mt-6 pt-4 border-t border-[#E5ECFF] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
                <div>
                  <strong className="text-slate-800 font-semibold">Current Chief Complaint: </strong>
                  <span>{patient.chiefComplaint}</span>
                </div>
                <span className="text-emerald-700 font-semibold shrink-0">
                  ✓ Verified in EHR
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
