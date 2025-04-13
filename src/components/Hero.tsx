"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cursor from "@/assets/icon1.png";
import lightning from "@/assets/icon2.png";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";


const Hero = () => {

  return (
    <div className="min-h-[650px] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center px-4 py-12 rounded-lg">
      <ShootingStars />
      <StarsBackground />

      <motion.div
        className="hidden md:block absolute left-[10%] md:left-[280px] top-[160px] z-30"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Image
          src={cursor}
          height={160}
          width={160}
          alt="cursor"
          draggable={false}
          className="opacity-80"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute right-[10%] md:right-[220px] top-[40px] z-30"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Image
          src={lightning}
          height={100}
          width={100}
          alt="lightning"
          draggable={false}
          className="opacity-80"
        />
      </motion.div>

      
      <div className="text-center relative z-30 mt-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
          Hi, I'm <span className="text-[#87bdd8]">Tanush Saha</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          A passionate{" "}
          <span className="text-[#87bdd8] font-semibold">
            Full Stack Developer
          </span>{" "}
          dedicated to learning new technologies and building seamless user
          experiences. ✨
        </p>
      </div>

      
      <div className="p-4 mt-10 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="/My.jpg"
          secondImage="/my-photo.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[300px] md:w-[300px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
};

export default Hero;
