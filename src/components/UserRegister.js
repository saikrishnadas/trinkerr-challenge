import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function UserRegister() {
  const [user, setUser] = useContext(UserContext);

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="flex justify-center h-screen bg-bgmain font-sans">
      <form className="flex flex-col mt-20">
        <h1 className="text-white text-4xl text-center mb-12">Signup</h1>
        <label className="text-white text-lg mb-3 text-center">
          Enter your name
        </label>
        <input
          type="text"
          name="user"
          autocomplete="false"
          value={user}
          onChange={handleUser}
          placeholder="Name"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Link to={`/homepage/${user}`}>
          <button className="bg-white text-bgmain p-2 mt-5 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none w-full">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default UserRegister;
