import React from "react";
import { NavLink } from "react-router-dom";

export default function SingleLMenu({ currentPath, link, titleLink }) {
  return (
    <NavLink
      to={link}
      className={`${
        currentPath == link && "active"
      } inline-block py-3.5 tracking-widest transition-all duration-500 hover:text-acsent`}
    >
      {titleLink}
    </NavLink>
  );
}
