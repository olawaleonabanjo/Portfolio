import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experiences, projects, education } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
ONABANJO OLAWALE
FRONTEND DEVELOPER | FULL STACK DEVELOPER
Lagos State, Nigeria • ${personalInfo.phone} • ${personalInfo.email}
${personalInfo.linkedinHandle} • ${personalInfo.githubHandle}

PROFESSIONAL SUMMARY
${personalInfo.summary}

EXPERIENCE
${experiences.map(exp => `
${exp.role} (${exp.period})
${exp.company}
${exp.highlights.map(h => `• ${h}`).join('\n')}
${exp.liveUrl ? `• Live Demo: ${exp.liveUrl}` : ''}
`).join('\n')}

PROJECTS
${projects.filter(p => p.featured).map(p => `
${p.title}: ${p.subtitle} (${p.technologies.join(', ')})
${p.description}
${p.features.map(f => `• ${f}`).join('\n')}
${p.liveUrl ? `• Live Demo: ${p.liveUrl}` : ''}
${p.githubUrl ? `• GitHub: ${p.githubUrl}` : ''}
`).join('\n')}

EDUCATION
${education.degree} (${education.period})
${education.institution}
• Role: ${education.role}

SKILLS
Frontend: HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Tools: Git, GitHub, Vercel
Soft Skills: Multitasking, communication, teamwork, problem solving, time management
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0d1322] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-sm no-print">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading font-semibold text-sm sm:text-base tracking-wide text-slate-800 dark:text-slate-200">
              Curriculum Vitae • {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Onabanjo_Olawale_CV.pdf"
              download="Onabanjo_Olawale_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
              title="Download Original PDF Resume"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Copy resume as plain text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Content */}
        <div className="overflow-y-auto p-4 sm:p-8 md:p-12 space-y-6 text-sm leading-relaxed" id="printable-cv">
          {/* Header Banner - identical to PDF layout */}
          <div className="bg-[#0b1b2f] text-white p-6 sm:p-8 rounded-xl shadow-md border-b-4 border-cyan-500">
            <h1 className="text-2xl sm:text-4xl font-black font-heading tracking-wide uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-400 font-semibold tracking-wider text-xs sm:text-sm mt-1 uppercase">
              {personalInfo.title}
            </p>
            
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-2 text-xs sm:text-sm text-cyan-300">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 hover:underline underline-offset-4"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                {personalInfo.linkedinHandle}
              </a>
              <span>•</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 hover:underline underline-offset-4"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                {personalInfo.githubHandle}
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase pb-1 border-b-2 border-slate-300 dark:border-slate-700">
              Professional Summary
            </h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* Section: Experience */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase pb-1 border-b-2 border-slate-300 dark:border-slate-700">
              Experience
            </h2>
            <div className="mt-3 space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between font-medium">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </span>
                    <span className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                    {exp.liveUrl && (
                      <li className="text-cyan-600 dark:text-cyan-400 font-medium">
                        Live Demo:{' '}
                        <a 
                          href={exp.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="underline underline-offset-2 hover:text-cyan-500 inline-flex items-center gap-1"
                        >
                          {exp.liveUrl.replace('https://', '')}
                          <ExternalLink className="w-3 h-3 inline" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase pb-1 border-b-2 border-slate-300 dark:border-slate-700">
              Projects
            </h2>
            <div className="mt-3 space-y-5">
              {projects.filter(p => p.featured).map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="font-bold text-slate-900 dark:text-slate-100">
                      {proj.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {proj.technologies.join(', ')}
                    </div>
                  </div>
                  <div className="text-xs italic text-slate-600 dark:text-slate-400">
                    {proj.subtitle}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                    <li>{proj.description}</li>
                    {proj.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                    {proj.liveUrl && (
                      <li className="text-cyan-600 dark:text-cyan-400 font-medium">
                        Live Demo:{' '}
                        <a 
                          href={proj.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="underline underline-offset-2 hover:text-cyan-500 inline-flex items-center gap-1"
                        >
                          {proj.liveUrl.replace('https://', '')}
                          <ExternalLink className="w-3 h-3 inline" />
                        </a>
                      </li>
                    )}
                    {proj.githubUrl && (
                      <li className="text-slate-600 dark:text-slate-400">
                        GitHub Repository:{' '}
                        <a 
                          href={proj.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="underline underline-offset-2 hover:text-indigo-500 inline-flex items-center gap-1"
                        >
                          {proj.githubUrl.replace('https://', '')}
                          <ExternalLink className="w-3 h-3 inline" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase pb-1 border-b-2 border-slate-300 dark:border-slate-700">
              Education
            </h2>
            <div className="mt-3 space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-slate-100">
                <span>{education.degree}</span>
                <span className="text-cyan-600 dark:text-cyan-400">{education.period}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">{education.institution}</div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 mt-1">
                <li>Role: {education.role}</li>
              </ul>
            </div>
          </div>

          {/* Section: Skills */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase pb-1 border-b-2 border-slate-300 dark:border-slate-700">
              Skills
            </h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs sm:text-sm">
              <div className="font-semibold text-slate-800 dark:text-slate-200">Frontend:</div>
              <div className="sm:col-span-3 text-slate-700 dark:text-slate-300">HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS</div>

              <div className="font-semibold text-slate-800 dark:text-slate-200">Backend:</div>
              <div className="sm:col-span-3 text-slate-700 dark:text-slate-300">Node.js, Express.js, MongoDB</div>

              <div className="font-semibold text-slate-800 dark:text-slate-200">Tools:</div>
              <div className="sm:col-span-3 text-slate-700 dark:text-slate-300">Git, GitHub, Vercel</div>

              <div className="font-semibold text-slate-800 dark:text-slate-200">Soft Skills:</div>
              <div className="sm:col-span-3 text-slate-700 dark:text-slate-300">Multitasking, communication, teamwork, problem solving, time management</div>
            </div>
          </div>

          {/* Section: Certifications placeholder as in CV */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase pb-1 border-b-2 border-slate-300 dark:border-slate-700">
              Certifications & Continuing Education
            </h2>
            <div className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              • Modern Frontend Architecture &amp; React Optimization (Ongoing Mastery)
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between text-xs text-slate-500 no-print">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">ESC</kbd> to close</span>
          <button 
            onClick={onClose} 
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
