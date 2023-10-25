import React from "react";
import { Link } from "react-router-dom";

export default function SingleMenuMobile({ link, titleLink, setMenuClick }) {
  function handleScrollToTop() {
    window.scrollTo(0, 0);
    setMenuClick(false);
  }

  return (
    <Link
      onClick={handleScrollToTop}
      to={link}
      className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
    >
      {titleLink}
    </Link>
  );
}
