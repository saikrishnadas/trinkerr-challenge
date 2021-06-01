import React from "react";

function SignIn() {
  return (
    <div className="flex justify-center h-screen bg-bgmain font-sans">
      <form className="flex flex-col justify-center mb-20">
        <label className="text-white text-lg mb-3 text-center">
          Enter Mobile Number
        </label>
        <input placeholder="xxxxx xxxxx" className="p-2 rounded" />
        <button className="bg-white text-bgmain p-2 rounded mt-5">
          Get OTP
        </button>
      </form>
    </div>
  );
}

export default SignIn;
