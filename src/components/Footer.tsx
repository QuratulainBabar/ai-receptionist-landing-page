import React from 'react';
import { Activity, ShieldCheck, Phone, Mail, MapPin, Lock, Award, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenAudit }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1C3496] text-white flex items-center justify-center font-bold">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                AI Receptionist
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The 24/7 autonomous medical receptionist built specifically for doctors, clinics, and medical practices. Eliminating missed patient calls, phone tag, and administrative burnout with HIPAA-grade voice AI.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+1 (800) 287-2633</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@aireceptionist.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>500 Howard Street, Suite 400, San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#ai-brain" className="hover:text-white transition">AI Voice Brain</a></li>
              <li><a href="#scheduling" className="hover:text-white transition">Scheduling Engine</a></li>
              <li><a href="#dashboard" className="hover:text-white transition">Doctor Dashboard</a></li>
              <li><a href="#integrations" className="hover:text-white transition">EHR Integrations</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition">ROI Calculator</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Clinical Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Specialties</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={onOpenDemo} className="hover:text-white transition text-left">Primary Care & Family</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition text-left">Dentistry & Orthodontics</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition text-left">Dermatology & MedSpa</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition text-left">Orthopedics & Spine</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition text-left">Pediatrics</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition text-left">Cardiology & Internal</button></li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> HIPAA Certified</li>
              <li className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-blue-400" /> SOC-2 Type II</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-blue-400" /> AES-256 Encryption</li>
              <li><span className="text-slate-400">Business Associate Agreement</span></li>
              <li><span className="text-slate-400">TCPA & CTIA Compliant</span></li>
              <li><span className="text-slate-400">FHIR / HL7 Standards</span></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#case-study" className="hover:text-white transition">Clinical Case Studies</a></li>
              <li><button onClick={onOpenAudit} className="hover:text-white transition text-left">Free Call Audit</button></li>
              <li><a href="#how-it-works" className="hover:text-white transition">Implementation Guide</a></li>
              <li><a href="#faq" className="hover:text-white transition">Help Center & FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Provider Community</a></li>
            </ul>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Healthcare Disclaimer:</strong> AI Receptionist is an administrative communication, triage routing, and appointment scheduling software platform built for licensed healthcare practices. AI Receptionist does not practice medicine, provide medical advice, diagnosis, or emergency response services. Callers reporting acute or life-threatening symptoms are instructed to hang up immediately and dial 911 or visit the nearest emergency medical facility.
          </p>
          <p>
            Epic, Cerner, AthenaHealth, Kareo, eClinicalWorks, and all respective logos are registered trademarks of their respective owners and are referenced solely for technological compatibility and integration purposes.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} AI Receptionist Healthcare Technologies, Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition cursor-pointer">HIPAA BAA Agreement</span>
            <span className="hover:text-slate-300 transition cursor-pointer">Security Whitepaper</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
