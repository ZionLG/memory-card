import React, { useState, useEffect } from "react";
import cardsData from "../cards";
import Card from "./Card";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [curCards, setCurCards] = useState([]);
  const [cardStack, setCardStack] = useState(cardsData);

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setCardStack((pervStack) => shuffle(pervStack));
  }, []);

  const handleOnClick = (e) => {
    setCardStack((pervStack) => shuffle(pervStack));
    let curId = e.currentTarget.dataset.id;
    if (curCards.includes(curId)) {
      setCurCards([]);
      if (score > bestScore) setBestScore(score);
      setScore(0);
    } else {
      setCurCards((pervStack) => [...pervStack, curId]);
      setScore((pervScore) => pervScore + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p>Score: {score}</p>
      <p className="mb-5">Best Score: {bestScore}</p>
      <div className="grid grid-cols-5 gap-8 mb-6">
        {cardStack.map((obj) => {
          return (
            <Card
              key={obj.name}
              img={obj.img}
              name={obj.name}
              onClick={handleOnClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Game;
