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

import { motion } from "framer-motion";

export const Navbar = () => {
  const path = useLocation().pathname;

  const [menuClick, setMenuClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [menuStates, setMenuStates] = useState(data.map(() => false));

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
            {data.map((item, i) => (
              <MultiMenu
                key={i}
                currentPath={path}
                titleLink={item.nama}
                listMenu={item.listMenu}
              />
            ))}
            <SingleLMenu link="/regulasi" titleLink="Regulasi" />

            {/* SEARCH INPUT */}
            <InputSearch />
          </div>
        </ul>

        {/* MOBILE NAVBAR */}
        <motion.div
          initial={{ x: "110%" }}
          animate={{ x: menuClick ? "0" : "110%" }}
          className={` ${
            isSticky ? "top-[60px]" : "top-[76px]"
          } absolute left-0 right-0 -z-10 mx-3 translate-x-[110%] bg-white text-sm font-normal shadow transition-all duration-500 ease-in-out xl:hidden`}
        >
          <div className="flex flex-col text-center">
            <SingleMenuMobile
              link={`/`}
              titleLink={`Beranda`}
              setMenuClick={setMenuClick}
            />
            {data.map((item, i) => (
              <MultiMenuMobile
                key={i}
                titleLink={item.nama}
                listMenu={item.listMenu}
                menuStates={menuStates}
                setMenuStates={setMenuStates}
                index={i}
              />
            ))}
            <SingleMenuMobile
              link={`/regulasi`}
              titleLink={`Regulasi`}
              setMenuClick={setMenuClick}
            />
          </div>
        </motion.div>

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
            onClick={() => {
              setMenuClick(!menuClick);
            }}
          >
            {menuClick ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
        </div>
      </div>
    </nav>
  );
};
