"use client";
import { useState } from "react";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
  const [menuState, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!menuState);
  };

  return (
    <>
      <div className="sticky top-0 w-screen h-16 flex py-2 bg-white text-[#9D72AF] items-center">
        <button
          className="pl-5 block lg:hidden focus:outline-none"
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
        <h3 className="text-center text-xl font-bold mx-auto">Soy Moonática</h3>
      </div>
      {menuState ? <NavbarMobile toggleMenu={toggleMenu} /> : null}
    </>
  );
}
