import { Link } from "react-router-dom";
import { InstagramLogo, TiktokLogo, EnvelopeSimple } from "@phosphor-icons/react";

export function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="mx-auto max-w-xl text-center">
        <div className="mx-auto h-24 w-24 rounded-full bg-white/10 grid place-items-center">
          <span className="text-3xl font-black">A</span>
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight">Aiyra Johann</h1>
        <p className="mt-3 text-white/75">
          Casa, rotina real, limpeza e organização. Achadinhos úteis e mídia kit para parcerias.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/achadinhos"
            className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-900 hover:opacity-90"
          >
            ✨ Ver Achadinhos Shopee
          </Link>

          <Link
            to="/midia-kit"
            className="rounded-2xl bg-white/10 px-6 py-4 font-bold text-white hover:bg-white/15"
          >
            📊 Ver Mídia Kit
          </Link>

        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <InstagramLogo size={18} /> Instagram
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <TiktokLogo size={18} /> TikTok
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <EnvelopeSimple size={18} /> Contato
          </span>
        </div>
      </section>
    </main>
  );
}
