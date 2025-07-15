import React, { useEffect, useState } from 'react';
import Logo from '../assets/newlogo.png';
import { FaShoppingCart, FaPlayCircle, FaQuestionCircle, FaRupeeSign, FaTags, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const NewNavbar = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      console.log("Decoded token ➜", decoded);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }, []);

  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate('/signIn')
  }

  return (
    <>
      <div className="border-b shadow-sm w-full">
        {/* Top bar */}
        <div className="flex items-center justify-between px-10 py-2 bg-white">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="h-10" />
            {/* <h1 className="text-2xl font-bold text-red-600">
              TRUMP <span className="text-blue-900">SEO TOOLS</span>
            </h1> */}
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="border px-3 py-1 rounded flex items-center gap-1 text-sm">
              ✈️ Join Our Community
            </button>
            <button className="border px-3 py-1 rounded flex items-center gap-1 text-sm">
              💬 Live Chat
              <span className="bg-green-200 text-green-700 text-xs px-2 py-0.5 rounded-full ml-2">
                Online
              </span>
            </button>

            {/* User info */}
            <div className="flex items-center space-x-1 text-sm">
              <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center">
                🌀
              </div>
              <span>UserID:</span>
              <span className="font-semibold text-blue-800">
                {user?.fullname || "Loading..."}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom navigation links */}
       <section className='bg-white'>
         <div className="flex items-center space-x-6 px-10 py-2 text-sm text-red-700 font-medium">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaFileAlt /> Dashboard
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaShoppingCart /> Buy Tools
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaPlayCircle /> Tutorials
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaQuestionCircle /> Helpdesk
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaRupeeSign /> Resellers Offers
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaTags /> Bundle Pricing
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaFileAlt /> Policies
          </div>
          <div onClick={()=>handleLogout()} className="flex items-center gap-1 cursor-pointer text-black">
            <FaSignOutAlt /> Logout
          </div>
        </div>
       </section>
      </div>
    </>
  );
};

export default NewNavbar;
