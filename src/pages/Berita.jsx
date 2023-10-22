import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import Hero from "../components/formulir/Hero";

import config from "../config";

import bgHero from "../assets/img/detail-berita.jpg";

import { IoChevronForwardOutline, IoTodaySharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";

const Berita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const isInfoPublik = currentPath.includes("informasi-publik/serta-merta");

  console.log(isInfoPublik);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL + currentPath}`);
        const jsonData = await response.json();

        setBerita(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPath]);

  const data = {
    bgHero,
    titleMenu: isInfoPublik ? "Informasi Serta Merta" : "Berita & Informasi",
    path: currentPath,
  };
  const breadcrumb = (
    <>
      <Link
        to={currentPath}
        className="text-acsent"
        onClick={() => window.scrollTo(0, 0)}
      >
        {isInfoPublik ? "Informasi Serta Merta" : "Berita & Informasi"}
      </Link>
    </>
  );

  function sanitizeHtml(html) {
    const config = {
      ALLOWED_TAGS: [""],
    };

    return DOMPurify.sanitize(html, config);
  }

  function limitText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <>
      <Navbar />
      <Hero data={data} />

      <div className="container mx-auto px-3 py-20 pt-10 xl:max-w-6xl">
        <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
          <Link to="/">Beranda</Link> <IoChevronForwardOutline />
          {breadcrumb}
        </div>

        <hr className="mb-5 mt-1" />

        <div className="grid grid-cols-1 gap-7">
          {loading
            ? Array(6)
                .fill(0)
                .map((item, i) => (
                  <div className="pointer-events-none col-span-1" key={i}>
                    <div className="grid grid-cols-12 rounded-lg shadow-lg">
                      <div className="col-span-12 border lg:col-span-4">
                        <div className="block overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                          <Skeleton className="aspect-[16/10] object-cover object-center transition-all duration-500 lg:aspect-[4/3]" />
                        </div>
                      </div>

                      <div className="col-span-12 border lg:col-span-8 lg:flex lg:items-center lg:rounded-tr-lg lg:px-12">
                        <div className="mt-5 px-5 pb-5 lg:m-0 lg:w-full lg:p-0">
                          <div className="block font-bold leading-5 hover:underline lg:text-xl">
                            <Skeleton count={2} />
                          </div>
                          <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D] lg:text-sm">
                            <Skeleton className="w-24" />
                          </div>
                          <p className="mt-3 text-sm text-other lg:mt-5 lg:text-base">
                            <Skeleton count={2} />
                          </p>
                          <div className="taxt-base mt-5 hidden italic text-blue-500 lg:block">
                            <Skeleton className="w-28" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            : berita.map((item, i) => (
                <div className="col-span-1" key={i}>
                  <div className="grid grid-cols-12 rounded-lg shadow-lg">
                    <div className="col-span-12 border lg:col-span-4">
                      <div className="block cursor-pointer overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                        <img
                          onClick={() => navigate(`/berita/${item.slug}`)}
                          src={`${config.APP_URL}/${
                            item.gambar ?? "img/berita.jpg"
                          }`}
                          alt="image"
                          className="aspect-[16/10] object-cover object-center transition-all duration-500 hover:scale-110 hover:brightness-[.65] lg:aspect-[4/3]"
                        />
                      </div>
                    </div>

                    <div className="col-span-12 border lg:col-span-8 lg:flex lg:items-center lg:rounded-tr-lg lg:px-12">
                      <div className="mt-5 px-5 pb-5 lg:m-0 lg:w-full lg:p-0">
                        <div
                          onClick={() => navigate(`/berita/${item.slug}`)}
                          className="block cursor-pointer font-bold leading-5 hover:underline lg:text-xl"
                        >
                          {limitText(item.judul, 100)}
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D] lg:text-sm">
                          <IoTodaySharp /> 2023-09-22
                        </div>
                        <p className="mt-3 text-sm text-other lg:mt-5 lg:text-base">
                          {limitText(sanitizeHtml(item.isi), 100)}
                        </p>
                        <div
                          onClick={() => navigate(`/berita/${item.slug}`)}
                          className="taxt-base mt-5 hidden cursor-pointer italic text-blue-500 lg:block"
                        >
                          Selengkapnya..
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Berita;
