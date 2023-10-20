import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import calculatorBg from "../../assets/images/calculator-bg.jpg";

const Tatacara = () => {
  return (
    <section
      style={{ backgroundImage: `url(${calculatorBg})` }}
      className="bg-cover bg-center"
    >
      <div className="container mx-auto px-3 py-24 xl:max-w-7xl">
        <h2 className="text-center text-2xl font-bold text-white lg:text-3xl">
          Tata Cara <span className="text-acsent">Permohonan</span>
        </h2>

        <div className="mt-12 grid grid-cols-12 justify-center gap-10 lg:mt-16 lg:px-10">
          <div className="col-span-12 px-20 lg:col-span-3 lg:px-0">
            <img
              src={img1}
              className="w-full cursor-pointer border-[5px] border-white duration-300 hover:brightness-50"
            />
            <h6 className="mt-5 text-center text-sm font-bold text-white lg:text-base">
              Tata Cara Permohonan Informasi Publik
            </h6>
          </div>
          <div className="col-span-12 px-20 lg:col-span-3 lg:px-0">
            <img
              src={img2}
              className="w-full cursor-pointer border-[5px] border-white duration-300 hover:brightness-50"
            />
            <h6 className="mt-5 text-center text-sm font-bold text-white lg:text-base">
              Tata Cara Mengajukan Keberatan
            </h6>
          </div>
          <div className="col-span-12 px-20 lg:col-span-3 lg:px-0">
            <img
              src={img3}
              className="w-full cursor-pointer border-[5px] border-white duration-300 hover:brightness-50"
            />
            <h6 className="mt-5 text-center text-sm font-bold text-white lg:text-base">
              Tata Cara Pengajuan Permohonan Sengketa
            </h6>
          </div>
          <div className="col-span-12 px-20 lg:col-span-3 lg:px-0">
            <img
              src={img4}
              className="w-full cursor-pointer border-[5px] border-white duration-300 hover:brightness-50"
            />
            <h6 className="mt-5 text-center text-sm font-bold text-white lg:text-base">
              Prosedur Permohonan Penyelesaian Sengketa Informasi
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tatacara;
