import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="px-5 py-5 text-center bg-red-300 min-w-full min-h-[calc(100vh_-_64px)]">
      <article className="rounded-[15px] flex justify-start items-center h-auto bg-white w-full py-5 px-5 my-5">
        <Image
          src="/testimony-1.jpg"
          width="75"
          height="75"
          alt="Imagen de un usuario"
          className="rounded-full mr-3"
        />
        <div className="w-full text-left">
          <span className="h-2 inline-block font-bold">Juliana S.</span>
          <p className="inline-block h-2 text-sm text-primary">
            Moona me ayudó gratamente en el autoconocimiento y madurez
            espiritual.
          </p>
        </div>
      </article>
      <article className="rounded-[15px] flex justify-start items-center h-auto bg-white w-full py-5 px-5">
        <Image
          src="/testimony-1.jpg"
          width="75"
          height="75"
          alt="Imagen de un usuario"
          className="rounded-full ml-3 order-2"
        />
        <div className="order-1 w-full text-left">
          <span className="h-2 inline-block font-bold">Juliana S.</span>
          <p className="inline-block h-2 text-sm text-primary">
            Moona me ayudó gratamente en el autoconocimiento y madurez
            espiritual.
          </p>
        </div>
      </article>
      <article className="rounded-[15px] flex justify-start items-center h-auto bg-white w-full py-5 px-5 my-5">
        <Image
          src="/testimony-1.jpg"
          width="75"
          height="75"
          alt="Imagen de un usuario"
          className="rounded-full mr-3"
        />
        <div className="w-full text-left">
          <span className="h-2 inline-block font-bold">Juliana S.</span>
          <p className="inline-block h-2 text-sm text-primary">
            Moona me ayudó gratamente en el autoconocimiento y madurez
            espiritual.
          </p>
        </div>
      </article>
      <article className="rounded-[15px] flex justify-start items-center h-auto bg-white w-full py-5 px-5">
        <Image
          src="/testimony-1.jpg"
          width="75"
          height="75"
          alt="Imagen de un usuario"
          className="rounded-full ml-3 order-2"
        />
        <div className="order-1 w-full text-left">
          <span className="h-2 inline-block font-bold">Juliana S.</span>
          <p className="inline-block h-2 text-sm text-primary">
            Moona me ayudó gratamente en el autoconocimiento y madurez
            espiritual.
          </p>
        </div>
      </article>
    </section>
  );
}
