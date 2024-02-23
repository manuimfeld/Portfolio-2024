import Image from "next/image";
import Link from "next/link";

export default function CardServices({ service }) {
  return (
    <article
      className={`flex-none w-[80vw] md:w-[30vw] mx-5  bg-[#2d5cbbab] px-5 py-2 rounded-[25px]`}
    >
      <Image
        src={`${service.img_url}`}
        alt={service.alt_text}
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className=" py-4">
        <h3 className="text-[#BB9AD1] font-bold text-xl mb-2">
          {service.title}
        </h3>
        <p className="text-gray-300 font-medium text-base">
          {service.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href="/servicios/carta-natal">
          <button className="inline-block bg-[#BB9AD1] rounded-full px-10 py-2 font-bold text-white mr-2 mb-2">
            Ver más
          </button>
        </Link>
      </div>
    </article>
  );
}
