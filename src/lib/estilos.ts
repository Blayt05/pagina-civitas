// Clases reutilizables para botones y encabezados.

const botonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200";

export const boton = {
  /** Botón principal: rojo con texto crema. */
  primario: `${botonBase} bg-civitas-rojo text-civitas-crema hover:bg-civitas-terracota`,
  /** Botón con borde rojo sobre fondo claro. */
  secundario: `${botonBase} border border-civitas-rojo text-civitas-rojo hover:bg-civitas-rojo hover:text-civitas-crema`,
  /** Botón crema con texto rojo (para fondos rojos u oscuros). */
  crema: `${botonBase} bg-civitas-crema text-civitas-rojo hover:bg-civitas-arena`,
  /** Botón pequeño con borde (tarjetas). */
  chico:
    "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-civitas-arena px-4 py-2 text-sm font-semibold text-civitas-rojo transition-colors duration-200 hover:border-civitas-rojo hover:bg-civitas-rojo hover:text-civitas-crema",
};

/** Texto secundario con contraste AA sobre crema (en lugar de taupe). */
export const textoSecundario = "text-civitas-cafe/75";
