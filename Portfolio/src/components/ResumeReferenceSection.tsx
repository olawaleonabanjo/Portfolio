import React, { useState } from 'react';
import { FileText, Printer, Download, ExternalLink, Check, Eye, MapPin, Phone, Mail, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experiences, projects, education } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeReferenceProps {
  onOpenCvModal: () => void;
}

export const ResumeReferenceSection: React.FC<ResumeReferenceProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);

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
    <section id="resume-reference" className="py-24 relative bg-slate-100/60 dark:bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white">
            Resume <span className="gradient-text">Reference</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Official curriculum vitae documenting my engineering experience at Wema Bank, core projects, education, and full technical skillset.
          </p>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-glow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>Open Fullscreen Modal</span>
            </button>

            <a
              href="/Onabanjo_Olawale_CV.pdf"
              download="Onabanjo_Olawale_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4 text-indigo-500" />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 shadow-sm transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-indigo-500" />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Text"}</span>
            </button>
          </div>
        </div>

        {/* Embedded Paper Sheet Container */}
        <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1220]">
          
          {/* Header Banner replicating PDF */}
          <div className="bg-[#0b1b2f] text-white p-6 sm:p-10 border-b-4 border-cyan-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black font-heading tracking-wide uppercase">
                  {personalInfo.name}
                </h3>
                <p className="text-cyan-400 font-semibold tracking-wider text-xs sm:text-sm mt-1 uppercase">
                  {personalInfo.title}
                </p>
              </div>
              <div className="text-right hidden md:block">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
                  Verified CV Document
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-5 text-xs sm:text-sm text-slate-300">
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

          {/* Body Sections replicating exact PDF content */}
          <div className="p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200">
            
            {/* 1. Summary */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white pb-1.5 border-b-2 border-slate-200 dark:border-slate-800">
                Professional Summary
              </h4>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {personalInfo.summary}
              </p>
            </div>

            {/* 2. Experience */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white pb-1.5 border-b-2 border-slate-200 dark:border-slate-800">
                Experience
              </h4>
              <div className="mt-3 space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between font-medium">
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                        {exp.role}
                      </span>
                      <span className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-semibold">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
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

            {/* 3. Projects */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white pb-1.5 border-b-2 border-slate-200 dark:border-slate-800">
                Projects
              </h4>
              <div className="mt-3 space-y-5">
                {projects.filter(p => p.featured).map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                        {proj.title}: <span className="font-normal text-slate-600 dark:text-slate-400">{proj.subtitle}</span>
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {proj.technologies.join(', ')}
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                      <li>{proj.description}</li>
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

            {/* 4. Education */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white pb-1.5 border-b-2 border-slate-200 dark:border-slate-800">
                Education
              </h4>
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

            {/* 5. Skills */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white pb-1.5 border-b-2 border-slate-200 dark:border-slate-800">
                Skills
              </h4>
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

          </div>

          {/* Footer Callout */}
          <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Need a tailored resume or reference check? Reach out directly.
            </span>
            <button
              onClick={onOpenCvModal}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>View Fullscreen &amp; Export Options</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
