"use client";
import React from "react";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroButtons = () => {
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
        <button
          className="btn-outline"
          onClick={() => {
            const element = document.getElementById("projects");

            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-semibold">Explore my work </span>
          <ArrowDown className="size-4" />
        </button>

        <button
          className="btn-white"
          onClick={() => {
            const element = document.getElementById("contact");

            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="">👋</span>
          <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
    </>
  );
};
