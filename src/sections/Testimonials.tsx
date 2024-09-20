import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { testimonialsData } from "@/db/testimonialsData";
import Image from "next/image";
import { Fragment } from "react";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyeBrows="Happy Client"
          title="What clients say about me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className="-m-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-16 lg:mt-20">
          <div className="animate-move-left flex flex-none gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {testimonialsData?.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="max-w-xs p-6 transition duration-300 hover:-rotate-3 hover:shadow-xl hover:shadow-gray-700/30 md:max-w-md md:p-8"
                  >
                    <div className="flex gap-2">
                      <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:mt-6 md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
