import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={`bg-[#000000] text-[#ffffff] w-full py-16 px-4`}>
      {/* footer wrapper */}
      <div className="max-w-[1024px] mx-auto">
        {/* footer box 1 */}
        <div>
          <h1 className="md:text-4xl text-3xl font-bold text-[#00df9a]">
            Data Finance.
          </h1>
          <p className="font-medium tracking-wider leading-7 py-6 md:max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <ul className="w-full max-w-[700px] mx-auto flex flex-row justify-around ">
            <li
              className="hover:scale-105 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <AiFillGithub size={30} className="text-[#00df9a]" />
            </li>
            <li
              className="hover:scale-105 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <AiFillLinkedin size={30} className="text-[#00df9a]" />
            </li>
            <li
              className="hover:scale-105 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <AiOutlineInstagram size={30} className="text-[#00df9a]" />
            </li>
            <li
              className="hover:scale-105 cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <BsTelegram size={30} className="text-[#00df9a]" />
            </li>
          </ul>
        </div>

        {/* footer box 2 */}
        <div className="flex flex-row justify-center md:justify-around flex-wrap mt-8">
          <ul
            className="w-[130px] mx-3 my-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Solutions
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Analytics
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Marketing
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Commerce
            </li>
          </ul>
          <ul
            className="w-[130px] mx-3 my-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Support
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Pricing
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Documentation
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Guides
            </li>
          </ul>
          <ul
            className="w-[130px] mx-3 my-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Solutions
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Analytics
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Marketing
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Commerce
            </li>
          </ul>
          <ul
            className="w-[130px] mx-3 my-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Support
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Pricing
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Documentation
            </li>
            <li className="py-2 cursor-pointer hover:text-[#00df9a] ease-in-out duration-100">
              Guides
            </li>
          </ul>
        </div>
        <p className="w-full text-center translate-y-7">
          made with love by{" "}
          <a
            href="https://github.com/dev-hosein-moradi"
            target={"_blank"}
            rel="noreferrer"
            className="underline text-[#00df9a]"
          >
            Hosein
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
