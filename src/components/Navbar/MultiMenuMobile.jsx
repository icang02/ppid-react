import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

export default function MultiMenuMobile({
  titleLink,
  listMenu,
  listMenuClick,
  setMenuClick,
}) {
  const [isClick, setIsClick] = useState(listMenuClick);

  function handleScrollToTop() {
    window.scrollTo(0, 0);
    setMenuClick(false);
    setIsClick(false);
  }

  return (
    <>
      <button
        onClick={() => setIsClick(!isClick)}
        className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
      >
        {titleLink}
        <span className="absolute right-5 top-3.5">
          <IoChevronDown />
        </span>
      </button>

      <div
        className={`${
          isClick ? "flex" : "hidden"
        } flex-col text-center transition-all duration-500`}
      >
        {listMenu.map((item, i) => {
          return (
            <Link
              key={i}
              onClick={handleScrollToTop}
              to={item.path}
              className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
            >
              {item.nama}
            </Link>
          );
        })}
      </div>
    </>
  );
}
