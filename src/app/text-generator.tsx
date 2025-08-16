"use client";
// import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I build beautiful products with the latest technologies and frameworks.
        I'm a passionate developer and designer Who love to build
        amazing products.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
