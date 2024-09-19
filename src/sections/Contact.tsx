import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { BgGrain } from "@/components/BgGrain";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="container">
        <div className="bg-gradient relative z-0 flex flex-col gap-8 overflow-hidden rounded-3xl px-10 py-8 text-center text-gray-900 md:flex-row md:items-center md:justify-between md:gap-16 md:text-left">
          <BgGrain />
          <div className="">
            <h3 className="font-calistoga text-2xl md:text-3xl">
              Let's Create Something amazing Together
            </h3>

            <p className="mt-2 text-sm md:text-base">
              Ready to bring your next Project to life? Let's connect and
              discuss how can I help you to achieve your goals.
            </p>
          </div>

          <div className="">
            <button className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
