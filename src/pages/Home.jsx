import Hero from "../components/home/Hero";
import JenisInformasi from "../components/home/JenisInformasi";
import Tatacara from "../components/home/Tatacara";
import FormulirUtama from "../components/home/FormulirUtama";
import Slogan from "../components/home/Slogan";
import BeritaUtama from "../components/home/BeritaUtama";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <JenisInformasi />
      <Tatacara />
      <FormulirUtama />
      <Slogan />
      <BeritaUtama />
    </Layout>
  );
};

export default Home;
