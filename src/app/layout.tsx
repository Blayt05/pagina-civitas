import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "500",
});

const title = "CIVITAS | Grupo estudiantil cristiano";
const description =
  "CIVITAS es un grupo estudiantil cristiano. Estamos construyendo nuestra página; muy pronto más información.";

export const metadata: Metadata = {
  metadataBase: new URL("https://civitastec.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "CIVITAS",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-marfil font-sans text-azul">
        {children}
      </body>
    </html>
  );
}
