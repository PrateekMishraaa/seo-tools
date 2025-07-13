import React, { useState } from 'react';
import Logo from '../assets/newlogo.png';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaPhone } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
    PhoneNumber: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { FullName, Email, UserName, Password, ConfirmPassword, PhoneNumber } = formData;

    if (!FullName || !Email || !UserName || !Password || !ConfirmPassword || !PhoneNumber) {
      return toast.error("All fields are required");
    }

    if (Password !== ConfirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await axios.post("http://localhost:4000/api/signup", formData, {
        headers: { "Content-Type": "application/json" }
      });

      toast.success("User signed up successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during signup");
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

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
            Sign Up for an Account
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <InputField
              label="Full Name"
              name="FullName"
              value={formData.FullName}
              onChange={handleInputchange}
              icon={<FaUser />}
              placeholder="Enter your full name"
            />

            {/* Email */}
            <InputField
              label="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputchange}
              icon={<FaUser />}
              placeholder="Enter your email"
              type="email"
            />

            {/* Username */}
            <InputField
              label="Username"
              name="UserName"
              value={formData.UserName}
              onChange={handleInputchange}
              icon={<FaUser />}
              placeholder="Choose a username"
            />

            {/* Phone Number */}
            <InputField
              label="Phone Number"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleInputchange}
              icon={<FaPhone />}
              placeholder="Enter your phone number"
            />

            {/* Password */}
            <InputField
              label="Password"
              name="Password"
              value={formData.Password}
              onChange={handleInputchange}
              icon={<FaLock />}
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              toggleIcon={showPassword ? <FaEye /> : <FaEyeSlash />}
              onToggle={handleShowPassword}
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              name="ConfirmPassword"
              value={formData.ConfirmPassword}
              onChange={handleInputchange}
              icon={<FaLock />}
              placeholder="Re-enter password"
              type={showPassword ? "text" : "password"}
              toggleIcon={showPassword ? <FaEye /> : <FaEyeSlash />}
              onToggle={handleShowPassword}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#790003] text-white font-semibold py-2 rounded-full shadow-md hover:bg-[#a10004] transition"
            >
              Signup
            </button>

            {/* Already registered */}
            <p className="text-sm text-center mt-2 text-blue-500">
              Already have an account? <a href="/login" className="underline">Login here</a>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

const InputField = ({ label, name, value, onChange, icon, placeholder, type = "text", toggleIcon, onToggle }) => (
  <div>
    <label className="block text-sm font-semibold mb-1">{label}</label>
    <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white">
      {icon && <span className="text-gray-400 mr-2">{icon}</span>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full focus:outline-none text-sm bg-white"
      />
      {toggleIcon && (
        <span onClick={onToggle} className="ml-2 cursor-pointer text-gray-500">
          {toggleIcon}
        </span>
      )}
    </div>
  </div>
);

export default SignUp;
