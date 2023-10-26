import { useEffect, useState } from "react";
import Aos from "aos";

import heroImg from "src/assets/img/home-img.png";
import config from "src/config";

const Hero = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({});

    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/landing/ppid`);
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
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className="h-[100vh] bg-cover bg-center"
    >
      <div className="container mx-auto flex h-full items-center justify-center pt-8 text-center lg:pt-20 xl:max-w-5xl xl:justify-start 2xl:max-w-6xl 2xl:pt-8">
        <div className="text-white lg:text-left">
          <h1
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
            className="w-full text-2xl font-black leading-9 lg:w-[600px] lg:max-w-4xl lg:text-5xl lg:font-extrabold lg:leading-tight"
          >
            <span className="text-acsent">Selamat</span> Datang di PPID
            Universitas <span className="text-acsent">Halu Oleo</span>
          </h1>

          <div
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="1000"
            className="mx-auto my-10 mt-7 h-1.5 w-20 rounded-lg bg-white lg:mx-0 lg:mt-9"
          ></div>

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
            className="hidden max-w-2xl text-base lg:block"
          >
            {loading ? (
              <div className="flex items-center justify-start">
                {Array(3)
                  .fill(0)
                  .map((item, i) => (
                    <div
                      key={i}
                      className="mx-[5px] h-[10px] w-[10px] animate-dot-animation rounded-[50%] bg-white opacity-0"
                    ></div>
                  ))}
              </div>
            ) : (
              <div className="leading-7">{data.isi}</div>
            )}
          </div>

          <a
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1000"
            href="#jenisInformasi"
            className="inline-block rounded bg-acsent px-5 py-2.5 text-sm font-semibold tracking-widest lg:mt-12 lg:px-6 lg:py-3"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
