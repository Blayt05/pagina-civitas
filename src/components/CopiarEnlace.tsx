"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { boton } from "@/lib/estilos";

export function CopiarEnlace({ url }: { url: string }) {
  const [estado, setEstado] = useState<"listo" | "copiado" | "error">("listo");

  useEffect(() => {
    if (estado === "listo") return;
    const t = setTimeout(() => setEstado("listo"), 2500);
    return () => clearTimeout(t);
  }, [estado]);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(url);
      setEstado("copiado");
    } catch {
      setEstado("error");
    }
  }

  return (
    <>
      <button type="button" onClick={copiar} className={boton.chico}>
        {estado === "copiado" ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}
        {estado === "copiado" ? "¡Enlace copiado!" : "Copiar enlace"}
      </button>
      <p role="status" className="sr-only">
        {estado === "copiado" && "Enlace copiado al portapapeles"}
      </p>
      {estado === "error" && (
        <p className="w-full text-sm text-civitas-cafe">
          No se pudo copiar. El enlace es: <span className="font-semibold">{url}</span>
        </p>
      )}
    </>
  );
}
