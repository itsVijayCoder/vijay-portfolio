import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type HeroOrbitProps = {
  size: number;
  rotation: number;
  orbitSpinDuration?: string;
  isOrbitSpin?: boolean;
  isSpin?: boolean;
  spinDuration?: string;
};

export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitSpinDuration,
  isOrbitSpin = false,
  isSpin = false,
  spinDuration,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(isOrbitSpin && "animate-spin")}
        style={{ animationDuration: orbitSpinDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(isSpin && "animate-spin")}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
