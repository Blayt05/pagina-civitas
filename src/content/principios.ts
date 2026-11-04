// Principios teológicos y éticos de CIVITAS.
// IMPORTANTE: el texto completo de los principios teológicos es doctrinal.
// Cópialo tal cual; no lo reescribas.

export type PrincipioTeologico = {
  titulo: string;
  resumen: string;
  completo: string;
};

export type IconoEtico =
  | "dignidad"
  | "respeto"
  | "integridad"
  | "mayordomia"
  | "creacion";

export type PrincipioEtico = {
  icono: IconoEtico;
  titulo: string;
  texto: string;
  cita: string;
};

export const principiosTeologicos = {
  titulo: "Principios teológicos",
  introduccion:
    "Estos principios son el fundamento común que une a los miembros de Civitas. No sustituyen las confesiones de fe de las iglesias de donde venimos; cada miembro puede tener convicciones adicionales según su denominación y su fe personal.",
  lista: [
    {
      titulo: "Nuestro Dios",
      resumen:
        "Un solo Dios en tres personas: Padre, Hijo y Espíritu Santo.",
      completo:
        "Creemos en un solo Dios, autor de toda la creación, cuya esencia es compartida por tres personas: Dios Padre; Dios Hijo, engendrado del Padre desde la eternidad; y Dios Espíritu Santo, quien ilumina y da poder para adorar, evangelizar y servir a Dios y a nuestros hermanos. Cada Persona recibe la misma gloria y adoración, siendo iguales en perfección divina.",
    },
    {
      titulo: "Cristo, el Hijo de Dios",
      resumen:
        "Dios hecho hombre, que murió por nuestros pecados, resucitó y volverá.",
      completo:
        "Reconocemos que Cristo, el Dios vivo, se hizo carne, fue crucificado en tiempos de Poncio Pilato, resucitó en gloria y hoy se encuentra a la diestra de Dios el Padre Todopoderoso. Murió por amor a la humanidad y por el perdón de nuestros pecados, y mantenemos la esperanza de su regreso al final de los tiempos.",
    },
    {
      titulo: "Las Escrituras",
      resumen:
        "La Biblia es la Palabra inspirada de Dios y nuestra autoridad suprema.",
      completo:
        "Creemos que las Sagradas Escrituras (la Santa Biblia) fueron escritas por hombres inspirados divinamente, y que constituyen la revelación perfecta, completa y sin error de Dios para la humanidad. Creemos que su autor es Dios mismo y que, por tanto, poseen autoridad suprema en todo asunto de fe y conducta. Afirmamos que toda enseñanza, doctrina y práctica debe ser evaluada, sometida y normada únicamente por las Sagradas Escrituras.",
    },
    {
      titulo: "Propósito del ser humano",
      resumen:
        "Vivir conforme a la voluntad de Dios, reflejando su verdad y su amor.",
      completo:
        "Creemos que el propósito del ser humano es vivir conforme a la voluntad de Dios, reflejando su verdad y su amor en el mundo. Reconocemos la realidad del mal y afirmamos el llamado a responder a ella mediante la proclamación del evangelio y el servicio a los demás. En consecuencia, buscamos amar a nuestro prójimo con justicia, promoviendo el bienestar integral a través de acciones concretas en la sociedad.",
    },
    {
      titulo: "Vida eterna",
      resumen:
        "Cristo es el único camino a la vida eterna en comunión con Dios.",
      completo:
        "Cristo es el único Camino a la vida eterna, una vida en comunión con Dios. Es Él quien la concede, y es Él quien expía nuestros pecados cuando nos arrepentimos de corazón y depositamos nuestra fe en Dios. Cumplidas ambas condiciones, el Espíritu Santo de Dios, que procede del Padre y del Hijo, nos confiere su sello: somos bautizados con su presencia y, en ese acto divino, somos unidos al cuerpo de Cristo, que es la Iglesia.",
    },
  ] satisfies PrincipioTeologico[],
};

export const principiosEticos = {
  titulo: "Principios éticos",
  introduccion: "Estos principios guían nuestra conducta como miembros de Civitas.",
  lista: [
    {
      icono: "dignidad",
      titulo: "Dignidad humana",
      texto:
        "Toda persona es creada a imagen de Dios y es digna de respeto.",
      cita: "Santiago 2:1-9",
    },
    {
      icono: "respeto",
      titulo: "Respeto al prójimo",
      texto:
        "Pasamos por alto las ofensas y, cuando hay que hablar algo, lo hacemos en privado, con amor y gracia. Buscamos unidad y sanidad, no división; y cuando fallamos, nos arrepentimos y recibimos el perdón de Dios en Cristo.",
      cita: "Colosenses 3:12-17; 1 Juan 1:9",
    },
    {
      icono: "integridad",
      titulo: "Integridad y veracidad",
      texto:
        "Que nuestras palabras y acciones sean coherentes, en público y en privado. Buscamos la honestidad académica y personal como reflejo de nuestra fe.",
      cita: "Proverbios 10:9",
    },
    {
      icono: "mayordomia",
      titulo: "Mayordomía y excelencia",
      texto:
        "Nuestro tiempo, talentos y oportunidades son gracia de Dios. Los honramos buscando la excelencia en los estudios y en todo lo que hacemos.",
      cita: "1 Corintios 10:31",
    },
    {
      icono: "creacion",
      titulo: "Cuidado de la creación",
      texto:
        "La tierra y todo lo que hay en ella pertenecen a Dios, y fuimos puestos en ella para trabajarla y cuidarla.",
      cita: "Salmo 24:1; Génesis 2:15",
    },
  ] satisfies PrincipioEtico[],
};
