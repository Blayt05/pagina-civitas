# CIVITAS

Página web de CIVITAS, el grupo estudiantil cristiano del Tecnológico de Monterrey.

Sitio: <https://www.civitastec.com> · Página de evangelismo: <https://www.civitastec.com/evangelio>

Hecho con [Next.js](https://nextjs.org) (App Router), TypeScript y Tailwind CSS.

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Después abre <http://localhost:3000> en el navegador.

## Editar el contenido

Todos los textos y datos viven en `src/content/`, separados del diseño:

| Archivo | Qué contiene |
|---|---|
| `src/content/sitio.ts` | Textos generales, Instagram, reunión semanal, menú, footer |
| `src/content/principios.ts` | Principios teológicos y éticos |
| `src/content/ministerios.ts` | Ministerios estudiantiles de Zona Tec (horarios y lugares) |
| `src/content/iglesias.ts` | Iglesias del Distrito Tec (horarios, dirección, Instagram) |
| `src/content/evangelio.ts` | Página `/evangelio` (pasos, versículos, oración) |

## Logos e imágenes (`public/`)

| Archivo | Uso |
|---|---|
| `public/logo-escudo.png` | Escudo: navbar, centro del QR, imágenes OG, ícono de Apple |
| `public/logo-civitas.png` | Wordmark: hero y footer |
| `public/logo-life.png` | Logo LiFE en el footer |
| `public/flyer-ministerios.png` | Enlace "Descargar flyer" (se oculta si no existe) |

Si un logo no existe, el sitio muestra un texto de respaldo; basta con agregarlo y volver a desplegar.

## Favicon

`src/app/favicon.ico` se genera a partir del PNG del escudo (quita el fondo blanco y crea los tamaños 16, 32 y 48 px):

```bash
npm run favicon                                  # usa public/qr/icono para pagina.png
node scripts/generar-favicon.mjs ruta/imagen.png # otra imagen
```

## Código QR de `/evangelio`

```bash
npm run qr
```

Genera `public/qr/qr-evangelio.svg`, `qr-evangelio.png` (con el escudo) y `qr-evangelio-tarjeta.png`, y verifica que el QR se lea. Vuelve a ejecutarlo después de agregar `public/logo-escudo.png`.

## Otros comandos

```bash
npm run build   # Genera la versión de producción
npm run lint    # Revisa el código con ESLint
```

## Despliegue

El sitio se despliega en [Vercel](https://vercel.com).
