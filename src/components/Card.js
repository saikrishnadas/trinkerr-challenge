import React, { useState, useContext } from "react";
import TinderCard from "react-tinder-card";
import UserContext from "./UserContext";

function Card() {
  const [user] = useContext(UserContext);
  const [names] = useState([
    {
      imgname: "icon3",
      url: "https://post.greatist.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
    },
    {
      imgname: "icon9",
      url: "https://elsahngreens.com/wp-content/uploads/2020/07/orange.jpg",
    },
    {
      imgname: "icon19",
      url: "https://agfstorage.blob.core.windows.net/misc/FP_com/2020/01/24/Aman.jpg",
    },
    {
      imgname: "icon18",
      url: "https://static.toiimg.com/photo/msid-68374658/68374658.jpg?2359844",
    },
    {
      imgname: "icon17",
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
        <div>
          {swipe === "left" ? (
            <h1 className="text-white text-lg">
              {user}, you have rejected {imgName}
            </h1>
          ) : (
            <h1 className="text-white text-lg text-right pr-5">
              {user}, you have interest in {imgName}
            </h1>
          )}
        </div>
      )}
      {count === 5 && (
        <h1 className="text-center mt-20 text-white font-bold text-xl">
          {user}, You have rated all the images. Thank You
        </h1>
      )}
    </div>
  );
}

export default Card;
