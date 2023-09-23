import React, { useState } from "react";
import { FaList, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { name: "HOME", link: "" },
    { name: "SERVICE", link: "" },
    { name: "ABOUT", link: "" },
    { name: "CONTACT", link: "" },
    { name: "REQUIREMENTS", link: "" },
  ];
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-gradient-to-b from-indigo-900 to-purple-900 shadow-lg w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-6">
        {/* Logo section */}
        <div className="font-extrabold text-3xl cursor-pointer flex items-center gap-2 text-white">
          <span className="font-mono">Aryan's To-do List</span>
        </div>
        {/* Mobile Menu Icon */}
        <div onClick={toggleMenu} className="md:visible w-8 h-8 cursor-pointer text-white flex items-center justify-end">
          {open ? <FaTimes /> : <FaBars />}
        </div>
        {/* Link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gradient-to-b from-indigo-900 to-purple-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px] opacity-0"
          }`}
        >
          {links.map((link) => (
            <li className="md:ml-6 md:my-0 my-5 font-semibold" key={link.name}>
              <div className="text-white hover:text-indigo-400 cursor-pointer transition duration-300 text-lg">
                {link.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;