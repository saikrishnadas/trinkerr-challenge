import React, { useState } from "react";

import Optform from "./Optform";

function Signup() {
  const [verify, setVerify] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setVerify(true);
  };

  return (
    <>
      {verify ? (
        <Optform />
      ) : (
        <div className="flex justify-center h-screen bg-bgmain font-sans">
          <form className="flex flex-col mt-20">
            <h1 className="text-white text-4xl text-center mb-12">Signup</h1>
            <label className="text-white text-lg mb-3 text-center">
              Enter Mobile Number
            </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <button
              onClick={handleClick}
              className="bg-white text-bgmain p-2 mt-5 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
            >
              Get OTP
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Signup;
