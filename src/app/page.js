import Image from "next/image";
import Link from "next/link";
import AboutMe from "./ui/aboutMe";
import Services from "./ui/services";

export default function Home() {
  return (
    <>
      <main
        id="inicio"
        className="text-center flex flex-col justify-center items-center w-full px-5 min-h-[calc(100vh_-_64px)]"
      >
        <Image src="/moonatica.png" width="350" height="350" />
        <h1 className="text-xl text-primaryLight">
          Astrología y Tarot inicial
        </h1>
        <h2 className=" mt-5 text-3xl text-primaryLight">
          Transforma tu vida explorando tu esencia
        </h2>
      </main>
      <AboutMe />
      <Services />
    </>
  );
}
