import { IoTodaySharp } from "react-icons/io5";
import img from "../assets/img/berita.jpg";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const filteredData = res.data.filter((item) => item.id < 5);
        setData(filteredData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="my-10 rounded-lg shadow-lg">
      <div className="border-b-[3px] border-black bg-[#EDEDED] px-4 py-4 font-medium">
        Berita & Informasi Terbaru
      </div>

      <div className="pb-3 pt-2">
        {data.map((item, i) => (
          <div>
            <div className="flex items-start gap-4 p-4" key={i}>
              <img
                src={img}
                className="aspect-[4/3] w-24 rounded object-cover"
              />
              <div>
                <Link
                  to="/berita/slug-berita-1"
                  className="mb-1.5 inline-block font-bold leading-4 hover:underline"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, temporibus!
                </Link>
                <div className="flex items-center gap-1 text-xs text-[#6C757D]">
                  <IoTodaySharp /> 2023-09-22
                </div>
              </div>
            </div>
            {i < data.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNews;
