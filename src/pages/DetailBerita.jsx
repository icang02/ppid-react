import { format } from "date-fns";
import idLocale from "date-fns/locale/id";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import bgHero from "../assets/img/detail-berita.jpg";
import Hero from "../components/formulir/Hero";

import config from "../config";

import {
  IoChevronForwardOutline,
  IoPersonSharp,
  IoTodaySharp,
} from "react-icons/io5";
import CardNews from "../components/CardNews";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const DetailBerita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentPath = useLocation();
  const navigate = useNavigate();
  let { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/berita/${slug}`);
        const jsonData = await response.json();

        setBerita(jsonData);
        setLoading(false);

        if (jsonData.length == 0) {
          navigate("*");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPath]);

  const data = {
    bgHero,
    titleMenu:
      berita.kategori == "berita"
        ? "Detail Berita & Informasi"
        : "Detail Informasi Serta Merta",
    title: "Detail",
  };

  const breadcrumb = (
    <>
      {berita.kategori == "berita" ? (
        <Link to="/berita">Berita & Informasi</Link>
      ) : (
        <Link to="/informasi-publik/serta-merta">Informasi Serta Merta</Link>
      )}

      <IoChevronForwardOutline />
      <Link to="/formulir" className="text-acsent">
        Detail
      </Link>
    </>
  );

  return (
    <>
      <Navbar />
      <Hero data={data} />

      <div className="container mx-auto px-3 py-10 xl:max-w-5xl 2xl:max-w-6xl">
        <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
          <Link to="/">Beranda</Link> <IoChevronForwardOutline />
          {breadcrumb}
        </div>

        <hr className="mb-5 mt-1" />

        <div className="grid grid-cols-12 justify-end gap-0 lg:gap-8">
          <div className="order-1 col-span-12 mb-5 lg:order-2 lg:col-span-6">
            {loading ? (
              <Skeleton className="aspect-video w-[548.01px]" />
            ) : (
              <img
                src={`${config.APP_URL}/${berita.gambar ?? "img/berita.jpg"}`}
                alt="image"
                className="w-full"
              />
            )}

            {/* INI CARD NEWS */}
            <div className="mt-8 hidden  justify-start lg:flex">
              {currentPath != "/formulir" && <CardNews />}
            </div>
          </div>

          <div className="order-2 col-span-12 lg:order-1 lg:col-span-6">
            <h5 className="text-xl font-bold leading-6">
              {loading ? <Skeleton count={2} /> : berita.judul}
            </h5>
            <div className="mb-5 mt-2.5 flex items-center gap-5 text-xs text-[#6C757D]">
              {loading ? (
                <Skeleton className="w-40" />
              ) : (
                <>
                  <span className="flex items-center gap-1.5">
                    <IoTodaySharp />{" "}
                    {format(new Date(berita.tanggal), "dd MMMM yyyy", {
                      locale: idLocale,
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IoPersonSharp /> Oleh : {berita.penulis}
                  </span>
                </>
              )}
            </div>

            {loading ? (
              <div className="text sm">
                <Skeleton count={5} className="h-3" />
              </div>
            ) : (
              <div
                className="isi text-sm text-other"
                dangerouslySetInnerHTML={{ __html: berita.isi }}
              ></div>
            )}
          </div>

          {/* INI GARIS */}
          <div className="col-span-12 hidden lg:order-4 lg:block">
            <hr className="lg:mt-0" />
          </div>
        </div>

        {/* INI CARD NEWS */}
        <div className="mt-8 block lg:hidden">
          <hr />
          {data.path != "/formulir" && <CardNews />}
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default DetailBerita;
