import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, User, Bell, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { doctorsData } from '../data/landingData';

export const SchedulingEngine: React.FC = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-chen');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, Oct 09');
  const [selectedSlot, setSelectedSlot] = useState('10:15 AM');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const dates = [
    { label: 'Today', sub: 'Oct 08', availableCount: 2 },
    { label: 'Tomorrow', sub: 'Oct 09', availableCount: 5 },
    { label: 'Friday', sub: 'Oct 10', availableCount: 6 },
    { label: 'Monday', sub: 'Oct 13', availableCount: 8 }
  ];

  const slots = [
    { time: '09:00 AM', status: 'booked', label: 'Booked (Consult)' },
    { time: '09:45 AM', status: 'available', label: 'Available' },
    { time: '10:15 AM', status: 'available', label: 'Available' },
    { time: '11:00 AM', status: 'booked', label: 'Doctor Administrative' },
    { time: '01:30 PM', status: 'available', label: 'Available' },
    { time: '02:15 PM', status: 'available', label: 'Available' },
    { time: '03:00 PM', status: 'booked', label: 'Booked (Follow-up)' },
    { time: '04:15 PM', status: 'available', label: 'Available' }
  ];

  const currentDoctor = doctorsData.find((d) => d.id === selectedDoctorId) || doctorsData[0];

  const handleBook = () => {
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
    }, 4500);
  };

  return (
    <section id="scheduling" className="py-20 lg:py-28 bg-[#F4F7FF]/50 border-b border-[#E5ECFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Autonomous Calendar Sync
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            Appointment Scheduling Engine <br />
            <span className="text-[#1C3496]">Engineered for Physician Practice Rules</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Respects appointment lengths, provider buffers, visit reasons, and existing EHR constraints without human error.
          </p>
        </div>

        {/* Interactive Scheduling Canvas */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5ECFF] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Doctor Picker & Date Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Select Medical Provider
                </label>
                <div className="space-y-2.5">
                  {doctorsData.map((doc) => {
                    const isSelected = doc.id === selectedDoctorId;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`p-3.5 rounded-xl border flex items-center gap-3.5 cursor-pointer transition ${
                          isSelected
                            ? 'bg-blue-50/80 border-[#1C3496] shadow-xs'
                            : 'bg-white border-[#E5ECFF] hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src={doc.avatar}
                          alt={doc.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-[#1F2937] truncate">{doc.name}</h4>
                            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              {doc.availableSlotsCount} open
                            </span>
                          </div>
                          <p className="text-xs text-[#6B7280] truncate">{doc.specialty}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{doc.clinic}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Select Practice Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dates.map((d, i) => {
                    const isSelected = selectedDate.startsWith(d.label);
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(`${d.label}, ${d.sub}`)}
                        className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                          isSelected
                            ? 'bg-[#1C3496] text-white border-[#1C3496]'
                            : 'bg-slate-50 text-slate-700 border-[#E5ECFF] hover:bg-white'
                        }`}
                      >
                        <span className="text-xs font-bold block">{d.label}</span>
                        <span className={`text-[10px] ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                          {d.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Automated Rules Summary */}
              <div className="p-4 bg-[#F4F7FF] rounded-2xl border border-[#E5ECFF] text-xs space-y-2">
                <div className="font-bold text-[#1F2937] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1C3496]" />
                  <span>Physician Clinical Guardrails Active:</span>
                </div>
                <div className="text-[11px] text-[#6B7280] space-y-1">
                  <div>• 15-minute chart preparation buffer applied between visits</div>
                  <div>• Max 4 new comprehensive consults permitted per half-day</div>
                  <div>• 1-hour midday block reserved for inpatient chart sign-offs</div>
                </div>
              </div>
            </div>

            {/* Right Column: Real-Time Slots & Confirmation Action */}
            <div className="lg:col-span-7 bg-[#F4F7FF] rounded-2xl p-6 sm:p-7 border border-[#E5ECFF] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E5ECFF]">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#1C3496]" />
                    <span className="text-sm font-bold text-[#1F2937]">
                      {currentDoctor.name} · {selectedDate}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1C3496] bg-white px-2.5 py-1 rounded-md border border-[#E5ECFF]">
                    Real-Time Availability
                  </span>
                </div>

                {/* Slots Grid */}
                <div className="mt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    Available Appointment Slots (Direct EHR Sync)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {slots.map((slot, idx) => {
                      const isSelected = selectedSlot === slot.time;
                      const isAvailable = slot.status === 'available';

                      return (
                        <button
                          key={idx}
                          disabled={!isAvailable}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 ${
                            !isAvailable
                              ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
                              : isSelected
                              ? 'bg-[#1C3496] text-white border-[#1C3496] shadow-sm'
                              : 'bg-white text-slate-800 border-[#E5ECFF] hover:border-[#1C3496] cursor-pointer'
                          }`}
                        >
                          <span className="text-xs font-bold">{slot.time}</span>
                          <span className={`text-[10px] ${isSelected ? 'text-blue-200' : isAvailable ? 'text-emerald-600' : 'text-slate-400'}`}>
                            {slot.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Real-time automated reminder preview card */}
                <div className="mt-6 bg-white rounded-xl p-4 border border-[#E5ECFF] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2937]">
                      <Bell className="w-3.5 h-3.5 text-[#1C3496]" />
                      <span>Automated Patient Confirmation & Reminder Sequence</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                      Multi-Touch
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] text-slate-600 pt-1">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="block text-slate-800">1. Instant SMS</strong>
                      <span>Booking confirmed + calendar .ics + digital intake link</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="block text-slate-800">2. 24h Before SMS</strong>
                      <span>2-way conversational reminder (Reply 1 to confirm, 2 to reschedule)</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <strong className="block text-slate-800">3. 2h Before Alert</strong>
                      <span>Directions, parking code, and doctor prep instructions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm / Lock slot button */}
              <div className="mt-6 pt-4 border-t border-[#E5ECFF]">
                {bookedSuccess ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-900 font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Slot {selectedSlot} on {selectedDate} locked into EHR for {currentDoctor.name}!</span>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-slate-600 text-left">
                      Selected: <strong className="text-slate-900">{selectedSlot}</strong> with <strong className="text-slate-900">{currentDoctor.name}</strong>
                    </div>
                    <button
                      onClick={handleBook}
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#1C3496] hover:bg-[#162973] text-white font-semibold text-xs rounded-xl transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Simulate AI Instant EHR Lock</span>
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
