import React from "react";
const img =
  "https://img.freepik.com/free-vector/crypto-portfolio-concept-illustration_114360-4794.jpg?w=826&t=st=1674672679~exp=1674673279~hmac=e136fd456858baf9d62dfac83de6af0897697bbf5c6269b4779d78cc1b701678";
const Account = () => {
  return (
    <div className="py-[100px] bg-slate-200 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white py-10 text-center underline uppercase">Accounts Setup</h1>
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <img src={img} alt="" className="rounded-full" />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4 px-4 text-white">
            <h1 className="text-5xl font-bold">Access your account</h1>
            <p className="text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aut
                hic illum quae impedit ullam magnam necessitatibus. Illo, quaerat
                earum
            </p>
            <div className="flex gap-4">
                <button className="bg-white hover:bg-blue-700 text-blue-600 hover:text-white transition-all ease-linear duration-500 font-bold py-2 px-4 rounded text-xl">
                    Login as teacher
                </button>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl">
                    Login as student
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
