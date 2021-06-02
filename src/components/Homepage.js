import React from "react";
import Card from "./Card";

function Homepage() {
  return (
    <div className="bg-gray-300 h-screen pl-5">
      <h1 className="text-2xl font-bold pt-2">
        Welcome {localStorage.user} 😉
      </h1>

      <Card />
    </div>
  );
}

export default Homepage;
