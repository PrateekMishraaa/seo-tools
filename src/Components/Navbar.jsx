import React, { useState } from 'react';
import Logo from '../assets/trump.png';
import { FaLink } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-[#0c121a] text-white shadow-md z-50 relative">
      <div className="h-24 px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Trump SEO" className="h-16" />
        </div>

        {/* Center: Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
          <li><a href="/" className="text-red-500 line-through">Home</a></li>
          <li><a href="/reseller-plans" className="line-through hover:text-red-500 transition">Reseller Plans</a></li>
          <li><a href="/single-tools" className="line-through hover:text-red-500 transition">Single Tools</a></li>
          <li><a href="/tools-bundle" className="line-through hover:text-red-500 transition">Tools Bundle</a></li>
          <li><a href="/contact-us" className="line-through hover:text-red-500 transition">Contact Us</a></li>
        </ul>

        {/* Right: Client Area + Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/client-area"
            className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition uppercase text-sm font-semibold tracking-wider"
          >
            <FaLink />
            Client Area
          </a>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-3xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#0c121a] border-t border-gray-700 text-center uppercase text-sm font-bold tracking-wide">
          <a href="/" className="text-red-500 line-through">Home</a>
          <a href="/reseller-plans" className="line-through hover:text-red-500">Reseller Plans</a>
          <a href="/single-tools" className="line-through hover:text-red-500">Single Tools</a>
          <a href="/tools-bundle" className="line-through hover:text-red-500">Tools Bundle</a>
          <a href="/contact-us" className="line-through hover:text-red-500">Contact Us</a>
          <a
            href="/client-area"
            className="flex items-center gap-2 px-4 py-2 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition"
          >
            <FaLink />
            Client Area
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
