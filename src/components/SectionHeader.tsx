import React from "react";

type SectionHeaderProps = {
  eyeBrows: string;
  title: string;
  description: string;
};

export const SectionHeader = ({
  eyeBrows,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-text-gradient font-semibold uppercase tracking-widest md:font-bold">
          {eyeBrows}
        </p>
      </div>

      <div className="mx-auto max-w-lg">
        <h2 className="mt-6 text-center font-calistoga text-3xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:max-w-lg lg:text-xl">
          {description}
        </p>
      </div>
    </>
  );
};
