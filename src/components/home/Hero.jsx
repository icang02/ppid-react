import heroImg from "../../assets/img/home-img.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className="h-[100vh] bg-cover bg-center"
    >
      <div className="container mx-auto flex h-full items-center justify-center pt-8 text-center xl:max-w-5xl xl:justify-start 2xl:max-w-6xl">
        <div className="text-white lg:text-left">
          <h1 className="max-w-xs text-2xl font-black leading-9 lg:max-w-4xl lg:text-5xl lg:font-extrabold lg:leading-tight">
            <span className="text-acsent">Selamat</span> Datang di PPID
            Universitas <span className="text-acsent">Halu Oleo</span>
          </h1>

          <div className="mx-auto my-10 mt-7 h-1.5 w-20 rounded-lg bg-white lg:mx-0 lg:mt-9"></div>

          <p className="hidden max-w-2xl text-base lg:block">
            PPID merupakan saranan layanan bagi permohonan informasi publik dan
            sebagai salah satu wujud pelaksanaan keterbukaan informasi di
            Universitas Halu Oleo.
          </p>

          <a
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
