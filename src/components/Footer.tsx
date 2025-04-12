"use client"
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-12 max-w-[1000px] text-white/70 py-8 container mx-auto border-t borer-gray-700 pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Tanush Saha</h1>
      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/tanush-saha-387555239/"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Tanush200" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/" className="hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer
