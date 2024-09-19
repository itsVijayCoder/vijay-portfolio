"use client";

import { navItemLinks } from "@/db/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  // const activeNavItem = navItemLinks.find((nav) => nav.link === pathName);

  // console.log("pathName", pathName);

  return (
    <section className="relative z-10 overflow-x-clip">
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>

      <div className="fixed top-3 z-10 flex w-full items-center justify-center">
        <nav className="flex gap-1 rounded-full border border-white/15 bg-emerald-300/20 p-0.5 backdrop-blur-lg">
          {navItemLinks?.map((nav) => {
            const isActive = nav.link === pathName;
            return (
              <Link
                key={nav.name}
                href={nav.link}
                className={isActive ? "nav-item nav-item-active" : "nav-item"}
                // className={
                //   pathName === nav.link ? "nav-item nav-item-active" : "nav-item"
                // }
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
