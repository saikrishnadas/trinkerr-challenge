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
          <form className="flex flex-col justify-center mb-20">
            <h1 className="text-white text-center text-3xl font-bold pb-4">
              Signup
            </h1>
            <label className="text-white text-lg mb-3 text-center">
              Enter Mobile Number
            </label>
            <input className="p-2 rounded" />

            <button
              onClick={handleClick}
              className="bg-white text-bgmain p-2 rounded mt-5"
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
