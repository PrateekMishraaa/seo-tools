import React, { useEffect, useState } from "react";
import NewNavbar from "../Components/NewNavbar";
import { jwtDecode } from "jwt-decode";
import {
  FaStar,
  FaEnvelope,
  FaBullhorn,
} from "react-icons/fa";

const Member = () => {
  const [user, setUser] = useState(null);
  const [now, setNow] = useState(new Date());
  const tools =[
    {
      toolname:"All Tools",
      type:"Complete Collection",
      price:"10"
    },
    {
      toolname:"AI & Writing",
      type:"Smart content tools",
      price:"25"
    },
    {
      toolname:"Graphic Design",
      type:"Visual creation",
      price:"24"
    },
    {
      toolname:"Video Editing",
      type:"Video Production",
      price:"12"
    },
     {
      toolname:"SEO & Marketing",
      type:"Growth tools",
      price:"19"
    },
    {
      toolname:"learning",
      type:"Educational platforms",
      price:"6"
    },
    {
      toolname:"Stock & Media",
      type:"Assets library",
      price:"9"
    },
    {
      toolname:"Entertainment",
      type:"Streaming services",
      price:"2"
    },
   
  ]

  // ──────────────────────────────────────────
  // 1.  Decode token once on mount
  // ──────────────────────────────────────────
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      /**
       *  Expecting something like:
       *    { fullname, username, email, iat, ... }
       *  but we'll fall back safely if missing.
       */
      setUser({
        fullname: decoded.fullname ?? "Unnamed",
        username: decoded.username ?? "user",
        email: decoded.email ?? "no‑email@example.com",
        memberSince: decoded.iat
          ? new Date(decoded.iat * 1000)
          : new Date("2025-07-08"),
      });
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }, []);

  // ──────────────────────────────────────────
  // 2.  Tick clock once per second
  // ──────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1_000);
    return () => clearInterval(id);
  }, []);

  // ──────────────────────────────────────────
  // 3.  Render
  // ──────────────────────────────────────────
  return (
    <>
      <NewNavbar />

      <main className="min-h-screen bg-[#FFFDD0] text-white px-4 sm:px-6 lg:px-10 py-8">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-8">

          {/* LEFT ‑ profile & subscription */}
          <aside className="flex-1 bg-[#111] border border-red-500 rounded-xl p-6 shadow-lg">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/logo192.png"
                alt="Brand logo"
                className="w-20 h-20 rounded-full"
              />
            </div>

            {/* Identity */}
            <p className="text-green-500 text-sm">● Welcome, dear client</p>
            <h2 className="text-xl font-semibold break-words">
              {user?.fullname} @{user?.username}
            </h2>
            <span className="inline-block bg-red-700 px-2 py-0.5 rounded-full text-xs mt-1">
              Premium
            </span>

            {/* Email */}
            <div className="flex items-center gap-2 mt-2 text-sm break-all">
              <FaEnvelope className="text-blue-500 shrink-0" />
              {user?.email}
            </div>

            {/* Member since */}
            <p className="text-gray-400 mt-1 text-sm">
              Member since&nbsp;
              {user
                ? user.memberSince.toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "…"}
            </p>

            {/* Subscriptions */}
            <h3 className="mt-6 text-red-500 font-semibold">
              🔻 Your Subscriptions
            </h3>
            <p className="text-sm text-gray-400">
              Manage your active plans and services
            </p>

            <div className="mt-4 bg-[#1b1b1b] border border-red-800 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Premium Plan (100+ Tools)</span>
                <span className="text-xs bg-red-600 px-2 py-0.5 rounded-full">
                  expires 08 Dec 2025
                </span>
              </div>
              <div className="text-sm">
                <span className="text-green-500">●</span>&nbsp;Status:&nbsp;
                <span className="text-white">Active</span>
              </div>
            </div>
          </aside>

          {/* RIGHT ‑ greeting & updates */}
          <section className="flex-1 bg-[#111] border border-red-500 rounded-xl p-6 shadow-lg space-y-6">

            {/* Greeting & clock */}
            <header>
              <p className="text-red-500 font-semibold text-lg flex items-center gap-2">
                <FaStar /> Good&nbsp;
                {now.getHours() < 12
                  ? "morning"
                  : now.getHours() < 18
                  ? "afternoon"
                  : "evening"}
                ,&nbsp;{user?.fullname ?? "Client"}!
              </p>

              <p className="text-gray-400 text-sm mt-0.5">
                Today is&nbsp;
                <span className="text-white font-medium">
                  {now.toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>{" "}
                <span className="text-blue-400">(Asia/Kolkata)</span>
              </p>

              <p className="text-3xl font-bold mt-2">
                {now.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
            </header>

            {/* Latest updates */}
            <div className="bg-[#1b1b1b] border border-red-800 rounded-xl p-4 space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <FaBullhorn className="text-red-500" />
                Latest Updates
              </h3>

              {[
                {
                  title: "New tools added!",
                  badge: { text: "latest", colour: "bg-red-500" },
                  msg: "Check out the brand‑new tools on Trump SEO Tools.",
                },
                {
                  title: "Feature launch!",
                  badge: { text: "new", colour: "bg-red-500" },
                  msg: "Explore the latest features now available.",
                },
                {
                  title: "Join our community",
                  badge: { text: "event", colour: "bg-blue-500" },
                  msg: "Join our channel for daily updates and giveaways.",
                },
              ].map((u) => (
                <div
                  key={u.title}
                  className="bg-[#2a2a2a] p-3 rounded-lg space-y-1"
                >
                  <p className="font-semibold">
                    {u.title}{" "}
                    <span
                      className={`ml-2 ${u.badge.colour} text-white text-xs px-2 py-0.5 rounded-full uppercase`}
                    >
                      {u.badge.text}
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm">{u.msg}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Optional additional content  */}
        <section className="mt-10 bg-gradient-to-b from-[#0b0f2e] to-[#0d063f] text-white px-4 py-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold">🗂 Browse Categories</h2>
    <p className="mt-2 text-sm sm:text-base text-gray-300">Choose your perfect tool category</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {tools.map((item, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-[#1d1e3c] to-[#2b1648] p-6 rounded-2xl shadow-lg text-center relative border border-red-400 hover:scale-105 transition-transform duration-300"
      >
        {/* Icon placeholder - replace with actual icons if needed */}
        <div className="flex justify-center mb-4 cursor-pointer">
          <div className="bg-[#28193f] p-3 rounded-xl">
            <span role="img" aria-label="icon">📦</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold">{item.toolname}</h3>
        <p className="text-sm text-gray-300 font-semibold">{item.type}</p>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {item.price}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

      </main>
    </>
  );
};

export default Member;
