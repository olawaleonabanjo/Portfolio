import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, Check, ArrowUpRight, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'Full Stack' | 'Frontend'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'featured') return project.featured;
    return project.category === activeTab;
  });

  const handleShare = (project: Project) => {
    const url = project.liveUrl || project.githubUrl || window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedId(project.id);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white">
            Built with <span className="gradient-text">Precision &amp; Purpose</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            A curated collection of web applications, client solutions, and open-source software I’ve designed, built, and shipped.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'featured', label: '⭐ Featured' },
            { id: 'Full Stack', label: 'Full Stack' },
            { id: 'Frontend', label: 'Frontend Only' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-glow-sm scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 flex flex-col group transition-all duration-300"
            >
              {/* Browser Window Header Mockup */}
              <div className="bg-slate-100 dark:bg-slate-900/90 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate max-w-[160px] sm:max-w-[200px]">
                  {project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.id}.app`}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                  {project.category}
                </div>
              </div>

              {/* Visual Showcase Banner */}
              <div className={`relative h-48 bg-gradient-to-tr ${project.accentColor} flex flex-col justify-end text-white overflow-hidden group/banner`}>
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot preview`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/20" />
                  </>
                ) : (
                  <div className="absolute top-0 right-0 p-8 transform translate-x-6 -translate-y-6 opacity-20">
                    <Layers className="w-32 h-32" />
                  </div>
                )}
                
                {project.featured && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-sm z-10">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Featured Project
                  </span>
                )}

                <div className="relative z-10 p-5">
                  <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-white drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/90 font-medium drop-shadow">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4 text-xs text-slate-600 dark:text-slate-400">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => handleShare(project)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs transition-colors"
                    title="Copy Project Link"
                  >
                    {copiedId === project.id ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
