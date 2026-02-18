import { Link } from "react-router-dom";
import { achadinhos } from "../../data/achadinhos.store";

export function AchadinhosShopee() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header>
        <h1 className="text-2xl font-bold">Achadinhos Shopee</h1>
        <p className="mt-2 text-white/70">Lista editável por você, o público só navega.</p>
      </header>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achadinhos.map((a) => (
          <Link
            key={a.id}
            to={`/achadinhos/${a.id}`}
            className="rounded-3xl bg-slate-900 p-5 shadow hover:bg-slate-800 transition"
          >
            {a.imagemUrl && (
              <img
                src={a.imagemUrl}
                alt={a.titulo}
                className="mb-4 h-44 w-full rounded-2xl object-cover"
              />
            )}

            <h2 className="text-lg font-bold">{a.titulo}</h2>
            <p className="mt-2 text-white/70 line-clamp-3">{a.descricao}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {a.preco && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
                  {a.preco}
                </span>
              )}
              {a.tags?.slice(0, 3).map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
