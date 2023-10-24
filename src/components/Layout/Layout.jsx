import React from "react";
import { Navbar } from "../Navbar/Navbar";
import Footer1 from "../Footer1";
import Footer2 from "../Footer2";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }) {
  const currentPath = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);

    const container = document.querySelector("html");
    if (currentPath == "/") {
      container.style.scrollBehavior = "smooth";
    } else {
      container.style.scrollBehavior = "auto";
    }
  }, [currentPath]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer1 />
      <Footer2 />
    </>
  );
}
