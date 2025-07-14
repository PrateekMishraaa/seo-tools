import React from 'react';
import Logo from '../assets/newlogo.png';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate()
    const [formData,setFormData]= useState({
        Email:"",
        Password:""
    })
    console.log(formData)
    const [showPassword,setShowPassword] = useState(false)

const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
console.log(handleInputChange)
    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    console.log(handleShowPassword)
 
    const handleSubmit=async(e)=>{
      e.preventDefault()
      if(!formData.Email || !formData.Password){
        console.log("Invalid credentials")
        toast.error("Invalid credentials")
      }
      try{
          const response = await axios.post("http://localhost:4000/api/login",formData,{
            "headers":{
              "Content-Type":"application/json"
            }
          })
          console.log(response)
            toast.success("User logged in successfully",response)
      localStorage.setItem("token", response.data.token);
            setTimeout(()=>{
              navigate('/member')
            },2000)
      }catch(error){
        console.log(error)
      }
    }
  return (
    <>
      <section className="bg-[#f8f6f3] min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-300">
          {/* Logo */}
          <div className="flex flex-col items-center mb-4">
            <img src={Logo} alt="Logo" className="h-16" />
            <span className="bg-[#1d266a] text-white text-sm font-semibold px-4 py-1 rounded-md mt-2">
              WORLDWIDE BEST SERVICES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl text-[#790003] font-semibold mb-6">
            Login to your Account
          </h2>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username/Email */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name='Email'
                  value={formData.Email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full focus:outline-none text-sm bg-white"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  name='Password'
                  value={formData.Password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full focus:outline-none text-sm bg-white"
                />
                <span onClick={handleShowPassword} className='cursor-pointer'>
                    {
                        showPassword ? <FaEye/> : <FaEyeSlash/>
                    }
                </span>
              </div>
            </div>

            {/* Stay signed in */}
            <div className="flex items-center text-sm">
              <input type="checkbox" id="staySignedIn" className="mr-2" />
              <label htmlFor="staySignedIn" className="font-semibold">
                Stay signed in
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#790003] text-white font-semibold py-2 rounded-full shadow-md hover:bg-[#a10004] transition"
            >
              Login
            </button>

            {/* Forgot password */}
            <div className="text-right text-sm">
              <a href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <p className='text-xl text-blue-400 font-sans'>Not Registered yet ?<a href="/sign-up">SignUp Here</a></p>
          </form>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
};

export default SignUp;
