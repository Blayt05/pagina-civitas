import Image from "next/image";
import Link from "next/link";
import { BookOpen, Church, Download, MessageCircle } from "lucide-react";
import { evangelio } from "@/content/evangelio";
import { sitio } from "@/content/sitio";
import { existeEnPublic } from "@/lib/archivos";
import { boton, textoSecundario } from "@/lib/estilos";
import { CopiarEnlace } from "./CopiarEnlace";
import { IconoInstagram } from "./Iconos";
import { Silueta } from "./Logos";

export function EncabezadoEvangelio() {
  const hayEscudo = existeEnPublic(sitio.imagenes.escudo);
  return (
    <section
      aria-labelledby="titulo-evangelio"
      className="sobre-oscuro bg-civitas-rojo px-5 pt-14 pb-16 text-center"
    >
      {hayEscudo ? (
        <Silueta
          etiqueta="Escudo de Civitas"
          className="mx-auto size-28 bg-civitas-crema sm:size-36"
        />
      ) : (
        <span className="font-serif text-4xl font-semibold text-civitas-crema lowercase">
          civitas
        </span>
      )}
      <h1
        id="titulo-evangelio"
        className="mt-8 font-serif text-4xl font-bold text-balance text-civitas-crema sm:text-6xl"
      >
        {evangelio.encabezado.titulo}
      </h1>
      <p className="mx-auto mt-4 max-w-xl font-serif text-xl text-balance text-civitas-crema/90 italic sm:text-2xl">
        {evangelio.encabezado.subtitulo}
      </p>
    </section>
  );
}

