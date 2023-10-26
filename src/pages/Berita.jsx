import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import config from "src/config";
import api from "src/api";

import Layout from "src/components/Layout/Layout";
import Hero from "src/components/formulir/Hero";
import LoadCardAllNews from "src/components/skeleton/LoadCardAllNews";
import CardAllNews from "src/components/berita/CardAllNews";
import Breadcrumb from "src/components/formulir/Breadcrumb";
import Paginate from "src/components/utilities/Paginate";

import bgHero from "src/assets/img/detail-berita.jpg";

const Berita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  const { keyword, page } = useParams();

  // VARIABLE PAGINATE
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
          response = await fetch(api.getInfoSertaMerta());
        } else if (keyword) {
          response = await fetch(api.getSearchNews(page, keyword));
        } else {
          response = await fetch(api.getAllNews(page));
        }

        jsonData = await response.json();

        setLastPage(jsonData.last_page);
        setFrom(jsonData.from);
        setTo(jsonData.to);
        setTotal(jsonData.total);
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
  }, [currentPath]);

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
                  lastPage={lastPage}
                  from={from}
                  to={to}
                  total={total}
                />
              ) : prevPageUrl ? (
                <Paginate
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
