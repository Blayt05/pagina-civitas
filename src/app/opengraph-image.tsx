import { ImageResponse } from "next/og";
import { sitio, hero } from "@/content/sitio";
import { dataUrlDePublic } from "@/lib/archivos";

export const alt = "CIVITAS · Grupo estudiantil cristiano del Tec de Monterrey";
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
          background: "#F9F7F1",
          border: "2px solid #D3BB8D",
        }}
      >
        {escudo && (
           
          <img src={escudo} alt="" width={150} height={150} style={{ objectFit: "contain" }} />
        )}
        <div
          style={{
            marginTop: escudo ? 24 : 0,
            fontSize: 150,
            letterSpacing: 18,
            fontWeight: 700,
            color: "#780E00",
            fontFamily: "serif",
          }}
        >
          CIVITAS
        </div>
        <div style={{ width: 120, height: 2, background: "#D3BB8D", margin: "20px 0" }} />
        <div style={{ fontSize: 40, color: "#9F6422", fontStyle: "italic" }}>
          {hero.subtitulo}
        </div>
      </div>
    ),
    size,
  );
}
