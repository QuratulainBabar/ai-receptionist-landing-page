/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStats } from './components/TrustStats';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { AiBrainSection } from './components/AiBrainSection';
import { SchedulingEngine } from './components/SchedulingEngine';
import { PatientManagement } from './components/PatientManagement';
import { SmartNotifications } from './components/SmartNotifications';
import { DoctorDashboardPreview } from './components/DoctorDashboardPreview';
import { AnalyticsSection } from './components/AnalyticsSection';
import { MultiClinicSection } from './components/MultiClinicSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudySection } from './components/CaseStudySection';
import { ImplementationTimeline } from './components/ImplementationTimeline';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { AuditModal } from './components/AuditModal';
import { PhoneCall, Calendar, ArrowUp } from 'lucide-react';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2937] font-sans antialiased selection:bg-[#1C3496]/15 selection:text-[#1C3496] relative">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Navigation Header */}
      <Navbar
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <HeroSection
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* 3. Trust Statistics */}
        <TrustStats />

        {/* 4. The Problem Section */}
        <ProblemSection />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. AI Receptionist Brain (Interactive Demo Studio) */}
        <AiBrainSection />

        {/* 7. Appointment Scheduling Engine */}
        <SchedulingEngine />

        {/* 8. Patient Management System */}
        <PatientManagement />

        {/* 9. Smart Notifications & Reminders */}
        <SmartNotifications />

        {/* 10. Doctor Dashboard Preview */}
        <DoctorDashboardPreview />

        {/* 11. Analytics & ROI */}
        <AnalyticsSection />

        {/* 12. Multi-Clinic Management */}
        <MultiClinicSection />

        {/* 13. Integrations Section */}
        <IntegrationsSection />

        {/* 14. ROI Calculator */}
        <RoiCalculator onOpenDemo={() => setDemoModalOpen(true)} />

        {/* 15. Case Study */}
        <CaseStudySection />

        {/* 16. How Implementation Works (3-7 Days) */}
        <ImplementationTimeline />

        {/* 17. Pricing */}
        <PricingSection onOpenDemo={() => setDemoModalOpen(true)} />

        {/* 18. FAQ */}
        <FaqSection onOpenDemo={() => setDemoModalOpen(true)} />

        {/* 19. Final CTA Section */}
        <FinalCtaSection
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenAudit={() => setAuditModalOpen(true)}
        />
      </main>

      {/* 20. Footer */}
      <Footer
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

      {/* Floating Action Quick Access */}
      {showBackToTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fadeIn">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-[#1C3496] hover:bg-[#162973] text-white px-4 py-2.5 rounded-full shadow-lg shadow-[#1C3496]/30 text-xs font-bold transition transform hover:scale-105 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Clinic Demo</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-[#E5ECFF] shadow-md flex items-center justify-center text-slate-700 hover:text-[#1C3496] hover:bg-slate-50 transition cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
