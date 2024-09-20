import React from "react";
import personWithLaptop from "@/assets/images/memoji-computer.png";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={personWithLaptop}
          className="size-[100px]"
          alt="Person with laptop"
        />

        <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
          <div className="relative size-2.5 rounded-full bg-green-500">
            <span className="animate-ping-large absolute inset-0 rounded-full bg-green-500"></span>
          </div>

          <div className="text-sm font-medium">Available for New Projects</div>
        </div>
      </div>

      <div className="mx-auto max-w-lg">
        <h1 className="mt-8 text-center font-calistoga text-3xl tracking-wide md:text-5xl">
          Building Exceptional User Experiences
        </h1>

        <p className="mt-4 text-center text-white/60 md:text-lg">
          I Specialize in transforming design into functional, high-performing
          web experiences. Let's discuss our next project.
        </p>
      </div>
    </>
  );
};
