import React from 'react';
import Logo from '../assets/trump.png';
import { FaLink } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <nav className="h-24 w-full px-6 flex items-center justify-between bg-[#0c121a] text-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Trump SEO" className="h-16" />
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex gap-8 text-sm font-bold uppercase tracking-wider">
        <li><a href="/" className="text-red-500 line-through">Home</a></li>
        <li><a href="/reseller-plans" className="line-through hover:text-red-500 transition">Reseller Plans</a></li>
        <li><a href="/single-tools" className="line-through hover:text-red-500 transition">Single Tools</a></li>
        <li><a href="/tools-bundle" className=" line-through hover:text-red-500 transition">Tools Bundle</a></li>
        <li><a href="/contact-us" className="line-through hover:text-red-500 transition">Contact Us</a></li>
      </ul>

      {/* Right: Client Area + Menu Icon */}
      <div className="flex items-center gap-4">
        <a
          href="/client-area"
          className="flex items-center gap-2 px-4 py-2 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition uppercase text-sm font-semibold tracking-wider"
        >
          <FaLink />
          Client Area
        </a>
        <RxHamburgerMenu className="text-white text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
