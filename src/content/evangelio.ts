// Contenido de la página /evangelio ("Conoce a Jesús").
// Versículos: Reina-Valera 1960.

export type Versiculo = { referencia: string; texto: string };

export type Paso = {
  titulo: string;
  texto: string;
  versiculos: Versiculo[];
};

export const evangelio = {
  url: "https://www.civitastec.com/evangelio",
  metadata: {
    titulo: "Conoce a Jesús | CIVITAS",
    descripcion:
      "Una explicación sencilla de las buenas noticias de Jesús, en 5 pasos.",
  },

  encabezado: {
    titulo: "Buenas noticias para ti",
    subtitulo:
      "Lo más importante que podemos compartirte, explicado en 5 pasos.",
  },

  pasos: [
    {
      titulo: "Dios te ama y te creó con un propósito",
      texto:
        "Dios te creó a su imagen para conocerlo y vivir en relación con Él. No eres un accidente: eres amado.",
      versiculos: [
        {
          referencia: "Juan 3:16",
          texto:
            "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
        },
      ],
    },
    {
      titulo: "El problema: el pecado nos separa de Dios",
      texto:
        "Todos hemos fallado. El pecado no es solo hacer cosas malas; es vivir sin Dios, a nuestra manera. Eso rompe nuestra relación con Él y trae como consecuencia la muerte espiritual.",
      versiculos: [
        {
          referencia: "Romanos 3:23",
          texto:
            "Por cuanto todos pecaron, y están destituidos de la gloria de Dios.",
        },
        {
          referencia: "Romanos 6:23",
          texto:
            "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
        },
      ],
    },
    {
      titulo: "La solución: Jesús murió y resucitó por ti",
      texto:
        "No podemos arreglarlo con nuestro esfuerzo. Por eso Dios mismo vino en Jesucristo: murió en la cruz en nuestro lugar, pagó por nuestros pecados y resucitó al tercer día. Él es el único camino de regreso a Dios.",
      versiculos: [
        {
          referencia: "Romanos 5:8",
          texto:
            "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.",
        },
        {
          referencia: "Juan 14:6",
          texto:
            "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
        },
      ],
    },
    {
      titulo: "Tu respuesta: arrepiéntete y cree",
      texto:
        "La salvación es un regalo; no se gana. Se recibe cuando te arrepientes de corazón, es decir, cuando te das la vuelta y dejas de vivir a tu manera, y pones tu fe en Jesús como tu Salvador y Señor.",
      versiculos: [
        {
          referencia: "Efesios 2:8-9",
          texto:
            "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
        },
        {
          referencia: "Romanos 10:9",
          texto:
            "Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.",
        },
      ],
    },
    {
      titulo: "Una nueva vida",
      texto:
        "Cuando crees en Cristo, Dios te perdona, te da vida eterna y su Espíritu Santo viene a vivir en ti. Eres parte de su familia, la Iglesia. Esta vida eterna empieza hoy.",
      versiculos: [
        {
          referencia: "Juan 1:12",
          texto:
            "Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios.",
        },
      ],
    },
  ] satisfies Paso[],

  decision: {
    titulo: "¿Quieres dar este paso?",
    texto:
      "Puedes hablar con Dios ahora mismo, con tus propias palabras. No hay una fórmula mágica: lo que importa es tu corazón. Si te ayuda, puedes orar algo así:",
    oracion:
      "Señor Jesús, reconozco que he vivido lejos de ti y que he pecado. Creo que moriste en la cruz por mí y que resucitaste. Me arrepiento y te recibo como mi Salvador y Señor. Gracias por tu perdón y por darme vida nueva. Ayúdame a seguirte. Amén.",
  },

  siguientesPasos: {
    titulo: "¿Y ahora qué?",
    biblia: {
      titulo: "Lee la Biblia",
      texto: "Empieza por el Evangelio de Juan.",
      boton: "Leer Juan",
      href: "https://www.bible.com/es/bible/149/JHN.1.RVR1960",
    },
    iglesia: {
      titulo: "Busca una iglesia",
      texto: "Conoce las iglesias cerca del Tec.",
      boton: "Ver iglesias",
      href: "/#iglesias",
    },
    hablar: {
      titulo: "Habla con nosotros",
      texto:
        "Cuéntanos si tomaste esta decisión o si tienes preguntas. Nos encantaría acompañarte.",
      boton: "Escríbenos por Instagram",
      respaldo: "¿No se abrió el chat? Visita nuestro perfil",
    },
  },

  cierre: "Nos vemos los miércoles a las 7:00 p.m. en Punto Blanco para orar juntos.",

  compartir: {
    titulo: "Comparte esta página",
    texto: "Imprime o comparte el código QR para que más personas conozcan estas buenas noticias.",
    altQr: "Código QR que lleva a civitastec.com/evangelio",
    png: "/qr/qr-evangelio.png",
    svg: "/qr/qr-evangelio.svg",
    tarjeta: "/qr/qr-evangelio-tarjeta.png",
  },
};
