import { MarcaNavbar } from "./Logos";
import { NavbarCliente } from "./NavbarCliente";
import { navegacion } from "@/content/sitio";

export function Navbar() {
  return <NavbarCliente marca={<MarcaNavbar />} enlaces={navegacion} />;
}
