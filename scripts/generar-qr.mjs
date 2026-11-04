// Genera los códigos QR de la página /evangelio en los colores de Civitas.
//
//   npm run qr
//
// Archivos que crea en public/qr/:
//   - qr-evangelio.svg          QR sin logo (vectorial, para imprimir a cualquier tamaño)
//   - qr-evangelio.png          QR de 1024 px con el escudo al centro (si existe)
//   - qr-evangelio-tarjeta.png  Tarjeta vertical 1080×1350 para Instagram/impresión
//
// Al final decodifica los PNG con jsQR y falla si no devuelven exactamente la URL.

import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import jsQR from "jsqr";
import QRCode from "qrcode";
import sharp from "sharp";

const URL_EVANGELIO = "https://www.civitastec.com/evangelio";
const ROJO = "#780E00";
const CREMA = "#F9F7F1";
const MARGEN = 4; // quiet zone, en módulos
const TAMANO_PNG = 1024;
const LOGO_MAX = 0.2; // el cuadro del logo ocupa como máximo el 20 % del ancho

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const carpetaQr = join(raiz, "public", "qr");
const rutaEscudo = join(raiz, "public", "logo-escudo.png");

const opciones = {
  errorCorrectionLevel: "H",
  margin: MARGEN,
  color: { dark: ROJO, light: CREMA },
};

/** Decodifica un PNG y regresa el texto del QR (o null). */
async function leerQr(buffer) {
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const resultado = jsQR(new Uint8ClampedArray(data), info.width, info.height);
  return resultado?.data ?? null;
}

/** QR en PNG de 1024 px exactos, con el escudo al centro si `proporcionLogo` > 0. */
async function qrPng(proporcionLogo) {
  const base = await QRCode.toBuffer(URL_EVANGELIO, {
    ...opciones,
    type: "png",
    width: TAMANO_PNG,
  });
  // Asegura el tamaño exacto (qrcode puede redondear la escala).
  const qr = sharp(base).resize(TAMANO_PNG, TAMANO_PNG, {
    kernel: "nearest",
    fit: "fill",
  });

  if (!proporcionLogo) return qr.png().toBuffer();

  const caja = Math.round(TAMANO_PNG * proporcionLogo);
  const radio = Math.round(caja * 0.18);
  const relleno = Math.round(caja * 0.12);
  const fondo = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${caja}" height="${caja}">
      <rect width="${caja}" height="${caja}" rx="${radio}" ry="${radio}" fill="${CREMA}"/>
    </svg>`,
  );
  const logo = await sharp(rutaEscudo)
    .resize(caja - relleno * 2, caja - relleno * 2, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const pos = Math.round((TAMANO_PNG - caja) / 2);

  return qr
    .composite([
      { input: fondo, left: pos, top: pos },
      { input: logo, left: pos + relleno, top: pos + relleno },
    ])
    .png()
    .toBuffer();
}

/** Tarjeta vertical 1080×1350 con marco, título, QR y URL. */
async function tarjeta(qrConLogo) {
  const ancho = 1080;
  const alto = 1350;
  const ladoQr = 760;
  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}">
      <rect width="100%" height="100%" fill="${CREMA}"/>
      <rect x="40" y="40" width="${ancho - 80}" height="${alto - 80}" rx="18" fill="none" stroke="${ROJO}" stroke-width="3"/>
      <text x="50%" y="230" text-anchor="middle" fill="${ROJO}"
        font-family="Playfair Display, Georgia, 'Times New Roman', serif" font-size="96" font-weight="700">Conoce a Jesús</text>
      <text x="50%" y="1170" text-anchor="middle" fill="${ROJO}"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="46" font-weight="600">civitastec.com/evangelio</text>
    </svg>`,
  );
  const qr = await sharp(qrConLogo).resize(ladoQr, ladoQr, { kernel: "nearest" }).toBuffer();
  return sharp(svg)
    .composite([{ input: qr, left: Math.round((ancho - ladoQr) / 2), top: 320 }])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(carpetaQr, { recursive: true });

  // 1. SVG sin logo
  const svg = await QRCode.toString(URL_EVANGELIO, { ...opciones, type: "svg" });
  await writeFile(join(carpetaQr, "qr-evangelio.svg"), svg);

  // 2. PNG con logo: reduce el logo hasta que el QR se lea correctamente
  const hayEscudo = existsSync(rutaEscudo);
  if (!hayEscudo) {
    console.warn("⚠️  No existe public/logo-escudo.png: el QR se genera sin logo.");
  }
  const proporciones = hayEscudo ? [LOGO_MAX, 0.18, 0.16, 0.14, 0.12, 0] : [0];
  let png = null;
  let usada = 0;
  for (const p of proporciones) {
    const intento = await qrPng(p);
    if ((await leerQr(intento)) === URL_EVANGELIO) {
      png = intento;
      usada = p;
      break;
    }
    console.warn(`   El QR no se leyó con el logo al ${p * 100} %, probando más pequeño…`);
  }
  if (!png) throw new Error("No se pudo generar un QR legible.");
  await writeFile(join(carpetaQr, "qr-evangelio.png"), png);

  // 3. Tarjeta para Instagram / impresión
  const card = await tarjeta(png);
  await writeFile(join(carpetaQr, "qr-evangelio-tarjeta.png"), card);

  // 4. Verificación final
  const leidoPng = await leerQr(png);
  const leidoTarjeta = await leerQr(card);
  const ok = leidoPng === URL_EVANGELIO && leidoTarjeta === URL_EVANGELIO;

  console.log(`✔ public/qr/qr-evangelio.svg`);
  console.log(
    `✔ public/qr/qr-evangelio.png (${TAMANO_PNG} px, logo: ${usada ? `${Math.round(usada * 100)} %` : "sin logo"})`,
  );
  console.log(`✔ public/qr/qr-evangelio-tarjeta.png (1080×1350)`);
  console.log(`  Decodificado PNG:     ${leidoPng}`);
  console.log(`  Decodificado tarjeta: ${leidoTarjeta}`);

  if (!ok) {
    console.error(`✘ El QR no decodifica a ${URL_EVANGELIO}`);
    process.exit(1);
  }
  console.log(`✔ El QR decodifica exactamente a ${URL_EVANGELIO}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
