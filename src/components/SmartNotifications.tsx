import React, { useState } from 'react';
import { MessageSquare, PhoneCall, BellRing, AlertOctagon, Stethoscope, CheckCheck, Clock, Send } from 'lucide-react';

export const SmartNotifications: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'sms' | 'call' | 'followup' | 'noshow' | 'doctor'>('sms');

  const notificationTypes = [
    {
      id: 'sms',
      title: 'SMS Reminders',
      icon: MessageSquare,
      headline: 'Conversational Two-Way SMS',
      desc: 'Patients reply in plain natural English or Spanish to confirm, request rescheduling, or ask questions.'
    },
    {
      id: 'call',
      title: 'Call Reminders',
      icon: PhoneCall,
      headline: 'Gentle Voice Check-Ins',
      desc: 'For elderly patients or non-smartphone users, AI Receptionist calls 48 hours prior with courteous confirmation.'
    },
    {
      id: 'followup',
      title: 'Follow-up Alerts',
      icon: BellRing,
      headline: 'Post-Procedure Recovery Care',
      desc: 'Automated 48-hour post-op calls inquire about patient discomfort, healing, and remind about medications.'
    },
    {
      id: 'noshow',
      title: 'Missed Appointment Alerts',
      icon: AlertOctagon,
      headline: 'Instant No-Show Re-Booking',
      desc: 'If a patient misses their slot, AI Receptionist automatically sends a caring message within 15 mins to rebook.'
    },
    {
      id: 'doctor',
      title: 'Doctor Notifications',
      icon: Stethoscope,
      headline: 'Clinical Urgent Flags',
      desc: 'Direct alerts routed to provider inboxes or front desk when high-acuity symptoms are detected.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FF]/50 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Patient Engagement & Retention
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Smart Notifications & Reminders <br />
            <span className="text-[#1C3496]">Slash No-Shows by up to 38%</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Proactive, multi-channel outreach that respects patient communication preferences and keeps doctor schedules full.
          </p>
        </div>

        {/* Interactive Channel Picker */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {notificationTypes.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedType(item.id as any)}
                className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#1C3496] text-white border-[#1C3496] shadow-md shadow-[#1C3496]/20'
                    : 'bg-white text-slate-700 border-[#E5ECFF] hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-white' : 'text-[#1C3496]'}`} />
                <span className="text-xs font-bold">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Device Preview Canvas */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5ECFF] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800">
                
                {/* Dynamic Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                {/* Phone Screen */}
                <div className="bg-[#F8FAFC] rounded-[32px] overflow-hidden border border-slate-700 flex flex-col min-h-[440px]">
                  
                  {/* Phone Header */}
                  <div className="bg-[#1C3496] text-white p-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-[10px]">
                        AR
                      </div>
                      <div>
                        <div className="font-bold text-xs">St. Jude Medical Group</div>
                        <div className="text-[10px] text-blue-200">Verified Healthcare Line</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Active</span>
                  </div>

                  {/* Phone Messages Stream */}
                  <div className="p-3.5 space-y-3 flex-1 overflow-y-auto text-xs">
                    {selectedType === 'sms' && (
                      <>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs max-w-[85%] space-y-1">
                          <p className="text-slate-800">
                            Hi Marcus, this is St. Jude Family Medicine. You have an upcoming appointment with Dr. Sarah Chen tomorrow, Thursday at 10:15 AM.
                          </p>
                          <p className="text-slate-800 font-semibold pt-1">
                            Reply 1 to Confirm, or Reply 2 to Reschedule.
                          </p>
                          <span className="text-[9px] text-slate-400 block text-right">09:00 AM</span>
                        </div>

                        <div className="bg-[#1C3496] text-white p-3 rounded-2xl rounded-tr-none max-w-[70%] ml-auto shadow-2xs">
                          <p>1</p>
                          <span className="text-[9px] text-blue-200 block text-right mt-1">09:02 AM · Sent</span>
                        </div>

                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs max-w-[85%] space-y-1">
                          <p className="text-slate-800">
                            Thank you! Your visit is confirmed. Fasting instructions: Please drink only water for 8 hours prior. Need directions? Tap maps.app/stjude
                          </p>
                          <span className="text-[9px] text-slate-400 block text-right">09:02 AM</span>
                        </div>
                      </>
                    )}

                    {selectedType === 'call' && (
                      <div className="py-8 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto animate-pulse shadow-lg">
                          <PhoneCall className="w-7 h-7" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-slate-900">Dr. Chen's Office Calling</h5>
                          <p className="text-[11px] text-slate-500">+1 (555) 234-8900 · 01:24</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-left text-[11px] text-slate-700">
                          "Hello Arthur! Calling to confirm your cardiology checkup with Dr. Patel on Friday at 2:15 PM. Press 1 to confirm, or hold to speak with our receptionist."
                        </div>
                      </div>
                    )}

                    {selectedType === 'followup' && (
                      <>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs max-w-[85%] space-y-1">
                          <p className="text-slate-800">
                            Hi Elena, Dr. Harrison's team checking in! It's day 2 after your orthopedic knee injection. How is your discomfort on a scale of 1-10?
                          </p>
                          <span className="text-[9px] text-slate-400 block text-right">11:15 AM</span>
                        </div>
                        <div className="bg-[#1C3496] text-white p-3 rounded-2xl rounded-tr-none max-w-[70%] ml-auto">
                          <p>Around 2, feeling much better!</p>
                          <span className="text-[9px] text-blue-200 block text-right mt-1">11:20 AM</span>
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs max-w-[85%]">
                          <p className="text-slate-800">
                            Wonderful to hear! Continue elevation. If pain increases above 5, call us directly.
                          </p>
                        </div>
                      </>
                    )}

                    {selectedType === 'noshow' && (
                      <div className="space-y-3">
                        <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl text-[11px] text-amber-900">
                          <strong>Missed Appointment Detected (10:15 AM)</strong>
                          <p className="mt-1">Automated care recovery triggered at 10:30 AM.</p>
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs space-y-1">
                          <p className="text-slate-800">
                            Hi David, we missed you today at your scheduled appointment with Dr. Chen. Is everything okay? Tap here to reschedule with 1-tap: rebook.aireceptionist.com/dv89
                          </p>
                          <span className="text-[9px] text-slate-400 block text-right">10:30 AM</span>
                        </div>
                      </div>
                    )}

                    {selectedType === 'doctor' && (
                      <div className="space-y-3">
                        <div className="bg-red-50 border border-red-200 p-3.5 rounded-2xl text-[11px] text-red-900 space-y-1">
                          <div className="flex items-center gap-1.5 font-bold text-red-800">
                            <AlertOctagon className="w-4 h-4 text-red-600" />
                            <span>URGENT Clinical Triage Flag</span>
                          </div>
                          <p>
                            Caller reported acute chest tightness and shortness of breath during routine booking inquiry.
                          </p>
                          <div className="pt-2 text-slate-800 text-[10px] space-y-0.5">
                            <div>• Caller advised to dial 911 immediately</div>
                            <div>• Chart tagged #URGENT in AthenaHealth</div>
                            <div>• Dr. Patel on-call alerted via push notification</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Phone Bottom Mock Input */}
                  <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                    <input
                      disabled
                      placeholder="Type a message..."
                      className="bg-slate-100 rounded-full px-3 py-1.5 text-[11px] flex-1 text-slate-400"
                    />
                    <div className="w-7 h-7 rounded-full bg-[#1C3496] flex items-center justify-center text-white">
                      <Send className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right: Clinical Benefits & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1C3496] uppercase tracking-wider">
                Multi-Channel Patient Communications
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">
                {notificationTypes.find((t) => t.id === selectedType)?.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {notificationTypes.find((t) => t.id === selectedType)?.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F4F7FF] rounded-2xl border border-[#E5ECFF]">
                  <span className="text-xs font-bold text-[#1F2937] block mb-1">
                    38% Drop in Clinic No-Shows
                  </span>
                  <p className="text-xs text-[#6B7280]">
                    Interactive confirmations replace passive one-way robocalls that patients ignore.
                  </p>
                </div>

                <div className="p-4 bg-[#F4F7FF] rounded-2xl border border-[#E5ECFF]">
                  <span className="text-xs font-bold text-[#1F2937] block mb-1">
                    Instant Waitlist Auto-Fill
                  </span>
                  <p className="text-xs text-[#6B7280]">
                    When a patient reschedules, AI Receptionist immediately texts next-in-line waitlisted patients to backfill the doctor's calendar.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                <span>100% TCPA, CTIA, and HIPAA compliant with opt-out handling</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
