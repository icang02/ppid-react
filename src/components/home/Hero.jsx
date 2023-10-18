import heroImg from "../../assets/img/home-img.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className="h-[101vh] w-full bg-cover bg-center"
    >
      <div className="container mx-auto flex h-full items-center justify-center pt-14 text-center">
        <div className="text-white">
          <h1 className="max-w-xs text-2xl font-black leading-9">
            <span className="text-acsent">Selamat</span> Datang di PPID
            Universitas <span className="text-acsent">Halu Oleo</span>
          </h1>
          <div className="mx-auto my-10 mt-7 h-1 w-20 bg-white"></div>
          <p className="hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            aspernatur!
          </p>
          <a
            href="#jenisInformasi"
            className="rounded bg-acsent px-5 py-2.5 text-sm font-semibold"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
