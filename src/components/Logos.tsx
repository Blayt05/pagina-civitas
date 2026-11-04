import Image from "next/image";
import { sitio } from "@/content/sitio";
import { existeEnPublic } from "@/lib/archivos";

// Si un logo todavía no está en `public/`, se muestra la palabra "civitas" en
// serif terracota para no romper el diseño.
// TODO: agregar public/logo-escudo.png, public/logo-civitas.png y public/logo-life.png

function Placeholder({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif font-semibold text-civitas-terracota lowercase ${className}`}
    >
      civitas
    </span>
  );
}

type TamanoProps = { className?: string; prioridad?: boolean };

/** Escudo rojo de Civitas. */
export function Escudo({ className = "size-10", prioridad }: TamanoProps) {
  if (!existeEnPublic(sitio.imagenes.escudo)) return null;
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src={sitio.imagenes.escudo}
        alt="Escudo de Civitas"
        fill
        sizes="160px"
        className="object-contain"
        priority={prioridad}
      />
    </span>
  );
}

/** Wordmark "civitas" con escudo. */
export function Wordmark({ className = "h-16 w-56", prioridad }: TamanoProps) {
  if (!existeEnPublic(sitio.imagenes.wordmark)) {
    return <Placeholder className="text-5xl" />;
  }
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src={sitio.imagenes.wordmark}
        alt="Civitas"
        fill
        sizes="320px"
        className="object-contain"
        priority={prioridad}
      />
    </span>
  );
}

/**
 * Silueta de un logo pintada en un color de la paleta (por defecto crema),
 * para usarla sobre fondos rojos u oscuros. Usa el PNG como máscara.
 */
export function Silueta({
  ruta = sitio.imagenes.escudo,
  className = "",
  etiqueta,
}: {
  ruta?: string;
  className?: string;
  /** Texto alternativo. Si se omite, la silueta es decorativa. */
  etiqueta?: string;
}) {
  if (!existeEnPublic(ruta)) return null;
  const mascara = `url(${ruta}) center / contain no-repeat`;
  return (
    <span
      role={etiqueta ? "img" : undefined}
      aria-label={etiqueta}
      aria-hidden={etiqueta ? undefined : true}
      className={`block ${className}`}
      style={{ mask: mascara, WebkitMask: mascara }}
    />
  );
}

/** Wordmark en crema para el footer (o placeholder). */
export function WordmarkClaro() {
  if (!existeEnPublic(sitio.imagenes.wordmark)) {
    return (
      <span className="font-serif text-3xl font-semibold text-civitas-crema lowercase">
        civitas
      </span>
    );
  }
  return (
    <Silueta
      ruta={sitio.imagenes.wordmark}
      etiqueta="Civitas"
      className="h-12 w-44 bg-civitas-crema"
    />
  );
}

/** Logo de LiFE (o nada si aún no existe). */
export function LogoLife() {
  if (!existeEnPublic(sitio.imagenes.life)) return null;
  return (
    <span className="relative inline-block h-10 w-24 shrink-0 rounded bg-civitas-crema p-1">
      <span className="relative block size-full">
        <Image
          src={sitio.imagenes.life}
          alt="LiFE · Grupos Estudiantiles del Tec de Monterrey"
          fill
          sizes="96px"
          className="object-contain"
        />
      </span>
    </span>
  );
}

/** Escudo + "civitas" para la barra de navegación. */
export function MarcaNavbar() {
  return (
    <span className="flex items-center gap-2">
      <Escudo className="size-9" prioridad />
      <span className="font-serif text-2xl font-semibold text-civitas-terracota lowercase">
        civitas
      </span>
    </span>
  );
}
