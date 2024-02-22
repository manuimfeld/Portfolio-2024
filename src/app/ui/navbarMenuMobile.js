"use client";
import Image from "next/image";
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
        <Image
          src="/icons-menu/home.svg"
          width="24"
          height="24"
          className="inline-block mr-1"
        />
        Inicio
      </Link>

      <button
        onClick={toggleServices}
        className={`${servicesOpen ? "mb-2 font-bold" : "mb-4"} inline-block`}
      >
        <Image
          src="/icons-menu/crystal-ball.svg"
          width="24"
          height="24"
          className="inline-block mr-1"
        />
        Servicios
        {servicesOpen ? (
          <Image
            src="/icons-menu/arrow-narrow-down.svg"
            width="24"
            height="24"
            className="inline-block"
          />
        ) : null}
      </button>
      {servicesOpen ? (
        <>
          <Link
            href="/servicios/carta-natal"
            className="pl-4 mb-4"
            onClick={toggleMenu}
          >
            <Image
              src="/icons-menu/star.svg"
              width="14"
              height="14"
              className="inline-block mr-1"
            />
            Lectura de Carta Natal
          </Link>
          <Link
            href="/servicios/tarot-evolutivo"
            className="pl-4 mb-4"
            onClick={toggleMenu}
          >
            <Image
              src="/icons-menu/star.svg"
              width="14"
              height="14"
              className="inline-block mr-1"
            />
            Tarot evolutivo
          </Link>
          <Link
            href="/servicios/revolucion-solar"
            className="pl-4 mb-4"
            onClick={toggleMenu}
          >
            <Image
              src="/icons-menu/star.svg"
              width="14"
              height="14"
              className="inline-block mr-1"
            />
            Revolución solar
          </Link>
        </>
      ) : null}
      <Link onClick={toggleMenu} href="/servicios/carta-natal" className="mb-4">
        <Image
          src="/icons-menu/user.svg"
          width="24"
          height="24"
          className="inline-block mr-1"
        />
        Quien soy
      </Link>
      <Link onClick={toggleMenu} href="/" className="mb-4">
        <Image
          src="/icons-menu/messages.svg"
          width="24"
          height="24"
          className="inline-block mr-1"
        />
        Contacto
      </Link>
    </div>
  );
}
