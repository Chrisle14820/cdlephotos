"use client";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

function SubNavMenu({
  title,
  src,
  subTitle,
}: {
  title: string;
  src: string;
  subTitle?: { href: string; label: string }[];
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="text-white relative flex justify-center overflow-hidden w-full h-full">
      <img src={src} className="w-full h-full object-cover" />
      <div className="absolute w-full h-full bg-gradient-to-t from-60% to-black" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-80% to-black" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full flex justify-center z-99">
        <SubNavButton
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          label={title}
          showIcon={!!subTitle}
        />
      </div>
      {subTitle ? <SubNavItem menuOpen={menuOpen} subData={subTitle} /> : ""}
    </div>
  );
}

function SubNavButton({
  setMenuOpen,
  showIcon,
  menuOpen,
  label,
}: {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showIcon?: boolean;
  menuOpen: boolean;
  label: string;
}) {
  function toggleMenu() {
    setMenuOpen((val) => !val);
  }
  return (
    <>
      <button
        onClick={toggleMenu}
        className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center gap-2"
      >
        <span className="text-4xl font-bold">{label}</span>
        {showIcon ? (
          <ChevronDownIcon
            aria-hidden="true"
            className={`size-8 transition duration-300 ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        ) : null}
      </button>
    </>
  );
}

function SubNavItem({
  menuOpen,
  subData,
}: {
  menuOpen: boolean;
  subData: { href: string; label: string }[];
}) {
  return (
    <div
      className={`
                  absolute left-1/2 z-50 flex items-center justify-center w-full h-full
                  bg-gradient-to-t from-black to-100%
                  transition-all duration-500 ease-in-out
                  ${menuOpen ? "menu-open" : "menu-close"}
                `}
      style={{
        top: menuOpen ? "0%" : "75%",
        transform: "translate(-50%, 0)",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "auto" : "none",
      }}
    >
      <ul className="text-4xl font-bold flex gap-8 flex-col pt-8 pb-8">
        {subData.map((sub, index) => (
          <li
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            key={index}
          >
            <Link href={sub.href}>{sub.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubNavMenu;
