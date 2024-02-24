"use client";
import { useEffect, useState } from "react";
import NavbarMenu from "./navbarMenu";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuState, setIsOpen] = useState(null);

  useEffect(() => {
    //Si menuState es true, deshabilito el desplazamiento vertical agregando la clase overflow-y-hidden
    //Si menuState es false, habilito el desplazamiento vertical quitando la clase
    if (menuState) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      console.log(document.body.classList);
    }
  }, [menuState]);

  const toggleMenu = () => {
    // menuState inicia en null para evitar que la animación se ejecute al entrar a la web
    // Si menuState es true (menú abierto), lo establece como false para cerrar el menú (closeMenu animation))
    // Si menuState es false (menú cerrado), lo establece como true para abrir el menú (openMenu animation)
    setIsOpen(menuState === null ? true : !menuState);
  };

  return (
    <header className="z-20 sticky top-0 w-full h-16 flex px-5 py-2 bg-white text-[#9D72AF] items-center justify-between md:justify-start">
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
      <NavbarMenu menuState={menuState} toggleMenu={toggleMenu} />
    </header>
  );
}
