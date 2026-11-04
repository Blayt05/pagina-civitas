// Genera src/app/favicon.ico a partir de una imagen PNG del escudo.
//
//   npm run favicon                      (usa la imagen por defecto)
//   node scripts/generar-favicon.mjs ruta/a/imagen.png
//
// - Vuelve transparente el fondo blanco que rodea al escudo (solo el que toca
//   los bordes de la imagen; el blanco del interior del escudo se conserva).
// - Lo centra en un cuadrado y crea un .ico con tamaños 16, 32 y 48 px.

import { writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const entrada = resolve(raiz, process.argv[2] ?? "public/qr/icono para pagina.png");
const salida = join(raiz, "src", "app", "favicon.ico");
const TAMANOS = [16, 32, 48];
const UMBRAL_BLANCO = 235; // 0–255: qué tan claro debe ser un píxel para tomarse como fondo

/** Quita el fondo claro conectado con los bordes (relleno por inundación). */
async function quitarFondo(ruta) {
  const { data, info } = await sharp(ruta)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const esClaro = (i) =>
    data[i * 4] >= UMBRAL_BLANCO &&
    data[i * 4 + 1] >= UMBRAL_BLANCO &&
    data[i * 4 + 2] >= UMBRAL_BLANCO;

  const visitado = new Uint8Array(w * h);
  const pila = [];
  for (let x = 0; x < w; x++) pila.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) pila.push(y * w, y * w + w - 1);

  while (pila.length) {
    const i = pila.pop();
    if (visitado[i] || !esClaro(i)) continue;
    visitado[i] = 1;
    data[i * 4 + 3] = 0;
    const x = i % w;
    const y = (i - x) / w;
    if (x > 0) pila.push(i - 1);
    if (x < w - 1) pila.push(i + 1);
    if (y > 0) pila.push(i - w);
    if (y < h - 1) pila.push(i + w);
  }

  return sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .trim() // recorta el espacio transparente sobrante
    .png()
    .toBuffer();
}

/** Arma un archivo .ico que contiene imágenes PNG (formato válido desde Windows Vista). */
function crearIco(pngs) {
  const cabecera = Buffer.alloc(6);
  cabecera.writeUInt16LE(0, 0); // reservado
  cabecera.writeUInt16LE(1, 2); // tipo: ícono
  cabecera.writeUInt16LE(pngs.length, 4);

  const entradas = [];
  let desplazamiento = 6 + 16 * pngs.length;
  for (const { tamano, buffer } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(tamano >= 256 ? 0 : tamano, 0); // ancho
    e.writeUInt8(tamano >= 256 ? 0 : tamano, 1); // alto
    e.writeUInt8(0, 2); // paleta
    e.writeUInt8(0, 3); // reservado
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por píxel
    e.writeUInt32LE(buffer.length, 8);
    e.writeUInt32LE(desplazamiento, 12);
    desplazamiento += buffer.length;
    entradas.push(e);
  }
  return Buffer.concat([cabecera, ...entradas, ...pngs.map((p) => p.buffer)]);
}

async function main() {
  const escudo = await quitarFondo(entrada);
  const pngs = await Promise.all(
    TAMANOS.map(async (tamano) => ({
      tamano,
      buffer: await sharp(escudo)
        .resize(tamano, tamano, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
          kernel: "lanczos3",
        })
        .png()
        .toBuffer(),
    })),
  );
  await writeFile(salida, crearIco(pngs));
  console.log(`✔ src/app/favicon.ico (${TAMANOS.join(", ")} px) a partir de ${entrada}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
