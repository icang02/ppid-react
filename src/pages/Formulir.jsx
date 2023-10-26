import { Link, useLocation } from "react-router-dom";

import Layout from "src/components/Layout/Layout";
import Hero from "src/components/formulir/Hero";
import Content from "src/components/formulir/Content";

import bgHero from "src/assets/img/audit.png";

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
    <Layout>
      <Hero data={data} />
      <Content breadcrumb={breadcrumb} />
    </Layout>
  );
};

export default Formulir;
