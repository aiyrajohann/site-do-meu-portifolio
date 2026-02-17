export function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70">
        <p className="font-semibold text-white/90">© {new Date().getFullYear()} Aiyra Johann</p>
        <p className="mt-1">Conteúdo público. Você navega. Eu atualizo.</p>
      </div>
    </footer>
  );
}
