import React from 'react';
import { ArrowRight, FileText, Mail, Code2, Layers, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/lexzy-coding.jpg';
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from './Icons';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-cyan-400/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/60 shadow-sm text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>NYSC Frontend Engineer @ Wema Bank Plc</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Turning ideas into <br />
              <span className="gradient-text">clean, reliable &amp; user-centric</span> web software.
            </h1>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              I’m <span className="font-bold text-slate-900 dark:text-white">Olawale Onabanjo</span> (Code with Lexzy). Computer Science graduate and frontend specialist building robust web applications with <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React</span>, <span className="text-cyan-600 dark:text-cyan-400 font-semibold">TypeScript</span>, and <span className="text-teal-600 dark:text-teal-400 font-semibold">Tailwind CSS</span>, backed by full-stack experience in Node.js &amp; Express.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-glow-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Lagos State, Nigeria</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-3">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={personalInfo.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <TwitterXIcon className="w-4 h-4" />
                  <span>X</span>
                </a>
                <a 
                  href={personalInfo.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-400/30 blur-xl opacity-75 -z-10 animate-pulse-subtle" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/60 dark:border-white/10 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center group">
                <img
                  src={profilePhoto}
                  alt="Onabanjo Olawale coding at workspace"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle bottom gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                {/* Bottom Card Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-card backdrop-blur-md border border-white/20 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Lexzy in Action</p>
                      <h2 className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.name}</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-500 text-white shadow-sm">
                      NYSC 2026 • Frontend
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React & TypeScript */}
              <div className="absolute -top-5 -left-3 sm:-left-6 p-3 rounded-2xl glass-card shadow-glass border border-white/40 dark:border-white/10 animate-float flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase">Core Stack</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">React &amp; TypeScript</p>
                </div>
              </div>

              {/* Floating Badge 2: Wema Bank Experience */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 p-3 rounded-2xl glass-card shadow-glass border border-white/40 dark:border-white/10 animate-float-slow flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase">Experience</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Wema Bank Plc</p>
                </div>
              </div>

              {/* Floating Badge 3: Shipped Projects */}
              <div className="hidden sm:flex absolute -bottom-4 left-6 p-2.5 rounded-2xl glass-card shadow-glass border border-white/40 dark:border-white/10 items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white pr-1">Clean &amp; Tested</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Quick Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-heading font-black gradient-text">Wema Bank</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Frontend Team (NYSC)</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-heading font-black gradient-text">5+ Web Apps</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Shipped &amp; Live Demos</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-heading font-black gradient-text">React &amp; TS</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Primary Focus &amp; Mastery</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-heading font-black gradient-text">B.Sc. CS</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">JABU Computer Science</p>
          </div>
        </div>

      </div>
    </section>
  );
};
