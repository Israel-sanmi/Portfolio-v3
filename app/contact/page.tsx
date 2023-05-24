"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { SiMicrosoftoutlook } from "react-icons/si";

import { Zilla_Slab, Satisfy, Righteous } from "next/font/google";
import AnimateTitle from "../components/AnimateTitle";

const russo = Zilla_Slab({ weight: "400", subsets: ["latin"] });
const satistfy = Satisfy({ weight: "400", subsets: ["latin"] });
const abril = Righteous({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="bg-black px-10 py-5 h-screen text-white">
      <Navbar />
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center py-10"
      >
        <h1 className={`${russo.className} text-4xl uppercase`}>Hey there!</h1>
        <p className={`${satistfy.className} py-5 text-2xl`}>
          I am open to frontend development opportunities, kindly reach out to
          me. <br /> I am open to parttime, freelance or junior developer roles.{" "}
          <br /> Hit me up!
        </p>
        <a href="mailto:ilesanmiisrael@outlook.com" target="_blank">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${abril.className} py-2 px-4 bg-white text-black text-xl my-5 cursor-pointer`}
          >
            Send an email
          </motion.button>
        </a>
        <div>
          <div className="flex items-center justify-center gap-5">
            <motion.a
              href="https://wa.link/4yj119"
              target="_blank"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoWhatsapp className="text-2xl hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://twitter.com/Ilesanmiisrael0"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoTwitter className="text-2xl hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/israelsanmi"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoLinkedin className="text-2xl hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://github.com/Israel-sanmi"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoGithub className="text-2xl hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
            </motion.a>
            <motion.a
              href="mailto:ilesanmiisrael@outlook.com"
              target="_blank"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiMicrosoftoutlook className="text-2xl hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
            </motion.a>
          </div>
        </div>
      </motion.div>
      <AnimateTitle />
    </div>
  );
}
