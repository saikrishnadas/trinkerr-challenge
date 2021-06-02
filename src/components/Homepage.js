import React, { useContext } from "react";
import Card from "./Card";
import UserContext from "./UserContext";

function Homepage() {
  const [user] = useContext(UserContext);

  return (
    <div className="bg-bgmain h-screen pl-5">
      <h1 className="text-white text-2xl font-bold">Welcome {user}</h1>

      <Card />
    </div>
  );
}

export default Homepage;
