import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Award,
  PlayCircle
} from 'lucide-react';
import { LIVE_CLASSES } from '../data/mockData';

interface LiveClassesSectionProps {
  onOpenDownload: () => void;
}

export const LiveClassesSection: React.FC<LiveClassesSectionProps> = ({ 
  onOpenDownload 
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const filteredClasses = selectedLevel === 'All' 
    ? LIVE_CLASSES 
    : LIVE_CLASSES.filter(c => c.level.includes(selectedLevel) || (selectedLevel === 'Beginner' && c.level === 'Beginner'));

  return (
    <section id="live-classes" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-6 bg-emerald-500"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-600">
                LIVE MENTORSHIP & WORKSHOPS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
              Learn Directly From <br />
              <span className="italic font-serif text-emerald-600 font-normal">
                Expert Nepali Market Traders
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Never trade alone. Get daily pre-market briefings, live trading floor analysis, 
              and step-by-step masterclasses led by Chartered Accountants and 10+ year NEPSE veterans.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center space-x-1.5 bg-white p-1.5 rounded-full border border-slate-200 self-start md:self-auto overflow-x-auto">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                  selectedLevel === lvl
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Live Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                {/* Header: Date, Level & Live Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-mono border border-slate-200">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      {cls.date}
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-mono">
                      {cls.level}
                    </span>
                  </div>

                  {cls.isLiveToday ? (
                    <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 border border-rose-300 text-[10px] px-3 py-0.5 rounded-full font-mono font-bold animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      LIVE TODAY
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono-num">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {cls.duration}
                    </span>
                  )}
                </div>

                {/* Class Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                  {cls.title}
                </h3>

                <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed font-light">
                  {cls.description}
                </p>

                {/* Topic Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cls.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Instructor Profile Card */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={cls.instructor.avatar} 
                      alt={cls.instructor.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-300"
                    />
                    <div>
                      <div className="text-xs font-serif font-bold text-slate-900 flex items-center gap-1">
                        {cls.instructor.name}
                        <Award className="w-3 h-3 text-emerald-600" />
                      </div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{cls.instructor.title}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-emerald-600">{cls.instructor.verifiedPnl}</div>
                    <div className="text-[9px] font-mono text-slate-500">{cls.instructor.experience}</div>
                  </div>
                </div>
              </div>

              {/* Action & Capacity Bar */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-mono-num">
                    <strong className="text-slate-900">{cls.attendeesCount}</strong> / {cls.maxSeats} Booked
                  </span>
                </div>

                <button
                  onClick={onOpenDownload}
                  className="px-5 py-2.5 bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-black border border-emerald-300 hover:border-emerald-500 font-mono font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center space-x-1.5 shadow-sm"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Download to Join</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: 200+ Hours On-Demand Masterclasses */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
              <PlayCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                Missed a live class? Access 200+ Hours of Recorded Video Archives
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-light">
                Every masterclass is indexed with interactive timestamps, downloadable charts, and Nepali strategy blueprints.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDownload}
            className="shrink-0 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md"
          >
            Download to Unlock All Videos
          </button>
        </div>
      </div>
    </section>
  );
};
