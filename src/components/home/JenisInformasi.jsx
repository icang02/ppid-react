import { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/img/informasi berkala.png";
import img2 from "../../assets/img/informasi sedia tiap saat.png";
import img3 from "../../assets/img/informasi serta merta.png";

const JenisInformasi = () => {
  const [activeElement, setActiveElement] = useState("Informasi Berkala");

  const handleElementClick = (elementId) => {
    setActiveElement(elementId);
  };

  const data = [
    {
      title: "Informasi Berkala",
      content:
        "Informasi Berkala merupakan informasi yang diperbarui kemudian disediakan dan diumumkan kepada publik secara rutin atau berkala sekurang-kurangnya setiap 6 bulan sekali.",
      img: img1,
      path: "/informasi-publik/berkala",
    },
    {
      title: "Informasi Tersedia Setiap Saat",
      content:
        "Informasi Tersedia Setiap Saat adalah informasi yang siap tersedia untuk bisa langsung diberikan kepada Pemohon Informasi Publik ketika terdapat permohonan mengajukan permohonan atas Informasi Publik tersebut.",
      img: img2,
      path: "/informasi-publik/setiap-saat",
    },
    {
      title: "Informasi Serta Merta",
      content:
        "Informasi Serta Merta adalah informasi berkaitan dengan hajat hidup orang banyak dan ketertiban umum, serta wajib diumumkan secara serta merta tanpa penundaan.",
      img: img3,
      path: "/informasi-publik/serta-merta",
    },
  ];

  return (
    <section id="jenisInformasi">
      <div className="container mx-auto px-3 py-32 pt-28 xl:max-w-7xl">
        <h5 className="mb-2 text-center font-bold text-acsent lg:text-xl">
          PPID UHO
        </h5>
        <h2 className="text-center text-2xl font-bold lg:text-3xl">
          Jenis - Jenis informasi
        </h2>

        <div className="mt-5 flex flex-col items-center justify-center gap-2 lg:mt-10 lg:flex-row">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => handleElementClick(item.title)}
              className={`${
                activeElement === item.title && "text-acsent"
              } cursor-pointer rounded px-7 py-3 text-sm font-semibold shadow-md lg:text-base`}
            >
              {item.title}
            </div>
          ))}
        </div>

        {data.map((item, i) => (
          <div key={i}>
            {activeElement === item.title && (
              <div className="mt-10 grid grid-cols-12 rounded-lg text-center shadow-lg lg:mx-auto lg:max-w-6xl xl:text-left">
                <div className="col-span=12 hidden h-72 lg:col-span-4 xl:block">
                  <img
                    src={item.img}
                    alt="image"
                    className="h-full w-96 rounded-l-lg border border-r object-cover object-center"
                  />
                </div>

                <div className="col-span-12 flex items-center border px-8 py-10 lg:col-span-8 lg:px-20">
                  <div className="">
                    <h5 className="mb-5 text-xl font-bold lg:mb-7 lg:text-2xl">
                      {item.title}
                    </h5>
                    <p className="mb-5 text-sm text-other lg:mb-7 lg:text-base">
                      {item.content}
                    </p>
                    <Link
                      to={item.path}
                      className="text-sm font-medium italic text-blue-600 lg:text-base"
                    >
                      Selengkapnya..
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JenisInformasi;
