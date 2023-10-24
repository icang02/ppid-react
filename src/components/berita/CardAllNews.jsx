import React from "react";
import { IoTodaySharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import config from "../../config";
import DOMPurify from "dompurify";

import { format } from "date-fns";
import idLocale from "date-fns/locale/id";

export default function CardAllNews({ data }) {
  const navigate = useNavigate();

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
      {data.map((item, i) => (
        <div className="col-span-1" key={i}>
          <div className="grid grid-cols-12 rounded-lg shadow-lg">
            <div className="col-span-12 border lg:col-span-4">
              <div className="block cursor-pointer overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                <img
                  onClick={() => navigate(`/berita/${item.slug}`)}
                  src={`${config.APP_URL}/${item.gambar ?? "img/berita.jpg"}`}
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
                  <IoTodaySharp />{" "}
                  {format(new Date(item.tanggal), "dd MMMM yyyy", {
                    locale: idLocale,
                  })}
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
    </>
  );
}
