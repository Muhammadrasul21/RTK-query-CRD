import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { adminLinks } from "@/static";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu"; 
import { CiLogout } from "react-icons/ci";
import car from "@/assets/car.png"
const Admin = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(()=>{
    navigate(adminLinks[0]?.path)
  },[])

  return (
    <div className="flex">
      <aside
        className={`overflow-auto h-screen sticky top-0 left-0 bg-sky-950 p-6 text-white flex flex-col transition-all duration-300 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`text-2xl font-bold transition-all ${sidebarOpen ? "block" : "hidden"}`}
          >
            Admin
          </p>
          <GiHamburgerMenu
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="cursor-pointer transition-transform duration-300"
            style={{
              transform: sidebarOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </div>

        <ul className="my-6 flex-1 space-y-1.5">
          {adminLinks.map(({ id, path, label, icon: Icon }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-3 rounded transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-700 text-gray-100"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span
                className={`transition-all duration-300 ${sidebarOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </ul>

        <div className=" flex items-center">
          <CiLogout onClick={()=> navigate("/")} className="flex sm:hidden m-auto w-5 h-5" />
          <button
            onClick={() => navigate("/")}
            className={`hidden sm:flex items-center gap-3 py-2 px-3 rounded bg-red-500 hover:bg-red-600 transition-all`}
          >
            <CiLogout className="w-5 h-5" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 min-h-screen">
        <nav className="bg-blue-600 shadow-md sticky top-0 left-0 w-full z-50">
          <div className="container mx-auto h-16 flex items-center justify-between px-6">
            <Link to="/" className="flex items-center gap-2">
            <img src={car} alt="" className="w-20 h-20 filter invert" />
              <p className="hidden sm:flex text-2xl font-semibold text-white">
                Cars
              </p>
            </Link>

            <div className="flex gap-4">
              <IoSearch className="hidden sm:flex w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <FaRegHeart className="w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <LuShoppingCart className="w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <GiHamburgerMenu
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`flex sm:hidden w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer transition-transform duration-300 ${
                  sidebarOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </nav>

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
