import React, { useState } from 'react';
import { Building2, MapPin, Users, PhoneCall, TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, BarChart2 } from 'lucide-react';
import { clinicLocations } from '../data/landingData';

export const MultiClinicSection: React.FC = () => {
  const [selectedClinicId, setSelectedClinicId] = useState('loc-1');
  const [viewMode, setViewMode] = useState<'individual' | 'network'>('individual');

  const currentClinic = clinicLocations.find((c) => c.id === selectedClinicId) || clinicLocations[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Healthcare Group & Enterprise Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Multi-Clinic Management <br />
            <span className="text-[#1C3496]">Scale Seamlessly Across Dozens of Locations</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Centralized telecommunications and scheduling orchestration for medical groups, DSO dental chains, and hospital-affiliated clinics.
          </p>
        </div>

        {/* Interactive Multi-Location Canvas */}
        <div className="bg-[#F4F7FF] rounded-3xl p-6 sm:p-10 border border-[#E5ECFF] shadow-lg">
          
          {/* Top Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5ECFF] gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Network Facilities Management
              </span>
              <h3 className="text-lg font-bold text-[#1F2937] mt-0.5">
                40 Practicing Providers Across 4 Metropolitan Regions
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-[#E5ECFF]">
              <button
                onClick={() => setViewMode('individual')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                  viewMode === 'individual' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Branch View
              </button>
              <button
                onClick={() => setViewMode('network')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                  viewMode === 'network' ? 'bg-[#1C3496] text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Network Aggregate
              </button>
            </div>
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {clinicLocations.map((loc) => {
              const isSelected = selectedClinicId === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => {
                    setSelectedClinicId(loc.id);
                    setViewMode('individual');
                  }}
                  className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                    isSelected && viewMode === 'individual'
                      ? 'bg-white border-[#1C3496] shadow-md ring-2 ring-[#1C3496]'
                      : 'bg-white/80 border-[#E5ECFF] hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#1C3496]">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold line-clamp-1">{loc.name}</span>
                    </div>
                    <p className="text-[11px] text-[#6B7280] line-clamp-2 mb-3">
                      {loc.address}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">{loc.doctorsCount} Providers</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {loc.automatedRate} Auto
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Branch / Network Performance View */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5ECFF] shadow-xs">
            {viewMode === 'individual' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1C3496]">
                    <Building2 className="w-4 h-4" />
                    <span>Facility Diagnostic Profile</span>
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#1F2937]">
                    {currentClinic.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7280]">
                    {currentClinic.address} · Central SIP Trunk Connected
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                      <span className="text-[11px] text-slate-500 block">Daily Inbound Calls</span>
                      <strong className="text-base font-extrabold text-[#1F2937]">{currentClinic.dailyCalls}</strong>
                    </div>
                    <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                      <span className="text-[11px] text-slate-500 block">Automated Rate</span>
                      <strong className="text-base font-extrabold text-emerald-700">{currentClinic.automatedRate}</strong>
                    </div>
                    <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                      <span className="text-[11px] text-slate-500 block">AI Response Time</span>
                      <strong className="text-base font-extrabold text-[#1C3496]">{currentClinic.avgResponseTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F4F7FF] p-5 rounded-2xl border border-[#E5ECFF] space-y-3 text-xs">
                  <span className="font-bold text-[#1F2937] block">Central Routing Rules Active:</span>
                  <div className="space-y-2 text-[#6B7280]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Cross-location provider floating allowed for urgent cardiology consults.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Shared EHR chart master patient index (MPI) linked.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Dedicated regional telephone line with uniform AI brand voice.</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-extrabold text-[#1F2937]">Network-Wide Aggregated Operations</h4>
                    <p className="text-xs text-[#6B7280]">Unified telecommunications across all 4 practice hubs</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    40 Doctors · 100% HIPAA Covered
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                    <span className="text-xs text-slate-500 block">Total Inbound Calls / Mo</span>
                    <strong className="text-2xl font-extrabold text-[#1F2937]">57,840</strong>
                  </div>
                  <div className="p-4 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                    <span className="text-xs text-slate-500 block">Network Automated Rate</span>
                    <strong className="text-2xl font-extrabold text-emerald-700">93.9%</strong>
                  </div>
                  <div className="p-4 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                    <span className="text-xs text-slate-500 block">Shared Chart Lookups</span>
                    <strong className="text-2xl font-extrabold text-[#1C3496]">12,410</strong>
                  </div>
                  <div className="p-4 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF]">
                    <span className="text-xs text-slate-500 block">Est. Monthly Recovered</span>
                    <strong className="text-2xl font-extrabold text-emerald-700">$340,000+</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4 Multi-Clinic Pillar Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#E5ECFF] text-xs">
            <div className="space-y-1">
              <strong className="font-bold text-[#1F2937] block">Multiple Locations</strong>
              <p className="text-[#6B7280]">Support for unlimited practice buildings, exam suites, and operating centers under one master contract.</p>
            </div>
            <div className="space-y-1">
              <strong className="font-bold text-[#1F2937] block">Centralized Scheduling</strong>
              <p className="text-[#6B7280]">Unified availability across all branches with intelligent geographical nearest-clinic routing.</p>
            </div>
            <div className="space-y-1">
              <strong className="font-bold text-[#1F2937] block">Shared Patient Records</strong>
              <p className="text-[#6B7280]">Seamless patient chart access regardless of which clinic facility the patient visits first.</p>
            </div>
            <div className="space-y-1">
              <strong className="font-bold text-[#1F2937] block">Clinic Performance Analytics</strong>
              <p className="text-[#6B7280]">Comparative metrics to benchmark call volume, booking efficiency, and provider utilization by site.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
