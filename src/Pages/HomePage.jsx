import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Banner from '../assets/trumpbanner.png';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full bg-[#0c121a] text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 gap-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-red-500 uppercase text-sm font-semibold tracking-wider">
              Trusted by 10,000+ clients
            </p>
            <h1 className="text-5xl lg:text-6xl font-extrabold uppercase leading-tight text-white drop-shadow-[0_4px_0_#34af65]">
              Welcome to<br />Trump SEO Tools
            </h1>
            <p className="text-sm font-medium text-gray-300 max-w-md">
              Access 100+ Premium SEO, AI, and Marketing Tools in one place. We provide affordable, legal, and verified access for online growth. Ideal for freelancers, agencies, and resellers looking to scale fast. Save time and cost with all essential tools under one platform.
            </p>
            <div>
              <button className="px-6 py-3 cursor-pointer border-2 border-red-500 text-white uppercase font-bold tracking-wide hover:bg-red-500 hover:text-white transition-all">
                Signup Here
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Banner} alt="Trump SEO Robot" className="max-h-screen object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
