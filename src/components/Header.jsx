import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import book from "../assets/book.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { navbarLinks } from "../static/index";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto h-16 flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={book}
            alt="book"
            className="w-16 h-16 font-semibold filter invert opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
          />
          <p className="text-2xl text-white font-semibold opacity-80 hover:opacity-100 transition duration-300 ease-in-out">
            Book
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
            className="flex sm:hidden w-6 h-6 text-white opacity-70 hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>

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
    </nav>
  );
};

export default Header;
