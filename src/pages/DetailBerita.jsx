import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";

import config from "src/config";
import api from "src/api";

import Hero from "src/components/formulir/Hero";
import CardNews from "src/components/CardNews";
import Skeleton from "react-loading-skeleton";
import Layout from "src/components/Layout/Layout";

import bgHero from "src/assets/img/detail-berita.jpg";

import {
  IoChevronForwardOutline,
  IoPersonSharp,
  IoTodaySharp,
} from "react-icons/io5";

const DetailBerita = () => {
  Fancybox.bind("[data-fancybox]", {});

  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentPath = useLocation();
  const navigate = useNavigate();
  let { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    async function fetchData() {
      const response = await fetch(api.getDetailNews(slug));
      const jsonData = await response.json();

      setBerita(jsonData);
      setLoading(false);

      if (jsonData.length == 0) {
        navigate("*");
      }
    }

    fetchData();
  }, [currentPath]);

  const data = {
    bgHero,
    titleMenu:
      berita.kategori == "informasi serta merta"
        ? "Detail Informasi Serta Merta"
        : "Detail Berita & Informasi",
    title: "Detail",
  };

  const breadcrumb = (
    <>
      {berita.kategori == "informasi serta merta" ? (
        <Link to="/informasi-publik/serta-merta">Informasi Serta Merta</Link>
      ) : (
        <Link to="/berita/page/1">Berita & Informasi</Link>
      )}

      <IoChevronForwardOutline />
      <Link to="/formulir" className="text-acsent">
        Detail
      </Link>
    </>
  );

  return (
    <Layout>
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
              <Skeleton className="aspect-video w-full lg:w-[548.01px]" />
            ) : (
              <img
                data-fancybox
                src={`${config.APP_URL}/${berita.gambar ?? "img/berita.jpg"}`}
                alt="image"
                className="w-full cursor-pointer transition duration-500 hover:scale-[1.01]"
              />
            )}

            {/* INI CARD NEWS */}
            <div className="mt-8 hidden  justify-start lg:flex">
              {currentPath != "/formulir" && <CardNews />}
            </div>
          </div>

          <div className="order-2 col-span-12 px-0.5 lg:order-1 lg:col-span-6 lg:px-0">
            <h5 className="text-xl font-bold leading-7">
              {loading ? <Skeleton count={2} /> : berita.judul}
            </h5>
            <div className="mt-2.5 flex items-center gap-5 text-xs text-[#6C757D]">
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

            <hr className="my-4" />

            {loading ? (
              <div className="text sm">
                <Skeleton count={5} className="h-3" />
              </div>
            ) : (
              <div
                className="isi text-sm leading-6 text-other"
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
    </Layout>
  );
};

export default DetailBerita;
