import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

type AboutHeaderProps = {
  title: string;
  description: string;
  className?: string;
};
export const AboutCardHeader = ({
  title,
  description,
  className,
}: AboutHeaderProps) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-calistoga text-3xl">{title}</h3>
      </div>

      <p className="mt-2 text-sm text-white/60">{description}</p>
    </div>
  );
};
