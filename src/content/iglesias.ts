// Iglesias del Distrito Tec.
// - `direccion`: si tiene valor, el mapa busca "nombre en Google + dirección",
//   así Google muestra la iglesia con su nombre (no solo la dirección).
//   Si está vacía, se busca por nombre + ", Monterrey, N.L.".
// - `nombreMaps`: nombre tal como aparece en Google Maps, si es distinto de
//   `nombre` (opcional).
// - `instagram`: nombre de usuario sin "@". Si está vacío, no se muestra botón.

export type Horario = { etiqueta: string; valor: string };

export type Iglesia = {
  id: string;
  nombre: string;
  direccion: string;
  nombreMaps?: string;
  instagram: string;
  horarios: Horario[];
  telefono?: { texto: string; whatsapp: string };
  /** Consulta para Google Maps (se calcula automáticamente). */
  mapsQuery: string;
};

export const iglesiasSeccion = {
  titulo: "Iglesias cerca del Tec",
  subtitulo:
    "Si buscas una iglesia local, estas comunidades están en el Distrito Tec.",
};

const datos: Omit<Iglesia, "mapsQuery">[] = [
  {
    id: "principe-de-paz",
    nombre: "Iglesia Bautista Príncipe de Paz",
    direccion: "Carlos Osuna 40, Altavista, Distrito Tec, 64840 Monterrey, N.L., México",
    instagram: "", // TODO: agregar el Instagram (sin @)
    horarios: [
      { etiqueta: "Jóvenes", valor: "Contacto: 81 2108 4806" },
      { etiqueta: "Servicio dominical", valor: "Domingo 9:00 a.m. y 11:45 a.m." },
    ],
    telefono: { texto: "81 2108 4806", whatsapp: "https://wa.me/528121084806" },
  },
  {
    id: "fuente-de-redencion",
    nombre: "Iglesia Presbiteriana Jesucristo Fuente de Redención",
    direccion: "", // TODO: agregar la dirección
    instagram: "", // TODO: agregar el Instagram (sin @)
    horarios: [
      { etiqueta: "Jóvenes", valor: "Sábado 7:00 p.m." },
      { etiqueta: "Servicio dominical", valor: "Domingo 12:00 p.m." },
    ],
  },
  {
    id: "dios-esta-aqui",
    nombre: "Iglesia Bautista Dios Está Aquí",
    nombreMaps: "Iglesia Dios Está Aquí",
    direccion: "Rio Aguanaval 320, Roma, Roma Sur, 64100 Monterrey, N.L., México",
    instagram: "", // TODO: agregar el Instagram (sin @)
    horarios: [
      { etiqueta: "Jóvenes", valor: "Viernes 8:00 p.m." },
      {
        etiqueta: "Servicio dominical",
        valor: "Domingo 9:00, 10:30 a.m. y 12:30 p.m.",
      },
    ],
  },
];

export const iglesias: Iglesia[] = datos.map((iglesia) => ({
  ...iglesia,
  mapsQuery: iglesia.direccion.trim()
    ? `${iglesia.nombreMaps ?? iglesia.nombre}, ${iglesia.direccion.trim()}`
    : `${iglesia.nombre}, Monterrey, N.L.`,
}));

/**
 * Nivel de zoom del mapa (igual para todas las iglesias). Más alto = más cerca.
 * 12 muestra la zona metropolitana alrededor de la iglesia.
 */
export const ZOOM_MAPA = 12;

export function urlMapaEmbebido(consulta: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(consulta)}&z=${ZOOM_MAPA}&output=embed`;
}

export function urlComoLlegar(consulta: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(consulta)}`;
}
