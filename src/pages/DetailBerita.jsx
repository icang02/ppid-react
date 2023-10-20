import { Link, useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import bgHero from "../assets/img/detail-berita.jpg";
import Hero from "../components/formulir/Hero";
import imgBerita from "../assets/img/berita.jpg";

import { IoChevronForwardOutline, IoTodaySharp } from "react-icons/io5";
import CardNews from "../components/CardNews";
import { useEffect } from "react";

const DetailBerita = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let { slug } = useParams();

  const currentPath = useLocation();
  const data = {
    bgHero,
    titleMenu: "Detail Berita & Informasi",
    title: "Detail",
    content: {
      id: 1,
      judul: "Rektor Menerima Mahasiswa Baru UHO Angkatan 2023",
      slug: slug,
      tanggal: "2023-09-04",
      penulis: "PPID",
      isi: "<p>Ribuan mahasiswa mengikuti upacara penerimaan mahasiswa baru di Stadion Sepak Bola Universitas Halu Oleo (UHO) pada Senin, 4 September 2023. Dalam upacara penerimaan ini, Rektor UHO Muhammad Zamrun menyampaikan selamat datang kepada seluruh mahasiswa yang berhasil masuk ke UHO. Seluruh mahasiswa, khususnya di jenjang Sarjana, diterima melalui jalur Seleksi Nasional Berdasarkan Prestasi (SNBP), Seleksi Nasional Berdasarkan Tes (SNBT), atau Seleksi Mandiri Masuk (SMM) UHO.</p><p>Sementara mahasiswa baru Pascasarjana di tahun 2023 terdaftar 596 orang dengan rincian: jenjang Strata Dua (S2) 508 orang dan mahasiswa baru jenjang Strata Tiga (S3) sebanyak 88 orang.</p><p>Penerimaan mahasiswa ini secara simbolik ditandai dengan pemakaian jaket almamater UHO dan penyerahan dokumen mahasiswa ke masing-masing dekan fakultas dan direktur pascasarjana.***</p>",
    },
    path: currentPath,
  };
  const breadcrumb = (
    <>
      <Link to="/berita">{data.titleMenu}</Link>
      <IoChevronForwardOutline />
      <Link to="/formulir" className="text-acsent">
        Detail
      </Link>
    </>
  );

  return (
    <>
      <Navbar />
      <Hero data={data} />
      <div className="container mx-auto px-3 py-10">
        <div className="flex items-center gap-0.5 text-xs text-other">
          <Link to="/">Beranda</Link> <IoChevronForwardOutline />
          {breadcrumb}
        </div>

        <hr className="mb-5 mt-1" />

        <div className="grid grid-cols-1">
          <div className="col-span-1 mb-5">
            <img src={imgBerita} alt="image" className="w-full" />
          </div>

          <div className="col-span-1">
            <h5 className="text-xl font-bold leading-6">
              {data.content.judul}
            </h5>

            <div className="mt-2.5 flex items-center gap-5 text-xs text-[#6C757D]">
              <span className="flex items-center gap-1.5">
                <IoTodaySharp /> {data.content.tanggal}
              </span>
              <span className="flex items-center gap-1.5">
                <IoTodaySharp /> {data.content.penulis}
              </span>
            </div>

            <hr className="my-5" />

            <div
              className="isi text-sm text-other"
              dangerouslySetInnerHTML={{ __html: data.content.isi }}
            ></div>
          </div>

          {/* INI GARIS */}
          <div className="col-span-1">
            <hr className="mt-10" />
          </div>

          {/* INI CARD NEWS */}
          <div className="col-span-1">
            {data.path != "/formulir" && <CardNews />}
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default DetailBerita;
