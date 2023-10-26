import { useLocation } from "react-router-dom";
import CardNews from "../CardNews";
import CardInfoPublik from "../CardInfoPublik";

import sengketa from "../../assets/img/regulasi.jpg";
import regulasi from "../../assets/img/regulasi-baru.jpg";
import permohonan from "../../assets/img/permohonan.jpg";
import keberatan from "../../assets/img/keberatan.jpg";

import Breadcrumb from "./Breadcrumb";

import config from "../../config";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Content = ({ breadcrumb }) => {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

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
      <Breadcrumb data={breadcrumb} />

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
                  <Skeleton className="mb-4 aspect-video w-full" />
                  <Skeleton count={5} />
                </>
              ) : (
                <>
                  <img
                    data-fancybox
                    src={`${config.APP_URL}/${data.gambar ?? "img/berita.jpg"}`}
                    className="mb-7 w-full cursor-pointer transition duration-500 hover:scale-[1.01]"
                  />
                  <div
                    className={`${
                      currentPath == "/struktur-ppid"
                        ? "isi-regulasi leading-6"
                        : ""
                    } isi text-sm text-other`}
                    dangerouslySetInnerHTML={{ __html: data.isi }}
                  ></div>
                </>
              )}
            </div>
          ) : // INI TENTANG PROFIL DAN LAIN LAIN
          loading ? (
            <Skeleton count={5} />
          ) : (
            <div
              className={`${
                currentPath == "/regulasi" ? "isi-regulasi leading-6" : ""
              } isi text-sm leading-6 text-other `}
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
