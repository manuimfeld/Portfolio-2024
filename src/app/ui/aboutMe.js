export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      className="relative py-6 text-center min-h-full md:h-[calc(100vh_-_64px)] w-full bg-[url('/bg-aboutme5.jpg')] bg-cover bg-fixed"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-3xl relative z-10 w-text-3xl py-1 text-primaryLighter font-bold uppercase">
        Quién soy
      </h1>
      <article className="md:flex md:items-center text-secondary relative z-10 flex flex-col items-center px-5 py-4 w-full min-h-full  ">
        <p className="text-lg mt-3">Hola a todxs! 🌈</p>
        <p className="md:w-3/6 text-lg mb-3">
          Soy Moona, aunque mi nombre real es Joha soy Astróloga y Tarotista🌙✨
        </p>
        <p className="md:w-3/6 text-lg my-3">
          Hace más de 5 años que me dedico a encontrar(me) y gracias a eso,
          ayudar a otrxs a verse a través de las{" "}
          <span className="font-bold text-white">herramientas esotéricas</span>.
        </p>
        <span className="text-3xl leading-none">°</span>
        <p className="md:w-3/6 text-lg my-3">
          Mi verdadera vocación está relacionada con el autoconocimiento
          terapéutico y la exploración interna.
        </p>
        <p className="md:w-3/6 text-lg my-3">
          Mi espacio brinda las oportunidades para que te conozcas en
          profundidad y puedas potenciar tus dones y talentos innatos.
        </p>
        <span className="md:w-3/6 text-3xl leading-none">°</span>

        <p className="text-lg my-3">
          Busquemos juntxs ese brillo extra-ordinario que hay en vos a través
          del conocimiento que nos brinda la magia.
        </p>
      </article>
    </section>
  );
}
