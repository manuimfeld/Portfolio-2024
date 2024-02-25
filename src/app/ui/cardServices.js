import Image from "next/image";
import Link from "next/link";

export default function CardServices({ service }) {
  return (
    <article
      className={`flex-none w-[80vw] md:w-1/4 mx-auto ${
        service.id === 2 ? "mt-6 mb-0" : "my-6"
      } bg-primaryLighter px-5 py-2 rounded-[25px]`}
    >
      <Image
        src={`${service.img_url}`}
        alt={service.alt_text}
        width={200}
        height={200}
        className="mx-auto"
      />
      <div className=" py-4">
        <h3 className="text-[#BB9AD1] font-bold text-xl mb-2">
          {service.title}
        </h3>
        <p className="text-black font-medium text-base">
          {service.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href="/servicios/carta-natal">
          <button className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primaryLight hover:text-white transition-colors duration-300">
            Ver más
          </button>
        </Link>
      </div>
    </article>
  );
}
