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
      <div className="container mx-auto px-3 py-24">
        <h2 className="text-center text-2xl font-bold text-white">
          Tata Cara <span className="text-acsent">Permohonan</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 px-5">
          <div className="col-span-1">
            <img src={img1} className="w-full border-[5px] border-white" />
            <h6 className="mt-5 text-center font-bold text-white">
              Tata Cara Permohonan Informasi Publik
            </h6>
          </div>
          <div className="col-span-1">
            <img src={img2} className="w-full border-[5px] border-white" />
            <h6 className="mt-5 text-center font-bold text-white">
              Tata Cara Mengajukan Keberatan
            </h6>
          </div>
          <div className="col-span-1">
            <img src={img3} className="w-full border-[5px] border-white" />
            <h6 className="mt-5 text-center font-bold text-white">
              Tata Cara Pengajuan Permohonan Sengketa
            </h6>
          </div>
          <div className="col-span-1">
            <img src={img4} className="w-full border-[5px] border-white" />
            <h6 className="mt-5 text-center font-bold text-white">
              Prosedur Permohonan Penyelesaian Sengketa Informasi
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tatacara;
