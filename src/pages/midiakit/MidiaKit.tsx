import { midiaKit } from "../../data/midiaKit";

export function MidiaKit() {
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
            {midiaKit.metricas.map((m) => (
              <div key={m.label} className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">{m.label}</p>
                <p className="mt-1 text-xl font-black">{m.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
