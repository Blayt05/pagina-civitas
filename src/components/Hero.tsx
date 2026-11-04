import { hero, sitio } from "@/content/sitio";
import { boton } from "@/lib/estilos";
import { IconoInstagram } from "./Iconos";
import { Wordmark } from "./Logos";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="relative flex min-h-[100svh] items-center px-5 pt-24 pb-16"
    >
      {/* Marco fino inspirado en el flyer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-20 bottom-4 rounded-sm border border-civitas-azul/25 sm:inset-x-8"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Wordmark className="h-20 w-64 sm:h-24 sm:w-80" prioridad />
        <h1
          id="titulo-inicio"
          className="mt-8 pl-[0.12em] font-serif text-6xl font-bold tracking-[0.12em] text-civitas-rojo sm:text-8xl"
        >
          {hero.titulo}
        </h1>
        <p className="mt-4 font-serif text-2xl text-civitas-ocre italic sm:text-3xl">
          {hero.subtitulo}
        </p>
        <div aria-hidden="true" className="mt-8 h-px w-24 bg-civitas-arena" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-balance text-civitas-cafe sm:text-xl">
          {hero.frase}
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={hero.botonPrincipal.href} className={boton.primario}>
            {hero.botonPrincipal.etiqueta}
          </a>
          <a
            href={sitio.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={boton.secundario}
          >
            <IconoInstagram className="size-5" />
            {hero.botonInstagram}
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
