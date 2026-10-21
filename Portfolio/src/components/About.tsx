import React from 'react';
import { Layout, Server, UserCheck, ShieldCheck, Terminal, FileText, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenCv: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCv }) => {
  const pillars = [
    {
      icon: Layout,
      title: "Frontend Craftsmanship",
      description: "Dedicated to building pixel-perfect, accessible, and reactive user interfaces using modern React patterns, TypeScript safety, and Tailwind CSS speed.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      icon: Server,
      title: "Full-Stack Versatility",
      description: "Comfortable spanning the full software lifecycle with Node.js and Express.js backends, MongoDB data modeling, and structured RESTful APIs.",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      icon: ShieldCheck,
      title: "Production Standards",
      description: "Currently contributing to enterprise web solutions at Wema Bank Plc, ensuring robust architecture, cross-browser stability, and optimized bundles.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: UserCheck,
      title: "Leadership & Teamwork",
      description: "Former Vice President of the Computer Science Department at JABU with proven communication, mentoring, problem-solving, and multitasking abilities.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white">
            Driven by Passion, Defined by <span className="gradient-text">Clean Code</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Here's a look at my journey, technical background, and what motivates me every single day.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-800">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              Hi, I’m Olawale Onabanjo
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a passionate frontend developer with a keen eye for design and a drive for creating seamless, enjoyable user experiences. With a Computer Science degree from <strong className="text-slate-900 dark:text-white">Joseph Ayo Babalola University</strong>, I have devoted my time to mastering modern web technologies, building interactive, responsive, and reliable software.
              </p>
              
              <p>
                Currently, I am serving with the <strong className="text-slate-900 dark:text-white">NYSC on the frontend team at Wema Bank Plc</strong>, where I collaborate with engineers to build performant web interfaces with React and TypeScript. One of my proudest initiatives here is building the frontend of <strong className="text-indigo-600 dark:text-indigo-400">DevSpace</strong>, a community and social platform for developers.
              </p>

              <p>
                My approach to engineering is straightforward: <span className="italic font-medium text-slate-800 dark:text-slate-200">"Turn complex user needs into clean, intuitive, and delightful digital products."</span> Whether I’m architecting a finance tracker, a health reminder app, an e-commerce platform, or an enterprise portal, I prioritize performance, clean code architecture, and aesthetics.
              </p>
            </div>

            {/* Quick action bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Terminal className="w-4 h-4 text-indigo-500" />
                <span>Handle: <strong className="text-slate-800 dark:text-slate-200">Code with Lexzy</strong></span>
              </div>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV Document</span>
              </button>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${pillar.bg} ${pillar.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
