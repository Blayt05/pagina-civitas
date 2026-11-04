import Link from "next/link";
import { MarcaNavbar } from "./Logos";

/** Barra simplificada (solo el logo, que regresa al inicio). */
export function NavbarSimple() {
  return (
    <header className="border-b border-civitas-arena/60 bg-civitas-crema">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-3xl items-center px-5"
      >
        <Link href="/" aria-label="Civitas, ir a la página principal">
          <MarcaNavbar />
        </Link>
      </nav>
    </header>
  );
}
