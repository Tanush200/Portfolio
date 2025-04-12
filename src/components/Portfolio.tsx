"use client";
import React from "react";
import proj1 from "@/assets/proj-1.png";
import proj2 from "@/assets/proj-2.png";
import proj3 from "@/assets/proj-3.png";
import proj4 from "@/assets/proj-4.png";
import proj5 from "@/assets/proj-5.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiSqlite,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const projects = [
  {
    title: "Snippet Manager & Code Editor",
    description:
      "🚀 A sleek web app to store, edit, and manage your code snippets efficiently.",
    techstack: "Next.js, TypeScript, PrismaORM, TailwindCSS, SQLite",
    link: "https://github.com/Tanush200/SNIPPET",
    src: proj1,
    icons: [SiNextdotjs, SiTypescript, SiPrisma, SiTailwindcss, SiSqlite],
  },
  {
    title: "PORTFOLIO",
    description:
      "📝 A Portfolio application built with Next.js TypeScript and Tailwind Css.",
    techstack: "Next.js TypeScript and Tailwind Css",
    link: "https://github.com/Tanush200/Portfolio",
    src: proj5,
    icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
  },
  {
    title: "TODO APP",
    description:
      "📝 A minimalistic TODO application built with React.js and Vanilla CSS.",
    techstack: "React.js, Vanilla CSS",
    link: "https://github.com/Tanush200/Todo-React",
    src: proj2,
    icons: [SiReact, SiCss3],
  },
  {
    title: "CRUD API",
    description:
      "🔧 A powerful Node.js API to perform Create, Read, Update, and Delete operations.",
    techstack: "Node.js, Express.js, MongoDB",
    link: "https://github.com/Tanush200/CRUD-API",
    src: proj3,
    icons: [SiNodedotjs, SiExpress, SiMongodb],
  },
  {
    title: "Book Store",
    description:
      "📚 A MERN stack Book Store app for browsing and managing books.",
    techstack: "React.js, Node.js, Express.js, MongoDB",
    link: "https://github.com/Tanush200/BOOK-STORE",
    src: proj4,
    icons: [SiExpress, SiNodedotjs, SiMongodb, SiReact],
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-[#121c2c] to-[#3e5c76] py-28 px-6"
      id="portfolio"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-20">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87bdd8] to-[#a8d0e6]">
          Projects
        </span>
      </h2>

      <div className="max-w-[1100px] mx-auto space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-10 items-center`}
          >
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-6xl font-bold text-white/60">{`0${
                index + 1
              }`}</h3>
              <h2 className="text-3xl md:text-4xl font-semibold">
                {project.title}
              </h2>
              <p className="text-white/70 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 my-2 text-2xl">
                {project.icons.map((Icon, idx) => (
                  <Icon
                    key={idx}
                    className="hover:text-[#87bdd8] transition-all duration-200"
                    title={project.techstack.split(", ")[idx]}
                  />
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                className="inline-block mt-4 px-5 py-2 border border-[#87bdd8] text-[#87bdd8] rounded-lg hover:bg-[#87bdd8] hover:text-white transition-all duration-300"
              >
                Link
              </Link>
            </div>


            <div className="md:w-1/2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden group border-2 border-[#87bdd8] hover:shadow-xl transition-all duration-300">
                <Image
                  src={project.src}
                  alt={project.title}
                  className="h-[280px] w-[480px] object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
