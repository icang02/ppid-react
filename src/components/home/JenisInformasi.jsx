const JenisInformasi = () => {
  return (
    <section id="jenisInformasi">
      <div className="container mx-auto px-3 py-32 pt-28">
        <h5 className="mb-2 text-center font-bold text-acsent">PPID UHO</h5>
        <h2 className="text-center text-2xl font-bold">
          Jenis - Jenis informasi
        </h2>

        <div className="mt-5 flex flex-col items-center gap-2">
          <div className="rounded px-7 py-3 text-sm font-semibold text-acsent shadow-md">
            Informasi Berkala
          </div>
          <div className="rounded px-7 py-3 text-sm font-semibold shadow-md">
            Informasi Tersedia Setiap Saat
          </div>
          <div className="rounded px-7 py-3 text-sm font-semibold shadow-md">
            Informasi Serta Merta
          </div>
        </div>

        <div className="mt-10 rounded-lg p-10 text-center shadow-lg">
          <div className="hidden">sdfsfd</div>
          <div>
            <h5 className="mb-5 text-xl font-bold">Informasi Berkala</h5>
            <p className="text-other mb-5 text-sm">
              Informasi Berkala merupakan informasi yang diperbarui kemudian
              disediakan dan diumumkan kepada publik secara rutin atau berkala
              sekurang-kurangnya setiap 6 bulan sekali.
            </p>
            <a href="#" className="text-sm font-medium italic text-blue-600">
              Selengkapnya..
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JenisInformasi;
