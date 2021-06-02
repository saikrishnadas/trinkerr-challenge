import React, { useState } from "react";
import { Link } from "react-router-dom";

function Optform() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex justify-center h-screen bg-bgmain font-sans">
      <form className="flex flex-col mt-20">
        <h1 className="text-white text-4xl text-center mb-12">Signup</h1>
        <label className="text-white text-lg mb-3 text-center">Enter OTP</label>
        <input
          type="text"
          value={otp}
          name="otp"
          placeholder="0000"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => setOtp(e.target.value)}
        />
        {otp === "0000" ? (
          <Link to="/register">
            <button className="bg-white text-bgmain p-2 mt-5 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none w-full">
              Submit
            </button>
          </Link>
        ) : (
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="bg-white text-bgmain p-2 mt-5 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none w-full"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Optform;
