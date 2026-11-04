import { BookOpen, HandHeart, Users } from "lucide-react";
import { quienesSomos } from "@/content/sitio";
import { Encabezado } from "./Encabezado";

const iconos = { fe: BookOpen, comunidad: Users, servicio: HandHeart };

export function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      aria-labelledby="titulo-quienes-somos"
      className="bg-civitas-arena/20 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Encabezado id="titulo-quienes-somos" titulo={quienesSomos.titulo} />
        <div className="revelar mx-auto mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-civitas-cafe">
          {quienesSomos.parrafos.map((parrafo) => (
            <p key={parrafo}>{parrafo}</p>
          ))}
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-3">
          {quienesSomos.pilares.map((pilar) => {
            const Icono = iconos[pilar.icono];
            return (
              <li
                key={pilar.titulo}
                className="revelar rounded-2xl border border-civitas-arena bg-civitas-crema p-6 text-center"
              >
                <Icono
                  aria-hidden="true"
                  className="mx-auto size-8 text-civitas-ocre"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-civitas-rojo">
                  {pilar.titulo}
                </h3>
                <p className="mt-2 text-civitas-cafe">{pilar.texto}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
