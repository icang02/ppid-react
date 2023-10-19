import { Navbar } from "../components/Navbar";
import Hero from "../components/formulir/Hero";
import Content from "../components/formulir/Content";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import { useEffect } from "react";

import bgHero from "../assets/img/rektorat2.png";
import tuguImg from "../assets/img/tugu.png";
import { useLocation } from "react-router-dom";

const Formulir = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPath = useLocation().pathname;

  let data = {};

  if (currentPath === "/profil") {
    data = {
      bgHero,
      titleMenu: "Profil",
      title: "Profil Pejabat Pengelola Informasi dan Dokumentasi (PPID)",
      content:
        "<p>PPID adalah kepanjangan dari Pejabat Pengelola Informasi dan Dokumentasi, yang berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh Badan Publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik. Dengan keberadaan PPID maka masyarakat yang akan menyampaikan permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.</p><p>Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan dan/ atau pelayanan informasi di badan publik.</p>",
      path: currentPath,
    };
  } else if (currentPath === "/visi-misi") {
    data = {
      bgHero,
      titleMenu: "Visi & Misi",
      title: "Visi dan Misi",
      content:
        "<h6>Visi PPID</h6><p>Menjadi penyedia layanan informasi publik yang profesional, transparan dan akuntabel sesuai dengan ketentuan peraturan perundang-undangan.</p><h6>Misi PPID</h6><ol><li>Meningkatkan tata kelola informasi publik.</li><li>Meningkatkan sumber daya manusia di bidang pelayanan informasi publik.</li><li>Mengembangkan kualitas sistem informasi pelayanan publik.</li></ol>",
      path: currentPath,
    };
  } else if (currentPath === "/tugas-fungsi") {
    data = {
      bgHero,
      titleMenu: "Tugas & Fungsi",
      title: "Tugas dan Fungsi",
      content:
        "<h6>Tugas PPID</h6><p>PPID bertugas mengkoordinasikan pengumpulan seluruh Informasi Publik dari setiap unit kerja di lingkungan Universitas Halu Oleo yang meliputi; informasi yang wajib disediakan dan diumumkan secara berkala; informasi yang wajib tersedia setiap saat; informasi terbuka lainnya yang diminta Pemohon Informasi Publik.</p><h6>Fungsi PPID</h6><ol><li>Penghimpunan informasi publik di lingkungan Universitas Halu Oleo.</li><li>Penyampaian Informasi publik yang diperoleh dari seluruh unit kerja di lingkungan Universitas Halu Oleo.</li><li>Penyediaann dan pemberian layanan informasi publik yang bersifat terbuka.</li><li>Penyelesaian sangketa pelayanan Informasi.</li></ol>",
      path: currentPath,
    };
  } else if (currentPath === "/struktur-ppid") {
    data = {
      bgHero,
      titleMenu: "Struktur PPID",
      title: "Struktur Organisasi PPID UHO",
      content:
        "<p>Struktur PPID Universitas Halu Oleo dapat dilihat pada gambar berikut.</p>",
      path: currentPath,
    };
  } else if (currentPath === "/informasi-publik/berkala") {
    data = {
      bgHero: tuguImg,
      titleMenu: "Informasi Berkala",
      title:
        "Informasi Publik Yang Wajib Disediakan dan Diumumkan Secara Berkala",
      content:
        "<p>Setiap Badan Publik wajib mengumumkan informasi publik secara berkala. Informasi berkala merupakan informasi yang diperbaharui kemudian disediakan dan diumumkan kepada publik secara rutin atau berkala sekurang-kurangnya setiap 6 bulan sekali. Informasi berkala mengenai kegiatan dan kinerja Badan Publik terkait; informasi mengenai laporan keuangan; dan atau informasi lain yang diatur dalam peraturan perundang-undangan. Adapun informasi berkala yang ada di Universitas Halu Oleo sebagai berikut :</p>",
      path: currentPath,
    };
  } else if (currentPath === "/informasi-publik/setiap-saat") {
    data = {
      bgHero: tuguImg,
      titleMenu: "Informasi Tersedia Setiap Saat",
      title: "Informasi Tersedia Setiap Saat",
      content:
        "<p>Informasi Tersedia Setiap Saat adalah informasi yang siap tersedia untuk bisa langsung diberikan kepada Pemohon Informasi Publik ketika terdapat permohonan mengajukan permohonan atas Informasi Publik tersebut.</p>",
      path: currentPath,
    };
  }

  return (
    <>
      <Navbar />
      <Hero data={data} />
      <Content data={data} />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Formulir;
