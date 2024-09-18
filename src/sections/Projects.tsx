import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import Image from "next/image";
import Link from "next/link";
import { BgGrain } from "@/components/BgGrain";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="py-20 lg:py-24">
      <section className="container">
        <div className="flex justify-center">
          <p className="bg-text-gradient font-semibold uppercase tracking-widest md:font-bold">
            Real-world Results
          </p>
        </div>

        {/* <div className="mx-auto max-w-lg"> */}
        <h2 className="mt-6 text-center font-calistoga text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:max-w-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>
        {/* </div> */}

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects?.map((project) => (
            <div
              key={project.title}
              className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] md:px-10 md:pt-12 lg:px-20 lg:pt-16"
            >
              <BgGrain />

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-text-gradient inline-flex gap-2 text-sm font-bold uppercase tracking-widest">
                    <span className="">{project.company}</span>
                    <span className="">&bull;</span>
                    <span className="">{project.year}</span>
                  </div>

                  <h3 className="mt-2 font-calistoga text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="mt-4 border-t-2 border-white/15 md:mt-5" />

                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span className="">{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={project.link} target="_blank">
                    <button className="btn-white mt-8 w-full font-semibold md:w-fit">
                      <span className="">Visit Live Site</span>
                      <ArrowUpRightIcon className="size-5" />
                    </button>
                  </Link>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
