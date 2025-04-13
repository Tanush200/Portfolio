"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/tanush-saha-387555239/",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/accounts/login/?hl=en",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/saha_saha05",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Tanush200",
  },
];

const Footer = () => {
  return (
    <div className="mt-12 max-w-[1000px] text-white/70 py-8 container mx-auto border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
      <h1 className="text-2xl font-bold">Tanush Saha</h1>
      <div className="flex items-center justify-center h-[80px] w-full max-w-md">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default Footer;
