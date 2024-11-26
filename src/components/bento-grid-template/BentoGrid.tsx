import React from "react";

export const BentoGrid = () => {
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
        <div className="xl:max-w-[25rem] grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1">
          <div className=""></div>
          <div className=""></div>
        </div>

        <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>

        <div className="grid w-full flex-1 gap-6">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
