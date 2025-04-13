"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
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
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiGraphql,
  SiSocketdotio,
  SiHtml5,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skillIcons = [
  { icons: <SiHtml5 size={60} />, label: "HTML" },
  { icons: <SiCss3 size={60} />, label: "CSS" },
  { icons: <SiJavascript size={60} />, label: "JavaScript" },
  { icons: <SiReact size={60} />, label: "React.js" },
  { icons: <SiTailwindcss size={60} />, label: "Tailwind CSS" },
  { icons: <SiNodedotjs size={60} />, label: "Node.js" },
  { icons: <SiExpress size={60} />, label: "Express.js" },
  { icons: <SiMongodb size={60} />, label: "MongoDB" },
  { icons: <SiNextdotjs size={60} />, label: "Next.js" },
  { icons: <SiTypescript size={60} />, label: "TypeScript" },
  { icons: <SiPrisma size={60} />, label: "Prisma" },
  { icons: <SiSqlite size={60} />, label: "SQLite" },
  { icons: <SiPostgresql size={60} />, label: "PostgreSQL" },
  { icons: <SiGraphql size={60} />, label: "GraphQL" },
  { icons: <SiFirebase size={60} />, label: "Firebase" },
  { icons: <SiSocketdotio size={60} />, label: "WebSocket" },
  { icons: <SiGit size={60} />, label: "Git" },
  { icons: <SiGithub size={60} />, label: "GitHub" },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[black] to-[#1a1a1a] py-24">
      <div className="text-white max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">MY SKILLS</h2>
        <div className="w-[40rem] h-40 relative ml-65">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-[#70badf] to-[#5c7a9e] rounded-full mx-auto mb-12"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 cursor-pointer">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] border border-[#333] rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_#70badf] transition-all duration-300 ease-in-out"
            >
              <div className="text-white hover:text-[#70badf] transition-colors duration-300">
                {skill.icons}
              </div>
              <p className="mt-4 text-white text-base font-medium tracking-wide">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
