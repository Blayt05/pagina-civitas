import { CalendarDays, Download, MapPin } from "lucide-react";
import { ministerios, ministeriosSeccion } from "@/content/ministerios";
import { sitio } from "@/content/sitio";
import { existeEnPublic } from "@/lib/archivos";
import { boton, textoSecundario } from "@/lib/estilos";
import { Encabezado } from "./Encabezado";
import { IconoInstagram } from "./Iconos";

export function Ministerios() {
  // TODO: agregar public/flyer-ministerios.png (el enlace aparece solo si existe)
  const hayFlyer = existeEnPublic(sitio.imagenes.flyerMinisterios);

  return (
    <section
      id="ministerios"
      aria-labelledby="titulo-ministerios"
      className="px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Encabezado
          id="titulo-ministerios"
          titulo={ministeriosSeccion.titulo}
          subtitulo={ministeriosSeccion.subtitulo}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ministerios.map((m) => (
            <li
              key={m.nombre}
              className={`revelar relative flex flex-col rounded-2xl bg-civitas-crema p-6 ${
                m.destacado
                  ? "border-2 border-civitas-rojo"
                  : "border border-civitas-arena"
              }`}
            >
              {m.destacado && (
                <span className="absolute -top-3 left-6 rounded-full bg-civitas-rojo px-3 py-0.5 text-xs font-semibold tracking-wide text-civitas-crema uppercase">
                  {ministeriosSeccion.etiquetaDestacado}
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold text-civitas-marino">
                {m.nombre}
              </h3>
              <p className="mt-1 font-serif text-lg text-civitas-ocre italic">
                {m.actividad}
              </p>
              <dl className={`mt-4 flex-1 space-y-2 ${textoSecundario}`}>
                <div className="flex items-start gap-2">
                  <dt>
                    <CalendarDays aria-hidden="true" className="mt-0.5 size-5 text-civitas-ocre" />
                    <span className="sr-only">Día y hora</span>
                  </dt>
                  <dd>{m.diaHora}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <dt>
                    <MapPin aria-hidden="true" className="mt-0.5 size-5 text-civitas-ocre" />
                    <span className="sr-only">Lugar</span>
                  </dt>
                  <dd>{m.lugar}</dd>
                </div>
              </dl>
              {m.instagram && (
                <a
                  href={`https://www.instagram.com/${m.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${m.destacado ? boton.primario : boton.chico} mt-5 self-start`}
                >
                  <IconoInstagram className="size-4" />@{m.instagram}
                  <span className="sr-only"> en Instagram (se abre en una pestaña nueva)</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        {hayFlyer && (
          <p className="mt-8 text-center">
            <a
              href={sitio.imagenes.flyerMinisterios}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold text-civitas-rojo underline-offset-4 hover:underline"
            >
              <Download aria-hidden="true" className="size-4" />
              {ministeriosSeccion.descargarFlyer}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
