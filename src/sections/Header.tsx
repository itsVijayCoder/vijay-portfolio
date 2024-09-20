"use client";

import { navItemLinks } from "@/db/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  // const activeNavItem = navItemLinks.find((nav) => nav.link === pathName);

  // console.log("pathName", pathName);

  // const navLinkEls = document.querySelectorAll(".nav-item");
  // const sectionEls = document.querySelectorAll(".section");

  // let currentSection = "home";
  // window.addEventListener("scroll", () => {
  //   const currentScroll = window.scrollY;

  //   sectionEls.forEach((sectionEl) => {
  //     const sectionTop = (sectionEl as HTMLElement).offsetTop;

  //     if (currentScroll >= sectionTop) {
  //       currentSection = sectionEl.id;
  //       console.log(currentSection);
  //     }
  //   });

  //   navLinkEls.forEach((navLinkEl) => {
  //     navLinkEl.classList.remove("nav-item-active");

  //     navItemLinks.forEach((nav) => {
  //       if (nav.link === currentSection) {
  //         document
  //           .querySelector(".nav-item-active")
  //           ?.classList.remove("nav-item-active");

  //         navLinkEl.classList.add("nav-item-active");
  //       }
  //     });
  //   });
  // });

  return (
    <section className="relative z-10 overflow-x-clip" id="home">
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>

      <nav className="fixed top-3 z-10 flex w-full items-center justify-center">
        <ul className="flex gap-1 rounded-full border border-white/15 bg-emerald-300/20 p-0.5 backdrop-blur-lg">
          {navItemLinks?.map((nav) => {
            const isActive = nav.link === pathName;
            // console.log("isActive", isActive);

            return (
              // <Link
              //   key={nav.name}
              //   // href={nav.link}
              //   // className={isActive ? "nav-item nav-item-active" : "nav-item"}
              //   href={`#${nav.link}`}
              //   className="nav-item"
              //   // className={
              //   //   pathName === nav.link ? "nav-item nav-item-active" : "nav-item"
              //   // }
              // >
              //   {nav.name}
              // </Link>

              <button
                key={nav.name}
                className={
                  nav.isActive ? "nav-item nav-item-active" : "nav-item"
                }
                onClick={() => {
                  const element = document.getElementById(nav.link);

                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {nav.name}
              </button>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
