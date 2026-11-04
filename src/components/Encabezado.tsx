import type { ReactNode } from "react";

/** Título de sección con subtítulo en itálica y línea decorativa. */
export function Encabezado({
  titulo,
  subtitulo,
  id,
  centrado = true,
  children,
}: {
  titulo: string;
  subtitulo?: string;
  id?: string;
  centrado?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`revelar ${centrado ? "mx-auto text-center" : ""} max-w-2xl`}>
      <h2
        id={id}
        className="font-serif text-4xl font-semibold text-civitas-rojo sm:text-5xl"
      >
        {titulo}
      </h2>
      {subtitulo && (
        <p className="mt-3 font-serif text-xl text-civitas-ocre italic sm:text-2xl">
          {subtitulo}
        </p>
      )}
      <div
        aria-hidden="true"
        className={`mt-6 h-px w-20 bg-civitas-arena ${centrado ? "mx-auto" : ""}`}
      />
      {children}
    </div>
  );
}
