import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { AchadinhosShopee } from "../pages/achadinhos/AchadinhosShopee";
import { AchadinhoDetalhe } from "../pages/achadinhos/AchadinhoDetalhe";
import { MidiaKit } from "../pages/midiakit/MidiaKit";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/achadinhos" element={<AchadinhosShopee />} />
      <Route path="/achadinhos/:id" element={<AchadinhoDetalhe />} />
      <Route path="/midia-kit" element={<MidiaKit />} />
    </Routes>
  );
}
