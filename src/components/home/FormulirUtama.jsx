import { Link } from "react-router-dom";
import formulirHome from "../../assets/img/formulir-home.jpg";
import { IoArrowRedo } from "react-icons/io5";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import config from "../../config";

const Formulir = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/landing/formulir`);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const formulir = [
    {
      judul: "Formulir Permohonan Informasi Publik",
      path: "/formulir/permohonan-informasi-publik",
    },
    {
      judul: "Formulir Keberatan Atas Layanan Informasi Publik",
      path: "/formulir/keberatan-layanan-informasi-publik",
    },
    {
      judul: "Formulir Penyelesaian Sengketa Informasi Publik",
      path: "/formulir/penyelesaian-sengketa-informasi-publik",
    },
  ];

  return (
    <section>
      <div className="container mx-auto overflow-x-hidden px-3 py-32 xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-8 ">
          {loading ? (
            <div className="h-full w-full self-start lg:w-1/2">
              <Skeleton className="aspect-[4/3] rounded border" />
            </div>
          ) : (
            <div className="w-full self-start lg:w-1/2">
              <img src={formulirHome} className="rounded border" />
            </div>
          )}

          <div className="w-full flex-1 items-center self-start border lg:col-span-6 lg:rounded-lg lg:px-10 lg:py-12 lg:shadow-lg">
            <div className="px-5 py-6 lg:px-5 lg:py-6">
              <h5 className="mb-6 text-xl font-bold text-acsent lg:mb-7 lg:text-2xl">
                {loading ? <Skeleton /> : data.judul}
              </h5>

              <p className="text-sm text-other lg:text-base">
                {loading ? <Skeleton count={3} /> : data.isi}
              </p>

              {loading ? (
                <div className="mt-5 flex flex-col gap-1 lg:mt-10">
                  <Skeleton className="group relative px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm" />
                  <Skeleton className="group relative px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm" />
                  <Skeleton className="group relative px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm" />
                </div>
              ) : (
                <div className="mt-5 flex flex-col gap-1 lg:mt-10">
                  {formulir.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      className="group relative bg-biru-uho px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm"
                    >
                      <span className="inline-block w-[90%] opacity-90 group-hover:opacity-100">
                        {item.judul}
                      </span>
                      <span className="absolute right-5 top-[50%] translate-y-[-50%] opacity-80 transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                        <IoArrowRedo />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulir;
