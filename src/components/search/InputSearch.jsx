import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function InputSearch() {
  const [isClick, setIsClick] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleClickSearch = () => {
    setIsClick(!isClick);

    if (!isClick) {
      inputRef.current.focus();
    }
  };

  const handleXClick = () => {
    setTimeout(() => {
      inputRef.current.value = "";
    }, 1500);
    setIsClick(!isClick);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = inputRef.current.value;

    handleXClick();

    if (!keyword) return navigate(`/berita`);
    setIsClick(!isClick);
    navigate(`/berita/search/${keyword}`);
  };

  return (
    <>
      <div
        onClick={handleClickSearch}
        className="cursor-pointer rounded bg-acsent px-3 py-2 text-base text-white lg:px-4 lg:py-3 lg:text-lg"
      >
        <IoSearch />
      </div>

      <div
        className={`${
          isClick ? "scale-150" : "scale-0"
        } fixed left-0 right-0 top-0 flex h-full flex-col items-center justify-center gap-4 rounded-[50%] bg-gradient-to-b from-[#0e3b63] to-[#0e3b63] opacity-90 transition-all duration-500`}
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

        <div
          className={`${
            isClick ? "scale-100" : "scale-0"
          } cursor-pointer bg-red-400 px-1 py-0.5 text-sm transition-all delay-500 duration-500 lg:text-lg`}
          onClick={handleXClick}
        >
          <IoClose />
        </div>
      </div>
    </>
  );
}
