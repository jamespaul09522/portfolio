"use client";
import React from "react";
// import { HeroParallax } from "../ui/hero-parallax";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image1.png",
  },
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image2.png",
  },
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image3.png",
  },

  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image4.png",
  },
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image5.png",
  },
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image6.png",
  },

  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image7.png",
  },
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image8.png",
  },
  {
    title: "Project",
    link: "#",
    thumbnail:
      "/image9.png",
  },
];
