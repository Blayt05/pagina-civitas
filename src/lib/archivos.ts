import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** Ruta absoluta de un archivo dentro de `public/` (p. ej. "/logo-escudo.png"). */
export function rutaPublica(ruta: string) {
  return join(process.cwd(), "public", ruta);
}

/**
 * Indica si un archivo existe en `public/`. Se evalúa al generar la página,
 * así que si agregas un logo o el flyer basta con volver a desplegar.
 */
export function existeEnPublic(ruta: string) {
  return existsSync(rutaPublica(ruta));
}

/** Lee un archivo de `public/` como data URL (para imágenes OG). */
export function dataUrlDePublic(ruta: string, tipo = "image/png") {
  if (!existeEnPublic(ruta)) return null;
  const base64 = readFileSync(rutaPublica(ruta)).toString("base64");
  return `data:${tipo};base64,${base64}`;
}
