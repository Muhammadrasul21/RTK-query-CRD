import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { adminLinks } from "@/static";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import car from "@/assets/car.png";
import { useProfileQuery } from "@/redux/api/auth.api";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth.slice";
import { IoMdHome } from "react-icons/io";
import { navbarLinks } from "@/static/index";


const Admin = () => {
  const { isError } = useProfileQuery({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(logout());
    }
  }, [isError]);

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
    const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    navigate(adminLinks[0]?.path);
  }, []);

  return (
    <div className="flex">
      <aside
        className={`overflow-auto px-2 h-screen sticky top-0 left-0 bg-sky-950 py-6 text-white flex flex-col transition-all duration-300 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <div className={`flex ${sidebarOpen ? 'flex-row' : 'flex-col gap-8'} items-center justify-between`}>
          <IoMdHome
            onClick={() => navigate("/")}
            className="w-6 h-6 cursor-pointer"
          />
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

        <ul className="my-6 flex-1 space-y-3">
          {adminLinks.map(({ id, path, label, icon: Icon }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `flex ${sidebarOpen ? '' : 'justify-center'} items-center gap-3 rounded py-2 pl-2 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-700 text-gray-100"
                }`
              }
            >
              <Icon className="min-w-5 min-h-5" />
              <span
                className={`transition-all duration-300 ${sidebarOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center h-10">
              <button
                onClick={handleLogout}
                className={`flex w-full justify-center cursor-pointer items-center gap-3 py-2 px-3 rounded bg-red-500 hover:bg-red-600 transition-all`}
              >
                <CiLogout
                className="flex  w-5 h-5"
              />
              {
                sidebarOpen ? <span>Log Out</span> : null
              }
                
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
             
                 <div className="gap-6 hidden md:flex">
                       {navbarLinks.map((item, index) => {
                         const linkPath =
                           item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`;
                         const isActive = location.pathname === linkPath;
                         return (
                           <Link
                             key={index}
                             to={linkPath}
                             className={`text-white text-xl transition ${isActive ? "opacity-100 font font-semibold" : "opacity-70 hover:opacity-100"}`}
                           >
                             {item}
                           </Link>
                         );
                       })}
                     </div>

            <div className="flex gap-4">
              <IoSearch className="hidden sm:flex w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <FaRegHeart className="w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <LuShoppingCart className="w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer" />
              <GiHamburgerMenu
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex sm:hidden w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer transition-transform duration-300 ${
                  sidebarOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </nav>

              <div
                className={`${menuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300 bg-blue-700 sm:hidden`}
              >
                <ul className="flex flex-col gap-4 p-4">
                  {navbarLinks?.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item === "Home" ? "/" : `${item.toLocaleLowerCase()}`}
                        className="block text-white opacity-70 hover:opacity-100 transition p-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
