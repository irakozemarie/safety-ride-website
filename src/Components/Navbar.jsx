import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with their corresponding paths
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Service", path: "/service" },
    { id: 4, text: "Contact", path: "/contact" },
    { id: 5, text: "SignIN", path: "/signin" },
  ];

  return (
    <div className="bg-green-200 flex justify-between items-center h-24 w-full mx-auto px-4 text-black fixed top-0 z-10">
      {/* Logo */}
      <div className="flex items-center py-2 gap-2">
        <img src="/Logo.png" alt="logo" className="w-12" />{" "}
        <h1 className="text-xl font-bold text-black">
          SRC<span className="text-[#e50914]">.</span>{" "}
        </h1>{" "}
      </div>
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">SRC.</h1> */}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link to={item.path}>{item.text}</Link> {/* Use Link component */}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">SRC.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link to={item.path}>{item.text}</Link> {/* Use Link component */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
