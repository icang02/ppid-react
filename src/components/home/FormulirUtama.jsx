import { Link } from "react-router-dom";
import formulirHome from "../../assets/img/formulir-home.jpg";
import { IoArrowRedo } from "react-icons/io5";

const Formulir = () => {
  return (
    <section>
      <div className="container mx-auto px-3 py-32">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1">
            <img src={formulirHome} />
          </div>
          <div className="col-span-1 px-6">
            <h5 className="mb-6 text-xl font-bold text-acsent">
              Formulir Permohonan
            </h5>
            <p className="text-sm text-other">
              Formulir permohonan adalah dokumen yang digunakan oleh individu
              untuk meminta informasi publik dari lembaga pendidikan tinggi atau
              universitas yang terdiri atas :
            </p>
            <div className="mt-5 flex flex-col gap-1">
              <Link
                to="/formulir/permohonan-informasi-publik"
                className="group relative bg-biru-uho px-5 py-4 text-sm text-white transition-all duration-500"
              >
                <span className="inline-block w-[90%] text-xs opacity-90 group-hover:opacity-100">
                  Formulir Permohonan Informasi Publik
                </span>
                <span className="absolute right-5 top-[50%] translate-y-[-50%] opacity-80 transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                  <IoArrowRedo />
                </span>
              </Link>

              <Link
                to="/formulir/keberatan-layanan-informasi-publik"
                className="group relative bg-biru-uho px-5 py-4 text-sm text-white transition-all duration-500"
              >
                <span className="inline-block w-[90%] text-xs opacity-90 group-hover:opacity-100">
                  Formulir Keberatan Atas Layanan Informasi Publik
                </span>
                <span className="absolute right-5 top-[50%] translate-y-[-50%] opacity-80 transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                  <IoArrowRedo />
                </span>
              </Link>

              <Link
                to="/formulir/penyelesaian-sengketa-informasi-publik"
                className="group relative bg-biru-uho px-5 py-4 text-sm text-white transition-all duration-500"
              >
                <span className="inline-block w-[90%] text-xs opacity-90 group-hover:opacity-100">
                  Formulir Penyelesaian Sengketa Informasi Publik
                </span>
                <span className="absolute right-5 top-[50%] translate-y-[-50%] opacity-80 transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                  <IoArrowRedo />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulir;
