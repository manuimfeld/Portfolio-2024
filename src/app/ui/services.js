import { SERVICES_ARRAY } from "../lib/services";
import CardServices from "./cardServices";

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-6 px-5 text-center min-w-full min-h-auto bg-white"
    >
      <h1 className="md:mx-auto md:w-3/6 text-3xl py-1 text-primary font-bold uppercase">
        Servicios
      </h1>
      <p className="md:mx-auto md:w-3/6 text-lg my-3 text-grayLight">
        Hay una variedad de
        <span className="text-grayDark font-bold"> herramientas</span> que nos
        pueden guiar en el viaje de{" "}
        <span className="text-grayDark font-bold">descubrir</span> nuestra
        verdadera <span className="text-grayDark font-bold">esencia</span> y
        desatar el poder transformador del universo en la vida.
      </p>
      <p className="md:mx-auto md:w-3/6 text-lg my-3 text-grayLight">
        Cada experiencia es{" "}
        <span className="text-secondary font-bold">única y diseñada</span> para
        ofrecerte una guía auténtica y significativa en tu búsqueda de
        autoconocimiento y sanación interior
      </p>
      <div className="md:flex md:justify-around mt-4 rounded-[20px] min-h-auto w-full">
        {SERVICES_ARRAY.map((service, index) => {
          return <CardServices key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
}
