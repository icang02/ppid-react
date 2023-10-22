import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import config from "../config";

const Footer1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${config.API_URL}/landing/footer`);
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
    <section className="-mb-0.5 bg-primary px-5 py-10">
      <div className="container mx-auto xl:max-w-5xl 2xl:max-w-6xl">
        <div className="grid grid-cols-12 gap-8 ">
          {loading
            ? Array(3)
                .fill(0)
                .map((item, i) => (
                  <div className="col-span-12 lg:col-span-4" key={i}>
                    <h6 className="mb-3 text-sm font-semibold text-white opacity-90">
                      <Skeleton />
                    </h6>
                    <Skeleton className="h-0.5 w-full" />
                    <p className="mt-4 text-xs leading-5 text-white opacity-80">
                      <Skeleton count={2} />
                    </p>
                  </div>
                ))
            : data.map((item, i) => (
                <div className="col-span-12 lg:col-span-4" key={i}>
                  <h6 className="mb-3 text-sm font-semibold text-white opacity-90">
                    {item.judul}
                  </h6>
                  <div className="h-0.5 w-full bg-acsent"></div>
                  <p className="mt-4 text-xs leading-5 text-white opacity-80">
                    {item.isi}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Footer1;
