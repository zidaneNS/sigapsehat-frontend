import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../Asset/hero.jpg';
import AbtUs from '../Asset/aboutus.jpg';
const Hero = () => {
  return (
    <div className="h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImage})`
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Selamat Datang di <span className="text-blue-400">SigapSehat</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 mt-5">
            Solusi kesehatan Anda dalam genggaman. Dapatkan diagnosa cepat dan akurat.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/diagnose"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Mulai Diagnosa
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-32" id="about">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* About Us Image */}
            <div className="w-full md:w-1/2">
              <img
                src= {AbtUs}
                alt="About Us"
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* About Us Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Tentang Kami
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-6">
                <span className="text-blue-600 font-semibold">SigapSehat</span> adalah penyedia
                layanan untuk diagnosa awal penyakit, khususnya penyakit pencernaan modern. Diagnosa menggunakan
                sistem pakar dengan basis pengetahuan dari pakar profesional.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Tim kami terdiri dari profesional medis dan teknisi berpengalaman yang berdedikasi
                untuk meningkatkan kualitas hidup masyarakat melalui inovasi di bidang kesehatan.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Produk dan Layanan Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Produk dan Layanan
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 p-6 bg-white text-blue-600 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Diagnosa</h4>
              <p className="text-gray-600">
                Diagnosa cepat dan akurat untuk kesehatan Anda.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-white text-blue-600 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Telekonsultasi</h4>
              <p className="text-gray-600">
                Konsultasi langsung dengan dokter ahli melalui platform kami.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-white text-blue-600 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Rekam Medis</h4>
              <p className="text-gray-600">
                Manajemen data medis Anda yang aman dan terintegrasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Tentang SigapSehat</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                SigapSehat adalah platform kesehatan modern yang menyediakan layanan diagnosa, konsultasi medis, dan manajemen rekam medis dengan teknologi terbaik.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Navigasi Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/home" className="hover:text-blue-400">Beranda</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-400">Tentang Kami</Link>
                </li>
                <li>
                  <Link to="/diagnose" className="hover:text-blue-400">Diagnosa</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-400">Kontak</Link>
                </li>
              </ul>
            </div>

                {/* Contact Section */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
                  <p className="text-gray-300 text-sm">
                    <span className="block">Alamat: Jl. Sehat Selalu No. 1, Jakarta</span>
                    <span className="block">Email: support@sigapsehat.com</span>
                    <span className="block">Telepon: +62 812 3456 7890</span>
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-blue-400">
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="#" className="hover:text-blue-400">
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="#" className="hover:text-blue-400">
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="text-center border-t border-gray-700 pt-6 mt-8 text-sm">
                <p>&copy; 2024 SigapSehat. All rights reserved. | <Link to="/privacy" className="hover:text-blue-400">Kebijakan Privasi</Link> | <Link to="/terms" className="hover:text-blue-400">Syarat dan Ketentuan</Link></p>
              </div>
            </div>
        </footer>

    </div>
  );
};

export default Hero;
