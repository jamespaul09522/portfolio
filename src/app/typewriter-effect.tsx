"use client";
// import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I'm a",
      className: "text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4"
    },
    // {
    //   text: "Work from anywhere, shipfast",
    //   className: "text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4"
    // },
    {
      text: "Software Developer.",
      className: "text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 text-blue-500 dark:text-blue-500 ",
    },
  ];
  return (
    // <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    // </div>
  );
}
