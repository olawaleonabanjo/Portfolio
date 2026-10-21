import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Education &amp; <span className="gradient-text">Leadership</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Solid foundations in computer science theory, software design, and peer leadership.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-3.5 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800/50 text-xs sm:text-sm font-bold">
                <Calendar className="w-4 h-4" />
                <span>{education.period}</span>
              </div>
            </div>

            {/* Leadership Spotlight Badge */}
            <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-transparent border border-purple-200/50 dark:border-purple-800/40 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400">
                  Leadership Position
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-slate-900 dark:text-white">
                  {education.role}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                Key Accomplishments &amp; Coursework
              </h4>
              <ul className="space-y-2.5">
                {education.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
