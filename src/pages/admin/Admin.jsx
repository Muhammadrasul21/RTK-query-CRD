import React from "react";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { adminLinks } from "@/static";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { navbarLinks } from "@/static/index";
import car from "@/assets/car.png";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <aside
        id="admin-sidebar"
        className="overflow-auto w-80 h-screen sticky top-0 left-0 bg-sky-950 p-6 text-white flex flex-col"
      >
        <p className="text-2xl font-bold">Admin Dashboard</p>
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
              <span>{label}</span>
            </NavLink>
          ))}
        </ul>

        <button
          onClick={() => navigate("/")}
          className="bg-red-500 py-2 rounded hover:bg-red-600 transition-all"
        >
          Log Out
        </button>
      </aside>

      <div className="flex-1 min-h-screen">
        <nav className="bg-blue-600 shadow-md sticky top-0 left-0 w-full z-50">
          <div className="container mx-auto h-16 flex items-center justify-between px-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={car} alt="book" className="w-16 h-16 font-semibold filter invert  " />
              <p className="text-2xl font-semibold text-white">Cars</p>
            </Link>

            <div className="gap-6 hidden md:flex">
              {navbarLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white opacity-70 hover:opacity-100 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <IoSearch className="hidden sm:flex w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <FaRegHeart className="w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <LuShoppingCart className="w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <GiHamburgerMenu className="flex sm:hidden w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
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
