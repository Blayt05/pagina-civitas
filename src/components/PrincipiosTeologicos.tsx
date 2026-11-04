import { ChevronDown } from "lucide-react";
import { principiosTeologicos } from "@/content/principios";
import { textoSecundario } from "@/lib/estilos";
import { Encabezado } from "./Encabezado";

// Acordeón con <details> nativo: accesible y sin JavaScript.
export function PrincipiosTeologicos() {
  return (
    <section
      id="principios"
      aria-labelledby="titulo-principios"
      className="px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <Encabezado id="titulo-principios" titulo={principiosTeologicos.titulo}>
          <p className={`mt-6 text-lg leading-relaxed ${textoSecundario}`}>
            {principiosTeologicos.introduccion}
          </p>
        </Encabezado>

        <ol className="mt-12 space-y-4">
          {principiosTeologicos.lista.map((principio, i) => (
            <li key={principio.titulo} className="revelar">
              <details className="group rounded-2xl border border-civitas-arena bg-civitas-crema transition-colors open:border-civitas-rojo/40">
                <summary className="flex cursor-pointer list-none items-start gap-4 rounded-2xl p-5 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="mt-1 font-serif text-xl font-semibold text-civitas-ocre"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-2xl font-semibold text-civitas-rojo">
                      {principio.titulo}
                    </span>
                    <span className={`mt-1 block ${textoSecundario}`}>
                      {principio.resumen}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="mt-1.5 size-6 shrink-0 text-civitas-ocre transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-6 text-lg leading-relaxed text-civitas-cafe sm:px-6 sm:pl-16">
                  {principio.completo}
                </p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
