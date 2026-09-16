"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import GradientOrbs from "./components/GradientOrbs";
import MouseGlow from "./components/MouseGlow";
import { projectData } from "./data";
import {
  FiExternalLink,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiTrendingUp,
  FiShield,
  FiCpu,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Grab the featured projects (Dootling & Selfana)
  const flagshipProjects = projectData.filter((p) => p.category === "featured");
  const recentProjects = projectData
    .filter((p) => p.category === "project")
    .slice(0, 4);

  const skillsTicker = [
    "Next.js 14+",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Stripe Payments",
    "Paystack",
    "Framer Motion",
    "Firebase",
    "REST",
    "Zustand & Redux",
  ];

  return (
    <div className="relative min-h-screen bg-[#07070b] text-white selection:bg-accent-violet selection:text-white overflow-hidden">
      {/* Dynamic Loader */}
      <Loader onComplete={() => setLoadingComplete(true)} />

      {/* Decorative Orbs & Mouse Glow */}
      <GradientOrbs />
      <MouseGlow />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Tech Marquee / Infinite Ticker */}
        <section className="py-8 border-y border-white/[0.06] bg-[#0c0c14]/60 backdrop-blur-md overflow-hidden">
          <div className="flex select-none whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-8 text-sm font-mono tracking-wider text-slate-400"
            >
              {[...skillsTicker, ...skillsTicker].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-accent-cyan opacity-60 font-mono">
                    ✦
                  </span>
                  <span className="hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Spotlight Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-violet/10 text-accent-violet border border-accent-violet/20 mb-3">
                <BsStars className="text-sm" />
                <span>Featured Projects</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                High-impact e-commerce infrastructure and marketplace products
                designed, engineered, and launched for real-world utility.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-white transition-colors group"
            >
              <span>Explore all {projectData.length} projects</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured Cards Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flagshipProjects.map((project, idx) => {
              const isDootling = project.projectName
                .toLowerCase()
                .includes("dootling");
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group relative rounded-sm glass p-6 sm:p-8 border border-white/10 hover:border-accent-violet/40 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] flex flex-col justify-between"
                >
                  {/* Glowing accent border overlay */}
                  <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-r from-accent-violet/20 via-transparent to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10 blur-sm" />

                  <div>
                    {/* Project Header Banner */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                          isDootling
                            ? "bg-orange-500/10 text-orange-400 border-orange-500/30"
                            : "bg-teal-500/10 text-teal-300 border-teal-500/30"
                        }`}
                      >
                        {isDootling
                          ? "E-COMMERCE INFRASTRUCTURE"
                          : "BUY & SELL MARKETPLACE"}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {isDootling
                          ? "STOREFRONT CREATOR"
                          : "BUY & SELL MARKETPLACE"}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-accent-cyan transition-colors mb-3">
                      {project.projectName}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.projectDesc}
                    </p>

                    {/* Screenshot Preview with Interactive Overlay */}
                    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/20 transition-all">
                      <Image
                        src={project.projectImage}
                        alt={project.projectName}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tools.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all shadow-md shadow-accent-violet/20"
                    >
                      <span>Visit Website</span>
                      <FiExternalLink />
                    </a>

                    {project.secondaryLink && (
                      <a
                        href={project.secondaryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-semibold text-slate-300 glass hover:text-white hover:bg-white/10 border border-white/10 transition-all"
                      >
                        <span>
                          {project.secondaryLinkLabel || "Launch App"}
                        </span>
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Why Collaborate / Core Engineering Values */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#0c0c16]/80 to-transparent border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                Engineered for{" "}
                <span className="gradient-text">Impact & Performance</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                How I approach crafting applications — from concept and user
                flows to production scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-sm border border-white/10 hover:border-accent-violet/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent-violet/15 flex items-center justify-center text-accent-violet mb-6 border border-accent-violet/30">
                  <FiCpu className="text-2xl" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Fullstack Scalability
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep experience structuring Next.js, Node.js, and databases
                  (PostgreSQL, MongoDB) to withstand real traffic and rapid
                  business expansion.
                </p>
              </div>

              <div className="glass p-8 rounded-sm border border-white/10 hover:border-accent-cyan/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent-cyan/15 flex items-center justify-center text-accent-cyan mb-6 border border-accent-cyan/30">
                  <FiLayers className="text-2xl" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Pixel-Perfect UI/UX
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Meticulous attention to aesthetic balance, smooth
                  micro-interactions, responsive behavior across all viewports,
                  and modern typography.
                </p>
              </div>

              <div className="glass p-8 rounded-sm border border-white/10 hover:border-accent-pink/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent-pink/15 flex items-center justify-center text-accent-pink mb-6 border border-accent-pink/30">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Product-Minded Thinking
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Creator of end-to-end businesses like Dootling and Selfana. I
                  don&apos;t just write code; I architect systems that solve
                  genuine user problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Work Quick Previews */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                More Notable Projects
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                E-commerce, booking systems, and client interfaces.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent-cyan hover:text-white transition-colors"
            >
              View Full Gallery &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjects.map((p) => (
              <div
                key={p.id}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-accent-violet/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={p.projectImage}
                    alt={p.projectName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white mb-2">
                      {p.projectName}
                    </h4>
                    <p className="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">
                      {p.projectDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-accent-cyan hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink />
                    </a>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global CTA Banner */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-sm glass p-8 sm:p-14 border border-white/15 overflow-hidden text-center">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-cyan/20 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-violet/20 rounded-full blur-[90px] pointer-events-none" />

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Exceptional</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you need a fullstack engineer to scale your SaaS, a
              frontend architect to craft stunning digital products, or a
              technical partner for your next venture.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all shadow-xl shadow-accent-violet/25 hover:scale-105"
              >
                <span>Start a Conversation</span>
                <FiArrowRight />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-slate-200 glass hover:text-white hover:bg-white/10 border border-white/10 transition-all"
              >
                <span>Read Full Biography</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
