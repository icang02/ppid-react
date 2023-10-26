import Hero from "src/components/home/Hero";
import JenisInformasi from "src/components/home/JenisInformasi";
import Tatacara from "src/components/home/Tatacara";
import FormulirUtama from "src/components/home/FormulirUtama";
import Slogan from "src/components/home/Slogan";
import BeritaUtama from "src/components/home/BeritaUtama";
import Layout from "src/components/Layout/Layout";

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
