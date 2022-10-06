import React, { useState } from "react";
import cardsData from "../cards";
import uniqid from "uniqid";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  let cards = cardsData.map((obj) => {
    return (
      <div
        key={uniqid()}
        className="hover:cursor-pointer hover:shadow-2xl p-6 shadow-xl text-center flex-col flex justify-between"
      >
        <img className="w-60" src={obj.img} alt={obj.name} />
        <span className="font-bold text-5xl">{obj.name}</span>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center">
      <p>Score: {score}</p>
      <p className="mb-5">Best Score: {bestScore}</p>
      <div className="grid grid-cols-3 gap-8">{cards}</div>
    </div>
  );
};

export default Game;
