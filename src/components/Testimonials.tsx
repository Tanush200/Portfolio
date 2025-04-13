"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ColourfulText } from "./ui/colourful-text";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As a Full Stack Web Developer, build both the front-end and back-end of our applications, ensuring seamless integration and smooth user experiences.",
      name: "Tanush Saha",
      designation:
        "Full Stack Web Developer - Architecting seamless and scalable applications",
      src: "/My.jpg",
    },
    {
      quote:
        "As a Frontend Developer, I focus on creating beautiful and functional user interfaces that bring our digital experiences to life while ensuring responsiveness and accessibility.",
      name: "Tousif Ahamed",
      designation:
        "Frontend Developer - Building intuitive and user-friendly interfaces",
      src: "/tousif.jpg",
    },
    {
      quote:
        "I work on both the front-end and back-end to ensure a well-rounded solution that balances functionality and performance, delivering top-notch results to our clients.",
      name: "Sumit Kumar Singh",
      designation:
        "Full Stack Web Developer - Transforming ideas into high-performance web apps",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I create visually stunning front-end experiences, focusing on both aesthetic design and intuitive navigation to ensure that users have the best possible interactions with our product.",
      name: "Azlan Jamshed",
      designation:
        "Frontend Developer - Crafting immersive web designs with cutting-edge technologies",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "By focusing on performance, scalability, and maintainability, I ensure that our backend systems provide the foundation for all our application’s features to function smoothly.",
      name: "Nawajish Alam",
      designation:
        "UI/UX Designer - Designing intuitive, accessible, and beautiful user experiences",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "As a Backend Developer, I design and implement the server-side logic and ensure our systems scale efficiently while maintaining seamless integration with front-end systems.",
      name: "Priyans Srivastav",
      designation: "Backend Developer - Powering robust server-side solutions",
      src: "/profilepic.png",
    },
    {
      quote:
        "I build clean, efficient front-end code that aligns perfectly with our design principles while focusing on performance and user engagement.",
      name: "Biswajit Sahoo",
      designation:
        "Frontend Developer - Delivering pixel-perfect designs with clean code",
      src: "/a1.png",
    },
    {
      quote:
        "I specialize in creating fluid, responsive user interfaces that adjust perfectly across different devices, ensuring the best possible user experience for everyone.",
      name: "Sreyas Anand",
      designation:
        "Frontend Developer - Creating responsive and high-performance user interfaces",
      src: "/a2.png",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-white tracking-tight leading-tight">
          Our <ColourfulText text="<Gen2De/>" /> Members
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          We are a passionate team of full-stack developers crafting beautiful,
          scalable, and high-impact digital experiences. At{" "}
          <ColourfulText text="<Gen2De/>" /> . we turn innovative ideas into
          powerful, real-world solutions. 🚀
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
