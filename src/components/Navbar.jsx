import { useState } from "react";
import logo from "../assets/img/ppid.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuClick, seMenuClick] = useState(false);
  const [listMenuClick, setListMenuClick] = useState(false);

  return (
    <nav className="absolute z-50 w-full bg-primary">
      <div className="container mx-auto flex items-center justify-between px-3 py-3 transition-all duration-500">
        <Link to="/">
          <img src={logo} width={170} />
        </Link>

        <ul
          className={`${
            menuClick ? "block" : "hidden"
          } absolute left-0 right-0 top-[84px] mx-3 bg-white text-sm font-extralight shadow`}
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
                to="/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Profil
              </Link>
              <a
                href="#"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Visi & Misi
              </a>
              <a
                href="#"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Tugas & Fungsi
              </a>
              <a
                href="#"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Struktur PPID
              </a>
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
          className="pr-2 text-4xl text-white"
          onClick={() => seMenuClick(!menuClick)}
        >
          {menuClick ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </div>
    </nav>
  );
};
