import { format } from "date-fns";
import idLocale from "date-fns/locale/id";

import { IoTodaySharp } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import config from "../config";

const CardNews = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentPath = useLocation().pathname;

  let { slug } = useParams();

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const response = await fetch(`${config.API_URL}/card-news/not/${slug}`);

      const jsonData = await response.json();

      setData(jsonData.filter((item) => item));
      setLoading(false);
    }

    fetchData();
  }, [currentPath]);

  function limitText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div
      className={`${
        currentPath.includes("berita") ? "w-full" : "max-w-sm"
      } my-10 rounded-lg border shadow-lg lg:my-0`}
    >
      <div className="border-b-[3px] border-black bg-[#EDEDED] px-4 py-4 font-medium">
        Berita & Informasi Terbaru
      </div>

      <div className="pb-3 pt-2">
        {loading
          ? Array(4)
              .fill(0)
              .map((item, i) => (
                <div key={i}>
                  <div className="flex items-start gap-4 px-5 py-4 lg:px-6">
                    <Skeleton className="aspect-[4/3] w-24 rounded object-cover" />
                    <div>
                      <Link className="mb-1.5 inline-block text-sm font-bold leading-5 hover:underline">
                        <Skeleton className="w-[222.36px]" count={3} />
                      </Link>
                      <div className="flex items-center gap-1 text-xs text-[#6C757D]">
                        <Skeleton className="w-[86px]" />
                      </div>
                    </div>
                  </div>
                  {i < data.length - 1 && <hr />}
                </div>
              ))
          : data.map((item, i) => (
              <div key={i}>
                <div className="flex items-start gap-4 px-5 py-4 lg:px-6">
                  <img
                    onClick={() => navigate(`/berita/${item.slug}`)}
                    src={`${config.APP_URL}/${item.gambar ?? "img/berita.jpg"}`}
                    alt="image"
                    className="aspect-[4/3] w-24 cursor-pointer rounded object-cover"
                  />
                  <div>
                    <Link
                      to={`/berita/${item.slug}`}
                      className="mb-1.5 inline-block text-sm font-bold leading-5 hover:underline"
                    >
                      {limitText(item.judul, 100)}
                    </Link>
                    <div className="flex items-center gap-1 text-xs text-[#6C757D]">
                      <IoTodaySharp />{" "}
                      {format(new Date(item.tanggal), "dd MMMM yyyy", {
                        locale: idLocale,
                      })}
                    </div>
                  </div>
                </div>
                {i < data.length - 1 && <hr />}
              </div>
            ))}
      </div>
    </div>
  );
};

export default CardNews;
