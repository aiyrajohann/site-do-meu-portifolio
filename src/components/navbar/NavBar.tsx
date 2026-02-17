import { NavLink } from "react-router-dom";
import { House, ShoppingBag, Notebook } from "@phosphor-icons/react";

export function NavBar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition
     ${isActive ? "bg-white/15 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
            <span className="font-black">A</span>
          </div>
          <div className="leading-tight">
            <p className="font-bold tracking-tight">Aiyra Johann</p>
            <p className="text-xs text-white/60">Casa, rotina e achadinhos</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            <span className="inline-flex items-center gap-2">
              <House size={18} /> Home
            </span>
          </NavLink>

          <NavLink to="/achadinhos" className={linkClass}>
            <span className="inline-flex items-center gap-2">
              <ShoppingBag size={18} /> Achadinhos
            </span>
          </NavLink>

          <NavLink to="/midia-kit" className={linkClass}>
            <span className="inline-flex items-center gap-2">
              <Notebook size={18} /> Mídia Kit
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
