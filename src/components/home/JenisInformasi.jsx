import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";

import config from "../../config";
import Aos from "aos";

const JenisInformasi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeElement, setActiveElement] = useState("Informasi Berkala");

  const handleElementClick = (elementId) => {
    setActiveElement(elementId);
  };

  useEffect(() => {
    Aos.init({ once: true });
    async function fetchData() {
      try {
        const response = await fetch(
          `${config.API_URL}/landing/jenis-informasi`,
        );
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="jenisInformasi">
      <div className="container mx-auto px-3 py-32 pt-28 xl:max-w-7xl">
        <h5
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="mb-2 text-center font-bold text-acsent lg:text-xl"
        >
          PPID UHO
        </h5>
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-center text-2xl font-bold lg:text-3xl"
        >
          Jenis - Jenis informasi
        </h2>

        <div className="mt-5 flex flex-col items-center justify-center gap-2 lg:mt-10 lg:flex-row">
          {loading
            ? Array(3)
                .fill(0)
                .map((item, i) => (
                  <div
                    key={i}
                    className={`rounded px-7 py-3 text-sm font-semibold shadow-md lg:text-base`}
                  >
                    <Skeleton className="w-40" />
                  </div>
                ))
            : data.map((item, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay={(i + 1) * 300}
                  key={i}
                  onClick={() => handleElementClick(item.judul)}
                  className={`${
                    activeElement === item.judul && "text-acsent"
                  } cursor-pointer rounded px-7 py-3 text-center text-sm font-semibold shadow-md lg:text-base`}
                >
                  {item.judul}
                </div>
              ))}
        </div>

        {loading ? (
          <div className="mt-10 grid grid-cols-12 rounded-lg text-center shadow-lg lg:mx-auto lg:max-w-6xl xl:text-left">
            <div className="col-span=12 hidden h-72 lg:col-span-4 xl:block">
              <Skeleton className="h-full w-full rounded-l-lg border border-r object-cover object-center" />
            </div>

            <div className="col-span-12 flex items-center border px-8 py-10 lg:col-span-8 lg:px-20">
              <div className="mx-auto xl:m-0">
                <h5 className="mb-5 text-xl font-bold lg:mb-7 lg:text-2xl">
                  <Skeleton className="w-48 lg:w-72" />
                </h5>
                <p className="mb-5 text-sm text-other lg:mb-7 lg:text-base">
                  <Skeleton
                    className="w-72 lg:w-[455px] xl:w-[580px]"
                    count={3}
                  />
                </p>
                <Link className="text-sm font-medium italic text-blue-600 lg:text-base">
                  <Skeleton className="w-32" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          data.map((item, i) => (
            <div key={i}>
              {activeElement === item.judul && (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mt-10 grid grid-cols-12 rounded-lg text-center shadow-lg lg:mx-auto lg:max-w-6xl xl:text-left"
                >
                  <div className="col-span=12 hidden h-72 lg:col-span-4 xl:block">
                    <img
                      src={`${config.APP_URL}/${item.gambar}`}
                      alt={item.gambar}
                      className="h-full w-96 rounded-l-lg border border-r object-cover object-center"
                    />
                  </div>

                  <div className="col-span-12 flex items-center border px-8 py-10 lg:col-span-8 lg:px-20">
                    <div className="">
                      <h5 className="mb-5 text-xl font-bold lg:mb-7 lg:text-2xl">
                        {item.judul}
                      </h5>
                      <p className="mb-5 text-sm text-other lg:mb-7 lg:text-base">
                        {item.isi}
                      </p>
                      <Link
                        to={item.link}
                        className="text-sm font-medium italic text-blue-600 lg:text-base"
                      >
                        Selengkapnya..
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default JenisInformasi;
