import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function UserRegister() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="flex justify-center h-screen bg-bgmain font-sans">
      <form className="flex flex-col justify-center mb-20">
        <h1 className="text-white text-center text-3xl font-bold pb-4">
          Signup
        </h1>
        <label className="text-white text-lg mb-3 text-center">
          Enter name
        </label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Name"
          className="p-2 rounded"
        />
        <Link to={`/homepage/${user}`}>
          <button className="bg-white text-bgmain p-2 rounded mt-5 w-full">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default UserRegister;
