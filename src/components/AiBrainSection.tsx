import React, { useState, useEffect } from 'react';
import { Bot, Play, Pause, RotateCcw, Volume2, ShieldCheck, Check, Globe, Sparkles, AlertCircle, FileCheck, Stethoscope } from 'lucide-react';
import { callScenarios } from '../data/landingData';

export const AiBrainSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState('urgent-booking');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const scenario = callScenarios.find((s) => s.id === activeScenarioId) || callScenarios[0];

  // Speech playback simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (activeLineIndex < scenario.transcript.length - 1) {
        timer = setTimeout(() => {
          setActiveLineIndex((prev) => prev + 1);
        }, 3200);
      } else {
        timer = setTimeout(() => {
          setIsPlaying(false);
        }, 2000);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activeLineIndex, scenario]);

  const handleScenarioChange = (id: string) => {
    setActiveScenarioId(id);
    setIsPlaying(false);
    setActiveLineIndex(0);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      setIsPlaying(true);
      // Optional speech synthesis reading current line if available
      try {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const currentText = scenario.transcript[activeLineIndex]?.text || '';
          const utterance = new SpeechSynthesisUtterance(currentText);
          utterance.rate = 1.05;
          utterance.pitch = 1.0;
          window.speechSynthesis.speak(utterance);
        }
      } catch (e) {
        // Fallback gracefully
      }
    }
  };

  const handleRestart = () => {
    setIsPlaying(false);
    setActiveLineIndex(0);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const brainFeatures = [
    { title: 'Appointment Booking', desc: 'Directly checks physician availability and locks slots into EHR.' },
    { title: 'Rescheduling', desc: 'Effortlessly moves existing visits while releasing old slots for waiting patients.' },
    { title: 'Cancellations', desc: 'Processes cancellations courteously and triggers waitlist fill automations.' },
    { title: 'FAQ Handling', desc: 'Answers clinic hours, directions, fasting guidelines, and parking instructions.' },
    { title: 'Insurance Questions', desc: 'Verifies in-network coverage, copay estimates, and referral requirements.' },
    { title: 'Clinic Information', desc: 'Provides doctor credentials, hospital affiliations, and facility policies.' },
    { title: 'Prescription Refill Requests', desc: 'Collects pharmacy details, verifies last visit, and routes to provider inbox.' },
    { title: 'Multi-language Support', desc: 'Fluent in English, Spanish, Mandarin, French, and Vietnamese.' }
  ];

  return (
    <section id="ai-brain" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1C3496]">
            Clinical Intelligence Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
            An AI That Understands <br />
            <span className="text-[#1C3496]">Real Healthcare Conversations</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Trained on millions of verified medical interactions. Built with strict clinical guardrails, empathy, and natural tone.
          </p>
        </div>

        {/* Live Conversation Demo Studio */}
        <div className="bg-[#F4F7FF] rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#E5ECFF] shadow-lg mb-16">
          
          {/* Top scenario selector tabs */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-[#E5ECFF]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1C3496] text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-[#1F2937]">Live Interactive Call Simulator</span>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap gap-2">
              {callScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => handleScenarioChange(sc.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    activeScenarioId === sc.id
                      ? 'bg-[#1C3496] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-[#E5ECFF] hover:bg-slate-50'
                  }`}
                >
                  {sc.title}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Player Bar */}
          <div className="my-6 bg-white rounded-2xl p-4 border border-[#E5ECFF] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleTogglePlay}
                className="w-12 h-12 rounded-xl bg-[#1C3496] hover:bg-[#162973] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#1C3496]/20 transition cursor-pointer"
                aria-label={isPlaying ? 'Pause conversation' : 'Play conversation'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <button
                onClick={handleRestart}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="text-left">
                <div className="text-xs font-bold text-[#1F2937] flex items-center gap-2">
                  <span>Scenario: {scenario.title}</span>
                  <span className="text-[10px] text-[#1C3496] bg-blue-50 px-2 py-0.5 rounded font-mono">
                    {scenario.category}
                  </span>
                </div>
                <p className="text-[11px] text-[#6B7280]">
                  Caller: {scenario.patientName} · {scenario.patientPhone}
                </p>
              </div>
            </div>

            {/* Animated Waveform Visualizer */}
            <div className="flex items-center gap-1.5 h-8 px-4 bg-[#F4F7FF] rounded-xl border border-[#E5ECFF] w-full sm:w-auto justify-center">
              {[4, 12, 24, 18, 8, 28, 16, 22, 10, 19, 26, 14, 7, 20, 12, 18].map((height, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-200 ${
                    isPlaying ? 'bg-[#1C3496]' : 'bg-slate-300'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(6, (height * (i % 3 + 1)) % 28)}px` : '6px',
                    animation: isPlaying ? `wavePulse 1.2s infinite ease-in-out ${i * 0.08}s` : 'none'
                  }}
                />
              ))}
              <span className="text-[11px] font-mono font-semibold text-[#1C3496] ml-2">
                {isPlaying ? 'Live Audio Streaming' : 'Ready'}
              </span>
            </div>
          </div>

          {/* Transcript & Extracted Clinical Payload Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Interactive Real-Time Transcript */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-[#E5ECFF] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5ECFF] text-xs">
                <span className="font-bold text-[#1F2937]">Synchronous Audio Call Transcript</span>
                <span className="text-[11px] text-[#6B7280]">
                  Line {activeLineIndex + 1} of {scenario.transcript.length}
                </span>
              </div>

              <div className="space-y-3.5 max-h-[340px] overflow-y-auto pr-1">
                {scenario.transcript.map((line, idx) => {
                  const isCurrent = idx === activeLineIndex;
                  const isPast = idx < activeLineIndex;
                  const isAI = line.speaker === 'ai';

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveLineIndex(idx)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-50/70 border-[#1C3496] shadow-xs'
                          : isPast
                          ? 'bg-slate-50/70 border-transparent opacity-85'
                          : 'bg-white border-dashed border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5 text-[11px]">
                        <span className={`font-bold flex items-center gap-1.5 ${isAI ? 'text-[#1C3496]' : 'text-slate-800'}`}>
                          {isAI ? (
                            <>
                              <Bot className="w-3.5 h-3.5" />
                              <span>AI Receptionist</span>
                            </>
                          ) : (
                            <span>Caller ({scenario.patientName})</span>
                          )}
                        </span>
                        <span className="font-mono text-slate-400 text-[10px]">{line.timestamp}</span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#1F2937]">
                        "{line.text}"
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Real-time Clinical Data Extraction */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-[#E5ECFF] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E5ECFF] text-xs">
                  <span className="font-bold text-[#1F2937] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#1C3496]" />
                    <span>Structured EHR Payload</span>
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Validated
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Assigned Provider</span>
                    <p className="font-semibold text-slate-800">{scenario.extractedData.requestedDoctor}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Encounter Classification</span>
                    <p className="font-semibold text-slate-800">{scenario.extractedData.appointmentType}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Slot Confirmed</span>
                    <p className="font-semibold text-[#1C3496]">{scenario.extractedData.preferredDate}</p>
                  </div>

                  {scenario.extractedData.insuranceProvider && (
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Insurance Status</span>
                      <p className="font-semibold text-emerald-700">{scenario.extractedData.insuranceProvider}</p>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Chief Complaint & Notes</span>
                    <p className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {scenario.extractedData.chiefComplaint}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5ECFF]">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Automatic EHR Write Executed</strong>
                    <span>{scenario.ehrAction}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 8 Clinical Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brainFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-[#E5ECFF] bg-white hover:border-[#1C3496]/50 transition duration-150 shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F4F7FF] text-[#1C3496] flex items-center justify-center font-bold text-xs mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-[#1F2937] mb-1.5">
                {feat.title}
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
