import React from "react";
import Image from "next/image";
import book from "@/assets/book.png";
import pc from "@/assets/pc.png";
import card from "@/assets/card.png";
import finance from "@/assets/finance.png";
import { Cover } from "@/components/ui/cover";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-14"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
        <Cover>ABOUT ME</Cover>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
        {[
          {
            title: "Constant Learner",
            description:
              "Exploring new tech, sharpening problem-solving, and pushing limits daily.",
            image: book,
            span: "md:col-span-5",
          },
          {
            title: "Frontend & Backend",
            description:
              "I build apps using React, Next.js, Prisma, MongoDB, and more.",
            image: pc,
            span: "md:col-span-3",
          },
          {
            title: "Code & Logic",
            description:
              "I love clean logic, optimized code, and solving challenges that make me think.",
            image: card,
            span: "md:col-span-3",
          },
          {
            title: "Let's Connect",
            description:
              "Always open to internships, collaborations, and cool side projects. Hit me up!",
            image: finance,
            span: "md:col-span-5",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer col-span-1 ${item.span} group bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] border border-[#2c2c2c] rounded-2xl p-6 flex gap-5 items-center transition hover:scale-[1.02] hover:shadow-xl`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#87bdd8] via-[#5c7a9e] to-[#3e5c76] opacity-10 animate-gradient-xy rounded-xl z-[-1]" />
            <Image
              src={item.image}
              alt={item.title}
              className="h-[100px] w-auto"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-white/70 mt-1 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
