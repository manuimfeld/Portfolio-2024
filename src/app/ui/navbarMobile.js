"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavbarMobile({ toggleMenu }) {
  const [servicesOpen, setOpenServices] = useState(false);

  const toggleServices = () => {
    setOpenServices(!servicesOpen);
  };

  return (
    <div className="items-start sticky flex flex-col top-16 w-vw px-5 pt-4 bg-[#F9E9F2] text-[#9D72AF] h-[calc(100vh_-_64px)]">
      <Link onClick={toggleMenu} href="/" className="mb-4">
        Inicio
      </Link>
      <button
        onClick={toggleServices}
        className={`${servicesOpen ? "mb-2 font-bold" : "mb-4"}`}
      >
        Servicios
      </button>
      {servicesOpen ? (
        <>
          <Link
            href="/servicios/carta-natal"
            className="pl-4 mb-4"
            onClick={toggleMenu}
          >
            Lectura de Carta Natal
          </Link>
          <Link
            href="/servicios/tarot-evolutivo"
            className="pl-4 mb-4"
            onClick={toggleMenu}
          >
            Tarot evolutivo
          </Link>
          <Link
            href="/servicios/revolucion-solar"
            className="pl-4 mb-4"
            onClick={toggleMenu}
          >
            Revolución solar
          </Link>
        </>
      ) : null}
      <Link onClick={toggleMenu} href="/servicios/carta-natal" className="mb-4">
        Quien soy
      </Link>
      <Link onClick={toggleMenu} href="/" className="mb-4">
        Contacto
      </Link>
    </div>
  );
}
