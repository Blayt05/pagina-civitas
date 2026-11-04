import { ConoceAJesus } from "@/components/ConoceAJesus";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Iglesias } from "@/components/Iglesias";
import { Ministerios } from "@/components/Ministerios";
import { Navbar } from "@/components/Navbar";
import { PrincipiosEticos } from "@/components/PrincipiosEticos";
import { PrincipiosTeologicos } from "@/components/PrincipiosTeologicos";
import { QuienesSomos } from "@/components/QuienesSomos";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuienesSomos />
        <PrincipiosTeologicos />
        <PrincipiosEticos />
        <Ministerios />
        <Iglesias />
        <ConoceAJesus />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
