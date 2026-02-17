import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { achadinhos } from "../../data/achadinhos";

export function AchadinhoDetalhe() {
  const { id } = useParams();

  const item = useMemo(() => achadinhos.find((a) => a.id === id), [id]);

  if (!item) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold">Achadinho não encontrado</h1>
        <p className="mt-2 text-white/70">Você caiu numa rota inexistente. Acontece.</p>
        <Link
          to="/achadinhos"
          className="mt-6 inline-flex rounded-2xl bg-white/10 px-6 py-4 font-semibold hover:bg-white/15"
        >
          Voltar para Achadinhos
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/achadinhos" className="text-white/70 hover:text-white">
        ← Voltar
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{item.titulo}</h1>
      <p className="mt-3 text-white/80">{item.descricao}</p>

      {item.imagemUrl && (
        <img
          src={item.imagemUrl}
          alt={item.titulo}
          className="mt-6 w-full rounded-3xl object-cover"
        />
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {item.preco && (
          <span className="rounded-full bg-white/10 px-4 py-2 font-semibold">
            {item.preco}
          </span>
        )}
        {item.tags?.map((t) => (
          <span key={t} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
            {t}
          </span>
        ))}
      </div>

      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-full justify-center rounded-2xl bg-emerald-400 px-6 py-4 text-lg font-black text-slate-900 hover:opacity-90"
      >
        Ver na Shopee
      </a>
    </main>
  );
}
