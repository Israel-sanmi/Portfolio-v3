"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientOrbs from "../components/GradientOrbs";
import MouseGlow from "../components/MouseGlow";
import picture from "../../public/assets/israel.jpeg";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiCheckCircle,
  FiArrowRight,
  FiAward,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import { BsStars, BsBriefcase } from "react-icons/bs";

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <FiLayout className="text-xl text-accent-cyan" />,
      skills: [
        "Next.js 14+",
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "HTML5 / Semantic CSS",
        "Responsive & Mobile-First",
      ],
    },
    {
      title: "Backend & Cloud Services",
      icon: <FiDatabase className="text-xl text-accent-violet" />,
      skills: [
        "Node.js",
        "RESTful APIs",
        "PostgreSQL",
        "MongoDB",
        "Firebase Auth & Firestore",
        "Express"
        // "Sanity.io Headless CMS",
        // "Socket.io",
      ],
    },
    {
      title: "Payments & State Management",
      icon: <FiCpu className="text-xl text-accent-pink" />,
      skills: [
        "Stripe Gateway",
        "Paystack Integration",
        "Zustand",
        "Redux & Redux Toolkit",
        "React Query",
        "Context API",
      ],
    },
    {
      title: "Tooling & Workflow",
      icon: <FiCode className="text-xl text-emerald-400" />,
      skills: [
        "Git & GitHub Workflow",
        "Vercel & Netlify Deployment",
        "Postman API Testing",
        "Figma to Code",
        "Performance Optimization",
        "SEO Best Practices",
      ],
    },
  ];

  // const milestones = [
  //   {
  //     year: "2024 — Present",
  //     title: "Creator & Lead Engineer • Dootling & Selfana",
  //     desc: "Conceived, engineered, and shipped two large-scale platforms: Dootling (an e-commerce storefront creator for merchants) and Selfana (a high-traffic classifieds marketplace for peer-to-peer commerce).",
  //   },
  //   {
  //     year: "2023 — 2024",
  //     title: "Frontend Developer • Production Client Platforms",
  //     desc: "Delivered high-performance web applications, including booking portals, bespoke e-commerce solutions with Stripe and Paystack, and content management systems using Sanity.io and Firebase.",
  //   },
  //   {
  //     year: "2022 — 2023",
  //     title: "UI/UX & Frontend Foundations",
  //     desc: "Mastered core web fundamentals, modern CSS architectures, interactive JavaScript animations, and component-driven development with React.",
  //   },
  // ];

  return (
    <div className="relative min-h-screen bg-[#07070b] text-white selection:bg-accent-violet selection:text-white overflow-hidden">
      <GradientOrbs />
      <MouseGlow />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-violet/15 text-accent-violet border border-accent-violet/30 mb-4"
          >
            <BsStars />
            <span>Engineering Story & Background</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6"
          >
            Behind the <span className="gradient-text">Craft & Code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Passionate software engineer obsessed with converting complex
            business logic into effortless, fluid, and memorable web
            applications.
          </motion.p>
        </div>

        {/* Biography Split Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Avatar / Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-sm p-3 bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-pink shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative border-2 border-[#0a0a0f]">
                <Image
                  src={picture}
                  alt="Adetomokun Israel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass px-4 py-2.5 rounded-2xl border border-white/20 shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">
                  Fullstack & Frontend
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-base leading-relaxed"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Hi, I&apos;m Adetomokun Israel — Engineer, Builder & Problem
              Solver.
            </h2>

            <p>
              I specialize in creating web experiences that combine technical
              rigor with exquisite visual aesthetics. Over the past several
              years, I have graduated from constructing static client pages to
              building full-scale commercial systems that people depend on every
              day.
            </p>

            {/* <p>
              Most notably, I architected and launched{" "}
              <strong className="text-white">Dootling</strong> (an all-in-one
              e-commerce storefront creator tailored for businesses) and{" "}
              <strong className="text-white">Selfana</strong> (a scalable
              classifieds marketplace connecting buyers and sellers). These
              projects reinforced my deep understanding of database schemas,
              payment flows, live state synchronization, and accessible UI
              engineering.
            </p> */}

            <p>
              Whether collaborating with cross-functional teams, translating
              high-fidelity Figma designs into pixel-perfect code, or optimizing
              Core Web Vitals to deliver sub-second loads, I treat every project
              as an opportunity to raise the bar.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all shadow-lg shadow-accent-violet/20"
              >
                <span>Browse</span>
                <FiArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm text-xs font-semibold text-slate-300 glass hover:text-white border border-white/10 transition-all"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Matrix */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl text-white mb-3">
              Technical Arsenal
            </h2>
            <p className="text-slate-400 text-sm">
              Tools, languages, and frameworks I leverage to engineer resilient
              web products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-sm border border-white/10 hover:border-accent-violet/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm glass flex items-center justify-center border border-white/10 mb-4">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-4">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestones & Journey */}
        {/* <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-accent-cyan text-xs font-semibold mb-2">
              <BsBriefcase />
              <span>Career Progression</span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-white">
              My Engineering Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-accent-cyan mt-1 sm:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Call to Action Banner */}
        <section className="rounded-sm glass p-8 sm:p-12 border border-white/15 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
              Ready to work together?
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              I am available for full-time frontend/fullstack roles, consulting,
              and ambitious contract opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-xs font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:from-accent-violet/90 hover:to-accent-cyan/90 transition-all shadow-xl shadow-accent-violet/20"
            >
              <span>Reach Out via Contact</span>
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
