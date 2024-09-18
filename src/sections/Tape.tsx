import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <section className="overflow-x-clip py-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none items-center justify-center gap-4 py-3">
            {words.map((word) => (
              <div
                className="inline-flex items-center justify-center gap-4"
                key={word}
              >
                <span className="text-sm font-extrabold uppercase text-gray-900">
                  {word}
                </span>
                <StarIcon className="size-8 -rotate-12 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
