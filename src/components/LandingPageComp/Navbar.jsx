import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav
        className={`flex items-center justify-between px-8 py-4 pl-10 ${
          isScrolled ? 'text-blue-600' : 'text-white'
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold pl-12">
          <Link to="/">SigapSehat</Link>
        </div>

        {/* Links */}
        <div className="flex space-x-6 items-center">
          <Link
            to="/hero"
            className={`hover:text-gray-500 transition duration-200 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/diagnose"
            className={`hover:text-gray-500 transition duration-200 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Tentang Kami
          </Link>

          <Link
            to="/diagnose"
            className={`hover:text-gray-500 transition duration-200 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Produk & Layanan
          </Link>

          <Link
            to="/diagnose"
            className={`hover:text-gray-500 transition duration-200 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Kontak
          </Link>

          {/* Sign In Button */}
          <Link
            to="/signin"
            className={`px-4 py-2 font-bold rounded-md border transition duration-200 ${
              isScrolled
                ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                : 'bg-white text-blue-600 border-white hover:bg-blue-50'
            }`}
          >
            Masuk / Daftar
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
