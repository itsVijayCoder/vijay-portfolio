/* eslint-disable react/no-unescaped-entities */
import personWithLaptop from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { HeroRings } from "@/components/hero-section/HeroRings";
import { HeroStars } from "@/components/hero-section/HeroStars";
import { BgGrain } from "@/components/BgGrain";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <BgGrain />
        <HeroRings />

        <HeroStars />
      </div>

      <section className="container z-10">
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
            <div className="text-sm font-medium">
              Available for New Projects
            </div>
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

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link href="#projects" className="btn-outline">
            <span className="font-semibold">Explore my work </span>
            <ArrowDown className="size-4" />
          </Link>

          <Link href="#contact" className="btn-white">
            <span className="">👋</span>
            <span className="font-semibold">Let's Connect</span>
          </Link>
        </div>
      </section>
    </section>
  );
};
