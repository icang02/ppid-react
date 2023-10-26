import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import config from "../config";

import bgHero from "../assets/img/rektorat2.png";
import Skeleton from "react-loading-skeleton";
import Layout from "../components/Layout/Layout";

import { IoChevronForwardOutline, IoSearch } from "react-icons/io5";

import Hero from "../components/formulir/Hero";

export default function Laporan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentPath = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL + currentPath}`);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const data1 = {
    bgHero,
    titleMenu: "Laporan Layanan Informasi Publik",
    path: currentPath,
  };

  const breadcrumb = (
    <>
      <Link
        to={currentPath}
        className="text-acsent"
        onClick={() => window.scrollTo(0, 0)}
      >
        Laporan Layanan Informasi Publik
      </Link>
    </>
  );

  return (
    <Layout>
      <Hero data={data1} />

      <div className="container mx-auto px-3 py-20 pt-10 xl:max-w-5xl 2xl:max-w-6xl">
        <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
          <Link to="/">Beranda</Link> <IoChevronForwardOutline />
          {breadcrumb}
        </div>

        <hr className="mb-5 mt-1" />

        <div className="grid grid-cols-1 gap-7">
          <div className="col-span-1">
            <h2 className="mb-12 text-center text-2xl font-extrabold leading-7 text-biru-uho">
              Laporan layanan Informasi Publik
            </h2>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8 gap-y-12 lg:gap-x-16">
              {loading ? (
                Array(3)
                  .fill(0)
                  .map((item, i) => (
                    <div className="group cursor-pointer" key={i}>
                      <div className="relative overflow-hidden border-4 border-white shadow-lg">
                        <Skeleton
                          className="h-[244.5px] w-52 lg:w-44"
                          alt="image"
                        />
                      </div>

                      <Skeleton className="border-x-4 border-b-4 border-white px-3 py-1 text-center text-sm text-white shadow-lg" />
                    </div>
                  ))
              ) : data.length != 0 ? (
                data.map((item, i) => (
                  <div
                    onClick={() => window.open(item.link, "_blank")}
                    className="group cursor-pointer"
                    key={i}
                  >
                    <div className="relative overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={`${config.APP_URL}/${item.gambar}`}
                        className="w-52 transition-all duration-300 group-hover:brightness-50 lg:w-44"
                        alt="image"
                      />

                      <div className="absolute -bottom-5 left-[50%] translate-x-[-50%] translate-y-[50%] text-2xl text-white transition-all duration-500 group-hover:bottom-[50%]">
                        <IoSearch />
                      </div>
                    </div>

                    <div className="border-x-4 border-b-4 border-white bg-biru-uho px-3 py-1 text-center text-sm text-white shadow-lg">
                      Laporan {item.tahun}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-gray-500 lg:text-base">
                  Belum ada data.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
