"use client";

import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up.svg";

export const SideUpArrow = () => {
  return (
    <>
      <button
        className=""
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpRightIcon className="fixed left-[97%] top-[95%] mr-2 h-12 w-12 -translate-x-full -translate-y-full rounded-full bg-white/10 p-2 text-white/70 opacity-40 outline outline-2 outline-white/50 transition duration-500 hover:bg-white/30 hover:text-white hover:opacity-100" />
      </button>
    </>
  );
};
