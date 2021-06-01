import React, { useContext } from "react";
import UserContext from "./UserContext";

function Homepage() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h1>Homepage{user}</h1>
    </div>
  );
}

export default Homepage;
