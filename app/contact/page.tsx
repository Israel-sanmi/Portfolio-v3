"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientOrbs from "../components/GradientOrbs";
import MouseGlow from "../components/MouseGlow";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { SiMicrosoftoutlook } from "react-icons/si";
import {
  FiMail,
  FiCopy,
  FiCheck,
  FiSend,
  FiMapPin,
  FiClock,
  FiExternalLink,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const emailAddress = "ilesanmiisrael@outlook.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Prepare mailto link with pre-filled details
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    )}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#07070b] text-white selection:bg-accent-violet selection:text-white overflow-hidden">
      <GradientOrbs />
      <MouseGlow />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-violet/15 text-accent-violet border border-accent-violet/30 mb-4"
          >
            <BsStars />
            <span>Open for Collaboration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Exceptional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Have an open software engineering role, a product in need of
            execution, or an architectural challenge? Drop a message or reach
            out directly.
          </motion.p>
        </div>

        {/* Two-Column Grid */}
        <div className="">
          {/* Left Column: Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Status Card */}
            <div className="glass p-6 sm:p-8 rounded-sm border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Current Availability
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Accepting New Roles & Projects
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Available for full-time fullstack or frontend engineering
                positions, high-impact contract assignments, and consulting.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-accent-cyan text-base" />
                  <span>Lagos, Nigeria • Open to Global Remote</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiClock className="text-accent-violet text-base" />
                  <span>Timezone: GMT+1 (Flexible overlap with US/EU/UK)</span>
                </div>
              </div>
            </div>

            {/* Quick Copy Email Card */}
            <div className="glass p-6 rounded-sm border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-sm bg-accent-violet/20 flex items-center justify-center text-accent-violet flex-shrink-0">
                  <FiMail className="text-lg" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-white truncate block">
                    {emailAddress}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex-shrink-0 px-3.5 py-2 rounded-sm text-xs font-semibold glass border border-white/15 hover:border-accent-cyan/50 text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                title="Copy Email to Clipboard"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Link Card */}
            <a
              href="https://wa.link/4yj119"
              target="_blank"
              rel="noreferrer"
              className="glass p-6 rounded-sm border border-white/10 hover:border-emerald-500/40 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <IoLogoWhatsapp className="text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    Instant Chat
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </div>
              <FiExternalLink className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Social Network Links */}
            <div className="glass p-6 rounded-sm border border-white/10">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-4">
                Social Profiles & Repositories
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Israel-sanmi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-sm glass border border-white/10 hover:border-accent-violet/50 text-xs text-slate-300 hover:text-white transition-all"
                >
                  <IoLogoGithub className="text-lg text-slate-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/israelsanmi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-sm glass border border-white/10 hover:border-accent-cyan/50 text-xs text-slate-300 hover:text-white transition-all"
                >
                  <IoLogoLinkedin className="text-lg text-accent-cyan" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/Ilesanmiisrael0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-sm glass border border-white/10 hover:border-accent-cyan/50 text-xs text-slate-300 hover:text-white transition-all"
                >
                  <IoLogoTwitter className="text-lg text-sky-400" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href="mailto:ilesanmiisrael@outlook.com"
                  className="flex items-center gap-2 p-2.5 rounded-sm glass border border-white/10 hover:border-accent-pink/50 text-xs text-slate-300 hover:text-white transition-all"
                >
                  <SiMicrosoftoutlook className="text-lg text-blue-400" />
                  <span>Outlook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 sm:p-10 rounded-sm border border-white/10 shadow-2xl">
              <h2 className="font-heading font-bold text-2xl text-white mb-2">
                Send a Direct Message
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mb-8">
                Fill in the details below and I&apos;ll get back to you
                promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-sm bg-white/[0.04] border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-sm bg-white/[0.04] border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fullstack Engineer Role / Project Consultation"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm bg-white/[0.04] border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your goals, requirements, timeline, or position details..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm bg-white/[0.04] border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 rounded-sm font-semibold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all shadow-xl shadow-accent-violet/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {sending ? (
                    <span>Opening Mail Client...</span>
                  ) : sent ? (
                    <>
                      <FiCheck className="text-lg" />
                      <span>Message Ready in Client!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
