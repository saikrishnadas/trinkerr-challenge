import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-bgmain pb-10">
      <ul className="flex text-white">
        <Link to="/">
          <li className="mr-5">Signup</li>
        </Link>

        <Link to="/signin">
          <li>Signin</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
