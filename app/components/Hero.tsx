"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import picture from "../../public/assets/israel.jpeg";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { SiMicrosoftoutlook } from "react-icons/si";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent-violet/15 to-accent-cyan/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio / Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs font-medium text-slate-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-time Roles & Contracts</span>
            </motion.div>

            {/* Main Greeting / Title */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Adetomokun Israel</span>.
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-medium h-12">
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack & Frontend Engineer",
                      "Next.js & React Specialist",
                      "Scalable Product Builder",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              I architect high-performance, responsive web applications and
              scalable digital ecosystems. Dedicated to translating complex ideas
              into seamless user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-sm font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <BsArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-sm font-semibold text-slate-200 glass hover:bg-white/[0.08] hover:text-white border border-white/10 hover:border-white/25 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono mr-1">
                Follow:
              </span>
              <a
                href="https://github.com/Israel-sanmi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-sm glass flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-violet/50 hover:scale-110 transition-all"
              >
                <IoLogoGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/israelsanmi"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-sm glass flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:scale-110 transition-all"
              >
                <IoLogoLinkedin className="text-lg" />
              </a>
              <a
                href="https://twitter.com/Ilesanmiisrael0"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="w-10 h-10 rounded-sm glass flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:scale-110 transition-all"
              >
                <IoLogoTwitter className="text-lg" />
              </a>
              <a
                href="https://wa.link/4yj119"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-sm glass flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 hover:scale-110 transition-all"
              >
                <IoLogoWhatsapp className="text-lg" />
              </a>
              <a
                href="mailto:ilesanmiisrael@outlook.com"
                aria-label="Email Israel"
                className="w-10 h-10 rounded-sm glass flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/50 hover:scale-110 transition-all"
              >
                <SiMicrosoftoutlook className="text-lg" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image with Futuristic Ring & Tech Floaters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* Outer animated rotating gradient aura */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-pink opacity-70 blur-2xl animate-pulse-glow"
                style={{ animationDuration: "5s" }}
              />

              {/* Glowing outer orbit ring */}
              <div
                className="absolute inset-2 rounded-full border border-accent-cyan/30 animate-spin"
                style={{ animationDuration: "25s" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_10px_#06b6d4]" />
              </div>
              <div
                className="absolute inset-6 rounded-full border border-accent-violet/30 animate-spin"
                style={{
                  animationDuration: "35s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-accent-violet shadow-[0_0_10px_#8b5cf6]" />
              </div>

              {/* Profile Card / Avatar Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-accent-violet to-accent-cyan shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0a0a0f]">
                  <Image
                    alt="Adetomokun Israel"
                    src={picture}
                    priority
                    fill
                    sizes="(max-width: 768px) 250px, 320px"
                    className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Tech Pill 1: Next.js */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 left-4 glass px-3.5 py-2 rounded-sm border border-white/10 shadow-lg flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="text-xs font-semibold text-white font-mono">
                  Next.js 14+
                </span>
              </motion.div>

              {/* Floating Tech Pill 2: React */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 right-6 glass px-3.5 py-2 rounded-sm border border-accent-cyan/30 shadow-lg flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-ping" />
                <span className="text-xs font-semibold text-accent-cyan font-mono">
                  TypeScript & React
                </span>
              </motion.div>

              {/* Floating Tech Pill 3: Fullstack */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -right-8 glass px-3 py-1.5 rounded-sm border border-accent-violet/30 shadow-lg flex items-center gap-1.5 hidden sm:flex"
              >
                <FiZap className="text-accent-violet text-sm" />
                <span className="text-[11px] font-semibold text-slate-200">
                  Fullstack Scalability
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]"
        >
          <div className="glass p-5 rounded-2xl border border-white/[0.06] hover:border-accent-violet/30 transition-all">
            <div className="flex items-center gap-2 text-accent-cyan mb-1">
              <FiLayers className="text-lg" />
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                5+
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Projects Shipped & Live
            </p>
          </div>

          {/* <div className="glass p-5 rounded-2xl border border-white/[0.06] hover:border-accent-violet/30 transition-all">
            <div className="flex items-center gap-2 text-accent-violet mb-1">
              <HiSparkles className="text-lg" />
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                2
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Full-Stack Apps (Dootling & Selfana)
            </p>
          </div> */}

          <div className="glass p-5 rounded-2xl border border-white/[0.06] hover:border-accent-violet/30 transition-all">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <FiCode className="text-lg" />
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                99.9%
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Performance & UX Score
            </p>
          </div>

          <div className="glass p-5 rounded-2xl border border-white/[0.06] hover:border-accent-violet/30 transition-all">
            <div className="flex items-center gap-2 text-accent-pink mb-1">
              <FiZap className="text-lg" />
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                100%
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Commitment to Excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
