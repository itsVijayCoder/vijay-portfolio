import React, { PropsWithChildren } from "react";
import { BgGrain } from "../BgGrain";
import { twMerge } from "tailwind-merge";

export const Card = ({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <>
      <div
        className={twMerge(
          "relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
          className,
        )}
      >
        <BgGrain />
        {children}
      </div>
    </>
  );
};
