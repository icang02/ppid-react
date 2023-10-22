import { IoChevronForwardOutline } from "react-icons/io5";
import { Link, json, useLocation } from "react-router-dom";
import img from "../../assets/img/berita.jpg";
import CardNews from "../CardNews";
import CardInfoPublik from "../CardInfoPublik";

import regulasi from "../../assets/img/regulasi.jpg";
import sengketa from "../../assets/img/Penyelesaian Sengketa.jpg";
import permohonan from "../../assets/img/permohonan.jpg";
import keberatan from "../../assets/img/keberatan.jpg";

import config from "../../config";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Content = ({ breadcrumb }) => {
  let imgSamping = "";
  let currentPath = useLocation().pathname;

  if (currentPath == "/regulasi") {
    imgSamping = regulasi;
  } else if (currentPath.includes("permohonan")) {
    imgSamping = permohonan;
  } else if (currentPath.includes("keberatan")) {
    imgSamping = keberatan;
  } else if (currentPath.includes("sengketa")) {
    imgSamping = sengketa;
  }

  const checkPage =
    currentPath.includes("regulasi") ||
    currentPath.includes("permohonan") ||
    currentPath.includes("keberatan") ||
    currentPath.includes("sengketa");

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL + currentPath}`);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);

        // console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPath]);

  return (
    <div className="container mx-auto px-3 py-10 xl:max-w-5xl 2xl:max-w-6xl">
      <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
        <Link to="/">Beranda</Link> <IoChevronForwardOutline />
        {breadcrumb}
      </div>

      <hr className="mb-5 mt-1" />

      <div className="grid grid-cols-12 lg:gap-10">
        <div
          className={`${checkPage && "lg:order-2"} col-span-12 lg:col-span-7`}
        >
          <h2 className="mb-5 text-2xl font-extrabold leading-7 text-biru-uho">
            {loading ? (
              <>
                <Skeleton count={1} />
                <Skeleton count={1} className="w-2/3" />
              </>
            ) : (
              data.judul
            )}
          </h2>

          {/* INI STRUKTUR PPID */}
          {currentPath == "/struktur-ppid" ? (
            <div>
              {loading ? (
                <>
                  <Skeleton count={5} />
                  <Skeleton className="mt-4 aspect-video w-full" />
                </>
              ) : (
                <>
                  <div
                    className="isi text-sm text-other"
                    dangerouslySetInnerHTML={{ __html: data.isi }}
                  ></div>
                  <img src={img} className="mt-4 w-full" />
                </>
              )}
            </div>
          ) : // INI TENTANG PROFIL DAN LAIN LAIN
          loading ? (
            <Skeleton count={5} />
          ) : (
            <div
              className="isi text-sm text-other"
              dangerouslySetInnerHTML={{ __html: data.isi }}
            ></div>
          )}

          {/* INI KHUSUS UNTUK INFORMASI PUBLIK */}
          {(currentPath === "/informasi-publik/berkala" ||
            currentPath === "/informasi-publik/setiap-saat") && (
            <CardInfoPublik path={currentPath} />
          )}

          {/* INI KHUSUS UNTUK FORMULIR */}
          {currentPath.includes("formulir") ? (
            loading ? (
              <Skeleton className="mt-7 inline-block w-[124.66px] rounded px-4 py-3 text-xs text-white" />
            ) : (
              <div
                onClick={() => window.open(data.link, "_blank")}
                target="_blank"
                className="mt-7 inline-block cursor-pointer rounded bg-biru-uho px-4 py-3 text-xs text-white"
              >
                LINK FORMULIR
              </div>
            )
          ) : (
            ""
          )}
        </div>

        {/* INI GARIS */}
        <div className="col-span-12 lg:order-3">
          <hr className="mt-10 lg:mt-2" />
        </div>

        {/* INI CARD NEWS */}
        <div
          className={`${
            checkPage && "lg:order-1"
          } col-span-12 justify-end lg:order-2 lg:col-span-5 lg:flex`}
        >
          <div className="flex flex-col">
            {checkPage && (
              <div className="mb-8 hidden w-full lg:block">
                {loading ? (
                  <Skeleton className="aspect-[4/3] w-[393.33px] shadow 2xl:w-[446.48px]" />
                ) : (
                  <img
                    src={imgSamping}
                    alt="image"
                    className="aspect-[4/3] object-cover object-center shadow"
                  />
                )}
              </div>
            )}

            <div className="self-center">
              {!currentPath.includes("formulir") &&
                !currentPath.includes("regulasi") && <CardNews />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
