"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { Quicksand, Josefin_Sans, Montserrat } from "next/font/google";
import DateTimeComponent from "./DateTime";
import Link from "next/link";

const quicksand = Quicksand({ weight: ["400"], subsets: ["latin"] });
const raleway = Josefin_Sans({ weight: ["300"], subsets: ["latin"] });

const Navbar = () => {
  const [navBar, setNavbar] = useState<boolean>(false);
  const handleOpenNav = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <motion.div
    className="md:py-0 py-5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h1
          className={`${quicksand.className} uppercase text-center text-white text-xs font-bold md:text-lg`}
        >
          <Link href="/">
            Adetomokun <br /> Israel
          </Link>
        </h1>
        <span>
          <DateTimeComponent />
        </span>
        <span
          onClick={handleOpenNav}
          className="md:h-12 h-6 w-6 md:w-12  hover:bg-pink-500 transition-colors ease-in-out flex justify-center items-center rounded-full bg-white cursor-pointer"
        >
          <ImMenu className="md:text-2xl text-xs text-black hover:text-white" />
        </span>
      </div>
      {navBar && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="w-full h-screen bg-pink-500 fixed top-0 left-0 right-0 z-[99]"
        >
          <span onClick={handleOpenNav}>
            <IoMdClose className="text-4xl mr-12 mt-7 cursor-pointer text-white right-0 absolute" />
          </span>
          <ul className="flex flex-col justify-center items-center h-screen">
            <motion.li
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              className={`${raleway.className} text-5xl py-3 text-white font-bold cursor-pointer`}
            >
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              className={`${raleway.className} text-5xl py-3 text-white font-bold cursor-pointer`}
            >
              <Link href="/about">About</Link>
            </motion.li>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`${raleway.className} text-5xl py-3 text-white font-bold cursor-pointer`}
            >
              <Link href="/projects">Projects</Link>
            </motion.li>
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`${raleway.className} text-5xl py-3 text-white font-bold cursor-pointer`}
            >
              <Link href="/contact">Contacts</Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
