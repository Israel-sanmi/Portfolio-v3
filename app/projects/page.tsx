"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Abril_Fatface,
  Questrial,
  Josefin_Sans,
  Comfortaa,
} from "next/font/google";

import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";

import { motion } from "framer-motion";

import Image from "next/image";
import { projectData } from "../data";

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const quest = Questrial({ weight: ["400"], subsets: ["latin"] });
const lobby = Josefin_Sans({ weight: ["400"], subsets: ["latin"] });
const cpnfy = Comfortaa({ weight: ["400"], subsets: ["latin"] });

export default function Project() {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const handleMouseEnter = (projectId: number) => {
    setHoveredProjectId(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProjectId(null);
  };
  return (
    <div className="px-10 py-5 text-white bg-black h-full">
      <Navbar />
      <h1 className={`${abril.className} text-xl md:text-3xl py-3 uppercase`}>
        Portfolio Projects
      </h1>
      <p className={`${quest.className} text-sm md:text-lg`}>
        Here are some of my recent projects created with several frontend
        frameworks/libraries
      </p>
      <div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 py-5">
          {projectData.map((data) => {
            return (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
                key={data.id}
                className={`relative overflow-y-scroll overflow-x-hidden max-w-xl h-auto w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-100 border border-white rounded-md ${
                  hoveredProjectId === data.id ? "border-pink-500" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(data.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  className="object-cover"
                  alt="WoodLorem"
                  src={data.projectImage}
                  loading="lazy"
                />
                <div className="bg-slate-300/75">
                  {hoveredProjectId === data.id && (
                    <span className="absolute flex flex-col gap-4 top-0 p-2 w-full md:p-4 bg-slate-300/75 h-full text-black">
                      <h1
                        className={`${lobby.className} uppercase text-center font-bold text-sm md:text-xl sm:text-2xl`}
                      >
                        {data.projectName}
                      </h1>
                      <p
                        className={`${cpnfy.className} md:text-sm text-xs leading-tight md:leading-normal`}
                      >
                        {data.projectDesc}
                      </p>
                      <span className="flex justify-center flex-wrap gap-1">
                        {data.tools.map((tool) => (
                          <ul className="" key={tool}>
                            <li className="md:text-sm text-xs bg-white rounded-sm p-1 md:p-2 font-bold">
                              {tool}
                            </li>
                          </ul>
                        ))}
                      </span>
                      <span className="flex text-right w-full gap-2 absolute">
                        <a href={data.github} target="_blank">
                          <IoLogoGithub className="sm:text-2xl text-lg hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
                        </a>
                        <a href={data.link} target="_blank">
                          <AiOutlineLink className="sm:text-2xl text-lg hover:text-pink-500 transition-colors ease-in-out cursor-pointer" />
                        </a>
                      </span>
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
