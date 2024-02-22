import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center flex flex-col justify-center items-center w-screen px-5 h-[calc(100vh_-_64px)]">
      <Image src="/moonatica.png" width="350" height="350" />
      <p className="text-xl text-[#BB9AD1]">Astrología y Tarot inicial</p>
      <h3 className="mt-5 text-3xl text-[#BB9AD1]">
        Transforma tu vida explorando tu esencia
      </h3>
    </main>
  );
}
