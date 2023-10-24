import { Link, json, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

import config from "../config";

import bgHero from "../assets/img/detail-berita.jpg";

import Layout from "../components/Layout/Layout";
import Hero from "../components/formulir/Hero";
import LoadCardAllNews from "../components/skeleton/LoadCardAllNews";
import CardAllNews from "../components/berita/CardAllNews";
import Breadcrumb from "../components/formulir/Breadcrumb";
import Paginate from "../components/utilities/Paginate";

const Berita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  const { keyword } = useParams();
  // VARIABLE PAGINATE
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [total, setTotal] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const currentPath = useLocation().pathname;
  const isInfoPublik = currentPath.includes("informasi-publik/serta-merta");

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    async function fetchData() {
      try {
        let response = [];
        let jsonData = [];

        if (currentPath.includes("/informasi-publik/serta-merta")) {
          response = await fetch(`${config.API_URL + currentPath}`);
        } else if (keyword) {
          response = await fetch(`${config.API_URL}/berita/search/${keyword}`);
        } else {
          response = await fetch(
            `${config.API_URL}/berita?page=${currentPage}`,
          );
        }

        jsonData = await response.json();

        setLastPage(jsonData.last_page);
        setFrom(jsonData.from);
        setTo(jsonData.to);
        setTotal(jsonData.total);
        setPerPage(jsonData.per_page);
        setNextPageUrl(jsonData.next_page_url);
        setPrevPageUrl(jsonData.prev_page_url);

        jsonData = jsonData.data;

        setBerita(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPage, currentPath]);

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

  return (
    <Layout>
      <Hero data={data} />

      <div className="container mx-auto px-3 py-20 pt-10 xl:max-w-6xl">
        <Breadcrumb data={breadcrumb} />

        {keyword && (
          <>
            <div className="mb-7 text-center text-sm lg:text-base">
              Menampilkan hasil pencarian :&nbsp;
              <span className="italic">{keyword}</span>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 gap-7">
          {loading ? (
            <LoadCardAllNews count={6} />
          ) : berita.length != 0 ? (
            <>
              <CardAllNews data={berita} />
              {loading ? (
                "Memuat..."
              ) : nextPageUrl ? (
                <Paginate
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  lastPage={lastPage}
                  from={from}
                  to={to}
                  total={total}
                />
              ) : prevPageUrl ? (
                <Paginate
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  lastPage={lastPage}
                  from={from}
                  to={to}
                  total={total}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            <div className="text-center text-sm text-gray-500 lg:text-base">
              Tidak ada berita yang tersedia.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Berita;
