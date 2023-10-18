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
      "<p>Formulir permohonan informasi publik adalah dokumen yang digunakan oleh individu untuk meminta informasi publik dari lembaga pendidikan tinggi atau universitas. Formulir ini memungkinkan pihak yang berkepentingan untuk mengajukan permohonan secara resmi untuk mendapatkan akses ke informasi yang dimiliki oleh institusi. Formulir permohonan informasi publik pada PPID kampus penting untuk memastikan transparansi dan akses terhadap informasi yang dimiliki oleh institusi pendidikan tinggi, sesuai dengan peraturan dan undang-undang yang berlaku.</p><h6>Persyaratan Pelayanan</h6><ul><li>Masyarakat.</li><li>Fotokopi KTP Pemohon atau fotokopi pendirian akte lembaga publik/ormas bagi pemohon atas nama.</li></ul><h6>Sistem Mekanisme dan Prosedur</h6><ol><li>Pemohon datang ke meja layanan informasi, PPID UHO (Bagian Humas dan Protokol UHO) atau mengunjungi laman informasi publik.</li><li>Pemohon mengisi formulir permohonan informasi publik secara langsung atau daring dengan melampirkan KTP/akta pendirian badan publik.</li></ol><h6>Biaya Tarif</h6><p>Biaya administrasi pelayanan gratis, kecuali biaya pengganti penggandaan apabila informasi diberikan dalam versi cetak (apabila diperlukan versi cetak).</p>",
    path: useLocation().pathname,
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
