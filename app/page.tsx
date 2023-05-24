"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { RiLoaderFill } from "react-icons/ri";
import { Oswald } from "next/font/google";
import AnimateTitle from "./components/AnimateTitle";
import { Hero } from "./components/Hero";

const oswald = Oswald({ weight: ["400"], subsets: ["latin"] });
export default function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 5 });

    return animation.stop;
  }, []);

  return (
    <div className="md:px-10 px-4 md:py-5 py-2 h-screen bg-black">
      {showNavbar ? (
        <div>
          <Navbar />
          <Hero/>
          {/* <AnimateTitle /> */}
        </div>
      ) : (
        <div className="flex flex-col justify-center h-full items-center">
          <span className="flex z-[100] gap-1 items-center">
            <motion.h1
              className={`${oswald.className} text-black text-5xl font-bold`}
            >
              {rounded}
            </motion.h1>
            %
          </span>

          <div className=" w-52 h-52 bg-white flex justify-center items-center animate-pulse rounded-full absolute">
            <div className=" w-44 h-44 bg-slate-300 animate-pulse rounded-full z-10 absolute"></div>
          </div>
        </div>
      )}
    </div>
  );
}
