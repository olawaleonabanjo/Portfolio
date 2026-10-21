import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ResumeReferenceSection } from './components/ResumeReferenceSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export function AppContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        <Hero onOpenCv={() => setCvModalOpen(true)} />
        <About onOpenCv={() => setCvModalOpen(true)} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ResumeReferenceSection onOpenCvModal={() => setCvModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen CV Reference & Print Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
