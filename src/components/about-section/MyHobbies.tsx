import { hobbiesItems } from "@/db/about-section-data";
import React from "react";
import { Card } from "../ui/Card";
import { AboutCardHeader } from "./AboutCardHeader";

export const MyHobbies = () => {
  return (
    <>
      <Card className="h-[320px]">
        <AboutCardHeader
          title="Beyond the Code"
          description="Explore my interests and hobbies beyond the digital realm"
        />

        <div className="">
          {hobbiesItems?.map((hobby) => (
            <div className="" key={hobby.id}>
              <span className="">{hobby.title}</span>
              <span className="">{hobby.emoji}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
