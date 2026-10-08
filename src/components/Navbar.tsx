import React, { useState } from 'react';
import { Stethoscope, ShieldCheck, Phone, Menu, X, ArrowRight, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'AI Voice Brain', href: '#ai-brain' },
    { label: 'Scheduling Engine', href: '#scheduling' },
    { label: 'Doctor Dashboard', href: '#dashboard' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Pricing', href: '#pricing' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5ECFF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1C3496] text-white flex items-center justify-center shadow-md shadow-[#1C3496]/20 transition group-hover:scale-105">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1F2937] leading-none flex items-center gap-1.5">
                AI Receptionist
              </span>
              <span className="text-[11px] font-medium text-[#6B7280] tracking-wide mt-1">
                Autonomous Healthcare Receptionist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-[#1F2937] hover:text-[#1C3496] transition relative py-1 hover:underline underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-semibold">HIPAA Ready & BAA Signed</span>
            </div>

            <button
              onClick={onOpenAudit}
              className="text-xs font-semibold text-[#1C3496] hover:bg-[#F4F7FF] px-3.5 py-2.5 rounded-xl border border-[#E5ECFF] transition"
            >
              Get Call Audit
            </button>

            <button
              onClick={onOpenDemo}
              className="text-xs font-bold text-white bg-[#1C3496] hover:bg-[#162973] px-4 py-2.5 rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#1C3496] hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5ECFF] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#1F2937] hover:text-[#1C3496] py-2 px-3 rounded-lg hover:bg-[#F4F7FF]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E5ECFF] flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold">100% HIPAA Compliant with BAA</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#1C3496] bg-[#F4F7FF] border border-[#E5ECFF] rounded-xl text-center"
            >
              Get Free Clinic Call Audit
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-[#1C3496] rounded-xl shadow text-center flex items-center justify-center gap-2"
            >
              <span>Book Free Demo Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
