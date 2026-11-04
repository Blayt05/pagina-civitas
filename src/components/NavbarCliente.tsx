"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

type Enlace = { etiqueta: string; href: string };

function esPagina(href: string) {
  return !href.includes("#");
}

/** En la página principal, "/#seccion" se vuelve "#seccion" (scroll suave). */
function ancla(href: string) {
  return href.replace(/^\/(?=#)/, "");
}

export function NavbarCliente({
  marca,
  enlaces,
}: {
  marca: ReactNode;
  enlaces: Enlace[];
}) {
  const [abierto, setAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setConScroll(window.scrollY > 8);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alPresionar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", alPresionar);
    return () => window.removeEventListener("keydown", alPresionar);
  }, [abierto]);

  const cerrar = () => setAbierto(false);
  const solido = conScroll || abierto;

  const claseEnlace = (href: string) =>
    esPagina(href)
      ? "font-semibold text-civitas-rojo hover:text-civitas-terracota"
      : "text-civitas-cafe hover:text-civitas-rojo";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solido
          ? "border-b border-civitas-arena/60 bg-civitas-crema/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#inicio" onClick={cerrar} aria-label="Civitas, ir al inicio">
          {marca}
        </a>

        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              {esPagina(enlace.href) ? (
                <Link href={enlace.href} className={claseEnlace(enlace.href)}>
                  {enlace.etiqueta}
                </Link>
              ) : (
                <a href={ancla(enlace.href)} className={claseEnlace(enlace.href)}>
                  {enlace.etiqueta}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-civitas-cafe lg:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((valor) => !valor)}
        >
          {abierto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="menu-movil"
        hidden={!abierto}
        className="border-t border-civitas-arena/60 bg-civitas-crema lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 text-lg">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              {esPagina(enlace.href) ? (
                <Link
                  href={enlace.href}
                  onClick={cerrar}
                  className={`block py-3 ${claseEnlace(enlace.href)}`}
                >
                  {enlace.etiqueta}
                </Link>
              ) : (
                <a
                  href={ancla(enlace.href)}
                  onClick={cerrar}
                  className={`block py-3 ${claseEnlace(enlace.href)}`}
                >
                  {enlace.etiqueta}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
