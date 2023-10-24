import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Breadcrumb({ data }) {
  return (
    <>
      <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
        <Link to="/">Beranda</Link> <IoChevronForwardOutline />
        {data}
      </div>
      <hr className="mb-5 mt-1" />
    </>
  );
}
