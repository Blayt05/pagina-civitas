import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { NavbarSimple } from "@/components/NavbarSimple";
import {
  CompartirEvangelio,
  DecisionEvangelio,
  EncabezadoEvangelio,
  PasosEvangelio,
  SiguientesPasos,
} from "@/components/Evangelio";
import { evangelio } from "@/content/evangelio";
import { sitio } from "@/content/sitio";

export const metadata: Metadata = {
  title: evangelio.metadata.titulo,
  description: evangelio.metadata.descripcion,
  alternates: { canonical: "/evangelio" },
  openGraph: {
    title: evangelio.metadata.titulo,
    description: evangelio.metadata.descripcion,
    url: "/evangelio",
    siteName: sitio.nombre,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: evangelio.metadata.titulo,
    description: evangelio.metadata.descripcion,
  },
};

export default function PaginaEvangelio() {
  return (
    <>
      <NavbarSimple />
      <main className="flex-1">
        <EncabezadoEvangelio />
        <PasosEvangelio />
        <DecisionEvangelio />
        <SiguientesPasos />
        <CompartirEvangelio />
      </main>
      <Footer />
    </>
  );
}
