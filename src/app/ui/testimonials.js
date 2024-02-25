import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="px-5 py-6 text-center bg-white min-w-full min-h-[calc(100vh_-_64px)]">
      <h1 className="md:mx-auto md:w-3/6 text-3xl text-primary font-bold uppercase">
        Testimonios
      </h1>
      <p className="mt-2 text-grayLight text-lg">
        Algunos de los comentarios que recibí post-sesiones
      </p>
      <span className="text-lg">❤️</span>
      <div className="flex flex-wrap justify-around items-start w-full">
        <article className="rounded-[15px] flex justify-between items-center h-auto bg-[#F5F5F5] w-full md:w-5/12 lg:w-[30%] py-4 px-4 my-5">
          <Image
            src="/testimony1.jpg"
            width="75"
            height="75"
            alt="Imagen de un usuario"
            className="rounded-full mr-3 aspect-[32/32] object-cover"
          />
          <div className="w-full text-left">
            <span className="w-full inline-block font-bold">Juliana S.</span>
            <p className="inline-block h-auto text-sm text-primary">
              ¡Increíble experiencia Joha! Me ayudó a comprender mejor mi vida y
              tomar decisiones más informadas.
            </p>
          </div>
        </article>
        <article className="rounded-[15px] flex justify-start items-center h-auto bg-[#F5F5F5] w-full md:w-5/12 lg:w-[30%] py-4 px-4 my-5">
          <Image
            src="/testimony1.jpg"
            width="75"
            height="75"
            alt="Imagen de un usuario"
            className="rounded-full ml-3 order-2 aspect-[32/32] object-cover"
          />
          <div className="order-1 w-full text-left">
            <span className="w-full h-2 inline-block font-bold">
              Juliana S.
            </span>
            <p className="inline-block h-2 text-sm text-primary">
              Moona me ayudó gratamente en el autoconocimiento y madurez
              espiritual.
            </p>
          </div>
        </article>
        <article className="rounded-[15px] flex justify-start items-center h-auto bg-[#F5F5F5] w-full md:w-5/12 lg:w-[30%] py-4 px-4 my-5">
          <Image
            src="/testimony1.jpg"
            width="75"
            height="75"
            alt="Imagen de un usuario"
            className="rounded-full mr-3 aspect-[32/32] object-cover"
          />
          <div className="w-full text-left">
            <span className="w-full h-2 inline-block font-bold">
              Juliana S.
            </span>
            <p className="inline-block h-2 text-sm text-primary">
              Joha me estoy quedando sin ideas, qué carajo escribo?
            </p>
          </div>
        </article>
        <article className="rounded-[15px] flex justify-start items-center h-auto bg-[#F5F5F5] w-full md:w-5/12 lg:w-[30%] py-4 px-4 my-5">
          <Image
            src="/testimony1.jpg"
            width="75"
            height="75"
            alt="Imagen de un usuario"
            className="rounded-full ml-3 order-2 aspect-[32/32] object-cover"
          />
          <div className="order-1 w-full text-left">
            <span className="w-full h-2 inline-block font-bold">
              Juliana S.
            </span>
            <p className="inline-block h-2 text-sm text-primary">
              Me rendí, 0 ideas ahre
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
