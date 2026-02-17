import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
