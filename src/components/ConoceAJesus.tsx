import Link from "next/link";
import { conoceAJesus } from "@/content/sitio";
import { boton } from "@/lib/estilos";
import { Silueta } from "./Logos";

export function ConoceAJesus() {
  return (
    <section
      aria-label="Conoce a Jesús"
      className="sobre-oscuro relative overflow-hidden bg-civitas-rojo px-5 py-20 sm:py-24"
    >
      <Silueta className="pointer-events-none absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 bg-civitas-crema opacity-[0.07]" />
      <div className="revelar relative mx-auto max-w-2xl text-center">
        <p className="font-serif text-3xl leading-snug font-semibold text-balance text-civitas-crema sm:text-4xl">
          {conoceAJesus.texto}
        </p>
        <Link href={conoceAJesus.href} className={`${boton.crema} mt-10`}>
          {conoceAJesus.boton}
        </Link>
      </div>
    </section>
  );
}
