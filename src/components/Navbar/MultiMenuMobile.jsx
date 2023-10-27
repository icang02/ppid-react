import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

export default function MultiMenuMobile({
  titleLink,
  listMenu,
  setMenuStates,
  index,
}) {
  const [isClick, setIsClick] = useState(setMenuStates[index]);

  function handleActiveListMenu() {
    setIsClick(!isClick);
  }

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button
        onClick={handleActiveListMenu}
        className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
      >
        {titleLink}
        <span className="absolute right-5 top-3.5">
          <IoChevronDown />
        </span>
      </button>

      {/* 99, 149, 199 */}
      <motion.div
        animate={{ height: isClick ? listMenu.nama : 0 }}
        className={`flex flex-col overflow-hidden text-center`}
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
      </motion.div>
    </>
  );
}
