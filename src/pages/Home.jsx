import { Navbar } from "../components/Navbar";
import Hero from "../components/home/Hero";
import JenisInformasi from "../components/home/JenisInformasi";
import Tatacara from "../components/home/Tatacara";
import FormulirUtama from "../components/home/FormulirUtama";
import Slogan from "../components/home/Slogan";
import BeritaUtama from "../components/home/BeritaUtama";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <JenisInformasi />
      <Tatacara />
      <FormulirUtama />
      <Slogan />
      <BeritaUtama />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Home;
