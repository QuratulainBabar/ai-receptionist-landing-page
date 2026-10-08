import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenDemo: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenDemo }) => {
  return (
    <div className="bg-[#1C3496] text-white py-2.5 px-4 text-xs font-medium border-b border-[#1C3496]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap text-center">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <span className="text-amber-300">🚀</span> Now onboarding founding healthcare clinics & private practices
        </span>
        <span className="text-blue-200 hidden sm:inline" aria-hidden="true">·</span>
        <span className="text-blue-100">
          Free AI Receptionist setup available ($1,500 value waived)
        </span>
        <button
          onClick={onOpenDemo}
          className="inline-flex items-center gap-1 text-white underline underline-offset-4 hover:text-blue-200 font-semibold transition ml-1 cursor-pointer"
        >
          <span>Claim Setup</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
