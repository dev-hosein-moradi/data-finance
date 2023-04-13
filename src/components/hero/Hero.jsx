import React, { useEffect } from "react";
import Typed from "typed.js";

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-white font-sans">
      <div className="max-w-[800px] w-full h-[100dvh] mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase animate-zoomOut">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 animate-zoomOut">
          Grow with data.
        </h1>

        <div className="flex justify-center items-center animate-zoomOut">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            fast, flexible, financing for
          </p>
          <span
            className="md:text-4xl sm:text-4xl text-xl font-bold py-4 pl-2 text-gray-300"
            ref={el}
          />
        </div>
        <p
          className="md:text
        -2xl text-xl font-bold text-gray-500 px-2 animate-zoomOut"
        >
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platform.
        </p>

        <button className="bg-[#00df9a] text-[#000000] w-[200px] h-10 font-medium mx-auto my-2 rounded-md animate-zoomOut">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
