import React from "react";
import grainImage from "@/assets/images/grain.jpg";

export const BgGrain = () => {
  return (
    <>
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
    </>
  );
};
