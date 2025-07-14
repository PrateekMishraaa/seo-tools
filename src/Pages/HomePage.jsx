import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import EnvatoTwo from "../assets/Envatotwo.png"
import SemrushTwo from "../assets/Semtwo.png"
import ChatGpt from "../assets/chatgpt.png"
import UbberSuggest from "../assets/ubbersuggest.png"
import Moz from "../assets/moz.png"
import Udemy from "../assets/udemy.png"
// Assets
import Banner from '../assets/trumpbanner.png';
import Canva from "../assets/canva.png";
import Quillbot from "../assets/quiltbot.png";
import You from "../assets/you.png";
import Udemey from "../assets/udemey.png";
import Envato from "../assets/envato.png";
import Semrush from "../assets/sem.png";
import { FaTrophy } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const bottomimg = [Canva, Quillbot, You, Udemey, Envato, Semrush];
  const CardDetails = [
    {
      validity: "1 month",
      type: "lite reseller",
      facilities: "UNLIMITED USER ADD, 100+ TOOLS IN PANEL, HIGH PROFIT MARGIN, VIDEO GUIDED PROVIDED PREMIUM SUPPORT 1IP ALLOW IN LITE"
    },
    {
      validity: "6 months",
      type: "pro reseller",
      facilities: "UNLIMITED USER ADD, 100+ TOOLS IN PANEL, HIGH PROFIT MARGIN, VIDEO GUIDED PROVIDED, VIP SUPPORT, 3IP ALLOW IN PRO, NO LIMITATIONS"
    },
    {
      validity: "1 month",
      type: "GURU RESELLER",
      facilities: "UNLIMITED USER ADD, 100+ TOOLS IN PANEL, HIGH PROFIT MARGIN, VIDEO GUIDED PROVIDED, VIP SUPPORT, 2IP ALLOW IN PRO"
    }
  ];
const tools =[
  {
    img:EnvatoTwo,
    title:"Envato Elements",
    look:"Stock | Category",
    dollar:"3 USD"
  },
  {
    img:SemrushTwo,
    title:"Semrush GURU"
  }
]
  const handleNavigate = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen w-full bg-[#0c121a] text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 gap-10">
          {/* Left */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-red-500 uppercase text-sm font-semibold tracking-wider">
              Trusted by 10,000+ clients
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold uppercase leading-tight text-white drop-shadow-[0_4px_0_#34af65]">
              Welcome to<br />Trump SEO Tools
            </h1>
            <p className="text-sm font-medium text-gray-300 max-w-md">
              Access 100+ Premium SEO, AI, and Marketing Tools in one place. We provide affordable, legal, and verified access for online growth.
            </p>
            <button
              onClick={handleNavigate}
              className="px-6 py-3 border-2 border-red-500 text-white uppercase font-bold tracking-wide hover:bg-red-500 transition-all"
            >
              Signup Here
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Banner} alt="Trump SEO Robot" className="max-h-screen object-contain" />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="h-24 w-full flex justify-around items-center px-4 flex-wrap gap-4 ">
          {bottomimg.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </section>

      {/* Reseller Cards Section */}
      <section className="w-full bg-black py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase text-red-500 font-semibold text-center text-lg">
            Want to join our reseller program?
          </p>
          <h2 className="uppercase text-4xl lg:text-5xl font-bold text-white text-center mt-2">
            Plans for Resellers
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4 mb-10"></div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CardDetails.map((item, index) => (
              <div key={index} className="bg-[#111827] border border-white rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-sm uppercase mb-2">{item.validity}</p>
                  <h3 className="text-red-500 text-2xl font-bold uppercase mb-4">{item.type}</h3>
                  <p className="text-sm text-white font-light">
                    {item.facilities}
                  </p>
                </div>
                <button className="mt-6 flex items-center cursor-pointer justify-center gap-2 px-4 py-2 border border-white text-white uppercase font-bold rounded-lg hover:bg-red-500 transition">
                  <FaTrophy /> Buy it now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className='h-62 w-full bg-black  p-20'>
          <div className='h-40 w-full '>
            <p className='uppercase font-semibold text-xl font-sans text-red-500 px-76'>want to purchase single tools? checkout our pricing</p>
            <p className='uppercase font-bold text-6xl text-white px-64'>single tools pricing</p>
            <hr className='h-1 w-12 bg-red-600 ml-98 mt-4'/>
          </div>
        </section>
          <section className='h-screen w-full bg-[#0b0e13]'>
            
          </section>
    </>
  );
};

export default HomePage;
