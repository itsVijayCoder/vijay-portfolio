import Link from "next/link";
import { footerLinks } from "@/db/footerLinksData";
import { AboutTechIcon } from "@/components/about-section/AboutTechIcon";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <section className="relative overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>

      <div className="container z-0">
        <div className="z-10 flex flex-col items-center gap-8 border-t-2 border-white/15 py-6 text-center text-sm md:flex-row md:justify-between md:text-left">
          <div className="text-white/50">
            &copy; {new Date().getFullYear()}, All rights reserved.
          </div>

          <nav className="flex flex-col items-center gap-6 md:flex-row">
            {footerLinks?.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full p-2 text-sm font-semibold text-white/80 transition duration-500 hover:bg-emerald-300/20 hover:text-white"
              >
                <AboutTechIcon component={link.icon} className="size-7" />
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
