import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import Hero from "../components/formulir/Hero";

import bgHero from "../assets/img/rektorat2.png";
import gambar from "../assets/img/berita.jpg";
import { Link, useLocation } from "react-router-dom";
import { IoChevronForwardOutline, IoSearch } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";

export default function LaporanImg() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentPath = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    // setLoading(true);
    // async function fetchData() {
    //   try {
    //     const response = await fetch(`${config.API_URL + currentPath}`);
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
    // fetchData();
  }, []);

  const data1 = {
    bgHero,
    titleMenu: "Laporan Akses Informasi Publik",
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
    <>
      <Navbar />
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
              Laporan Akses Informasi Publik
            </h2>

            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8 lg:gap-12">
              {Array(1)
                .fill(0)
                .map((item, i) => (
                  <img src={gambar} alt="image" />
                ))}
              {/* <Skeleton className="aspect-video w-[320px] lg:w-[768px]" /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
      <Footer2 />
    </>
  );
}
