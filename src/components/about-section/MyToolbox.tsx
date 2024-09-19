import { toolBoxItems } from "@/db/about-section-data";
import React from "react";
import { Card } from "../ui/Card";
import { AboutCardHeader } from "./AboutCardHeader";
import { ToolBoxItems } from "./ToolBoxItems";

export const MyToolbox = () => {
  return (
    <>
      <Card className="h-[320px]">
        <AboutCardHeader
          title="My Toolbox"
          description="Explore the technologies and tools that I use to craft exceptional digital experiences."
          className=""
        />

        <div className="">
          <ToolBoxItems items={toolBoxItems} className="" />
          <ToolBoxItems
            items={toolBoxItems}
            className="mt-6"
            itemsWrapperClassName="-translate-x-1/2"
          />
        </div>
      </Card>
    </>
  );
};
