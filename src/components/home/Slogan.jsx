import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import config from "src//config";
import calculatorBg from "src//assets/images/calculator-bg.jpg";

const Slogan = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/landing/slogan`);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${calculatorBg})` }}
      className="bg-cover bg-center"
    >
      <div className="container mx-auto px-3 py-20 xl:max-w-5xl 2xl:max-w-6xl">
        <p className="px-3 text-center text-sm leading-loose text-white lg:text-base lg:leading-8">
          {loading ? <Skeleton count={3} /> : data.isi}
        </p>
        <p className="mx-auto mt-7 text-center text-xs text-white lg:text-sm">
          {loading ? <Skeleton count className="w-32" /> : data.judul}
        </p>
      </div>
    </section>
  );
};

export default Slogan;
