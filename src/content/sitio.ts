// Textos generales del sitio. Edita este archivo para cambiar textos sin tocar
// los componentes.

const instagramUsuario = "civitasmty";

export const sitio = {
  nombre: "CIVITAS",
  url: "https://www.civitastec.com",
  titulo: "CIVITAS | Grupo estudiantil cristiano del Tec de Monterrey",
  descripcion:
    "Somos el grupo estudiantil cristiano del Tecnológico de Monterrey. Conoce nuestros principios, los ministerios estudiantiles de Zona Tec y las iglesias cerca del campus.",

  instagram: {
    usuario: instagramUsuario,
    url: `https://www.instagram.com/${instagramUsuario}/`,
    /** Abre un mensaje directo en Instagram. */
    mensajeDirecto: `https://ig.me/m/${instagramUsuario}`,
  },

  reunion: "Nos vemos los miércoles a las 7:00 p.m. en Punto Blanco.",

  /** Logos e imágenes (rutas dentro de `public/`). */
  imagenes: {
    escudo: "/logo-escudo.svg",
    wordmark: "/logo-civitas.svg",
    life: "/logo-life.svg",
    flyerMinisterios: "/flyer-ministerios.png",
  },
};

export const navegacion = [
  { etiqueta: "Inicio", href: "/#inicio" },
  { etiqueta: "Quiénes somos", href: "/#quienes-somos" },
  { etiqueta: "Principios", href: "/#principios" },
  { etiqueta: "Ministerios", href: "/#ministerios" },
  { etiqueta: "Iglesias", href: "/#iglesias" },
  { etiqueta: "Conoce a Jesús", href: "/evangelio" },
  { etiqueta: "Contacto", href: "/#contacto" },
];

export const hero = {
  titulo: "CIVITAS",
  subtitulo: "Grupo estudiantil cristiano del Tec de Monterrey",
  frase: "Reflejando los valores de Cristo en nuestra comunidad.",
  botonPrincipal: { etiqueta: "Conócenos", href: "#quienes-somos" },
  botonInstagram: "Síguenos en Instagram",
};

export const quienesSomos = {
  titulo: "Quiénes somos",
  parrafos: [
    "Somos el grupo estudiantil cristiano del Tecnológico de Monterrey. Nuestro objetivo es reflejar los valores de Cristo en la comunidad: en el salón, en el campus y en la ciudad.",
    "Reunimos a estudiantes de distintas iglesias y denominaciones que comparten una misma fe en Jesucristo. Nos une un fundamento común, sin dejar de lado la iglesia local de cada quien.",
  ],
  pilares: [
    {
      icono: "fe",
      titulo: "Fe",
      texto: "Crecemos juntos en la Palabra y la oración.",
    },
    {
      icono: "comunidad",
      titulo: "Comunidad",
      texto: "Somos estudiantes acompañándonos en la vida universitaria.",
    },
    {
      icono: "servicio",
      titulo: "Servicio",
      texto: "Buscamos el bien de nuestro campus y de nuestra ciudad.",
    },
  ],
} as const;

export const conoceAJesus = {
  texto:
    "¿Quieres saber qué significa tener una relación con Dios? Te lo explicamos en 5 pasos.",
  boton: "Conoce a Jesús",
  href: "/evangelio",
};

export const contacto = {
  titulo: "¿Quieres ser parte?",
  texto: "Escríbenos por Instagram y te contamos cómo unirte.",
  boton: "Escríbenos en Instagram",
};

export const pie = {
  descripcion: "Grupo estudiantil cristiano del Tec de Monterrey",
  life: "Grupo estudiantil registrado en LiFE – Tec de Monterrey",
  creditoBiblico:
    "Texto bíblico: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Usado con permiso.",
};
