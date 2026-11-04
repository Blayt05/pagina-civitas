import { Leaf, MessageCircleHeart, Scale, Sprout, UsersRound } from "lucide-react";
import { principiosEticos, type IconoEtico } from "@/content/principios";
import { Encabezado } from "./Encabezado";

const iconos: Record<IconoEtico, typeof Leaf> = {
  dignidad: UsersRound,
  respeto: MessageCircleHeart,
  integridad: Scale,
  mayordomia: Sprout,
  creacion: Leaf,
};

export function PrincipiosEticos() {
  return (
    <section
      id="principios-eticos"
      aria-labelledby="titulo-principios-eticos"
      className="bg-civitas-arena/20 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Encabezado
          id="titulo-principios-eticos"
          titulo={principiosEticos.titulo}
          subtitulo={principiosEticos.introduccion}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principiosEticos.lista.map((principio) => {
            const Icono = iconos[principio.icono];
            return (
              <li
                key={principio.titulo}
                className="revelar flex flex-col rounded-2xl border border-civitas-arena bg-civitas-crema p-6"
              >
                <Icono
                  aria-hidden="true"
                  className="size-8 text-civitas-ocre"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-civitas-rojo">
                  {principio.titulo}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-civitas-cafe">
                  {principio.texto}
                </p>
                <p className="mt-4 border-t border-civitas-arena/70 pt-3 font-serif text-lg text-civitas-ocre italic">
                  {principio.cita}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
