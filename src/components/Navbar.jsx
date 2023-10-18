import { useState } from "react";
import logo from "../assets/img/ppid.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [listMenuClick, setListMenuClick] = useState(false);
  const [listMenuClick2, setListMenuClick2] = useState(false);
  const [listMenuClick3, setListMenuClick3] = useState(false);
  const [listMenuClick4, setListMenuClick4] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    setMenuClick(false);
    setListMenuClick(false);
    setListMenuClick2(false);
    setListMenuClick3(false);
    setListMenuClick4(false);
  };

  return (
    <nav className="absolute z-50 w-full bg-primary">
      <div className="container mx-auto flex items-center justify-between px-3 py-3 transition-all duration-500">
        <Link to="/">
          <img src={logo} width={170} />
        </Link>

        <ul
          className={`${
            menuClick ? "block" : "hidden"
          } absolute left-0 right-0 top-[84px] mx-3 bg-white text-sm font-medium shadow`}
        >
          <li className="flex flex-col text-center">
            <Link
              to="/"
              className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Beranda
            </Link>

            <a
              onClick={() => setListMenuClick(!listMenuClick)}
              href="#"
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Tentang
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </a>
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

            <a
              onClick={() => setListMenuClick2(!listMenuClick2)}
              href="#"
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Informasi Publik
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </a>
            <div
              className={`${
                listMenuClick2 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                to="/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Berkala
              </Link>
              <Link
                to="/visi-misi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Tersedia Setiap Saat
              </Link>
              <Link
                to="/tugas-fungsi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Serta Merta
              </Link>
              <Link
                to="/struktur-ppid"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Dikecualikan
              </Link>
            </div>

            <a
              onClick={() => setListMenuClick3(!listMenuClick3)}
              href="#"
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Formulir
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </a>
            <div
              className={`${
                listMenuClick3 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                to="/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Permohonan Informasi Publik
              </Link>
              <Link
                to="/visi-misi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Keberatan Layanan Informasi Publik
              </Link>
              <Link
                to="/tugas-fungsi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Penyelesaian Sengketa Informasi Publik
              </Link>
            </div>

            <a
              onClick={() => setListMenuClick4(!listMenuClick4)}
              href="#"
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Laporan
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </a>
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

            <a
              href="#"
              className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Regulasi
            </a>
          </li>
        </ul>

        <div
          className="cursor-pointer pr-2 text-4xl text-white"
          onClick={() => setMenuClick(!menuClick)}
        >
          {menuClick ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </div>
    </nav>
  );
};
