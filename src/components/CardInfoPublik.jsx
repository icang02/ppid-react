import config from "../config";
import Skeleton from "react-loading-skeleton";

import { useEffect, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const CardInfoPublik = ({ path }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/list${path}`);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);

        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [path]);

  const toggleElement = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // Saat diklik lagi, elemen disembunyikan
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-6 p-5 text-sm shadow-lg">
      {loading
        ? Array(3)
            .fill(0)
            .map((item, i) => (
              <div key={i}>
                <div className="relative py-3 font-semibold">
                  <h6 className={` w-[90%] cursor-pointer`}>
                    <Skeleton />
                  </h6>
                  <span
                    className={` absolute right-0 top-[50%] -translate-y-1/2 transform transition-all duration-300`}
                  >
                    <Skeleton width={17} />
                  </span>
                </div>

                {i < data.length - 1 && <hr />}
              </div>
            ))
        : data.map((item, i) => (
            <div key={i}>
              <div
                className="relative cursor-pointer py-3 font-semibold"
                onClick={() => toggleElement(i)}
              >
                <h6 className={`${activeIndex === i && "text-acsent"} w-[90%]`}>
                  {item.judul}
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
                className={`transition-height isi duration-500 ease-in-out ${
                  activeIndex === i ? "max-h-[1000px]" : "max-h-0"
                } overflow-hidden`}
              >
                <div dangerouslySetInnerHTML={{ __html: item.isi }}></div>
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
