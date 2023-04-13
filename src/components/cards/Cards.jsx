import React from "react";
import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";

const cardData = [
  {
    id: 1001,
    image: Single,
    title: "Single User",
    price: "149",
    option1: "500 GB Storage",
    option2: "1 User Allowed",
    option3: "Send up to 2 GB",
    recommended: false,
  },
  {
    id: 1002,
    image: Double,
    title: "Partnership",
    price: "199",
    option1: "1 TB Storage",
    option2: "3 User Allowed",
    option3: "Send up to 10 GB",
    recommended: true,
  },
  {
    id: 1003,
    image: Triple,
    title: "Group Count",
    price: "299",
    option1: "5 TB Storage",
    option2: "10 User Allowed",
    option3: "Send up to 20 GB",
    recommended: false,
  },
];

const Cards = () => {
  return (
    <div className="bg-[#ffffff] w-full py-16 px-4">
      {/* card wrapper */}
      <div className="w-full max-w-[1024px] mx-auto flex flex-row justify-center lg:justify-between gap-10 sm:gap-8 lg:gap-0 items-center flex-wrap">
        {/* card box */}
        {cardData?.map((card) => (
          <div
            key={card?.id}
            className={`w-full max-w-[320px] h-[380px] flex flex-col justify-between items-center shadow-lg pb-6 px-1 my-4 ease-in-out duration-200 rounded-md ${
              card?.recommended
                ? "bg-gray-100 lg:translate-y-4 lg:scale-110 hover:scale-125"
                : "bg-[#ffffff] hover:scale-105 "
            }`}
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img
              className="w-[100px] mx-auto -translate-y-8"
              src={card?.image}
              alt="plan"
            />

            <h1 className="md:text-3xl text-2xl font-bold">{card?.title}</h1>

            <p className="md:text-3xl text-2xl font-bold">$ {card?.price}</p>

            <ul className="w-full flex flex-col justify-between items-center">
              <li className="w-[60%] text-center font-medium py-2 border-b border-t border-gray-200">
                {card?.option1}
              </li>

              <li className="w-[60%] text-center font-medium py-2 border-b border-gray-200">
                {card?.option2}
              </li>

              <li className="w-[60%] text-center font-medium py-2 border-b border-gray-200">
                {card?.option3}
              </li>
            </ul>

            <button
              className={`w-[150px] text-[#000000] py-2 rounded-md text-xl font-medium ${
                card?.recommended
                  ? "bg-[#000000] text-[#00df9a]"
                  : "bg-[#00df9a] text-[#000000]"
              }`}
            >
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
