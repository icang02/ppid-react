import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Formulir from "./pages/Formulir";
import Tentang from "./pages/Tentang";
import { Helmet } from "react-helmet";
import logo from "./assets/img/favicon.ico";

function App() {
  return (
    <div className="font-poppins">
      <Helmet>
        <title>PPID UHO</title>
        <link rel="icon" type="image/x-icon" href={logo} />
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulir" element={<Formulir />} />
          <Route path="/profil" element={<Tentang />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
