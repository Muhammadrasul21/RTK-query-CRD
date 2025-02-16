import React from "react";
import { Link } from "react-router-dom";
import book from "../assets/book.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { navbarLinks } from "../static/index";

const Header = () => {
  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto h-16 flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={book} alt="book" className="w-16 h-16 font-semibold" />
          <p className="text-2xl font-semibold">Book</p>
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
  );
};

export default Header;
