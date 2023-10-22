const Hero = ({ data }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.bgHero})` }}
      className="flex h-96 items-center justify-center bg-cover bg-center pt-20 lg:pt-12 xl:h-[410px]"
    >
      <div>
        <h1 className="px-3 text-center text-xl font-extrabold text-white xl:text-3xl">
          {data.titleMenu}
        </h1>
        <div className="h mx-auto mt-4 h-1.5 w-20 rounded-lg bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
