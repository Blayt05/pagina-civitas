"use client";

import { Clock, MessageCircle, Navigation, Phone } from "lucide-react";
import { useState } from "react";
import { type Iglesia, urlComoLlegar, urlMapaEmbebido } from "@/content/iglesias";
import { boton } from "@/lib/estilos";
import { IconoInstagram } from "./Iconos";

const nuevaPestana = <span className="sr-only"> (se abre en una pestaña nueva)</span>;

export function MapaIglesias({ iglesias }: { iglesias: Iglesia[] }) {
  const [seleccionada, setSeleccionada] = useState(iglesias[0]?.id);
  const actual = iglesias.find((i) => i.id === seleccionada) ?? iglesias[0];

  if (!actual) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start">
      <ul className="space-y-4">
        {iglesias.map((iglesia) => {
          const activa = iglesia.id === actual.id;
          return (
            <li
              key={iglesia.id}
              className={`rounded-2xl bg-civitas-crema p-5 transition-colors ${
                activa ? "border-2 border-civitas-rojo" : "border border-civitas-arena"
              }`}
            >
              <button
                type="button"
                onClick={() => setSeleccionada(iglesia.id)}
                aria-pressed={activa}
                className="w-full rounded-lg text-left"
              >
                <span className="block font-serif text-xl font-semibold text-civitas-marino sm:text-2xl">
                  {iglesia.nombre}
                </span>
                <span className="mt-1 block text-sm font-semibold text-civitas-rojo">
                  {activa ? "Mostrando en el mapa" : "Ver en el mapa"}
                </span>
              </button>

              <dl className="mt-3 space-y-1.5 text-civitas-cafe/75">
                {iglesia.horarios.map((h) => (
                  <div key={h.etiqueta} className="flex items-start gap-2">
                    <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-civitas-ocre" />
                    <div>
                      <dt className="inline font-semibold text-civitas-cafe">{h.etiqueta}: </dt>
                      <dd className="inline">{h.valor}</dd>
                    </div>
                  </div>
                ))}
                {iglesia.telefono && (
                  <div className="flex items-start gap-2">
                    <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-civitas-ocre" />
                    <div>
                      <dt className="inline font-semibold text-civitas-cafe">Teléfono: </dt>
                      <dd className="inline">
                        <a
                          href={`tel:+52${iglesia.telefono.texto.replace(/\D/g, "")}`}
                          className="underline-offset-4 hover:text-civitas-rojo hover:underline"
                        >
                          {iglesia.telefono.texto}
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={urlComoLlegar(iglesia.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={boton.chico}
                >
                  <Navigation aria-hidden="true" className="size-4" />
                  Cómo llegar
                  {nuevaPestana}
                </a>
                {iglesia.telefono && (
                  <a
                    href={iglesia.telefono.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={boton.chico}
                  >
                    <MessageCircle aria-hidden="true" className="size-4" />
                    WhatsApp
                    {nuevaPestana}
                  </a>
                )}
                {iglesia.instagram && (
                  <a
                    href={`https://www.instagram.com/${iglesia.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={boton.chico}
                  >
                    <IconoInstagram className="size-4" />
                    Instagram
                    {nuevaPestana}
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="overflow-hidden rounded-2xl border border-civitas-arena lg:sticky lg:top-24">
        <iframe
          key={actual.id}
          src={urlMapaEmbebido(actual.mapsQuery)}
          title={`Mapa: ubicación de ${actual.nombre}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block aspect-[4/3] h-auto w-full lg:aspect-square"
        />
      </div>
    </div>
  );
}
