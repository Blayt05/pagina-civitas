import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { sitio } from "@/content/sitio";
import { existeEnPublic } from "@/lib/archivos";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: sitio.titulo,
  description: sitio.descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    title: sitio.titulo,
    description: sitio.descripcion,
    url: "/",
    siteName: sitio.nombre,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: sitio.titulo,
    description: sitio.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#780E00",
};

function datosEstructurados() {
  const organizacion = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: sitio.nombre,
    description: sitio.descripcion,
    url: sitio.url,
    // TODO: el logo aparece aquí en cuanto exista public/logo-escudo.png
    ...(existeEnPublic(sitio.imagenes.escudo) && {
      logo: `${sitio.url}${sitio.imagenes.escudo}`,
    }),
    sameAs: [sitio.instagram.url],
  };
  return JSON.stringify(organizacion).replace(/</g, "\\u003c");
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-civitas-crema font-sans text-civitas-cafe">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: datosEstructurados() }}
        />
        {children}
      </body>
    </html>
  );
}
