import { useEffect, useState } from "react";
import logo from "../assets/img/ppid.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export const Navbar = () => {
  const [progress, setProgress] = useState(100);

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
      path: "/informasi-publik/informasi-berkala",
    },
    {
      nama: "Laporan Survei Informasi Publik",
      path: "/informasi-publik/setiap-saat",
    },
  ];

  return (
    <nav
      className={`${
        isSticky ? "fixed bg-primary" : "absolute bg-primary xl:bg-transparent"
      } z-50 w-full `}
    >
      <div
        className={`${
          isSticky ? "px-3 py-2.5 xl:px-0 xl:py-3" : "px-3 py-3 xl:px-0 xl:py-5"
        } container mx-auto flex items-center justify-between  transition-all duration-500 xl:max-w-5xl 2xl:max-w-6xl`}
      >
        <Link to="/" onClick={handleScrollToTop}>
          <img src={logo} width={isSticky ? "135" : "170"} />
        </Link>
        {/* LOADING PROGRESS BAR */}
        <LoadingBar
          color="#2998ff"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        {/* DESKTOP NAVBAR */}
        <ul className="hidden text-sm text-white xl:block">
          <div className="flex gap-8">
            <NavLink
              onClick={handleScrollToTop}
              to="/"
              className="active inline-block py-3.5 tracking-widest transition-all duration-500 hover:text-acsent"
            >
              Beranda
            </NavLink>

            <div className="group">
              <NavLink className="flex items-center gap-0.5 py-3.5 tracking-widest transition-all duration-500 group-hover:text-acsent">
                Tentang <IoChevronDown />
              </NavLink>

              <div className="pointer-events-none absolute translate-y-4 text-other opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="pointer-events-auto overflow-hidden rounded-lg bg-white text-xs text-black">
                  {tentang.map((item, i) => (
                    <>
                      <Link
                        key={i}
                        to={item.path}
                        className="block py-3 pl-5 pr-7 tracking-wider duration-300 hover:bg-[#eeeeee] hover:text-acsent"
                      >
                        <span>{item.nama}</span>
                      </Link>
                      {i < tentang.length - 1 && <hr />}
                    </>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group">
              <NavLink className="flex items-center gap-0.5 py-3.5 tracking-widest transition-all duration-500 group-hover:text-acsent">
                Informasi Publik <IoChevronDown />
              </NavLink>

              <div className="pointer-events-none absolute translate-y-4 text-other opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="pointer-events-auto overflow-hidden rounded-lg bg-white text-xs text-black">
                  {informasiPublik.map((item, i) => (
                    <>
                      <Link
                        onClick={handleScrollToTop}
                        key={i}
                        to={item.path}
                        className="block py-3 pl-5 pr-7 tracking-wider duration-300 hover:bg-[#eeeeee] hover:text-acsent"
                      >
                        <span>{item.nama}</span>
                      </Link>
                      {i < informasiPublik.length - 1 && <hr />}
                    </>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group">
              <NavLink className="flex items-center gap-0.5 py-3.5 tracking-widest transition-all duration-500 group-hover:text-acsent">
                Laporan <IoChevronDown />
              </NavLink>

              <div className="pointer-events-none absolute translate-y-4 text-other opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="pointer-events-auto overflow-hidden rounded-lg bg-white text-xs text-black">
                  {laporan.map((item, i) => (
                    <>
                      <Link
                        key={i}
                        to={item.path}
                        className="block py-3 pl-5 pr-7 tracking-wider duration-300 hover:bg-[#eeeeee] hover:text-acsent"
                      >
                        <span>{item.nama}</span>
                      </Link>
                      {i < laporan.length - 1 && <hr />}
                    </>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group">
              <NavLink className="flex items-center gap-0.5 py-3.5 tracking-widest transition-all duration-500 group-hover:text-acsent">
                Formulir <IoChevronDown />
              </NavLink>

              <div className="pointer-events-none absolute translate-y-4 text-other opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="pointer-events-auto overflow-hidden rounded-lg bg-white text-xs text-black">
                  {formulir.map((item, i) => (
                    <>
                      <Link
                        onClick={handleScrollToTop}
                        key={i}
                        to={item.path}
                        className="block py-3 pl-5 pr-7 tracking-wider duration-300 hover:bg-[#eeeeee] hover:text-acsent"
                      >
                        <span>{item.nama}</span>
                      </Link>
                      {i < formulir.length - 1 && <hr />}
                    </>
                  ))}
                </ul>
              </div>
            </div>

            <NavLink
              onClick={handleScrollToTop}
              to="/regulasi"
              className="inline-block py-3.5 tracking-widest transition-all duration-500 hover:text-acsent"
            >
              Regulasi
            </NavLink>
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
        <div
          className={`${
            isSticky ? "text-3xl" : "text-4xl"
          } cursor-pointer pr-2 text-white transition-all duration-300 xl:hidden`}
          onClick={() => setMenuClick(!menuClick)}
        >
          {menuClick ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </div>
    </nav>
  );
};
