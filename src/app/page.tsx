import { cacheLife } from "next/cache";

// Con Cache Components, la fecha debe calcularse dentro de una función en
// caché: la página sigue siendo estática y el año se actualiza solo.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="pl-[0.14em] font-serif text-6xl font-medium tracking-[0.14em] sm:text-8xl">
          CIVITAS
        </h1>
        <div aria-hidden="true" className="mt-8 h-px w-16 bg-dorado" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-balance sm:text-xl">
          Estamos trabajando en la construcción de la página de CIVITAS.
        </p>
        <p className="mt-3 max-w-xl text-base text-balance text-pizarra">
          Grupo estudiantil cristiano. Muy pronto más información.
        </p>
      </main>
      <footer className="px-6 pb-6 text-center text-sm text-pizarra">
        © <CurrentYear /> CIVITAS
      </footer>
    </>
  );
}
