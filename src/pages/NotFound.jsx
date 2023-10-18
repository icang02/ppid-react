import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-biru-uho">
      <div className="text-center text-sm">
        <h6 className="mb-3 text-white">Halaman tidak ditemukan</h6>
        <Link to="/" className="text-acsent">
          Kembali Ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
