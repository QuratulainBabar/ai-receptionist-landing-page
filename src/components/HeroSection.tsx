import React, { useState } from 'react';
import { PhoneCall, Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, Play, Mic, Star, HeartHandshake, UserCheck, Stethoscope } from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onOpenAudit }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#F4F7FF] via-white to-white">
      {/* Background medical ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1C3496]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Clinical Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5ECFF] shadow-xs text-xs font-semibold text-[#1C3496]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Next-Gen Healthcare Voice AI</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#6B7280]">HIPAA Compliant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-[1.12]">
              Never Miss Another <br />
              <span className="text-[#1C3496] relative">
                Patient Call
                <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#1C3496]/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> Again.
            </h1>

            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-xl font-normal">
              AI Receptionist answers calls, books appointments, handles patient inquiries, sends reminders, and updates schedules automatically — <span className="font-semibold text-[#1F2937]">24/7 with zero hold times.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-4 rounded-xl bg-[#1C3496] hover:bg-[#162973] text-white font-bold text-base shadow-lg shadow-[#1C3496]/25 transition duration-150 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenAudit}
                className="px-6 py-4 rounded-xl bg-white hover:bg-[#F4F7FF] text-[#1C3496] font-semibold text-base border-2 border-[#E5ECFF] transition duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Get Free Clinic Call Audit</span>
              </button>
            </div>

            {/* Micro social proof under CTAs */}
            <div className="pt-4 border-t border-[#E5ECFF] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#6B7280]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=120"
                    alt="Dr. Chen"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=120"
                    alt="Dr. Patel"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=120"
                    alt="Dr. Harrison"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {'★★★★★'}
                  </div>
                  <span className="font-semibold text-slate-800">Trusted by 450+ Clinics & Doctors</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  HIPAA Certified
                </span>
                <span>·</span>
                <span>AthenaHealth & Epic Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Interactive Doctor Dashboard & AI Call Visual */}
          <div className="lg:col-span-6 relative">
            
            {/* Interactive stage pill controls */}
            <div className="flex items-center justify-between mb-3 px-1 text-xs">
              <span className="font-bold text-[#1C3496] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Clinic Call Simulation
              </span>
              <div className="flex gap-1.5 bg-white p-1 rounded-lg border border-[#E5ECFF] shadow-xs">
                <button
                  onClick={() => setActiveStep(1)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${
                    activeStep === 1 ? 'bg-[#1C3496] text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  1. Inbound Call
                </button>
                <button
                  onClick={() => setActiveStep(2)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${
                    activeStep === 2 ? 'bg-[#1C3496] text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  2. AI Triage
                </button>
                <button
                  onClick={() => setActiveStep(3)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${
                    activeStep === 3 ? 'bg-[#1C3496] text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  3. EHR Locked
                </button>
              </div>
            </div>

            {/* Main Mockup Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-[#E5ECFF] overflow-hidden transition-all duration-300">
              
              {/* Top Bar of Doctor Clinical Suite */}
              <div className="bg-[#F4F7FF] px-4 py-3 border-b border-[#E5ECFF] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-bold text-[#1F2937]">
                    St. Jude Medical Pavilion — Doctor Command Portal
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  AI Receptionist: Online
                </div>
              </div>

              {/* Inner Dashboard Grid */}
              <div className="p-4 sm:p-5 space-y-4">
                
                {/* Active Inbound Call Card (Floating UI) */}
                <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 rounded-xl p-4 border border-[#E5ECFF] shadow-xs relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5ECFF]/70">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1C3496] text-white flex items-center justify-center relative shadow-sm">
                        <PhoneCall className="w-5 h-5 animate-bounce" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#1F2937]">Incoming Patient Call</h4>
                          <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                            Connected (0:24)
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280]">Caller: Sarah Jenkins · New Patient</p>
                      </div>
                    </div>

                    {/* Waveform indicator */}
                    <div className="flex items-center gap-1 h-6 px-2 bg-white rounded-md border border-[#E5ECFF]">
                      <span className="w-1 h-2 bg-[#1C3496] rounded-full animate-pulse" />
                      <span className="w-1 h-5 bg-[#1C3496] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-3 bg-[#1C3496] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                      <span className="w-1 h-6 bg-[#1C3496] rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
                      <span className="w-1 h-2 bg-[#1C3496] rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                    </div>
                  </div>

                  {/* AI Live Transcription Speech Bubble */}
                  <div className="mt-3 bg-white p-3 rounded-lg border border-[#E5ECFF] space-y-1.5 text-xs">
                    {activeStep === 1 && (
                      <>
                        <div className="text-[#6B7280]">
                          <strong className="text-slate-800 font-semibold">Patient:</strong> "Hi, I have severe migraines and would like to see Dr. Chen tomorrow morning if possible."
                        </div>
                        <div className="text-[#1C3496] font-medium flex items-start gap-1.5 pt-1">
                          <Mic className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#1C3496]" />
                          <span><strong>AI:</strong> "Certainly, Sarah. Dr. Chen has an opening tomorrow at 10:15 AM. Does that work for you?"</span>
                        </div>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <div className="text-[#6B7280]">
                          <strong className="text-slate-800 font-semibold">Patient:</strong> "10:15 AM is perfect! Do you accept BlueCross BlueShield PPO?"
                        </div>
                        <div className="text-[#1C3496] font-medium flex items-start gap-1.5 pt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                          <span><strong>AI:</strong> "Yes! Dr. Chen is fully in-network with BlueCross PPO. I am locking that slot for you right now."</span>
                        </div>
                      </>
                    )}
                    {activeStep === 3 && (
                      <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900 font-medium">
                        ✓ Appointment booked in AthenaHealth EHR for Dr. Sarah Chen at 10:15 AM. SMS confirmation sent to (555) 234-8901.
                      </div>
                    )}
                  </div>
                </div>

                {/* Schedule & Doctor Snapshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  
                  {/* Doctor Card */}
                  <div className="bg-[#F4F7FF] p-3 rounded-xl border border-[#E5ECFF]">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150"
                        alt="Dr. Sarah Chen"
                        className="w-11 h-11 rounded-lg object-cover border border-white shadow-xs"
                      />
                      <div>
                        <h5 className="font-bold text-[#1F2937]">Dr. Sarah Chen, MD</h5>
                        <p className="text-[11px] text-[#6B7280]">Internal Medicine</p>
                        <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded mt-0.5">
                          EHR Live Synchronized
                        </span>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#E5ECFF] flex justify-between text-[11px] text-slate-600">
                      <span>Today's Encounters: <strong>14 Patients</strong></span>
                      <span className="text-emerald-700 font-semibold">+3 Booked by AI</span>
                    </div>
                  </div>

                  {/* Real-time booking ticker */}
                  <div className="bg-white p-3 rounded-xl border border-[#E5ECFF] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-slate-700">Tomorrow's Schedule</span>
                        <span className="text-[10px] text-slate-400">92% Filled</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between bg-slate-50 px-2 py-1 rounded text-[11px]">
                          <span className="font-medium text-slate-800">09:15 AM · Follow-up</span>
                          <span className="text-slate-400">David M.</span>
                        </div>
                        <div className="flex items-center justify-between bg-blue-50/80 border border-blue-200 px-2 py-1 rounded text-[11px]">
                          <span className="font-bold text-[#1C3496]">10:15 AM · New Consult</span>
                          <span className="font-semibold text-emerald-700">Sarah J. (AI Booked)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-[#1C3496] font-semibold mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero Front-Desk Phone Interruptions</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Floating Trust Metrics Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-[#E5ECFF] flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#6B7280]">After-Hours Coverage</p>
                <p className="text-sm font-bold text-[#1F2937]">100% of Calls Answered</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
