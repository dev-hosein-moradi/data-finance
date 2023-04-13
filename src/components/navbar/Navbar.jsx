import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-[#ffffff] font-sans">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] animate-upToDown">
        DATA FINANCE.
      </h1>

      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#00df9a] mx-1 animate-upToDown">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] mx-1 animate-upToDown">
          Company
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] mx-1 animate-upToDown">
          Resourses
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] mx-1 animate-upToDown">
          About
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] mx-1 animate-upToDown">
          Contact
        </li>
      </ul>

      <div
        onClick={() => setIsNav(!isNav)}
        className="block md:hidden cursor-pointer"
      >
        {!isNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={`${
          isNav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        } md:hidden`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          DATA FINANCE.
        </h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600 hover:text-[#00df9a] hover:border-[#00df9a] ease-in-out duration-100 cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-[#00df9a] hover:border-[#00df9a] ease-in-out duration-100 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-[#00df9a] hover:border-[#00df9a] ease-in-out duration-100 cursor-pointer">
            Resourses
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-[#00df9a] hover:border-[#00df9a] ease-in-out duration-100 cursor-pointer">
            About
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-[#00df9a] hover:border-[#00df9a] ease-in-out duration-100 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
