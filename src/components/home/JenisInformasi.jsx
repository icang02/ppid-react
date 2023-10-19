import { useState } from "react";
import { Link } from "react-router-dom";

const JenisInformasi = () => {
  const [activeElement, setActiveElement] = useState("informasi-berkala");

  const handleElementClick = (elementId) => {
    setActiveElement(elementId);
  };

  return (
    <section id="jenisInformasi">
      <div className="container mx-auto px-3 py-32 pt-28">
        <h5 className="mb-2 text-center font-bold text-acsent">PPID UHO</h5>
        <h2 className="text-center text-2xl font-bold">
          Jenis - Jenis informasi
        </h2>

        <div className="mt-5 flex flex-col items-center gap-2">
          <div
            onClick={() => handleElementClick("informasi-berkala")}
            className={`${
              activeElement === "informasi-berkala" && "text-acsent"
            } rounded px-7 py-3 text-sm font-semibold shadow-md`}
          >
            Informasi Berkala
          </div>
          <div
            onClick={() => handleElementClick("informasi-tersedia")}
            className={`${
              activeElement === "informasi-tersedia" && "text-acsent"
            } rounded px-7 py-3 text-sm font-semibold shadow-md`}
          >
            Informasi Tersedia Setiap Saat
          </div>
          <div
            onClick={() => handleElementClick("informasi-serta-merta")}
            className={`${
              activeElement === "informasi-serta-merta" && "text-acsent"
            } rounded px-7 py-3 text-sm font-semibold shadow-md`}
          >
            Informasi Serta Merta
          </div>
        </div>

        {activeElement === "informasi-berkala" && (
          <div className="mt-10 rounded-lg p-10 text-center shadow-lg">
            <div className="hidden">sdfsfd</div>
            <div>
              <h5 className="mb-5 text-xl font-bold">Informasi Berkala</h5>
              <p className="mb-5 text-sm text-other">
                Informasi Berkala merupakan informasi yang diperbarui kemudian
                disediakan dan diumumkan kepada publik secara rutin atau berkala
                sekurang-kurangnya setiap 6 bulan sekali.
              </p>
              <Link
                to="informasi-publik/berkala"
                className="text-sm font-medium italic text-blue-600"
              >
                Selengkapnya..
              </Link>
            </div>
          </div>
        )}

        {activeElement === "informasi-tersedia" && (
          <div className="mt-10 rounded-lg p-10 text-center shadow-lg">
            <div className="hidden">sdfsfd</div>
            <div>
              <h5 className="mb-5 text-xl font-bold">
                Informasi Tersedia Setiap saat
              </h5>
              <p className="mb-5 text-sm text-other">
                Informasi Tersedia Setiap Saat adalah informasi yang siap
                tersedia untuk bisa langsung diberikan kepada Pemohon Informasi
                Publik ketika terdapat permohonan mengajukan permohonan atas
                Informasi Publik tersebut.
              </p>
              <Link
                to="/informasi-publik/setiap-saat"
                className="text-sm font-medium italic text-blue-600"
              >
                Selengkapnya..
              </Link>
            </div>
          </div>
        )}

        {activeElement === "informasi-serta-merta" && (
          <div className="mt-10 rounded-lg p-10 text-center shadow-lg">
            <div className="hidden">aaaa</div>
            <div>
              <h5 className="mb-5 text-xl font-bold">Informasi Serta Merta</h5>
              <p className="mb-5 text-sm text-other">
                Informasi Serta Merta adalah informasi berkaitan dengan hajat
                hidup orang banyak dan ketertiban umum, serta wajib diumumkan
                secara serta merta tanpa penundaan.
              </p>
              <Link
                to="informasi-publik/serta-merta"
                className="text-sm font-medium italic text-blue-600"
              >
                Selengkapnya..
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JenisInformasi;
