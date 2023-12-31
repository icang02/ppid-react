import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import config from "src/config";
import api from "src/api";

import { format } from "date-fns";
import idLocale from "date-fns/locale/id";
import DOMPurify from "dompurify";

import Skeleton from "react-loading-skeleton";

import { IoArrowForward, IoTodaySharp } from "react-icons/io5";

const BeritaUtama = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function sanitizeHtml(html) {
    const config = {
      ALLOWED_TAGS: [""],
    };

    return DOMPurify.sanitize(html, config);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api.getNewsHome());
      const jsonData = await response.json();

      setData(jsonData);
      setLoading(false);
    }

    fetchData();
  }, []);

  function limitText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <section>
      <div className="container mx-auto px-3 py-32 pt-28 xl:max-w-5xl 2xl:max-w-6xl">
        <h5 className="mb-2 text-center font-bold text-acsent lg:text-xl">
          PPID UHO
        </h5>
        <h2 className="text-center text-2xl font-bold lg:text-3xl">
          Berita & Informasi
        </h2>

        <div className="mt-12">
          <Link
            to="/berita/page/1"
            className="mb-3 mr-2 flex items-center justify-end text-xs opacity-90 transition-all duration-500 hover:opacity-100 lg:text-sm"
          >
            Lihat Semua
            <span>
              <IoArrowForward />
            </span>
          </Link>

          <div className="grid grid-cols-12 gap-7">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((item, i) => (
                    <div className="col-span-12 lg:col-span-4" key={i}>
                      <div className="rounded-lg shadow-lg">
                        <Link className="block cursor-pointer overflow-hidden rounded-t-lg">
                          <Skeleton className="aspect-[16/10] object-cover object-center transition-all duration-500 hover:scale-110 hover:brightness-[.65]" />
                        </Link>
                        <div className="mt-5 px-5 pb-5">
                          <Link className="block font-bold leading-5 hover:underline lg:text-lg lg:leading-6">
                            <Skeleton count={1} />
                            <Skeleton count={1} className="w-2/3" />
                          </Link>
                          <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D] lg:text-sm">
                            <Skeleton className="w-24" />
                          </div>
                          <p className="mt-3 text-sm text-other lg:text-base lg:leading-5">
                            <Skeleton count={3} />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
              : data.map((item, i) => (
                  <div className="col-span-12 lg:col-span-4" key={i}>
                    <div className="rounded-lg shadow-lg">
                      <div
                        onClick={() => navigate(`/berita/${item.slug}`)}
                        className="block cursor-pointer overflow-hidden rounded-t-lg"
                      >
                        <img
                          src={`${config.APP_URL}/${
                            item.gambar ?? "img/berita.jpg"
                          }`}
                          alt="image"
                          className="aspect-[16/10] object-cover object-center transition-all duration-500 hover:scale-110 hover:brightness-[.65]"
                        />
                      </div>
                      <div className="mt-5 px-5 pb-6">
                        <div
                          onClick={() => navigate(`/berita/${item.slug}`)}
                          className="block cursor-pointer font-bold leading-6 hover:underline lg:text-lg lg:leading-7"
                        >
                          {limitText(item.judul, 100)}
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D] lg:text-sm">
                          <IoTodaySharp />
                          {format(new Date(item.tanggal), "dd MMMM yyyy", {
                            locale: idLocale,
                          })}
                        </div>
                        <p className="mt-3 text-sm text-other lg:text-base lg:leading-6">
                          {limitText(sanitizeHtml(item.isi), 100)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeritaUtama;
