import React, { useEffect } from "react";
import Laptop from "../../assets/laptop.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Analytics = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full bg-[#ffffff] py-20 px-4">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2">
        <img
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="laptop"
        />

        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center"
        >
          <p className="text-[#00df9a] font-bold uppercase">
            data analytics dashboard
          </p>

          <h1 className="text-[#000000] font-bold md:text-3xl sm:text-2xl text-xl py-2">
            Manage Data Analytics Centrally
          </h1>

          <p className="text-[#000000] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>

          <button className="bg-[#000000] text-[#00df9a] w-[200px] h-10 font-medium mx-auto md:mx-0 my-6 rounded-md hover:bg-[#00df9a] hover:text-[#000000] ease-in-out duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
