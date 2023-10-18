import { Navbar } from "../components/Navbar";
import Hero from "../components/formulir/Hero";
import Content from "../components/formulir/Content";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import { useEffect } from "react";

import bgHero from "../assets/img/audit.png";
import { useLocation } from "react-router-dom";

const Formulir = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    bgHero,
    titleMenu: "Permohonan Informasi Publik",
    title: "Permohonan Informasi Publik",
    content:
      "<p>Formulir permohonan informasi publik adalah dokumen yang digunakan oleh individu untuk meminta informasi publik dari lembaga pendidikan tinggi atau universitas. Formulir ini memungkinkan pihak yang berkepentingan untuk mengajukan permohonan secara resmi untuk mendapatkan akses ke informasi yang dimiliki oleh institusi. Formulir permohonan informasi publik pada PPID kampus penting untuk memastikan transparansi dan akses terhadap informasi yang dimiliki oleh institusi pendidikan tinggi, sesuai dengan peraturan dan undang-undang yang berlaku.</p>",
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