export function PasosEvangelio() {
  return (
    <section aria-label="Los 5 pasos" className="px-4 py-12 sm:px-5 sm:py-16">
      <ol className="mx-auto max-w-2xl space-y-6">
        {evangelio.pasos.map((paso, i) => (
          <li
            key={paso.titulo}
            className="revelar rounded-3xl border border-civitas-arena bg-civitas-crema p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-civitas-rojo font-serif text-xl font-bold text-civitas-crema"
              >
                {i + 1}
              </span>
              <h2 className="pt-1 font-serif text-2xl leading-tight font-semibold text-civitas-rojo sm:text-3xl">
                <span className="sr-only">Paso {i + 1}: </span>
                {paso.titulo}
              </h2>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-civitas-cafe">{paso.texto}</p>
            <div className="mt-5 space-y-4">
              {paso.versiculos.map((v) => (
                <blockquote
                  key={v.referencia}
                  className="border-l-4 border-civitas-ocre pl-4"
                >
                  <p className="font-serif text-lg leading-relaxed text-civitas-cafe italic">
                    “{v.texto}”
                  </p>
                  <footer className="mt-1 text-sm font-semibold text-civitas-ocre">
                    {v.referencia} (RVR1960)
                  </footer>
                </blockquote>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function DecisionEvangelio() {
  const { decision } = evangelio;
  return (
    <section aria-labelledby="titulo-decision" className="px-4 pb-12 sm:px-5 sm:pb-16">
      <div className="revelar mx-auto max-w-2xl">
        <h2
          id="titulo-decision"
          className="text-center font-serif text-3xl font-semibold text-civitas-rojo sm:text-4xl"
        >
          {decision.titulo}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-civitas-cafe">{decision.texto}</p>
        <blockquote className="mt-6 rounded-3xl border border-civitas-arena bg-civitas-arena/30 p-6 sm:p-8">
          <p className="font-serif text-xl leading-relaxed text-civitas-cafe italic">
            {decision.oracion}
          </p>
        </blockquote>
      </div>
    </section>
  );
}

export function SiguientesPasos() {
  const { siguientesPasos: s } = evangelio;
  const base = "revelar flex flex-col rounded-3xl bg-civitas-crema p-6";
  const tarjeta = `${base} border border-civitas-arena`;
  const icono = "size-8 text-civitas-ocre";
  const titulo = "mt-3 font-serif text-2xl font-semibold text-civitas-rojo";

  return (
    <section
      aria-labelledby="titulo-siguientes"
      className="bg-civitas-arena/20 px-4 py-12 sm:px-5 sm:py-16"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="titulo-siguientes"
          className="text-center font-serif text-3xl font-semibold text-civitas-rojo sm:text-4xl"
        >
          {s.titulo}
        </h2>
        <ul className="mt-8 space-y-5">
          <li className={tarjeta}>
            <BookOpen aria-hidden="true" className={icono} strokeWidth={1.75} />
            <h3 className={titulo}>{s.biblia.titulo}</h3>
            <p className="mt-2 text-lg text-civitas-cafe">{s.biblia.texto}</p>
            <a
              href={s.biblia.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${boton.secundario} mt-4 self-start`}
            >
              {s.biblia.boton}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </li>
          <li className={tarjeta}>
            <Church aria-hidden="true" className={icono} strokeWidth={1.75} />
            <h3 className={titulo}>{s.iglesia.titulo}</h3>
            <p className="mt-2 text-lg text-civitas-cafe">{s.iglesia.texto}</p>
            <Link href={s.iglesia.href} className={`${boton.secundario} mt-4 self-start`}>
              {s.iglesia.boton}
            </Link>
          </li>
          <li className={`${base} border-2 border-civitas-rojo`}>
            <MessageCircle aria-hidden="true" className={icono} strokeWidth={1.75} />
            <h3 className={titulo}>{s.hablar.titulo}</h3>
            <p className="mt-2 text-lg text-civitas-cafe">{s.hablar.texto}</p>
            <a
              href={sitio.instagram.mensajeDirecto}
              target="_blank"
              rel="noopener noreferrer"
              className={`${boton.primario} mt-5 min-h-14 w-full text-lg`}
            >
              <IconoInstagram className="size-6" />
              {s.hablar.boton}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
            {/* Respaldo por si ig.me no abre el chat directo */}
            <a
              href={sitio.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 self-center text-sm font-semibold text-civitas-rojo underline underline-offset-4"
            >
              {s.hablar.respaldo}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </li>
        </ul>
        <p className="revelar mt-10 text-center font-serif text-xl text-civitas-ocre italic">
          {evangelio.cierre}
        </p>
      </div>
    </section>
  );
}

export function CompartirEvangelio() {
  const { compartir } = evangelio;
  const hayQr = existeEnPublic(compartir.png);
  const descarga = boton.chico;

  return (
    <section aria-labelledby="titulo-compartir" className="px-4 py-12 sm:px-5 sm:py-16">
      <div className="mx-auto max-w-md text-center">
        <h2
          id="titulo-compartir"
          className="font-serif text-2xl font-semibold text-civitas-rojo"
        >
          {compartir.titulo}
        </h2>
        <p className={`mt-2 ${textoSecundario}`}>{compartir.texto}</p>
        {hayQr && (
          <Image
            src={compartir.png}
            alt={compartir.altQr}
            width={240}
            height={240}
            className="mx-auto mt-6 rounded-2xl border border-civitas-arena"
          />
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {hayQr && (
            <a href={compartir.png} download className={descarga}>
              <Download aria-hidden="true" className="size-4" />
              Descargar QR (PNG)
            </a>
          )}
          {existeEnPublic(compartir.svg) && (
            <a href={compartir.svg} download className={descarga}>
              <Download aria-hidden="true" className="size-4" />
              Descargar QR (SVG)
            </a>
          )}
          {existeEnPublic(compartir.tarjeta) && (
            <a href={compartir.tarjeta} download className={descarga}>
              <Download aria-hidden="true" className="size-4" />
              Descargar tarjeta
            </a>
          )}
          <CopiarEnlace url={evangelio.url} />
        </div>
      </div>
    </section>
  );
}
