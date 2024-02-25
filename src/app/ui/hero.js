export default function HeroSection() {
  return (
    <main
      id="inicio"
      className="bg-[#F5E1F3] py-6 px-5 text-center flex flex-col text-black justify-start md:justify-center items-center w-full min-h-[calc(100vh_-_64px)]"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-4 text-primary">
        ¡Bienvenidxs a mi universo mágico!
      </h1>
      <p className="text-lg mb-6  w-11/12 md:w-8/12">
        ¡Hola a todxs! 🌈 Soy Moona, también conocida como Joha, y te doy la
        bienvenida a mi espacio donde la astrología y el tarot se unen para
        conocer nuestra esencia
      </p>
      <p className="text-lg mb-6 w-11/12 md:w-8/12">
        Hace más de 5 años que me dedico a encontrar(me) y gracias a eso, a
        ayudar a otrxs a descubrir su verdadera esencia a través de las
        herramientas esotéricas. Mi pasión radica en el autoconocimiento
        terapéutico y la exploración interna.
      </p>
      <p className="text-lg mb-6 w-11/12 md:w-8/12">
        Te invito a un viaje de autodescubrimiento donde vas a potenciar tus
        dones y conocer tu esencia. Juntxs, buscaremos ese brillo que hay en vos
        a través de la magia que nos brinda la astrología y el tarot.
      </p>
      <button className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primaryLight hover:text-white transition-colors duration-300">
        ¡Explora tu universo interior ahora!
      </button>
    </main>
  );
}
