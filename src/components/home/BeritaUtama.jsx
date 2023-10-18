import berita from "../../assets/img/berita.jpg";

import { IoArrowForward, IoTodaySharp } from "react-icons/io5";

const BeritaUtama = () => {
  return (
    <section>
      <div className="container mx-auto px-3 py-32 pt-28">
        <h5 className="mb-2 text-center font-bold text-acsent">PPID UHO</h5>
        <h2 className="text-center text-2xl font-bold">Berita & Informasi</h2>

        <div className="mt-12">
          <a className="mb-3 flex items-center justify-end text-xs opacity-90 transition-all duration-500 hover:opacity-100">
            Lihat Semua
            <span>
              <IoArrowForward />
            </span>
          </a>

          <div className="grid grid-cols-1 gap-7">
            <div className="col-span-1">
              <div className="rounded-lg shadow-lg">
                <img
                  src={berita}
                  className="aspect-[16/10] rounded-t-lg object-cover object-center"
                />
                <div className="mt-5 px-5 pb-5">
                  <h6 className="font-bold leading-6">
                    UHO Kembali Kukuhkan Empat Guru Besar
                  </h6>
                  <div className="mt-1 flex items-center gap-1 text-xs text-[#6C757D]">
                    <IoTodaySharp /> 2023-09-22
                  </div>
                  <p className="text-other mt-3 text-sm">
                    Kendari, Pusat Media UHO. Senat Guru Besar Universitas Halu
                    Oleo (UHO) Kembali menyelengga...
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="rounded-lg shadow-lg">
                <img
                  src={berita}
                  className="aspect-[16/10] rounded-t-lg object-cover object-center"
                />
                <div className="mt-5 px-5 pb-5">
                  <h6 className="font-bold leading-6">
                    UHO Kembali Kukuhkan Empat Guru Besar
                  </h6>
                  <div className="mt-1 flex items-center gap-1 text-xs text-[#6C757D]">
                    <IoTodaySharp /> 2023-09-22
                  </div>
                  <p className="text-other mt-3 text-sm">
                    Kendari, Pusat Media UHO. Senat Guru Besar Universitas Halu
                    Oleo (UHO) Kembali menyelengga...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeritaUtama;
