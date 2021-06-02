import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";

function Card() {
  const [names] = useState([
    {
      imgname: "Icon3",
      url: "https://post.greatist.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
    },
    {
      imgname: "Icon9",
      url: "https://elsahngreens.com/wp-content/uploads/2020/07/orange.jpg",
    },
    {
      imgname: "Icon19",
      url: "https://agfstorage.blob.core.windows.net/misc/FP_com/2020/01/24/Aman.jpg",
    },
    {
      imgname: "Icon18",
      url: "https://static.toiimg.com/photo/msid-68374658/68374658.jpg?2359844",
    },
    {
      imgname: "Icon17",
      url: "https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271232/chopped-kiwi-in-a-bowl-on-a-table.jpg",
    },
  ]);
  const [start, setStart] = useState(false);
  const [swipe, setSwipe] = useState("");
  const [imgName, setImgName] = useState("");
  let [count, setCount] = useState(0);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
    setSwipe(direction);
    setCount(++count);
    console.log(count);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
    setImgName(myIdentifier);
    setStart(true);
  };

  return (
    <div className="mt-12">
      <div className="flex justify-center mt-5">
        {names.map((name) => (
          <TinderCard
            className="absolute"
            key={name.imgname}
            preventSwipe={["up", "down"]}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen(name.imgname)}
          >
            <div
              style={{ backgroundImage: `url(${name.url})` }}
              className={`relative w-96 p-5 max-w-xl h-96 border rounded-xl bg-center shadow-md`}
            >
              <h3 className="absolute font-bold text-xl">{name.imgname}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {start && (
        <>
          {count > 4 && (
            <h1 className="text-center font-semibold text-lg">
              {localStorage.user}, You have rated all the images. Thank You 😄
            </h1>
          )}
          <div className="mt-120 lg:mt-10">
            {swipe === "left" ? (
              <div className="ml-32 flex items-center lg:ml-16">
                <XCircleIcon className="text-red-700 w-10 h-10 mr-3" />
                <h1 className="text-lg font-semibold">
                  {localStorage.user}, you have rejected {imgName}
                </h1>
              </div>
            ) : (
              <div className="ml-32 flex items-center lg:ml-200">
                <CheckCircleIcon className="text-green-500 w-10 h-10 mr-3" />
                <h1 className="text-lg font-semibold">
                  {localStorage.user}, you have interest in {imgName}
                </h1>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
