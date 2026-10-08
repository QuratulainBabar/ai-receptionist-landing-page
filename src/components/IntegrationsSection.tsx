import React, { useState } from 'react';
import { Database, Calendar, Phone, Video, CreditCard, ShieldCheck, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';
import { integrations } from '../data/landingData';

export const IntegrationsSection: React.FC = () => {
  const [filterCat, setFilterCat] = useState('All');

  const categories = ['All', 'EHR / EMR', 'Practice Management', 'Scheduling', 'Telecom & SMS', 'Telehealth', 'Payments'];

  const filtered = integrations.filter((item) => {
    if (filterCat === 'All') return true;
    return item.category === filterCat;
  });

  return (
    <section id="integrations" className="py-20 lg:py-28 bg-[#F4F7FF]/50 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Connected Healthcare Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Native Integrations with <br />
            <span className="text-[#1C3496]">Your Existing Clinical Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            No need to replace your electronic health records, phone numbers, or calendars. AI Receptionist plugs seamlessly into your workflow in minutes.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                filterCat === cat
                  ? 'bg-[#1C3496] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-[#E5ECFF] hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E5ECFF] shadow-xs hover:border-[#1C3496]/50 transition duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FF] text-[#1C3496] flex items-center justify-center font-bold text-sm border border-[#E5ECFF]">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1C3496] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {item.type}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#1F2937]">{item.name}</h3>
                </div>
                <span className="text-[11px] font-medium text-slate-400 block mt-0.5 mb-2.5">
                  {item.category}
                </span>

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#E5ECFF] flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Instant Bi-Directional Sync
                </span>
                <span className="font-mono text-slate-400">&lt;2.4s sync</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Security & Protocols Guarantee */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5ECFF] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1F2937]">
                Don’t see your EHR or Practice Management platform listed?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                We support custom HL7, FHIR v4, SFTP feeds, and proprietary REST APIs with zero additional integration fee.
              </p>
            </div>
          </div>

          <a
            href="#faq"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#F4F7FF] text-[#1C3496] hover:bg-blue-100 font-semibold text-xs transition border border-[#E5ECFF]"
          >
            Review Security & API Docs
          </a>
        </div>

      </div>
    </section>
  );
};
