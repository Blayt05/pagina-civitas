import { CalendarDays } from "lucide-react";
import { contacto, sitio } from "@/content/sitio";
import { boton } from "@/lib/estilos";
import { IconoInstagram } from "./Iconos";

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="px-5 py-20 sm:py-24">
      <div className="sobre-oscuro revelar mx-auto max-w-4xl rounded-3xl bg-civitas-rojo px-6 py-14 text-center sm:px-12">
        <h2
          id="titulo-contacto"
          className="font-serif text-4xl font-semibold text-civitas-crema sm:text-5xl"
        >
          {contacto.titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-civitas-crema">{contacto.texto}</p>
        <a
          href={sitio.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${boton.crema} mt-8 min-h-14 px-8 text-lg`}
        >
          <IconoInstagram className="size-6" />
          {contacto.boton}
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
        <p className="mt-8 flex items-center justify-center gap-2 font-serif text-lg text-civitas-crema italic">
          <CalendarDays aria-hidden="true" className="size-5 shrink-0" />
          {sitio.reunion}
        </p>
      </div>
    </section>
  );
}
