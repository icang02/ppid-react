import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Formulir from "./pages/Formulir";
import Tentang from "./pages/Tentang";
import { Helmet } from "react-helmet";
import logo from "./assets/img/favicon.ico";
import NotFound from "./pages/NotFound";
import DetailBerita from "./pages/DetailBerita";
import Berita from "./pages/Berita";

function App() {
  const handleAdminRedirect = () => {
    window.location.href = "http://ppid.uho.ac.id/admin";
    return null;
  };

  return (
    <div className="font-poppins">
      <Helmet>
        <title>PPID UHO</title>
        <link rel="icon" type="image/x-icon" href={logo} />
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profil" element={<Tentang />} />
          <Route path="/visi-misi" element={<Tentang />} />
          <Route path="/tugas-fungsi" element={<Tentang />} />
          <Route path="/struktur-ppid" element={<Tentang />} />
          <Route path="/regulasi" element={<Tentang />} />

          <Route path="/informasi-publik/berkala" element={<Tentang />} />
          <Route path="/informasi-publik/setiap-saat" element={<Tentang />} />
          <Route path="/informasi-publik/serta-merta" element={<Berita />} />
          <Route path="/informasi-publik/dikecualikan" element={<Tentang />} />

          <Route
            path="/formulir/permohonan-informasi-publik"
            element={<Formulir />}
          />
          <Route
            path="/formulir/keberatan-layanan-informasi-publik"
            element={<Formulir />}
          />
          <Route
            path="/formulir/penyelesaian-sengketa-informasi-publik"
            element={<Formulir />}
          />

          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<DetailBerita />} />

          {/* Handle untuk halaman admin */}
          {/* http://ppid.uho.ac.id/admin */}
          <Route path="/admin" element={handleAdminRedirect} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
