import { Navbar } from "../components/Navbar";
import Hero from "../components/formulir/Hero";
import Content from "../components/formulir/Content";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import { useEffect } from "react";

import bgHero from "../assets/img/rektorat2.png";
import { useLocation } from "react-router-dom";

const Formulir = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    bgHero,
    titleMenu: "Profil",
    title: "Profil Pejabat Pengelola Informasi dan Dokumentasi (PPID)",
    content:
      "<p>PPID adalah kepanjangan dari Pejabat Pengelola Informasi dan Dokumentasi, yang berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh Badan Publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik. Dengan keberadaan PPID maka masyarakat yang akan menyampaikan permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.</p><p>Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan dan/ atau pelayanan informasi di badan publik.</p>",
    link: useLocation().pathname,
  };

  return (
    <>
      <Navbar />
      <Hero data={data} />
      <Content data={data} />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Formulir;
