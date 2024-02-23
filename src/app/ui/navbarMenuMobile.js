import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarMobile({ menuState, toggleMenu }) {
  const [servicesOpen, setOpenServices] = useState(false);

  const toggleServices = () => {
    setOpenServices(!servicesOpen);
  };

  return (
    <div
      className={`z-10 w-screen md:max-w-max md:flex flex-col md:justify-center md:items-center  md:flex-row bg-[#F9E9F2] md:bg-transparent text-[#9D72AF] md:h-12 ${
        menuState ? 'items-start h-[calc(100vh_-_64px)] fixed top-16 pt-4' : ''
      }`}
    >
      <Link
        onClick={toggleMenu}
        href="/"
        className="mb-4 md:mb-0 md:mr-4 h-fit"
      >
        <Image
          src="/icons-menu/home.svg"
          width="24"
          height="24"
          className="inline-block mr-1 "
          alt="Ícono de una casa"
        />
        Inicio
      </Link>

      <button
        onClick={toggleServices}
        className={`${
          servicesOpen ? 'mb-2 font-bold' : ''
        } inline-block h-fit md:mr-4`}
      >
        <Image
          src="/icons-menu/crystal-ball.svg"
          width="24"
          height="24"
          className="inline-block mr-1"
          alt="Ícono de una bola de cristal"
        />
        Servicios
        {servicesOpen ? (
          <Image
            src="/icons-menu/arrow-narrow-down.svg"
            width="24"
            height="24"
            className="inline-block "
            alt="Ícono de una flecha apuntando hacia abajo"
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
              alt="Ícono de una estrella"
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
              alt="Ícono de una estrella"
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
              alt="Ícono de una estrella"
            />
            Revolución solar
          </Link>
        </>
      ) : null}
      <Link
        onClick={toggleMenu}
        href="/servicios/carta-natal"
        className="h-fit md:mr-4"
      >
        <Image
          src="/icons-menu/user.svg"
          width="24"
          height="24"
          className="inline-block mr-1 "
          alt="Ícono de una persona"
        />
        Quien soy
      </Link>
      <Link onClick={toggleMenu} href="/" className="">
        <Image
          src="/icons-menu/messages.svg"
          width="24"
          height="24"
          className="inline-block mr-1 h-fit"
          alt="Ícono de mensajes"
        />
        Contacto
      </Link>
    </div>
  );
}
