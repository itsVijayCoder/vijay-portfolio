"use client";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/db/projectsData";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyeBrows="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects?.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-8 lg:px-16 lg:pt-14"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                <div className="lg:pb-16">
                  <div className="bg-text-gradient inline-flex gap-2 text-sm font-bold uppercase tracking-widest">
                    <span className="">{project.company}</span>
                    <span className="">&bull;</span>
                    <span className="">{project.year}</span>
                    <span className="">&bull;</span>
                    <span className="">{project.stack}</span>
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

                  <ul className="mt-4 flex flex-wrap gap-4 md:mt-5">
                    {project.techStack?.map((tech) => (
                      <li
                        key={tech}
                        className="flex gap-2 font-calistoga text-sm text-white md:text-base"
                      >
                        <div className="bg-text-gradient inline-flex">
                          <span className="">&bull;</span>
                        </div>
                        <p>{tech}</p>
                      </li>
                    ))}
                  </ul>

                  <Link href={project.link} target="_blank">
                    {/* <button className="btn-white mt-8 w-full font-semibold  md:w-fit">
                      <span className="">Visit Live Site</span>
                      <ArrowUpRightIcon className="size-5" />
                    </button> */}

                    <Button
                      title={"Visit Live Site"}
                      onClick={() => window.open(project.link, "_blank")}
                      rightIcon={<ArrowUpRightIcon className="size-8" />}
                      containerClass={
                        "btn-white mt-8 w-full text-xl font-semibold md:w-fit"
                      }
                      leftIcon={""}
                    />
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
      </div>
    </section>
  );
};
