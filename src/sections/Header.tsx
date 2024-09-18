import { navItemData } from "@/db/navData";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="fixed top-3 z-10 flex w-full items-center justify-center">
        <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
          {navItemData?.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className={nav.isActive ? "nav-item nav-item-active" : "nav-item"}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
