import { SectionHeader } from "@/components/SectionHeader";
import { MyReadings } from "@/components/about-section/MyReadings";
import { MyToolbox } from "@/components/about-section/MyToolbox";
import { MyHobbies } from "@/components/about-section/MyHobbies";
import { MyMapLocation } from "@/components/about-section/MyMapLocation";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyeBrows="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what I'm passionate about."
        />

        <div className="mt-20 flex flex-col gap-6 md:grid md:grid-cols-5">
          <div className="col-span-2">
            <MyReadings />
          </div>

          <div className="md:col-span-3">
            <MyToolbox />
          </div>

          <div className="md:col-span-3">
            <MyHobbies />
          </div>

          <div className="col-span-2">
            <MyMapLocation />
          </div>
        </div>
      </div>
    </section>
  );
};
