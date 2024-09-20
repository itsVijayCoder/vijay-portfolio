import React, { Fragment } from "react";
import { AboutTechIcon } from "./AboutTechIcon";
import { twMerge } from "tailwind-merge";
type ItemsProps = {
  items: {
    id: number;
    title: string;
    iconType: any;
  }[];

  className?: string;
  itemsWrapperClassName?: string;
};

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ItemsProps) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items?.map((item) => (
              <div
                className="inline-flex items-center justify-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
                key={item.id}
              >
                <AboutTechIcon component={item.iconType} />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
