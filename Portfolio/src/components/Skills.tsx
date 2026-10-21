import React from 'react';
import { Sparkles, Code2, Cpu, Wrench, Users } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Code2;
      case 1: return Cpu;
      case 2: return Wrench;
      default: return Users;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A breakdown of my technical stack, modern toolsets, and professional methodologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = getCategoryIcon(catIdx);
            return (
              <div
                key={catIdx}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-slate-400 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress track */}
                        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-400 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tag Badges */}
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                  {category.skills.map((s, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
