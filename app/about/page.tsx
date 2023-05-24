"use client";

import Navbar from "../components/Navbar";
import { Abril_Fatface, Questrial, Outfit } from "next/font/google";
import AnimateTitle from "../components/AnimateTitle";
import { motion } from "framer-motion";

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const quest = Questrial({ weight: ["400"], subsets: ["latin"] });
const outfit = Outfit({ weight: ["400"], subsets: ["latin"] });

export default function Another() {
  return (
    <div className="bg-black md:px-10 px-5 md:py-5 py-2 h-full md:h-screen text-white">
      <Navbar />
      <div className="py-2">
        <h1 className={`${abril.className} text-3xl py-3 uppercase`}>
          About Israel
        </h1>
        <p className={`${quest.className} text-lg`}>
          Hey there! I'm Adetomokun Israel, a passionate frontend developer with
          a knack for creating immersive and user-friendly web experiences. I
          enjoy crafting beautiful interfaces that not only look great but also
          provide seamless interactions.
        </p>
      </div>
      <div className="py-5">
        <h1 className={`${abril.className} text-3xl py-3 uppercase`}>
          What I do
        </h1>
        <p className={`${quest.className} text-lg text-justify md:text-left`}>
          As a frontend developer, my focus is on creating responsive,
          intuitive, and visually appealing websites. I enjoy collaborating with
          designers and backend developers to turn concepts into reality. I pay
          great attention to detail, ensuring pixel-perfect implementation and
          smooth user experiences across different devices and browsers. I'm
          experienced in working with various frontend tools and libraries, such
          as CSS preprocessors (TailwindCss, Sass), Javascript (ReactJs, React
          Native), Typescript(NextTs), Framer Motion, GSAP, CMS(Firebase,
          Sanity.io) , and version control systems (Git). I'm also comfortable
          with integrating APIs, optimizing website performance, and ensuring
          web accessibility.
        </p>
      </div>
      <div>
        <h1 className={`${abril.className} text-3xl py-3 uppercase`}>
          Technologies:
        </h1>
        <span>
          <motion.ul
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.5 }}
            transition={{ type: "spring" }}
            className={`${outfit.className} uppercase grid grid-cols-2 md:grid-cols-4 py-2 mb-5`}
          >
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              HTML
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              css(TailwindCss, Scss, Bootstrap)
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              Javascript
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              Typescript
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              ReactJs(Ts)
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              NextJs(Ts)
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              React Native
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              Framer Motion, GSAP
            </motion.li>
            <motion.li
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="py-2"
            >
              Sanity.io, Firebase
            </motion.li>
          </motion.ul>
        </span>
      </div>
      <div>
        <AnimateTitle />
      </div>
    </div>
  );
}
