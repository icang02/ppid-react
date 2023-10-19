import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const CardInfoPublik = ({ path }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleElement = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // Saat diklik lagi, elemen disembunyikan
    } else {
      setActiveIndex(index);
    }
  };

  let data = [];
  if (path == "/informasi-publik/berkala") {
    data = [
      {
        id: 1,
        title: "Informasi Tentang Profil Universitas Halu Oleo",
        body: "Untuk mengetahui informasi lebih lanjut silahkan mengunjungi website resmi Universitas Halu Oleo melalui link berikut : uho.ac.id.",
      },
      {
        id: 2,
        title: "Daftar Fakultas di Universitas Halu Oleo",
        body: "Daftar Fakultas Universitas Halu Oleo dapat dilihat pada tautan berikut : Info Fakultas UHO",
      },
    ];
  } else if (path == "/informasi-publik/setiap-saat") {
    data = [
      {
        id: 1,
        title:
          "Informasi Tentang Peraturan, Keputusan dan/atau Kebijakan Universitas Halu Oleo",
        body: "Tersedia di unit kerja terkait, jika ingin memperoleh informasi terkait peraturan dan keputusan dapat mengisi formulirr informasi publik.",
      },
    ];
  }

  return (
    <div className="mt-6 p-5 text-sm shadow-lg">
      {data.map((item, i) => (
        <div key={item.id}>
          <div
            className="relative py-3 font-semibold"
            onClick={() => toggleElement(i)}
          >
            <h6
              className={`${
                activeIndex === i && "text-acsent"
              } w-[90%] cursor-pointer`}
            >
              {item.title}
            </h6>
            <span
              className={`${
                activeIndex === i && "rotate-90"
              } absolute right-0 top-[50%] -translate-y-1/2 transform transition-all duration-300`}
            >
              <IoChevronForwardOutline />
            </span>
          </div>

          <div
            className={`transition-height duration-500 ease-in-out ${
              activeIndex === i ? "max-h-[1000px]" : "max-h-0"
            } overflow-hidden`}
          >
            {item.body}
          </div>

          {i < data.length - 1 && (
            <hr
              className={`${
                activeIndex === i && "mt-3"
              } transition-all duration-500`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardInfoPublik;
