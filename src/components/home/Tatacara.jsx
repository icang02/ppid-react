import calculatorBg from "../../assets/images/calculator-bg.jpg";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import config from "../../config";

const Tatacara = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/landing/tata-cara`);
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
      className="overflow-x-hidden bg-cover bg-center"
    >
      <div className="container mx-auto px-3 py-24 xl:max-w-7xl">
        <h2 className="text-center text-2xl font-bold text-white lg:text-3xl">
          Tata Cara <span className="text-acsent">Permohonan</span>
        </h2>

        <div className="mt-12 grid grid-cols-12 justify-center gap-10 lg:mt-16 lg:px-10">
          {loading
            ? Array(4)
                .fill(0)
                .map((item, i) => (
                  <div
                    className="col-span-12 px-16 lg:col-span-3 lg:px-0"
                    key={i}
                  >
                    <Skeleton className="aspect-square border-[5px] border-white" />
                    <h6 className="mt-5 text-center text-sm font-bold text-white lg:text-base">
                      <Skeleton count={2} />
                    </h6>
                  </div>
                ))
            : data.map((item, i) => (
                <div
                  className="col-span-12 px-16 lg:col-span-3 lg:px-0"
                  key={i}
                >
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.gambar}`}
                    alt="image"
                    className="w-full cursor-pointer border-[5px] border-white duration-300 hover:brightness-50"
                  />
                  <h6 className="mt-5 text-center text-sm font-bold text-white lg:text-base">
                    {item.judul}
                  </h6>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Tatacara;
