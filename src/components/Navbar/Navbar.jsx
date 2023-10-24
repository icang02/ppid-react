import { useEffect, useState } from "react";
import logo from "../../assets/img/ppid.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import InputSearch from "../search/inputSearch";
import SingleLMenu from "./SingleLMenu";
import MultiMenu from "./MultiMenu";

export const Navbar = () => {
  const path = useLocation().pathname;

  const [menuClick, setMenuClick] = useState(false);
  const [listMenuClick, setListMenuClick] = useState(false);
  const [listMenuClick2, setListMenuClick2] = useState(false);
  const [listMenuClick3, setListMenuClick3] = useState(false);
  const [listMenuClick4, setListMenuClick4] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    setMenuClick(false);
    setListMenuClick(false);
    setListMenuClick2(false);
    setListMenuClick3(false);
    setListMenuClick4(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 155) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tentang = [
    {
      nama: "Profil",
      path: "/profil",
    },
    {
      nama: "Visi & Misi",
      path: "/visi-misi",
    },
    {
      nama: "Tugas & Fungsi",
      path: "/tugas-fungsi",
    },
    {
      nama: "Struktur PPID",
      path: "/struktur-ppid",
    },
  ];

  const informasiPublik = [
    {
      nama: "Informasi Berkala",
      path: "/informasi-publik/berkala",
    },
    {
      nama: "Informasi Tersedia Setiap Saat",
      path: "/informasi-publik/setiap-saat",
    },
    {
      nama: "Informasi Serta Merta",
      path: "/informasi-publik/serta-merta",
    },
    {
      nama: "Informasi Dikecualikan",
      path: "/informasi-publik/dikecualikan",
    },
  ];

  const formulir = [
    {
      nama: "Permohonan Informasi Publik",
      path: "/formulir/permohonan-informasi-publik",
    },
    {
      nama: "Keberatan Layanan Informasi Publik",
      path: "/formulir/keberatan-layanan-informasi-publik",
    },
    {
      nama: "Penyelesaian Sengketa Informasi Publik",
      path: "/formulir/penyelesaian-sengketa-informasi-publik",
    },
  ];

  const laporan = [
    {
      nama: "Laporan Akses Informasi Publik",
      path: "/laporan/akses-informasi-publik",
    },
    {
      nama: "Laporan Layanan Informasi Publik",
      path: "/laporan/layanan-informasi-publik",
    },
  ];

  return (
    <nav
      className={`${
        isSticky ? "fixed bg-primary" : "fixed bg-primary xl:bg-transparent"
      } z-50 w-full transition duration-500`}
    >
      <div
        className={`${
          isSticky ? "px-3 py-1 xl:px-0 xl:py-1.5" : "px-3 py-3 xl:px-0 xl:py-5"
        } container mx-auto flex items-center justify-between transition-all duration-500 xl:max-w-5xl 2xl:max-w-6xl`}
      >
        <Link to="/" onClick={handleScrollToTop}>
          <img
            src={logo}
            className={`${
              isSticky
                ? "-translate-x-3 scale-[.88] lg:scale-[.88]"
                : "scale-100"
            } w-[145px] transition duration-500 lg:w-[170px]`}
          />
        </Link>

        {/* DESKTOP NAVBAR */}
        <ul className="hidden text-sm text-white xl:block">
          <div className="flex items-center gap-8">
            <SingleLMenu currentPath={path} link="/" titleLink="Beranda" />
            <MultiMenu
              currentPath={path}
              titleLink="Tentang"
              listMenu={tentang}
            />
            <MultiMenu
              currentPath={path}
              titleLink="Informasi Publik"
              listMenu={informasiPublik}
            />
            <MultiMenu
              currentPath={path}
              titleLink="Laporan"
              listMenu={laporan}
            />
            <MultiMenu
              currentPath={path}
              titleLink="Formulir"
              listMenu={formulir}
            />
            <SingleLMenu link="/regulasi" titleLink="Regulasi" />

            {/* SEARCH INPUT */}
            <InputSearch />
          </div>
        </ul>

        {/* MOBILE NAVBAR */}
        <ul
          className={`${menuClick ? "block" : "hidden"} ${
            isSticky ? "top-[69px]" : "top-[84px]"
          } absolute left-0 right-0 mx-3 bg-white text-sm font-normal shadow xl:hidden`}
        >
          <li className="flex flex-col text-center">
            <Link
              onClick={handleScrollToTop}
              to="/"
              className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Beranda
            </Link>

            <button
              onClick={() => setListMenuClick(!listMenuClick)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Tentang
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                to="/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Profil
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/visi-misi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Visi & Misi
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/tugas-fungsi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Tugas & Fungsi
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/struktur-ppid"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Struktur PPID
              </Link>
            </div>

            <button
              onClick={() => setListMenuClick2(!listMenuClick2)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Informasi Publik
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick2 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                to="/informasi-publik/berkala"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Berkala
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/informasi-publik/setiap-saat"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Tersedia Setiap Saat
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/informasi-publik/serta-merta"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Serta Merta
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/informasi-publik/dikecualikan"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Dikecualikan
              </Link>
            </div>

            <button
              onClick={() => setListMenuClick3(!listMenuClick3)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Formulir
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick3 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                to="/formulir/permohonan-informasi-publik"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Permohonan Informasi Publik
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/formulir/keberatan-layanan-informasi-publik"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Keberatan Layanan Informasi Publik
              </Link>
              <Link
                onClick={handleScrollToTop}
                to="/formulir/penyelesaian-sengketa-informasi-publik"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Penyelesaian Sengketa Informasi Publik
              </Link>
            </div>

            <button
              onClick={() => setListMenuClick4(!listMenuClick4)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Laporan
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick4 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                to="/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Laporan Akses Informasi Publik
              </Link>
              <Link
                to="/visi-misi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Laporan Layanan Informasi Publik
              </Link>
            </div>

            <Link
              onClick={handleScrollToTop}
              to="/regulasi"
              className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Regulasi
            </Link>
          </li>
        </ul>

        {/* HAMBURGER MENU ICON */}
        {/* SEARCH INPUT */}
        <div
          className={`flex items-center xl:hidden ${
            isSticky ? "gap-2.5" : "gap-3"
          }`}
        >
          <InputSearch />
          <div
            className={`${
              isSticky ? "text-3xl" : "text-4xl"
            } cursor-pointer pr-2 text-white transition-all duration-300`}
            onClick={() => setMenuClick(!menuClick)}
          >
            {menuClick ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
        </div>
      </div>
    </nav>
  );
};
