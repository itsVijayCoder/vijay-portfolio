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

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <MyReadings />
            </div>

            <div className="md:col-span-3 lg:col-span-2">
              <MyToolbox />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-3 lg:col-span-2">
              <MyHobbies />
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <MyMapLocation />
            </div>
          </div>

          {/* For future design reference */}

          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-7">
            <div className="md:col-span-2 lg:col-span-2">
              <MyMapLocation />
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <MyHobbies />
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <MyMapLocation />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-3 lg:col-span-2">
              <MyToolbox />
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <MyReadings />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
