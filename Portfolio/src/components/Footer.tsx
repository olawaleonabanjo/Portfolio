import React from 'react';
import { ArrowUp, Terminal, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#070a12] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white shadow-glow-sm">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-heading font-black text-lg text-slate-900 dark:text-white">
                Code with <span className="gradient-text">Lexzy</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Crafted by <strong className="text-slate-800 dark:text-slate-200">Onabanjo Olawale</strong>. Frontend &amp; Full Stack Developer building clean, resilient, and human-friendly web applications.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="X (Twitter)"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-pink-100 dark:bg-slate-800 dark:hover:bg-pink-950/40 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About &amp; Journey</a></li>
              <li><a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience (Wema Bank)</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Technical Skills</a></li>
              <li><a href="#resume-reference" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Curriculum Vitae</a></li>
            </ul>
          </div>

          {/* Core Technologies */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Tech Philosophy
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Built with React, TypeScript, and Tailwind CSS. Emphasizing accessible semantics, fluid performance, responsive layouts, and modern visual design.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">React 19</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">TypeScript</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">Tailwind CSS</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">Vite</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Onabanjo Olawale (Code with Lexzy). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
