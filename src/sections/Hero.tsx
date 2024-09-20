/* eslint-disable react/no-unescaped-entities */
import { HeroRings } from "@/components/hero-section/HeroRings";
import { HeroStars } from "@/components/hero-section/HeroStars";
import { BgGrain } from "@/components/BgGrain";

import { HeroButtons } from "@/components/hero-section/HeroButtons";
import { HeroContent } from "@/components/hero-section/HeroContent";
export const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <BgGrain />

        <HeroRings />

        <HeroStars />
      </div>

      <section className="container z-10">
        <HeroContent />

        <HeroButtons />
      </section>
    </section>
  );
};
