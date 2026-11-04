import Link from "next/link";
import { cacheLife } from "next/cache";
import { navegacion, pie, sitio } from "@/content/sitio";
import { IconoInstagram } from "./Iconos";
import { LogoLife, WordmarkClaro } from "./Logos";

// Con Cache Components, la fecha se calcula dentro de una función en caché:
// la página sigue siendo estática y el año se actualiza solo.
async function AnioActual() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="sobre-oscuro bg-civitas-cafe px-5 pt-14 pb-8 text-civitas-crema">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link href="/" aria-label="Civitas, ir a la página principal" className="inline-block">
            <WordmarkClaro />
          </Link>
          <p className="mt-4 max-w-sm text-civitas-crema/85">
            © <AnioActual /> {sitio.nombre} · {pie.descripcion}
          </p>
          <a
            href={sitio.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold hover:text-civitas-arena"
          >
            <IconoInstagram className="size-5" />@{sitio.instagram.usuario}
            <span className="sr-only"> en Instagram (se abre en una pestaña nueva)</span>
          </a>
        </div>

        <nav aria-label="Enlaces rápidos">
          <h2 className="font-serif text-lg text-civitas-arena italic">Enlaces rápidos</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-civitas-crema/85">
            {navegacion.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href} className="hover:text-civitas-crema hover:underline">
                  {enlace.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 border-t border-civitas-crema/15 pt-6 text-sm text-civitas-crema/75 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3">
          <LogoLife />
          {pie.life}
        </p>
        <p className="max-w-md text-xs sm:text-right">{pie.creditoBiblico}</p>
      </div>
    </footer>
  );
}
