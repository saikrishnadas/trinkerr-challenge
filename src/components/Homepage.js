import React, { useContext } from "react";
import Card from "./Card";
import UserContext from "./UserContext";

function Homepage() {
  const [user] = useContext(UserContext);

  return (
    <div className="bg-gray-300 h-screen pl-5">
      <h1 className="text-2xl font-bold pt-2">Welcome {user} 😉</h1>

      <Card />
    </div>
  );
}

export default Homepage;
