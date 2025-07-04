import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState("")

  function handleGameStatus(status) {
    setGameStatus(status)
  }

  function addGuess(guess) {
    const newGuess = {
      guess,
      id: crypto.randomUUID()
    }

    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} handleGameStatus={handleGameStatus} />
      <GuessInput addGuess={addGuess} guesses={guesses} gameStatus={gameStatus} />
      <Banner status={gameStatus} answer={answer} />
    </>
  );
}

export default Game;
