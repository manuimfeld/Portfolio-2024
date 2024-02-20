import Image from "next/image";
import Link from "next/link";

export default function NatalChart() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center text-center mx-auto">
      <p className="mt-8 text-3xl font-bold text-center text-[#bb9ad1]">
        CARTA NATAL
      </p>
      <Image
        width="200"
        height="200"
        src="/cart-natal.png"
        className="mt-5 w-[200px] h-[200px] rounded-[112.5px] object-cover"
      />
      <p className="mt-8 text-2xl font-medium text-center text-[#bb9ad1]">
        Las sesiones de Carta Natal nos muestran la mirada de nuestro mundo
        desde el enfoque astrológico.
      </p>
      <p className="mt-8 text-xl text-center text-[#9b9b9b]">
        Tu voluntad hacia el mundo, la forma de canalizar los miedos, dones y
        talentos, la forma pensar sentir, pensar y accionar y también nuestra
        mirada transpersonal de la sociedad entre otros datos que nos brindarán
        autoconocimiento.
      </p>
      <p className="mt-[60px] text-[28px] font-medium text-center text-[#9d72af]">
        ¿Qué necesitamos para hacer la sesión?
      </p>
      <p className="mt-8 text-xl font-medium text-center text-[#9b9b9b]">
        🕰️ Horario de nacimiento
      </p>
      <p className="mt-5 text-xl font-medium text-center text-[#9b9b9b]">
        📅 Fecha de nacimiento
      </p>
      <p className="mt-5 text-xl font-medium text-center text-[#9b9b9b]">
        📍 Lugar de nacimiento
      </p>
      <p className="mt-[60px] text-[28px] font-medium text-center text-[#9d72af]">
        ¿Qué necesitamos para hacer la sesión?
      </p>
      <p className="mt-8 text-xl font-medium text-center text-[#9b9b9b]">
        La sesión dura de 60 a 90 minutos aprox
      </p>
      <p className="mt-5 text-xl font-medium text-center text-[#9b9b9b]">
        Se realiza por zoom 💻📱
      </p>
      <p className="mt-5 text-xl font-medium text-center text-[#9b9b9b]">
        Se envía un resumen post sesión de las energías principales
      </p>
      <p className="mt-5 text-xl font-medium text-center text-[#9b9b9b]">
        Precio $18.000
      </p>

      <Link
        href="https://wa.me/5491144036816?text=%C2%A1Hola%20Moona!%0AEstaba%20interesadx%20en%20la%20Lectura%20de%20Carta%20Natal.%0AMi%20nombre%20es%20"
        className="mt-8 px-10 py-4 bg-[#9d72af] rounded-[25px] text-lg font-medium text-center text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        QUIERO MI LECTURA
      </Link>
    </div>
  );
}
