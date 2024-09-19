import React from "react";
import { Card } from "../ui/Card";
import { AboutCardHeader } from "./AboutCardHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

export const MyReadings = () => {
  return (
    <>
      <Card className="h-[320px]">
        <AboutCardHeader
          title="My Reads"
          description="Explore the books shaping my perspectives."
          className="md:pb-5"
        />

        <div className="mx-auto mt-2 w-40 md:mt-0">
          <Image src={bookImage} alt="Book-Cover" />
        </div>
      </Card>
    </>
  );
};
