import { Link, useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import Hero from "../components/formulir/Hero";

import bgHero from "../assets/img/detail-berita.jpg";
import imgBerita from "../assets/img/berita.jpg";

import {
  IoChevronForwardOutline,
  IoPersonSharp,
  IoTodaySharp,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

const Berita = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const filteredData = res.data.filter((item) => item.id < 14);
        setBerita(filteredData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  let { slug } = useParams();

  const currentPath = useLocation();
  const data = {
    bgHero,
    titleMenu: "Berita & Informasi",
    path: currentPath,
  };
  const breadcrumb = (
    <>
      <Link to="/formulir" className="text-acsent">
        Berita & Informasi
      </Link>
    </>
  );

  function TruncateText({ text, maxLength }) {
    if (text.length <= maxLength) {
      return <span>{text}</span>;
    } else {
      const truncatedText = text.slice(0, maxLength) + "...";
      return <span title={text}>{truncatedText}</span>;
    }
  }

  return (
    <>
      <Navbar />
      <Hero data={data} />

      <div className="container mx-auto px-3 py-20 lg:pt-14 xl:max-w-6xl">
        <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
          <Link to="/">Beranda</Link> <IoChevronForwardOutline />
          {breadcrumb}
        </div>

        <hr className="mb-5 mt-1" />

        <div className="grid grid-cols-1 gap-7">
          {berita.map((item, i) => (
            <div className="col-span-1" key={i}>
              <div className="grid grid-cols-12 rounded-lg shadow-lg">
                <div className="col-span-12 lg:col-span-4">
                  <Link
                    to="/berita/judul-slug-berita"
                    className="block cursor-pointer overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
                  >
                    <img
                      src={imgBerita}
                      alt="image"
                      className="aspect-[16/10] object-cover object-center transition-all duration-500 hover:scale-110 hover:brightness-[.65] lg:aspect-[4/3]"
                    />
                  </Link>
                </div>

                <div className="col-span-12 lg:col-span-8 lg:flex lg:items-center lg:px-12">
                  <div className="mt-5 px-5 pb-5 lg:m-0 lg:w-full lg:p-0">
                    <Link
                      to="/berita/judul-slug-berita"
                      className="block font-bold leading-5 hover:underline lg:text-xl"
                    >
                      <TruncateText text={item.title} maxLength={100} />
                    </Link>
                    <div className="mt-2 flex items-center gap-1 text-xs text-[#6C757D] lg:text-sm">
                      <IoTodaySharp /> 2023-09-22
                    </div>
                    <p className="mt-3 text-sm text-other lg:mt-5 lg:text-base">
                      <TruncateText text={item.body} maxLength={100} />
                    </p>
                    <Link
                      to="/berita/slug"
                      className="taxt-base mt-5 hidden italic text-blue-500 lg:block"
                    >
                      Selengkapnya..
                    </Link>
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
