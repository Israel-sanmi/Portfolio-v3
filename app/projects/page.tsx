"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientOrbs from "../components/GradientOrbs";
import MouseGlow from "../components/MouseGlow";
import { projectData, ProjectItem } from "../data";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink, FiLayers, FiCheck, FiZap } from "react-icons/fi";
import { BsStars, BsArrowUpRight } from "react-icons/bs";

type FilterType = "all" | "featured" | "ecommerce" | "landing";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const flagshipProjects = projectData.filter((p) => p.category === "featured");

  const filteredProjects = projectData.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return item.category === "featured";
    if (activeFilter === "ecommerce") {
      const name = item.projectName.toLowerCase();
      const desc = item.projectDesc.toLowerCase();
      return (
        name.includes("commerce") ||
        name.includes("woods") ||
        name.includes("dootling") ||
        name.includes("selfana") ||
        desc.includes("ecommerce") ||
        desc.includes("booking")
      );
    }
    if (activeFilter === "landing") {
      return (
        item.projectName.toLowerCase().includes("landing") ||
        item.projectName.toLowerCase().includes("page") ||
        item.projectName.toLowerCase().includes("gradient") ||
        item.projectName.toLowerCase().includes("hotel")
      );
    }
    return true;
  });

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
            <span>Curated Portfolio Gallery</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6"
          >
            Built for Scale,{" "}
            <span className="gradient-text">Designed to Inspire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            From high-growth commercial platforms to polished web applications
            and bespoke landing experiences.
          </motion.p>
        </div>

        {/* ─── FLAGSHIPS SPOTLIGHT SECTION ─── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-accent-cyan animate-ping" />
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-12">
            {flagshipProjects.map((featured, index) => {
              const isDootling = featured.projectName
                .toLowerCase()
                .includes("dootling");

              return (
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative rounded-sm glass p-6 sm:p-10 border border-white/15 overflow-hidden group shadow-2xl hover:border-accent-violet/40 transition-all duration-500"
                >
                  {/* Glowing background mesh */}
                  <div
                    className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20 ${
                      isDootling ? "bg-orange-500" : "bg-teal-400"
                    }`}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Detailed Information */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                              isDootling
                                ? "bg-orange-500/10 text-orange-400 border-orange-500/30"
                                : "bg-teal-500/10 text-teal-300 border-teal-500/30"
                            }`}
                          >
                            {isDootling
                              ? "E-Commerce Builder"
                              : "Online Marketplace"}
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            PROJECT #{index + 1}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4 group-hover:text-accent-cyan transition-colors">
                          {featured.projectName}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                          {featured.projectDesc}
                        </p>

                        {/* Highlighted Feature Bullets */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {isDootling ? (
                            <>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-orange-400" />
                                <span>Complete Storefront Builder</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-orange-400" />
                                <span>Real-time Inventory CRM</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-orange-400" />
                                <span>Stripe & Multi-currency Pay</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-orange-400" />
                                <span>Merchant Analytics Dashboard</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-teal-300" />
                                <span>Multi-Category Classifieds</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-teal-300" />
                                <span>Geo-Location Search & Filters</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-teal-300" />
                                <span>Verified Seller Profiles</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-300">
                                <FiCheck className="text-teal-300" />
                                <span>Real-time Buyer-Seller Chat</span>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {featured.tools.map((tool) => (
                            <span key={tool} className="tech-tag">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dual URL Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                        <a
                          href={featured.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all shadow-lg shadow-accent-violet/20 hover:scale-105"
                        >
                          <span>
                            Visit Website (
                            {featured.link.replace("https://", "")})
                          </span>
                          <BsArrowUpRight className="text-sm" />
                        </a>

                        {featured.secondaryLink && (
                          <a
                            href={featured.secondaryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm text-xs font-semibold text-slate-200 glass hover:text-white hover:bg-white/10 border border-white/15 transition-all hover:scale-105"
                          >
                            <span>
                              Open Web App (
                              {featured.secondaryLink.replace("https://", "")})
                            </span>
                            <BsArrowUpRight className="text-sm" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Rich Interactive Visual */}
                    <div className="lg:col-span-6 relative">
                      <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-2xl group-hover:border-white/30 transition-all">
                        <Image
                          src={featured.projectImage}
                          alt={featured.projectName}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ─── ALL PROJECTS GALLERY SECTION ─── */}
        <section>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                All Projects & Explorations
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Showing {filteredProjects.length} completed works
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 glass p-1.5 rounded-2xl border border-white/10">
              {(
                [
                  { label: "All Works", value: "all" },
                  { label: "Flagships", value: "featured" },
                  { label: "E-Commerce", value: "ecommerce" },
                  { label: "Landing Pages", value: "landing" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 py-2 rounded-sm text-xs font-medium transition-all ${
                    activeFilter === tab.value
                      ? "bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-semibold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-accent-violet/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5 shadow-lg hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={item.projectImage}
                      alt={item.projectName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90" />

                    {/* Category pill if featured */}
                    {item.category === "featured" && (
                      <span className="absolute top-3 left-3 bg-accent-violet/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                        {item.projectName}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.projectDesc}
                      </p>

                      {/* Tool Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.tools.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:text-white transition-colors"
                        >
                          <span>Live Demo</span>
                          <FiExternalLink />
                        </a>

                        {item.secondaryLink && (
                          <a
                            href={item.secondaryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            <span>App</span>
                            <FiExternalLink />
                          </a>
                        )}
                      </div>

                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label="View Source Code on GitHub"
                        >
                          <IoLogoGithub className="text-xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
