import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import devspaceCover from '../assets/devspace-cover.png';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Professional <span className="gradient-text">Journey &amp; Impact</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Real-world enterprise experience building scalable software for high-impact platforms.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="relative glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 via-cyan-500/10 to-transparent rounded-full blur-2xl -z-10" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="mt-6 space-y-6">
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                    Key Contributions &amp; Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Spotlight inside Experience: DevSpace */}
                {exp.liveUrl && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/5 border border-indigo-200/50 dark:border-indigo-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-14 rounded-xl overflow-hidden border border-indigo-300/40 dark:border-indigo-700/40 shrink-0 shadow-sm hidden sm:block bg-slate-900">
                        <img 
                          src={devspaceCover} 
                          alt="DevSpace platform preview" 
                          className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-indigo-500" />
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            Featured Work Deliverable
                          </span>
                        </div>
                        <p className="font-heading font-bold text-base text-slate-900 dark:text-white mt-0.5">
                          DevSpace Platform
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Developer social networking platform with feed, leaderboard &amp; articles.
                        </p>
                      </div>
                    </div>

                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all hover:scale-105 active:scale-95 shrink-0"
                    >
                      <span>Explore Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Technologies used */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                    Tech Stack &amp; Workflow
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
