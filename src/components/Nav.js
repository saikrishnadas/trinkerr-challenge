import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Nav() {
  const [user, setUser] = useContext(UserContext);

  return (
    <nav className="bg-bgmain p-5">
      {user.length > 0 ? (
        <div className="flex text-white">
          <Link to="/">
            <button
              onClick={() => setUser("")}
              className="w-20 mr-5 border-2 border-gray-300 p-1.5 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex text-white">
          <Link to="/">
            <button className="w-20 mr-5 border-2 border-gray-300 p-1.5 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none">
              Signup
            </button>
          </Link>

          <Link to="/signin">
            <button className="w-20 border-2 border-gray-300 p-1.5 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none">
              Signin
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
