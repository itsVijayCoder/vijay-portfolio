import React from "react";
import { Card } from "../ui/Card";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";

export const MyMapLocation = () => {
  return (
    <>
      <Card className="relative z-0 h-[320px] p-0">
        <Image src={mapImage} alt="Map" className="-z-10" />
        <Image
          src={smileMemoji}
          alt="Smile-Memoji "
          className="absolute left-1/2 top-1/2 z-10 size-40 -translate-x-1/2 -translate-y-1/2"
        />
      </Card>
    </>
  );
};
