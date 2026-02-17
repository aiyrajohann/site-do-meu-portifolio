import { useEffect, useMemo, useState } from "react";
import { midiaKit } from "../../data/midiaKit";

type IgMetrics = {
  username: string;
  followers: number;
  mediaCount: number;
  updatedAt: string;
};

export function MidiaKit() {
  const [ig, setIg] = useState<IgMetrics | null>(null);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const r = await fetch("/api/instagram");
        if (!r.ok) return;
        const data = (await r.json()) as IgMetrics;
        if (alive) setIg(data);
      } catch {
        // fallback: fica com os valores do midiaKit.ts
      }
    }

    load();
    const id = setInterval(load, 5 * 60 * 1000); // 5 min
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const metricasRender = useMemo(() => {
    return midiaKit.metricas.map((m) => {
      if (m.label === "Seguidores Instagram" && ig?.followers != null) {
        return { ...m, value: ig.followers.toLocaleString("pt-BR") };
      }
      if (m.label === "Posts Instagram" && ig?.mediaCount != null) {
        return { ...m, value: ig.mediaCount.toLocaleString("pt-BR") };
      }
      return m;
    });
  }, [ig]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Mídia Kit</h1>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-slate-900 p-7 lg:col-span-2">
          <h2 className="text-2xl font-bold">{midiaKit.nome}</h2>
          <p className="mt-2 text-white/70">{midiaKit.nicho}</p>

          <p className="mt-5 text-white/80">{midiaKit.bio}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              {midiaKit.contatos.instagram}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              {midiaKit.contatos.tiktok}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              {midiaKit.contatos.email}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Formatos de parceria</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
              {midiaKit.parcerias.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {midiaKit.mediaKitPdfUrl && (
            <a
              href={midiaKit.mediaKitPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-black text-slate-900 hover:opacity-90"
            >
              Baixar Mídia Kit (PDF)
            </a>
          )}
        </div>

        <aside className="rounded-3xl bg-slate-900 p-7">
          <h3 className="text-lg font-semibold">Métricas</h3>
          <div className="mt-4 space-y-3">
            {metricasRender.map((m) => (
              <div key={m.label} className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">{m.label}</p>
                <p className="mt-1 text-xl font-black">{m.value}</p>
              </div>
            ))}
          </div>

          {ig?.updatedAt && (
            <p className="mt-4 text-xs text-white/40">
              Atualizado em {new Date(ig.updatedAt).toLocaleString("pt-BR")}
            </p>
          )}
        </aside>
      </section>
    </main>
  );
}
