export default function AboutMe() {
  return (
    <section className="h-[calc(100vh_-_64px)] w-full">
      <h2 className="text-black">Quién soy</h2>
      <p>
        "Hola a todxs! 🌈 Para los que no me conocen aún, mi nombre es Johanna y
        quiero compartirles un poco sobre mí 🌙✨
      </p>
      <article className="relative  w-full h-full bg-[url('/bg-aboutme2.jpg')] bg-cover bg-fixed ">
        <div class="absolute inset-0 bg-blue-300 opacity-20"></div>
        <div class="relative z-10">
          <h2 className="text-4xl font-bold">Quien soy</h2>
          <p>Y esot es una pagina</p>
        </div>
      </article>
    </section>
  );
}
