import { hobbiesItems } from "@/db/about-section-data";
import React from "react";
import { Card } from "../ui/Card";
import { AboutCardHeader } from "./AboutCardHeader";

export const MyHobbies = () => {
  return (
    <>
      <Card className="flex h-[320px] flex-col">
        <AboutCardHeader
          title="Beyond the Code"
          description="Explore my interests and hobbies beyond the digital realm"
          className=""
        />

        <div className="relative flex-1">
          {hobbiesItems?.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-gradient absolute inline-flex gap-2 rounded-full px-6 py-1.5"
              style={{
                top: hobby.top,
                left: hobby.left,
              }}
            >
              <span className="font-medium text-gray-950">{hobby.title}</span>
              <span className="">{hobby.emoji}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
