import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
    setFormSubmitted(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Interested in hiring me for a frontend role, full-stack project, or freelance collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Email Address</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy email"
              >
                {copiedType === 'email' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Phone &amp; WhatsApp</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy phone number"
              >
                {copiedType === 'phone' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 dark:rose-500/20 text-rose-500 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-400">Location &amp; Residency</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Handles */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase">LinkedIn</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    olawaleonabanjo
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase">GitHub</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    olawaleonabanjo
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TwitterXIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase">X (Twitter)</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    {personalInfo.twitterHandle}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase">Instagram</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    {personalInfo.instagramHandle}
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out the details below and I'll respond promptly within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-emerald-800 dark:text-emerald-200">
                  Message Prepared &amp; Email Client Opened!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                  Thank you for reaching out! Your default email program has launched. If it didn't open automatically, feel free to write directly to <strong className="underline">{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-glow-sm hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Olawale</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
