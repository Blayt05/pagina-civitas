// Ministerios estudiantiles de Zona Tec.
// Para cambiar un horario o lugar, edita solo este archivo.
// `instagram` es el nombre de usuario sin "@" (déjalo vacío si no tiene cuenta).

export type Ministerio = {
  nombre: string;
  actividad: string;
  diaHora: string;
  lugar: string;
  instagram: string;
  /** Marca la tarjeta como "Nosotros". Solo Civitas. */
  destacado?: boolean;
};

export const ministeriosSeccion = {
  titulo: "Ministerios Zona Tec",
  subtitulo: "Grupos cristianos en el campus. ¡Encuentra uno y súmate!",
  etiquetaDestacado: "Nosotros",
  descargarFlyer: "Descargar flyer",
};

export const ministerios: Ministerio[] = [
  {
    nombre: "Civitas",
    actividad: "Oración",
    diaHora: "Miércoles 7:00 p.m.",
    lugar: "Punto Blanco",
    instagram: "civitasmty",
    destacado: true,
  },
  {
    nombre: "Navegantes Mty",
    actividad: "Estudio bíblico",
    diaHora: "Viernes 1:00 p.m.",
    lugar: "2do piso, Centro de Congresos",
    instagram: "nav_monterrey",
  },
  {
    nombre: "Ecos",
    actividad: "Estudio bíblico",
    diaHora: "Martes 7:00 p.m.",
    lugar: "Biblioteca",
    instagram: "ecosdepaz.me",
  },
  {
    nombre: "COMPA",
    actividad: "Estudio bíblico",
    diaHora: "Jueves 5:00 p.m.",
    lugar: "Frente al campanario",
    instagram: "companuevoleon",
  },
  {
    nombre: "Light TEC",
    actividad: "Estudio bíblico",
    diaHora: "Miércoles 7:30 p.m.",
    lugar: "Parque Central",
    instagram: "unisibmty",
  },
  {
    nombre: "Alpha",
    actividad: "Conversatorio",
    diaHora: "Martes 8:00 p.m.",
    lugar: "CIAP 220",
    instagram: "alphatec.mty",
  },
];
