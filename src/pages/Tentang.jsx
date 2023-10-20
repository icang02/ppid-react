import { Navbar } from "../components/Navbar";
import Hero from "../components/formulir/Hero";
import Content from "../components/formulir/Content";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import { useEffect } from "react";

import bgHero from "../assets/img/rektorat2.png";
import tuguImg from "../assets/img/tugu.png";
import regulasiBg from "../assets/img/bg-regulasi.png";
import { Link, useLocation } from "react-router-dom";

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
  } else if (currentPath === "/informasi-publik/dikecualikan") {
    data = {
      bgHero: tuguImg,
      titleMenu: "Informasi Yang Dikecualikan",
      title: "Informasi Yang Dikecualikan",
      content:
        "<h6>Informasi publik yang dikecualikan tidak dapat diberikan kepada pemohon informasi publik.</h6><p>Adapun Daftar Informasi yang Dikecualikan di Universitas Halu Oleo sebagai berikut :</p><ol><li>Soal dan Jawaban Tes Ujian Masuk Mahasiswa.</li><li>Kriteria Pengolahan Nilai, Penyajian Data, dan Pertimbangan Seleksi Ujian Mandiri.</li><li>Data Pribadi : <ul><li>Pegawai (Dosen dan Tenaga Kependidikan);</li><li>Mahasiswa;</li><li>Alumni.</li></ul></li><li>Dokumen Audit Internal, Laporan Hasil Audit Internal, dan Laporan Keuangan yang Belum diAudit (Unaudited).</li><li>Rancangan peraturan dan keputusan.</li><li>Identitas Informan, Pelapor, dan Korban.</li><li>Dokumen penilaian hasil pengujian skripsi, tesis, dan disertasi dari penilai (Hasil review proposal dan rekomendasi penilai).</li><li>Konfigurasi Data Centre, Database dan Aplikasi, serta Username dan Password.</li></ol>",
      path: currentPath,
    };
  } else if (currentPath === "/regulasi") {
    data = {
      bgHero: regulasiBg,
      titleMenu: "Regulasi",
      title: "Regulasi PPID",
      content:
        '<h5 style="text-align: center;">Regulasi Mengenai Keterbukaan Informasi Publik</h5> <ul> <li><a href="https://drive.google.com/file/d/1JuE3iA-XTkse99MolMovn5UGlX3lgafj/view?usp=sharing" target="_blank" rel="noopener">Undang-Undang Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik</a></li> <li><a href="https://drive.google.com/file/d/1UesmKcx2GA71Ld4-lwvF37LhtffVbLdg/view?usp=sharing" target="_blank" rel="noopener">Undang-Undang Nomor 25 Tahun 2009 Tentang Pelayanan Publik</a></li> <li><a href="https://drive.google.com/file/d/1I7hkz65HzNhKO7mkmc5XAYcqO5964Y5f/view?usp=sharing" target="_blank" rel="noopener">Undang-Undang Nomor 43 Tahun 2009 Tentang Kearsipan</a></li> <li><a href="https://drive.google.com/file/d/1ywY0t_mxdUz_QdNhzSV92SE0QeRJys9L/view?usp=sharing" target="_blank" rel="noopener">Peraturan Pemerintah Republik Indonesia Nomor 61 Tahun 2010 tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik</a></li> <li><a href="https://drive.google.com/file/d/1xYNTMfYXhwfAjwrEee30Zlu_sEC2P2I5/view?usp=sharing" target="_blank" rel="noopener">Peraturan Komisi Informasi Pusat Nomor 01 Tahun 2022 Tentang Monitoring dan Evaluasi Keterbukaan Informasi Publik</a></li> <li><a href="https://drive.google.com/file/d/1kSXMnSFcqKn8IR93Pqx7uEGObO-_7DIH/view?usp=sharing" target="_blank" rel="noopener">Peraturan Komisi Informasi Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik</a></li> <li><a href="https://drive.google.com/file/d/1Z8Ev63rF56Q3sIAMxf91Ra1fs-E4JnLK/view?usp=sharing" target="_blank" rel="noopener">Peraturan Komisi Informasi Pusat Nomor 01 Tahun 2017 tentang Pengklasifikasian Informasi Publik</a></li> <li><a href="https://drive.google.com/file/d/1nRvJTo0XvG_J7-ge3nBT1wrYW0qDS2l8/view?usp=sharing" target="_blank" rel="noopener">Peraturan Komisi Informasi Nomor 1 Tahun 2013 tentang Prosedur Penyelesaian Sengketa Informasi Publik</a></li> <li><a href="https://drive.google.com/file/d/1zkvC6PxTUGlKdQPMEnhFd4wwok6bbKy0/view?usp=sharing" target="_blank" rel="noopener">Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 41 Tahun 2020 tentang Layanan Informasi Publik di Kementerian Pendidikan dan Kebudayaan</a></li> </ul>',
      path: currentPath,
    };
  }

  const breadcrumb = (
    <>
      <Link
        to={data.path}
        className="text-acsent"
        onClick={() => window.scrollTo(0, 0)}
      >
        {data.titleMenu}
      </Link>
    </>
  );

  return (
    <>
      <Navbar />
      <Hero data={data} />
      <Content data={data} breadcrumb={breadcrumb} />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Formulir;
