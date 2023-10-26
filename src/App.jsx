import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Formulir from "./pages/Formulir";
import Tentang from "./pages/Tentang";
import { Helmet } from "react-helmet";
import logo from "./assets/img/favicon.ico";
import NotFound from "./pages/NotFound";
import DetailBerita from "./pages/DetailBerita";
import Berita from "./pages/Berita";
import Blank from "./pages/Blank";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Laporan from "./pages/Laporan";
import LaporanImg from "./pages/LaporanImg";

import "aos/dist/aos.css";

function App() {
  return (
    <div className="font-poppins">
      <Helmet>
        <title>PPID Universitas Halu Oleo</title>
        <link rel="icon" type="image/x-icon" href={logo} />
      </Helmet>

      <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
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
            <Route
              path="/informasi-publik/dikecualikan"
              element={<Tentang />}
            />

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

            <Route path="/berita/page/:page" element={<Berita />} />
            <Route path="/berita/search/:page/:keyword" element={<Berita />} />
            <Route path="/berita/:slug" element={<DetailBerita />} />

            <Route
              path="/laporan/akses-informasi-publik"
              element={<LaporanImg />}
            />
            <Route
              path="/laporan/layanan-informasi-publik"
              element={<Laporan />}
            />

            {/* Handle untuk halaman admin */}
            <Route path="/admin" element={<Blank />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
