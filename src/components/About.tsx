import React from "react";
import Image from "next/image";
import book from "@/assets/book.png";
import pc from "@/assets/pc.png";
import card from "@/assets/card.png";
import finance from "@/assets/finance.png";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-14"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87bdd8] to-[#a8d0e6]">
          ABOUT ME
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
        {/* Card 1 */}
        <div className="cursor-pointer relative col-span-1 md:col-span-5 group bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex gap-5 items-center transition hover:scale-[1.02] hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#87bdd8] via-[#5c7a9e] to-[#3e5c76] opacity-30 animate-gradient-xy rounded-xl z-[-1]"></div>
          <Image src={book} alt="book" className="h-[100px] w-auto" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Constant Learner
            </h3>
            <p className="text-white/70 mt-1 text-sm">
              Exploring new tech, sharpening problem-solving, and pushing limits
              daily.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative cursor-pointer col-span-1 md:col-span-3 group bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex gap-5 items-center transition hover:scale-[1.02] hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#87bdd8] via-[#5c7a9e] to-[#3e5c76] opacity-30 animate-gradient-xy rounded-xl z-[-1]"></div>
          <Image src={pc} alt="pc" className="h-[100px] w-auto" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Frontend & Backend
            </h3>
            <p className="text-white/70 mt-1 text-sm">
              I build apps using React, Next.js, Prisma, MongoDB, and more.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative cursor-pointer col-span-1 md:col-span-3 group bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex gap-5 items-center transition hover:scale-[1.02] hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#87bdd8] via-[#5c7a9e] to-[#3e5c76] opacity-30 animate-gradient-xy rounded-xl z-[-1]"></div>
          <Image src={card} alt="card" className="h-[100px] w-auto" />
          <div>
            <h3 className="text-xl font-semibold text-white">Code & Logic</h3>
            <p className="text-white/70 mt-1 text-sm">
              I love clean logic, optimized code, and solving challenges that
              make me think.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative cursor-pointer col-span-1 md:col-span-5 group bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex gap-5 items-center transition hover:scale-[1.02] hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#87bdd8] via-[#5c7a9e] to-[#3e5c76] opacity-30 animate-gradient-xy rounded-xl z-[-1]"></div>
          <Image src={finance} alt="finance" className="h-[100px] w-auto" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Let&apos;s Connect
            </h3>
            <p className="text-white/70 mt-1 text-sm">
              Always open to internships, collaborations, and cool side
              projects. Hit me up!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
