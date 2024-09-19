import React from "react";
import { twMerge } from "tailwind-merge";

type AboutTechIconProps = {
  component: React.ElementType;
  className?: string;
};

export const AboutTechIcon = ({ component, className }: AboutTechIconProps) => {
  const Component = component;
  return (
    <>
      <Component
        className={twMerge(
          "size-10 fill-[url(#tech-icon-gradient)]",
          className,
        )}
      />

      <svg className="absolute size-0">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stop-color="rgb(110 231 183)" />
          <stop offset="100%" stop-color="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
