import berita from "../../assets/img/berita.jpg";

import { IoArrowForward, IoTodaySharp } from "react-icons/io5";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BeritaUtama = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const filteredData = res.data.filter((item) => item.id < 7);
        setData(filteredData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  function TruncateText({ text, maxLength }) {
    if (text.length <= maxLength) {
      return <span>{text}</span>;
    } else {
      const truncatedText = text.slice(0, maxLength) + "...";
      return <span title={text}>{truncatedText}</span>;
    }
  }

  return (
    <section>
      <div className="container mx-auto px-3 py-32 pt-28">
        <h5 className="mb-2 text-center font-bold text-acsent">PPID UHO</h5>
        <h2 className="text-center text-2xl font-bold">Berita & Informasi</h2>

        <div className="mt-12">
          <Link
            to="/berita"
            className="mb-3 mr-2 flex items-center justify-end text-xs opacity-90 transition-all duration-500 hover:opacity-100"
          >
            Lihat Semua
            <span>
              <IoArrowForward />
            </span>
          </Link>

          <div className="grid grid-cols-1 gap-7">
            {data.map((item, i) => (
              <div className="col-span-1" key={item.id}>
                <div className="rounded-lg shadow-lg">
                  <Link
                    to="/berita/judul-slug-berita"
                    className="block cursor-pointer overflow-hidden rounded-t-lg"
                  >
                    <img
                      src={berita}
                      alt="image"
                      className="aspect-[16/10] object-cover object-center transition-all duration-500 hover:scale-110 hover:brightness-[.65]"
                    />
                  </Link>
                  <div className="mt-5 px-5 pb-5">
                    <Link
                      to="/berita/judul-slug-berita"
                      className="block font-bold leading-5 hover:underline"
                    >
                      <TruncateText text={item.title} maxLength={100} />
                    </Link>
                    <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D]">
                      <IoTodaySharp /> 2023-09-22
                    </div>
                    <p className="mt-3 text-sm text-other">
                      <TruncateText text={item.body} maxLength={100} />
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
