"use client";
import React from "react";
// import { AnimatedTooltip } from "../ui/animated-tooltip";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "ChatGPT",
    designation: "AI  Integration",
    image:
      "https://logos-world.net/wp-content/uploads/2023/02/ChatGPT-Logo.png",
  },
  {
    id: 2,
    name: "React",
    designation: "Frontend lib",
    image:
      "https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png",
  },
  {
    id: 3,
    name: "MongoDB",
    designation: "Database",
    image:
      "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png",
  },
  {
    id: 4,
    name: "Fastapi",
    designation: "backend framework",
    image:
      "https://res.cloudinary.com/harendra21/image/upload/v1742473055/withcodeexample.com/getting-started-with-python-fastapi-a-comprehensive-guide_tnigh2.jpg",
  },
  {
    id: 5,
    name: "Supabase",
    designation: "Baas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt5RQx6V1W6XXJcczgwNbzbdGyfHNCYtSCQ&s"
  },
  {
    id: 6,
    name: "Next.js",
    designation: "Framework",
    image:
      "https://wallpaperbat.com/img/8674311-nextjs-wallpaper.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
