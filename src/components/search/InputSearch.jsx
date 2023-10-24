import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function InputSearch() {
  const [isSticky, setIsSticky] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 155) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        handleXClick();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleClickSearch = () => {
    setIsClick(!isClick);

    if (!isClick) {
      // inputRef.current.focus();
    }
  };

  const handleXClick = () => {
    setTimeout(() => {
      inputRef.current.value = "";
    }, 1500);
    setIsClick(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = inputRef.current.value;

    handleXClick();
    inputRef.current.blur();
    if (!keyword) return navigate(`/berita`);

    setIsClick(!isClick);
    navigate(`/berita/search/${keyword}`);
  };

  return (
    <>
      <div
        onClick={handleClickSearch}
        className={`${
          isSticky && "scale-90"
        } cursor-pointer rounded bg-acsent px-3 py-2 text-base text-white transition duration-500 lg:px-4 lg:py-3 lg:text-lg`}
      >
        <IoSearch />
      </div>

      <div
        className={`${
          isClick ? "scale-150" : "scale-0"
        } fixed left-[50%] top-[50%] flex h-[2000px] w-[2000px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-4 rounded-full bg-gradient-to-b from-[#0e3b63] to-[#0e3b63] opacity-90 transition-all duration-700`}
      >
        <div
          className={`${
            isClick ? "scale-100" : "scale-0"
          } w-56 transition-all delay-500 duration-500 lg:w-80`}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <input
                ref={inputRef}
                type="text"
                className="placeholder:text-[#ffffff7a]lg:text-base inline-block w-[89%] border-none bg-transparent text-xs text-white outline-none lg:text-sm"
                placeholder="Masukan kata kunci.."
              />
              <button>
                <IoSearch className="mr-1.5 text-sm text-white lg:text-lg" />
              </button>
            </div>
          </form>

          <div className="mt-1.5 h-0.5 w-56 bg-white lg:w-80"></div>
        </div>

        <button
          className={`${
            isClick ? "scale-100" : "scale-0"
          } cursor-pointer bg-red-400 px-1 py-0.5 text-sm text-white transition-all delay-500 duration-500 lg:text-lg`}
          onClick={handleXClick}
        >
          <IoClose />
        </button>
      </div>
    </>
  );
}
