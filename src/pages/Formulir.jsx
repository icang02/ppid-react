import { Navbar } from "../components/Navbar";
import Hero from "../components/formulir/Hero";
import Content from "../components/formulir/Content";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";

import bgHero from "../assets/img/audit.png";
import { Link, useLocation } from "react-router-dom";

const Formulir = () => {
  const currentPath = useLocation().pathname;
  let data = {};
  if (currentPath == "/formulir/permohonan-informasi-publik") {
    data = {
      bgHero,
      titleMenu: "Permohonan Informasi Publik",
    };
  } else if (currentPath == "/formulir/keberatan-layanan-informasi-publik") {
    data = {
      bgHero,
      titleMenu: "Keberatan Layanan Informasi Publik",
    };
  } else if (
    currentPath == "/formulir/penyelesaian-sengketa-informasi-publik"
  ) {
    data = {
      bgHero,
      titleMenu: "Penyelesaian Sengketa Informasi Publik",
    };
  }
  const breadcrumb = (
    <>
      <Link
        to={currentPath}
        className="text-acsent"
        onClick={() => window.scrollTo(0, 0)}
      >
        {data.titleMenu}
      </Link>
    </>
  );

  return (
    <>
      <Navbar />
      <Hero data={data} />
      <Content breadcrumb={breadcrumb} />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Formulir;
