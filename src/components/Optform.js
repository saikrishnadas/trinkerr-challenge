import React, { useState } from "react";
import { Link } from "react-router-dom";

function Optform() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex justify-center h-screen bg-bgmain font-sans">
      <form className="flex flex-col justify-center mb-20">
        <h1 className="text-white text-center text-3xl font-bold pb-4">
          Signup
        </h1>
        <label className="text-white text-lg mb-3 text-center">Enter OTP</label>
        <input
          type="text"
          value={otp}
          name="otp"
          placeholder="0000"
          className="p-2 rounded"
          onChange={(e) => setOtp(e.target.value)}
        />
        {otp === "0000" ? (
          <Link to="/register">
            <button className="bg-white text-bgmain p-2 rounded mt-5 w-full">
              Submit
            </button>
          </Link>
        ) : (
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="bg-white text-bgmain p-2 rounded mt-3 w-full"
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
