import { useEffect, useState } from "react";

import Hero from "../components/formulir/Hero";

import bgHero from "../assets/img/rektorat2.png";
import { Link, useLocation } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import Layout from "../components/Layout/Layout";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import config from "../config";

export default function LaporanImg() {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tahun, setTahun] = useState(new Date().getFullYear());

  const currentPath = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          `${config.API_URL + currentPath}/${tahun}`,
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);

        console.log(jsonData.laporan.data_gambar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [tahun]);

  const data1 = {
    bgHero,
    titleMenu: `Laporan Akses Informasi Publik`,
    path: currentPath,
  };

  const breadcrumb = (
    <>
      <Link
        to={currentPath}
        className="text-acsent"
        onClick={() => window.scrollTo(0, 0)}
      >
        Laporan Akses Informasi Publik
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
            <h2 className="mx-auto mb-12 max-w-md text-center text-2xl font-extrabold leading-7 text-biru-uho">
              Laporan Akses Informasi Publik Tahun {tahun}
            </h2>

            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8 lg:gap-12">
              {loading
                ? "Belum ada data gambar."
                : data.laporan.data_gambar != 0
                ? data.laporan.data_gambar.map((item, i) => (
                    <img
                      key={i}
                      src={`${config.APP_URL}/${item.gambar}`}
                      alt="image"
                      className="cursor-pointer transition duration-500 hover:scale-[1.01]"
                      data-fancybox
                    />
                  ))
                : ""}
            </div>

            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2 lg:gap-3">
              {!loading &&
                data.list_tahun.map((item, i) => (
                  <button
                    onClick={() => setTahun(item.tahun)}
                    key={i}
                    className="cursor-pointer rounded border border-gray-200 bg-biru-uho px-6 py-3.5 text-center text-gray-200 shadow transition duration-500 hover:text-white"
                  >
                    <h5 className="text-sm font-bold tracking-tight lg:text-base">
                      Laporan Tahun {item.tahun}
                    </h5>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
