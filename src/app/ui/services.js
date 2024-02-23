import { SERVICES_ARRAY } from "../lib/services";
import CardServices from "./cardServices";

export default function Services() {
  return (
    <section className="text-center min-w-[100vw] min-h-[calc(100vh_-_64px)]">
      <h1 className="text-3xl text-[#BB9AD1]">Servicios</h1>
      <p className="mt-2 px-4 text-gray-400 text-xl font-medium">
        Hay una variedad de herramientas que nos pueden guiar en el viaje de
        descubrir nuestra verdadera esencia y desatar el poder transformador del
        universo en la vida. Cada experiencia es única y diseñada para ofrecerte
        una guía auténtica y significativa en tu búsqueda de autoconocimiento y
        sanación interior
      </p>
      <div className="mt-4 rounded-[20px] py-5 h-[calc(100vh - 64px)] flex overflow-x-auto justify-start bg-[url('/bg-aboutme4.jpg')] bg-cover bg-center ">
        {SERVICES_ARRAY.map((service, index) => {
          return <CardServices key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
}
