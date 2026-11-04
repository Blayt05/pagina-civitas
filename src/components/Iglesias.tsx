import { iglesias, iglesiasSeccion } from "@/content/iglesias";
import { Encabezado } from "./Encabezado";
import { MapaIglesias } from "./MapaIglesias";

export function Iglesias() {
  return (
    <section
      id="iglesias"
      aria-labelledby="titulo-iglesias"
      className="bg-civitas-arena/20 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Encabezado
          id="titulo-iglesias"
          titulo={iglesiasSeccion.titulo}
          subtitulo={iglesiasSeccion.subtitulo}
        />
        <div className="revelar mt-12">
          <MapaIglesias iglesias={iglesias} />
        </div>
      </div>
    </section>
  );
}
