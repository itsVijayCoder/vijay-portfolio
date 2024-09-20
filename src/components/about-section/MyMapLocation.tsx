import React from "react";
import { Card } from "../ui/Card";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";

export const MyMapLocation = () => {
  return (
    <>
      <Card className="relative h-[320px]">
        <Image
          src={mapImage}
          alt="Map"
          className="-z-10 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:outline-offset-2 after:outline-gray-900/30 after:content-['']">
          <div className="bg-gradient absolute inset-0 -z-20 animate-ping rounded-full [animation-duration:2s]"></div>
          <div className="bg-gradient absolute inset-0 -z-10 rounded-full"></div>
          <Image src={smileMemoji} alt="Smile-Memoji " className="size-20" />
        </div>
      </Card>
    </>
  );
};
