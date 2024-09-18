import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { testimonialsData } from "@/db/testimonialsData";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyeBrows="Happy Client"
          title="What clients say about me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-20 lg:mt-24">
          <div className="flex flex-none gap-10">
            {testimonialsData?.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="max-w-xs md:max-w-md md:p-8"
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
          </div>
        </div>
      </div>
    </div>
  );
};
