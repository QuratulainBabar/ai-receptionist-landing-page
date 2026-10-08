import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Building2, Stethoscope, Mail, Phone, User, ShieldCheck } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    specialty: 'Primary Care / Family Medicine',
    providersCount: '2-5 Providers',
    ehrSystem: 'AthenaHealth',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E5ECFF] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5ECFF] bg-[#F4F7FF]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1C3496] text-white flex items-center justify-center font-bold text-sm">
              AR
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1F2937]">Book a 1-on-1 Clinic AI Demo</h3>
              <p className="text-xs text-[#6B7280]">See how AI Receptionist handles live patient calls for your specialty</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-white rounded-lg transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-[#1F2937] mb-2">Demo Consultation Reserved!</h4>
              <p className="text-sm text-[#6B7280] max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-slate-800">{formData.name || 'Doctor'}</span>. A healthcare AI specialist has reserved your personalized walkthrough for <span className="font-semibold text-slate-800">{formData.clinicName || 'your practice'}</span>.
              </p>
              
              <div className="bg-[#F4F7FF] border border-[#E5ECFF] rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Practice Specialty:</span>
                  <span className="font-semibold text-slate-800">{formData.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Practice Size:</span>
                  <span className="font-semibold text-slate-800">{formData.providersCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target EHR Integration:</span>
                  <span className="font-semibold text-slate-800">{formData.ehrSystem}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Confirmation Sent To:</span>
                  <span className="font-semibold text-slate-800">{formData.email || 'Provided email'}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 bg-emerald-50 py-2 px-3 rounded-lg border border-emerald-200 w-fit mx-auto mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Founding Practice Setup Fee Waived ($1,500 value)</span>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#1C3496] hover:bg-[#162973] text-white font-medium rounded-xl transition shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Your Full Name & Title *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Arthur Hayes, MD"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5ECFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3496] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="doctor@apexclinic.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5ECFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3496] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Clinic / Practice Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Apex Specialty Medical Group"
                      value={formData.clinicName}
                      onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5ECFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3496] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Direct Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="(555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5ECFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3496] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Specialty
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs border border-[#E5ECFF] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1C3496]"
                  >
                    <option>Primary Care / Family</option>
                    <option>Dentistry / Orthodontics</option>
                    <option>Dermatology & Aesthetics</option>
                    <option>Pediatrics</option>
                    <option>Cardiology</option>
                    <option>Orthopedics & Spine</option>
                    <option>Mental Health / Psychiatry</option>
                    <option>Multi-Specialty Center</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Practicing Doctors
                  </label>
                  <select
                    value={formData.providersCount}
                    onChange={(e) => setFormData({ ...formData, providersCount: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs border border-[#E5ECFF] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1C3496]"
                  >
                    <option>Solo Practitioner (1)</option>
                    <option>2 - 5 Providers</option>
                    <option>6 - 15 Providers</option>
                    <option>16+ Multi-location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1">
                    Current EHR / EMR
                  </label>
                  <select
                    value={formData.ehrSystem}
                    onChange={(e) => setFormData({ ...formData, ehrSystem: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs border border-[#E5ECFF] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1C3496]"
                  >
                    <option>AthenaHealth</option>
                    <option>Epic Systems</option>
                    <option>Cerner / Oracle Health</option>
                    <option>eClinicalWorks</option>
                    <option>Kareo / Tebra</option>
                    <option>Google / Outlook Cal</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1C3496] hover:bg-[#162973] text-white font-semibold rounded-xl transition shadow-md shadow-[#1C3496]/20 flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Demo Walkthrough</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#6B7280] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  HIPAA BAA Guaranteed
                </span>
                <span>·</span>
                <span>Zero hardware required</span>
                <span>·</span>
                <span>No credit card needed</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
