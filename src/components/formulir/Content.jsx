import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className="flex items-center gap-0.5 text-xs text-other">
        Beranda <IoChevronForwardOutline />
        <Link to="/formulir" className="text-acsent">
          {data.titleMenu}
        </Link>
      </div>

      <hr className="mb-5 mt-1" />

      <h2 className="mb-4 text-2xl font-bold text-biru-uho">{data.title}</h2>
      <div className="text-sm text-other">
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>

      {data.link == "/formulir" && (
        <Link
          href="/formulir"
          className="mt-7 inline-block rounded bg-biru-uho px-4 py-3 text-xs text-white"
        >
          BUAT PERMOHONAN
        </Link>
      )}

      <hr className="mt-10" />
    </div>
  );
};

export default Content;
