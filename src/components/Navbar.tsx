"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import React, { useState } from "react";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-[#000] w-full z-50 shadow-md">
      <div className="hidden md:flex items-center justify-center px-4 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="group">
                <p className="flex items-center justify-center text-white hover:text-[#87bdd8] transition-colors duration-300">
                  {link.title}
                </p>
                <div className="relative h-1 mt-1">
                  <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-[#87bdd8]/70 rounded-full group-hover:w-full"></div>
                  <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-[#87bdd8] rounded-full group-hover:w-full"></div>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="group">
              <h1 className="text-lg font-bold text-white cursor-pointer group-hover:text-[#87bdd8] transition-colors duration-300">
                Contact Me
              </h1>
              <div className="relative h-1 mt-1">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-[#87bdd8]/70 rounded-full group-hover:w-full"></div>
                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-[#87bdd8] rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden fixed top-5 right-5 z-50 text-white border rounded border-white/70 p-2 bg-black/40 hover:bg-white/10 transition"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 w-full h-full bg-black/90 z-40"
      >
        <ul className="text-4xl font-semibold mt-24 text-center space-y-10 text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="hover:text-[#87bdd8] transition-colors duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={closeNav}
              className="hover:text-[#87bdd8] transition-colors duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
