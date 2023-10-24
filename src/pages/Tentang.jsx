import Hero from "../components/formulir/Hero";

import bgHero from "../assets/img/rektorat2.png";
import tuguImg from "../assets/img/tugu.png";
import regulasiBg from "../assets/img/bg-regulasi.png";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Content from "../components/formulir/Content";

const Formulir = () => {
  const currentPath = useLocation().pathname;

  let data = {};
  if (currentPath === "/profil") {
    data = {
      bgHero,
      titleMenu: "Profil",
    };
  } else if (currentPath === "/visi-misi") {
    data = {
      bgHero,
      titleMenu: "Visi & Misi",
    };
  } else if (currentPath === "/tugas-fungsi") {
    data = {
      bgHero,
      titleMenu: "Tugas & Fungsi",
    };
  } else if (currentPath === "/struktur-ppid") {
    data = {
      bgHero,
      titleMenu: "Struktur PPID",
    };
  } else if (currentPath === "/informasi-publik/berkala") {
    data = {
      bgHero: tuguImg,
      titleMenu: "Informasi Berkala",
    };
  } else if (currentPath === "/informasi-publik/setiap-saat") {
    data = {
      bgHero: tuguImg,
      titleMenu: "Informasi Tersedia Setiap Saat",
    };
  } else if (currentPath === "/informasi-publik/dikecualikan") {
    data = {
      bgHero: tuguImg,
      titleMenu: "Informasi Yang Dikecualikan",
    };
  } else if (currentPath === "/regulasi") {
    data = {
      bgHero: regulasiBg,
      titleMenu: "Regulasi",
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
