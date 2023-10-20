import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img from "../../assets/img/berita.jpg";
import CardNews from "../CardNews";
import CardInfoPublik from "../CardInfoPublik";

import regulasi from "../../assets/img/regulasi.jpg";
import sengketa from "../../assets/img/Penyelesaian Sengketa.jpg";
import permohonan from "../../assets/img/permohonan.jpg";
import keberatan from "../../assets/img/keberatan.jpg";

const Content = ({ data, breadcrumb }) => {
  let imgSamping = "";
  if (data.path == "/regulasi") {
    imgSamping = regulasi;
  } else if (data.path.includes("permohonan")) {
    imgSamping = permohonan;
  } else if (data.path.includes("keberatan")) {
    imgSamping = keberatan;
  } else if (data.path.includes("sengketa")) {
    imgSamping = sengketa;
  }

  const checkPage =
    data.path.includes("regulasi") ||
    data.path.includes("permohonan") ||
    data.path.includes("keberatan") ||
    data.path.includes("sengketa");

  return (
    <div className="container mx-auto px-3 py-10 xl:max-w-5xl 2xl:max-w-6xl">
      <div className="flex items-center gap-0.5 text-xs text-other lg:text-sm">
        <Link to="/">Beranda</Link> <IoChevronForwardOutline />
        {breadcrumb}
      </div>

      <hr className="mb-5 mt-1" />

      <div className="grid grid-cols-12 lg:gap-10">
        <div
          className={`${checkPage && "lg:order-2"} col-span-12 lg:col-span-7`}
        >
          <h2 className="mb-5 text-2xl font-extrabold leading-7 text-biru-uho">
            {data.title}
          </h2>

          {/* INI STRUKTUR PPID */}
          {data.path == "/struktur-ppid" ? (
            <div>
              <div
                className="isi text-sm text-other"
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></div>
              <img src={img} className="mt-4 w-full" />
            </div>
          ) : (
            // INI TENTANG PROFIL DAN LAIN LAIN
            <div
              className="isi text-sm text-other"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
          )}

          {/* INI KHUSUS UNTUK INFORMASI PUBLIK */}
          {(data.path === "/informasi-publik/berkala" ||
            data.path === "/informasi-publik/setiap-saat") && (
            <CardInfoPublik path={data.path} />
          )}

          {/* INI KHUSUS UNTUK FORMULIR */}
          {data.path.includes("formulir") && (
            <Link
              href="/formulir"
              className="mt-7 inline-block rounded bg-biru-uho px-4 py-3 text-xs text-white"
            >
              LINK FORMULIR
            </Link>
          )}
        </div>

        {/* INI GARIS */}
        <div className="col-span-12 lg:order-3">
          <hr className="mt-10 lg:mt-2" />
        </div>

        {/* INI CARD NEWS */}
        <div
          className={`${
            checkPage && "lg:order-1"
          } col-span-12 justify-end lg:order-2 lg:col-span-5 lg:flex`}
        >
          <div className="flex flex-col">
            {checkPage && (
              <div className="mb-8 w-full">
                <img
                  src={imgSamping}
                  alt="image"
                  className="aspect-[4/3]  object-cover object-center shadow"
                />
              </div>
            )}

            <div className="self-center">
              {!data.path.includes("formulir") &&
                !data.path.includes("regulasi") && <CardNews />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
