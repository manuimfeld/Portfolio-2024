"use client";
import { useState } from "react";
import NavbarMenuMobile from "./navbarMenuMobile";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuState, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!menuState);
  };

  return (
    <div className="z-20 sticky top-0 w-full h-16 flex px-5 py-2 bg-white text-[#9D72AF] items-center justify-between">
      <Link href="/">
        <Image src="/moonatica-hero.svg" width="150" height="32" />
      </Link>
      <button
        className="pl-5 block md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 fill-[#9D72AF]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6H20V5H4V6ZM4 12H20V11H4V12ZM4 18H20V17H4V18Z"
          />
        </svg>
      </button>
      <NavbarMenuMobile menuState={menuState} toggleMenu={toggleMenu} />
    </div>
  );
}
