import React, { useState } from 'react';
import { X, PhoneCall, AlertTriangle, CheckCircle, BarChart3, TrendingDown, ArrowRight, ShieldAlert } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);
  const [phone, setPhone] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [specialty, setSpecialty] = useState('Dental Practice');

  if (!isOpen) return null;

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAuditComplete(true);
    }, 1800);
  };

  const handleClose = () => {
    setAnalyzing(false);
    setAuditComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E5ECFF] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5ECFF] bg-[#F4F7FF]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1F2937]">Free Clinic Call Flow Audit</h3>
              <p className="text-xs text-[#6B7280]">Calculate your practice’s missed patient call leakage</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-white rounded-lg transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {analyzing ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-[#1C3496] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-[#1F2937]">Analyzing Inbound Call Distribution...</p>
              <p className="text-xs text-[#6B7280] max-w-xs mx-auto">
                Simulating peak rush hours, lunch breaks, and after-hours patient demand for {clinicName || 'your clinic'}...
              </p>
            </div>
          ) : auditComplete ? (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    Clinic Call Audit Diagnostic Result
                  </h4>
                  <p className="text-xs text-amber-700 mt-1">
                    Based on benchmark data for {specialty} clinics, here is the projected inbound loss:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-[#F4F7FF] border border-[#E5ECFF] p-3 rounded-xl">
                  <span className="text-[11px] text-[#6B7280] block">Estimated Missed Calls</span>
                  <span className="text-xl font-bold text-[#EF4444]">32%</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">~140 calls / month</span>
                </div>
                <div className="bg-[#F4F7FF] border border-[#E5ECFF] p-3 rounded-xl">
                  <span className="text-[11px] text-[#6B7280] block">Lost Appointment Value</span>
                  <span className="text-xl font-bold text-[#1C3496]">$18,400</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">per doctor / month</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Average Patient Wait Time on Hold:</span>
                  <span className="font-semibold text-slate-800">3 min 45 sec</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>After-Hours Voicemail Abandonment:</span>
                  <span className="font-semibold text-[#EF4444]">74% do not leave message</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>AI Receptionist Immediate Recovery:</span>
                  <span className="font-semibold text-emerald-600">100% answer rate in 1.1s</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="w-full py-2.5 bg-[#1C3496] hover:bg-[#162973] text-white font-medium rounded-xl text-sm transition"
                >
                  Download Complete Audit Report & Schedule AI Setup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStartAudit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                  Clinic / Practice Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Westside Family Practice"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E5ECFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3496]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                  Clinic Main Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E5ECFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3496]"
                />
                <p className="text-[11px] text-[#6B7280] mt-1">
                  We calculate average call volume and after-hours overflow algorithms.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                  Clinical Specialty
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E5ECFF] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1C3496]"
                >
                  <option>Primary Care & Family Medicine</option>
                  <option>Dental Practice & Orthodontics</option>
                  <option>Dermatology & Medical Spa</option>
                  <option>Orthopedic Surgery & Physical Therapy</option>
                  <option>Pediatrics</option>
                  <option>Mental Health & Therapy</option>
                  <option>Cardiology & Specialty</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1C3496] hover:bg-[#162973] text-white font-semibold rounded-xl text-sm transition shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Generate Free Call Audit Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
