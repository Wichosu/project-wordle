import React from 'react';
import { range } from '../../utils';

import { checkGuess } from '../../game-helpers';

function Guess({ word, answer, handleGameStatus }) {
  const guessStatus = checkGuess(word, answer);
  let correctStatusCount = 0

  guessStatus?.map((letter) => {
    if (letter?.status === "correct") {
      correctStatusCount += 1
    }
  })

  console.log("GUESS Status:", guessStatus)
  if (correctStatusCount === 5) {
    handleGameStatus("happy")
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${guessStatus?.[num]?.status}`}>{word?.[num]}</span>
      ))}
    </p>
  );
}

export default Guess;
