import React, { useState } from 'react';
import { PhoneCall, Bot, CalendarCheck, Calendar, FileText, LayoutDashboard, ArrowRight, Check, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Patient Calls',
      short: 'Inbound Call',
      icon: PhoneCall,
      headline: 'Patient dials your existing clinic phone number',
      description: 'Whether it is 2:00 PM during lunchtime rush or 11:30 PM on Sunday night, the call is answered in less than 2 rings with no automated mechanical menu trees (IVR) or hold music.',
      specs: [
        'Uses your existing clinic phone number via carrier forwarding',
        'Handles 100+ concurrent inbound calls simultaneously',
        'Zero hold times or abandoned voicemails'
      ],
      previewBadge: 'Carrier Forwarded · 1.1s Response'
    },
    {
      id: 'step-2',
      number: '02',
      title: 'AI Receptionist',
      short: 'Empathetic Voice AI',
      icon: Bot,
      headline: 'Speaks with natural, compassionate healthcare voice',
      description: 'The AI Receptionist understands patient intentions, clinical accents, medical terminology, and anxiety. It asks clarifying questions and triages according to your medical protocols.',
      specs: [
        'Natural human-like cadence and clinical empathy',
        'Multi-lingual (English, Spanish, Mandarin, French, Vietnamese)',
        'Red-flag emergency detection with immediate 911 warning'
      ],
      previewBadge: 'HIPAA Certified NLP Engine'
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Appointment Engine',
      short: 'Scheduling Engine',
      icon: CalendarCheck,
      headline: 'Applies doctor-specific scheduling rules & eligibility',
      description: 'The engine validates visit types (e.g. 45 min for New Consult, 15 min for Routine Follow-up), provider availability, exam room requirements, and active insurance coverage.',
      specs: [
        'Respects provider lunch buffers & administrative blocks',
        'Real-time insurance eligibility (270/271 EDI queries)',
        'New patient vs returning patient visit rules'
      ],
      previewBadge: 'Direct EHR Availability Lock'
    },
    {
      id: 'step-4',
      number: '04',
      title: 'Doctor Schedule',
      short: 'Calendar Synchronized',
      icon: Calendar,
      headline: 'Locks slot instantly in Epic, Athena, or Google Calendar',
      description: 'The appointment is written directly into your EHR schedule. Eliminates double bookings and calendar mismatches with zero manual clerical intervention.',
      specs: [
        'Bi-directional synchronization every 3 seconds',
        'Prevents overbooking and ensures doctor pacing',
        'Instant patient SMS confirmation with calendar invite'
      ],
      previewBadge: 'Bi-Directional Calendar Sync'
    },
    {
      id: 'step-5',
      number: '05',
      title: 'Patient Records',
      short: 'EHR Chart Update',
      icon: FileText,
      headline: 'Generates structured chart note & demographics',
      description: 'Transcribes chief complaints, requested symptoms, insurance policy numbers, and emergency contact details directly into the patient chart before their arrival.',
      specs: [
        'Automated chart creation or existing record lookup',
        'Digital intake form dispatched via secure SMS link',
        'Structured SOAP-ready intake notes'
      ],
      previewBadge: 'HL7 & FHIR Compliant Records'
    },
    {
      id: 'step-6',
      number: '06',
      title: 'Clinic Dashboard',
      short: 'Staff Command Portal',
      icon: LayoutDashboard,
      headline: 'Live visibility, call recordings & follow-up queue',
      description: 'Your front desk and clinic managers review live call transcripts, listen to recordings, review triage flags, and monitor revenue recovered in one unified portal.',
      specs: [
        'Full HIPAA audit log and searchable call transcripts',
        'Staff warm-transfer override with one click',
        'Automated no-show prevention reminders'
      ],
      previewBadge: 'Executive Clinic Command Center'
    }
  ];

  const current = steps[selectedStep];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F4F7FF]/70 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Architectural Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Every Patient Interaction. <br />
            <span className="text-[#1C3496]">One Intelligent Healthcare System.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            From the initial phone ring to EHR chart documentation, AI Receptionist orchestrates the entire patient intake pipeline automatically.
          </p>
        </div>

        {/* Linear Stepper Bar / Flow Diagram */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[760px] relative">
            
            {/* Connecting line */}
            <div className="absolute top-1/2 left-6 right-6 h-1 bg-[#E5ECFF] -translate-y-1/2 z-0" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(idx)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all ${
                    isSelected ? 'scale-105' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                      isSelected
                        ? 'bg-[#1C3496] text-white shadow-md shadow-[#1C3496]/30 ring-4 ring-blue-100'
                        : 'bg-white text-slate-700 border-2 border-[#E5ECFF] group-hover:border-[#1C3496]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-bold mt-2.5 ${isSelected ? 'text-[#1C3496]' : 'text-slate-600'}`}>
                    {step.title}
                  </span>
                  <span className="text-[10px] text-slate-400">Step {step.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Interactive Flow Stage Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5ECFF] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-extrabold text-white bg-[#1C3496] px-3 py-1 rounded-lg">
                  Phase {current.number}
                </span>
                <span className="text-xs font-semibold text-[#1C3496] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  {current.previewBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] leading-tight">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Key Capabilities:
                </h4>
                {current.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => setSelectedStep((prev) => (prev + 1) % steps.length)}
                  className="px-5 py-2.5 rounded-xl bg-[#1C3496] hover:bg-[#162973] text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Next Step: {steps[(selectedStep + 1) % steps.length].short}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right clinical data visualization */}
            <div className="lg:col-span-5 bg-[#F4F7FF] rounded-2xl p-6 border border-[#E5ECFF]">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5ECFF] text-xs">
                <div className="flex items-center gap-2 font-bold text-[#1F2937]">
                  <Zap className="w-4 h-4 text-[#1C3496]" />
                  <span>Clinical Data Flow Inspector</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  Status: Active
                </span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#E5ECFF]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Source Inbound Line</span>
                  <p className="text-slate-800 font-semibold font-sans text-xs">Apex Orthopedic Reception (+1 555-890-1122)</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#E5ECFF]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Protocol Action</span>
                  <p className="text-slate-800 font-sans text-xs">
                    {selectedStep === 0 && 'Caller greeted within 1.1s; identifying visit type and patient identity.'}
                    {selectedStep === 1 && 'Natural NLP parsed chief complaint: "knee flare-up post-hiking". Urgent triage: Negative.'}
                    {selectedStep === 2 && 'Querying provider rules for Dr. Harrison: 30 min Follow-up slot required.'}
                    {selectedStep === 3 && 'Slot locked Monday 11:30 AM in AthenaHealth Calendar API.'}
                    {selectedStep === 4 && 'Created EHR encounter encounter_id #89201; SMS confirmation dispatched.'}
                    {selectedStep === 5 && 'Appended to Doctor Daily Rounding Queue with full HIPAA transcript.'}
                  </p>
                </div>

                <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200">
                  <div className="flex justify-between items-center text-[11px] font-sans font-medium text-[#1C3496]">
                    <span>Security & Audit:</span>
                    <span className="font-bold text-emerald-700">AES-256 Encrypted</span>
                  </div>
                  <div className="mt-1 text-[11px] text-[#6B7280] font-sans">
                    Compliant with HIPAA Security Rule 45 CFR Part 164.
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
