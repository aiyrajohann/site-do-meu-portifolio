import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-black">404</h1>
      <p className="mt-3 text-white/70">Página não encontrada. Vida que segue.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-2xl bg-white/10 px-6 py-4 font-semibold hover:bg-white/15"
      >
        Voltar para Home
      </Link>
    </main>
  );
}
