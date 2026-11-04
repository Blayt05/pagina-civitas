import { ImageResponse } from "next/og";
import { sitio } from "@/content/sitio";
import { dataUrlDePublic } from "@/lib/archivos";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Usa public/logo-escudo.png si existe; si no, una "C" roja sobre crema.
export default function AppleIcon() {
  const escudo = dataUrlDePublic(sitio.imagenes.escudo);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F9F7F1",
          color: "#780E00",
          fontSize: 120,
          fontWeight: 700,
        }}
      >
        {escudo ? (
           
          <img src={escudo} alt="" width={140} height={140} style={{ objectFit: "contain" }} />
        ) : (
          "C"
        )}
      </div>
    ),
    size,
  );
}
