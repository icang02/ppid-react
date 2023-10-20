import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img from "../../assets/img/berita.jpg";
import CardNews from "../CardNews";
import CardInfoPublik from "../CardInfoPublik";

const Content = ({ data, breadcrumb }) => {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className="flex items-center gap-0.5 text-xs text-other">
        <Link to="/">Beranda</Link> <IoChevronForwardOutline />
        {breadcrumb}
      </div>

      <hr className="mb-5 mt-1" />

      <div className="grid grid-cols-1">
        <div className="col-span-1">
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
          {data.path == "/formulir" && (
            <Link
              href="/formulir"
              className="mt-7 inline-block rounded bg-biru-uho px-4 py-3 text-xs text-white"
            >
              LINK FORMULIR
            </Link>
          )}
        </div>

        {/* INI GARIS */}
        <div className="col-span-1">
          <hr className="mt-10" />
        </div>

        {/* INI CARD NEWS */}
        <div className="col-span-1">
          {data.path != "/formulir" && <CardNews />}
        </div>
      </div>
    </div>
  );
};

export default Content;
