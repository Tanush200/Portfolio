"use client";
import Link from "next/link";
import React, { useState } from "react";

const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const NavbarPage = () => {



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gradient-to-r from-black to-gray-800 p-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">
            Tanush
          </Link>

        
          <div className="hidden md:flex gap-8">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-white hover:text-[#87bdd8] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

        
          <div className="flex items-center gap-4">
            <Link
              href="/resume.pdf"
              target="download"
              rel="noopener noreferrer"
            >
              <button className="bg-black hover:bg-gray-700 cursor-pointer text-white px-6 py-3 rounded-lg">
                Download Resume
              </button>
            </Link>
          </div>


          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>


        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-white p-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#87bdd8] text-white px-6 py-3 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#87bdd8] text-white px-6 py-3 rounded-lg"
              >
                Book a call
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarPage;
