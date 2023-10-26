import data from "./data";

import { useEffect, useState } from "react";
import logo from "src/assets/img/ppid.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import InputSearch from "src/components/search/InputSearch";
import SingleLMenu from "./SingleLMenu";
import MultiMenu from "./MultiMenu";
import SingleMenuMobile from "./SingleMenuMobile";
import MultiMenuMobile from "./MultiMenuMobile";

import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const path = useLocation().pathname;

  const [menuClick, setMenuClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    setMenuClick(false);
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            } -z-50 w-[145px] transition duration-500 lg:w-[170px]`}
          />
        </Link>

        {/* DESKTOP NAVBAR */}
        <ul className="hidden text-sm text-white xl:block">
          <div className="flex items-center gap-8">
            <SingleLMenu currentPath={path} link="/" titleLink="Beranda" />
            <MultiMenu
              currentPath={path}
              titleLink="Tentang"
              listMenu={data.tentang}
            />
            <MultiMenu
              currentPath={path}
              titleLink="Informasi Publik"
              listMenu={data.informasiPublik}
            />
            <MultiMenu
              currentPath={path}
              titleLink="Laporan"
              listMenu={data.laporan}
            />
            <MultiMenu
              currentPath={path}
              titleLink="Formulir"
              listMenu={data.formulir}
            />
            <SingleLMenu link="/regulasi" titleLink="Regulasi" />

            {/* SEARCH INPUT */}
            <InputSearch />
          </div>
        </ul>

        {/* MOBILE NAVBAR */}
        <ul
          className={` ${isSticky ? "top-[60px]" : "top-[76px]"} ${
            menuClick
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-[110%]"
          } absolute left-0 right-0 -z-10 mx-3 bg-white text-sm font-normal shadow transition duration-500 ease-in-out xl:hidden`}
        >
          <li className="flex flex-col text-center">
            <SingleMenuMobile
              link={`/`}
              titleLink={`Beranda`}
              setMenuClick={setMenuClick}
            />
            <MultiMenuMobile
              titleLink={`Tentang`}
              listMenu={data.tentang}
              listMenuClick={false}
              setMenuClick={setMenuClick}
            />
            <MultiMenuMobile
              titleLink={`Informasi Publik`}
              listMenu={data.informasiPublik}
              listMenuClick={false}
              setMenuClick={setMenuClick}
            />
            <MultiMenuMobile
              titleLink={`Formulir`}
              listMenu={data.formulir}
              listMenuClick={false}
              setMenuClick={setMenuClick}
            />
            <MultiMenuMobile
              titleLink={`Laporan`}
              listMenu={data.laporan}
              listMenuClick={false}
              setMenuClick={setMenuClick}
            />
            <SingleMenuMobile
              link={`/regulasi`}
              titleLink={`Regulasi`}
              setMenuClick={setMenuClick}
            />
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