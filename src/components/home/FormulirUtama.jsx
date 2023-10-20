import { Link } from "react-router-dom";
import formulirHome from "../../assets/img/formulir-home.jpg";
import { IoArrowRedo } from "react-icons/io5";

const Formulir = () => {
  return (
    <section>
      <div className="container mx-auto px-3 py-32 xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-8 ">
          <div className="w-full self-start lg:w-1/2">
            <img src={formulirHome} className="rounded border" />
          </div>

          <div className="flex-1 items-center self-start border lg:col-span-6 lg:rounded-lg lg:px-10 lg:py-12 lg:shadow-lg">
            <div className="px-5 py-6 lg:px-5 lg:py-6">
              <h5 className="mb-6 text-xl font-bold text-acsent lg:mb-7 lg:text-2xl">
                Formulir Permohonan
              </h5>
              <p className="text-sm text-other lg:text-base">
                Formulir permohonan adalah dokumen yang digunakan oleh individu
                untuk meminta informasi publik dari lembaga pendidikan tinggi
                atau universitas yang terdiri atas :
              </p>
              <div className="mt-5 flex flex-col gap-1 lg:mt-10">
                <Link
                  to="/formulir/permohonan-informasi-publik"
                  className="group relative bg-biru-uho px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm"
                >
                  <span className="inline-block w-[90%] opacity-90 group-hover:opacity-100">
                    Formulir Permohonan Informasi Publik
                  </span>
                  <span className="absolute right-5 top-[50%] translate-y-[-50%] opacity-80 transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                    <IoArrowRedo />
                  </span>
                </Link>

                <Link
                  to="/formulir/keberatan-layanan-informasi-publik"
                  className="group relative bg-biru-uho px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm"
                >
                  <span className="inline-block w-[90%] opacity-90 group-hover:opacity-100">
                    Formulir Keberatan Atas Layanan Informasi Publik
                  </span>
                  <span className="absolute right-5 top-[50%] translate-y-[-50%] opacity-80 transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                    <IoArrowRedo />
                  </span>
                </Link>

                <Link
                  to="/formulir/penyelesaian-sengketa-informasi-publik"
                  className="group relative bg-biru-uho px-5 py-4 text-xs text-white transition-all duration-500 lg:text-sm"
                >
                  <span className="inline-block w-[90%] opacity-90 group-hover:opacity-100">
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
      </div>
    </section>
  );
};

export default Formulir;
