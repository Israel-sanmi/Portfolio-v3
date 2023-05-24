"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Montserrat, Dancing_Script } from "next/font/google";
import Image from "next/image";
import picture from "../../public/assets/israel.jpeg";

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { SiMicrosoftoutlook } from "react-icons/si";

const dance = Dancing_Script({ weight: ["500"], subsets: ["latin"] });
const monty = Montserrat({ weight: ["500"], subsets: ["latin"] });

export const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[70vh]">
      <div className=" md:w-52 w-40 h-40 md:h-52 rounded-full flex justify-center items-center bg-white">
        <Image
          alt="Israel's Profile Picture"
          loading="lazy"
          className=" md:w-48 w-36 h-36 md:h-48 rounded-full"
          src={picture}
        />
      </div>
      <div className="text-white text-center">
        <h1
          className={`${monty.className} uppercase py-2 text-2xl md:text-5xl font-bold`}
        >
          <Typewriter
            options={{
              strings: ["Adetomokun Israel", "Frontend Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className={`${dance.className} md:block hidden text-lg pb-4`}>
          Hi, I'm Israel, A Passionate frontend developer skilled in multiple
          frontend technologies, <br /> dedicated to creating engaging and
          responsive web applications that deliver exceptional user experiences.
        </p>
        <p className={`${dance.className} md:hidden block text-sm pb-4`}>
          Hi, I'm Israel, A Passionate frontend developer skilled in multiple
          frontend technologies, dedicated to creating engaging and responsive
          web applications that deliver exceptional user experiences.
        </p>
        {/* <motion.a
          href="../../public/pdf/Adetomokun_Israel_Resume.pdf"
          download="resume.pdf"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "easeInOut" }}
          className="py-2 px-4 rounded-md bg-white text-black cursor-pointer font-semibold mt-4"
        >
          Download Resume
        </motion.a> */}
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
    </div>
  );
};
