import React from "react";
import "./css/Homepage.css";
import FoodGallery from "../../Components/FoodGallery/FoodGallery";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <section id="hero">
        <div className="homepage-layout">
          <div className="homepage-hero large">
            <div className="overlay-content">
              <div className="label">
                <div className="p-3 px-4">
                  <h1 className="oswald m-0 nb-color-accent-primary">
                    <i className="bi bi-award-fill me-2"></i>JAGONYA NASI KOTAK
                    ENAK, MURAH DAN MEWAH
                  </h1>
                  <p className="nb-color-accent-primary roboto-condensed mt-3">
                    <span className="oswald fw-bold">RICE BOX</span> menerima
                    pemesanan Nasi Kotak untuk Berbagai macam Acara. Menjaga
                    citarasa Tradisional Khas Sunda yang Enak dimakan oleh
                    seluruh Lidah Orang Indonesia.{" "}
                    <span className="oswald fw-bold">RICE BOX</span> juga
                    bekerja sama dengan Bisnis Percetakan Lokal agar kamu bisa
                    Cetak Custom Box sesuai dengan keinginanmu.
                  </p>
                  <a
                    href="#paket"
                    className="mb-3 me-2 text-decoration-none nb-bg-accent-primary text-light border-0 py-2 px-3 rounded-1"
                  >
                    <i className="bi bi-tags-fill"></i> Lihat Paket
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=62895391011797&text=Hai%2C%20Rice%20Box.%20%0ASaya%20Ingin%20berkonsultasi%20terkait%20Nasi%20Kotak%20dan%20Ingin%20Mengetahui%20Paket%20dan%20Rentang%20Harga%20yang%20Tersedia."
                    className="mb-3 text-decoration-none nb-bg-accent-secondary text-light border-0 py-2 px-3 rounded-1"
                  >
                    <i className="bi bi-telephone-fill"></i> Konsultasi
                  </a>
                  <small className="d-block mt-3 nb-color-accent-primary">
                    <i className="bi bi-info-circle-fill"></i> Untuk saat ini{" "}
                    <span className="oswald">RICE BOX</span> hanya Melayani
                    daerah Bandung & Sekitarnya
                  </small>
                </div>
              </div>
              <div className="decor">
                <div className="backdrop">
                  <img
                    src="/resources/images/assets/hero-asset.png"
                    alt="Hero Asset"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-hero full">
            <div className="backdrop">
              <img
                src="/resources/images/assets/hero-asset-4.png"
                alt="Hero asset 4"
              />
            </div>
            <div className="content">
              <div className="px-2">
                <h1 className="oswald nb-color-accent-primary m-0">
                  <i className="bi bi-award-fill"></i> JAGONYA NASI KOTAK ENAK,
                  MURAH DAN MEWAH
                </h1>
                <p className="nb-color-accent-primary roboto-condensed">
                  <span className="oswald fw-bold">RICE BOX</span> menerima
                  pemesanan Nasi Kotak untuk Berbagai macam Acara. Menjaga
                  citarasa Tradisional Khas Sunda yang Enak dimakan oleh seluruh
                  Lidah Orang Indonesia.
                </p>
                <a
                  href="#paket"
                  className="mb-3 me-2 text-decoration-none nb-bg-accent-primary text-light border-0 py-2 px-3 rounded-1"
                >
                  <i className="bi bi-tags-fill"></i> Lihat Paket
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=62895391011797&text=Hai%2C%20Rice%20Box.%20%0ASaya%20Ingin%20berkonsultasi%20terkait%20Nasi%20Kotak%20dan%20Ingin%20Mengetahui%20Paket%20dan%20Rentang%20Harga%20yang%20Tersedia."
                  className="mb-3 text-decoration-none nb-bg-accent-secondary text-light border-0 py-2 px-3 rounded-1"
                >
                  <i className="bi bi-telephone-fill"></i> Konsultasi
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-none d-md-block"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e7d2b9"
            fill-opacity="1"
            d="M0,128L48,106.7C96,85,192,43,288,64C384,85,480,171,576,176C672,181,768,107,864,90.7C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section id="paket" className="pt-4 px-4">
        <h4 className="text-center m-0">Jelajahi Paket Catering</h4>
        <p className="text-center mb-4">
          Kami sedang melaksanakan Photo Produk jadi Untuk Saat ini Gambar Hanya
          Ilustrasi ya, Konsultasi Lebih lanjut untuk mendapatkan Gambar Yang
          Aktual.
        </p>
        <div className="px-4">
          <FoodGallery />
        </div>
      </section>
      <section id="about" className="mt-4 pt-4 mb-4 pb-4">
        <div className="px-4 mt-4 pt-4">
          <h4 className="text-center mt-3">
            Kenapa Memilih <span className="oswald fw-bold">RICE BOX</span>?
          </h4>
          <p className="text-center">
            <span className="oswald fw-bold">RICE BOX</span> seperti namanya
            adalah Jasa Layanan Catering Budget yang menawarkan pelayanan dan
            pengerjaan cepat. Kami tidak mengintimidasi Pelanggan dengan
            Menetapkan minimum pemesanan yang ekstensif, kamu bahkan bisa
            berkonsultasi dengan CS untuk memesan dibawah Minimum Pemesanan
            dengan beberapa penyesuaian.{" "}
            <span className="oswald fw-bold">RICE BOX</span> juga satu - satunya
            jasa Penyedia Nasi Kotak yang menerima Custom Box sesuai keinginan
            Pelanggan, jadi cocok untuk Acara seperti Akikah atau Syukuran
            Khitanan. Cuma di <span className="oswald fw-bold">RICE BOX</span>{" "}
            juga kamu bisa Request menu semau kamu dengan berkonsultasi dengan
            CS.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=62895391011797&text=Hai%2C%20Rice%20Box.%20%0ASaya%20Ingin%20berkonsultasi%20terkait%20Nasi%20Kotak%20dan%20Ingin%20Mengetahui%20Paket%20dan%20Rentang%20Harga%20yang%20Tersedia."
            className="mb-3 text-decoration-none d-block m-auto w-fit-content nb-bg-accent-secondary text-light border-0 py-2 px-3 rounded-1"
          >
            <i className="bi bi-telephone-fill"></i> Konsultasi
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
