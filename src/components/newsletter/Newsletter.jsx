import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#000000] max-w-[1024px] mx-auto py-28 px-4">
      <div className="w-full">
        <h1
          className="text-[#ffffff] font-bold md:text-3xl sm:text-2xl text-xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Want tips & tricks to optimize your flow?
        </h1>

        <p
          className="text-gray-300 md:text-xl font-medium py-1 tracking-wide"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          sign up to our newsletter and stay up to date.
        </p>
      </div>

      <div className="my-8 mx-auto flex justify-between items-center">
        <input
          className="md:w-[70%] w-[65%] min-w-[90px] py-3 px-2 placeholder:font-medium md:text-xl font-bold outline-none rounded-md"
          type="text"
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />

        <button
          className="bg-[#00df9a] w-[20%] min-w-[90px] h-12 font-medium rounded-md hover:border-2 hover:border-[#00df9a] hover:text-[#00df9a] hover:bg-[#000000] ease-in-out duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Notify me
        </button>
      </div>

      <span
        className="flex"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <p className="text-gray-300">
          we care about the protection of your data. Read our{" "}
          <a className="text-[#00df9a] underline" href="/">
            Privacy Policy
          </a>
        </p>
      </span>
    </div>
  );
};

export default Newsletter;
