import { ImageResponse } from "next/og";
import { evangelio } from "@/content/evangelio";
import { sitio } from "@/content/sitio";
import { dataUrlDePublic } from "@/lib/archivos";

export const alt = "Conoce a Jesús · Buenas noticias para ti · CIVITAS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const escudo = dataUrlDePublic(sitio.imagenes.escudo);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#780E00",
          color: "#F9F7F1",
        }}
      >
        {escudo ? (
          // El escudo rojo va sobre un medallón crema para que se vea en el fondo rojo.
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 190,
              height: 190,
              borderRadius: 95,
              background: "#F9F7F1",
            }}
          >
            { }
            <img src={escudo} alt="" width={130} height={130} style={{ objectFit: "contain" }} />
          </div>
        ) : (
          <div style={{ fontSize: 56, fontWeight: 700 }}>civitas</div>
        )}
        <div style={{ marginTop: 36, fontSize: 92, fontWeight: 700 }}>Conoce a Jesús</div>
        <div style={{ marginTop: 12, fontSize: 40, fontStyle: "italic" }}>
          {evangelio.encabezado.titulo}
        </div>
      </div>
    ),
    size,
  );
}
