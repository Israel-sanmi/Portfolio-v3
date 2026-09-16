"use client";

import React from "react";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#07070b]/90 backdrop-blur-xl mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 rounded-sm glass flex items-center justify-center border border-accent-violet/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <span className="font-heading font-extrabold text-lg gradient-text">
                  AI
                </span>
              </div> */}
              <span className="font-heading font-bold text-lg text-white">
                Adetomokun Israel
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Software engineer specializing in high-performance frontend
              architecture, fullstack applications, and scalable digital
              products like Dootling and Selfana.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Opportunities
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-cyan transition-colors"
                >
                  About & Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-cyan transition-colors"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Connections */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/Israel-sanmi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-sm glass flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-violet/60 hover:scale-105 transition-all"
              >
                <IoLogoGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/israelsanmi"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm glass flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan/60 hover:scale-105 transition-all"
              >
                <IoLogoLinkedin className="text-lg" />
              </a>
              <a
                href="https://twitter.com/Ilesanmiisrael0"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-sm glass flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan/60 hover:scale-105 transition-all"
              >
                <IoLogoTwitter className="text-lg" />
              </a>
              <a
                href="https://wa.link/4yj119"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-sm glass flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:scale-105 transition-all"
              >
                <IoLogoWhatsapp className="text-lg" />
              </a>
              <a
                href="mailto:ilesanmiisrael@outlook.com"
                aria-label="Outlook Email"
                className="w-9 h-9 rounded-sm glass flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/60 hover:scale-105 transition-all"
              >
                <SiMicrosoftoutlook className="text-lg" />
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Direct:{" "}
              <a
                href="mailto:ilesanmiisrael@outlook.com"
                className="text-slate-400 hover:text-accent-cyan underline underline-offset-2 transition-colors"
              >
                ilesanmiisrael@outlook.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Adetomokun Israel. All rights
            reserved. Built with Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors glass px-3 py-1.5 rounded-full border border-white/10"
          >
            <span>Back to top</span>
            <FiArrowUp className="text-sm transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
