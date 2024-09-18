import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import Image from "next/image";
import Link from "next/link";
import { BgGrain } from "@/components/BgGrain";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/db/projectsData";
import { Card } from "@/components/ui/Card";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-24">
      <section className="container">
        <SectionHeader
          eyeBrows="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects?.map((project) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
            >
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
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
};
