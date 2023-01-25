import React from "react";
const bg =
  "https://img.freepik.com/free-vector/light-bulb-vector-background-green-energy-technology_53876-112076.jpg?w=1380&t=st=1674671599~exp=1674672199~hmac=462a09355f9daca0443a20e2702af22725387d1529eaf6473ac07fc57aea82ec";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bg}')` }}
      className="bg-cover bg-center bg-no-repeat bg-fixed h-[90vh]"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-start w-full">
        <div className="md:max-w-5xl flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-white pt-20">
            Algorand Extended Challenge Frontend (Crypto)
          </h1>
          <p className="text-2xl font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aut
            hic illum quae impedit ullam magnam necessitatibus. Illo, quaerat
            earum?
          </p>
          {/* Button */}
          <div className="flex  pt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-4xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
