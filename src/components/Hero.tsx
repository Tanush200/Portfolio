// "use client";
// import React from "react";
// import Image from "next/image";
// import cursor from "@/assets/icon1.png";
// import lightning from "@/assets/icon2.png";
// import profilepic from "@/assets/my-photo.png";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="min-h-screen relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] mt-0">
//       <div className="absolute z-[-1] h-[1300px] w-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-1/2 -translate-x-1/2 rounded-full"></div>

//       <div className="relative px-4 pt-24">
//         {" "}
//         {/* Added padding-top to create space */}
//         <div className="text-4xl md:text-6xl font-bold text-center mb-8">
//           {" "}
//           {/* Added margin-bottom */}
//           <h1 className="text-[#98B4CE]">Hi, I am</h1>
//           <h1 className="text-[#E48A57]">Tanush Saha</h1>
//         </div>
//         <motion.div
//           className="absolute left-[10%] md:left-[280px] top-[170px]"
//           drag
//         >
//           <Image
//             src={cursor}
//             height={190}
//             width={190}
//             alt="cursor"
//             draggable={false}
//           />
//         </motion.div>
//         <motion.div
//           className="absolute right-[10%] md:right-[220px] top-[20px]"
//           drag
//         >
//           <Image
//             src={lightning}
//             height={120}
//             width={120}
//             alt="lightning"
//             draggable={false}
//           />
//         </motion.div>
//         <p className="text-center text-lg md:text-xl max-w-[500px] mx-auto mt-8 text-white/80 px-2">
//           I am a full stack developer, passionate about learning new things and
//           focused on creating websites that provide the best experience for
//           users.
//         </p>
//         <Image
//           src={profilepic}
//           alt="profile picture"
//           className="max-w-[220px] mx-auto mt-6"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import cursor from "@/assets/icon1.png";
import lightning from "@/assets/icon2.png";
import profilepic from "@/assets/my-photo.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-clip bg-[linear-gradient(to_bottom,#000,#1d2d44_35%,#3e5c76_60%,#87bdd8_85%)]">
      <div className="absolute z-[-1] h-[1300px] w-[1300px] bg-[radial-gradient(closest-side,#000_80%,#1d2d44)] top-[550px] left-1/2 -translate-x-1/2 rounded-full"></div>

      <div className="relative px-4 pt-24">
        <div className="text-4xl md:text-6xl font-bold text-center mb-8">
          <h1 className="text-[#87bdd8]">Hi, I am</h1>
          <h1 className="text-[#f0f0f0]">Tanush Saha</h1>
        </div>

        <motion.div
          className="hidden md:block absolute left-[10%] md:left-[280px] top-[170px]"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <Image
            src={cursor}
            height={190}
            width={190}
            alt="cursor"
            draggable={false}
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[10%] md:right-[220px] top-[20px]"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <Image
            src={lightning}
            height={120}
            width={120}
            alt="lightning"
            draggable={false}
          />
        </motion.div>

        <p className="text-center text-lg md:text-xl max-w-[600px] mx-auto mt-8 text-white/80 px-4 leading-relaxed">
          I am a{" "}
          <span className="text-[#87bdd8] font-semibold">
            Full Stack Developer
          </span>
          , passionate about learning new technologies and creating websites
          that offer the best possible experience for users.
        </p>

        <Image
          src={profilepic}
          alt="profile picture"
          className="max-w-[220px] mx-auto mt-8 rounded-2xl border-4 border-[#87bdd8]/30 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
