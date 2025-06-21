import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialData = range(6).map(() => ({
    guess: '',
    id: crypto.randomUUID()
  }))

  const [guesses, setGuesses] = React.useState(initialData)

  function addGuess(guess) {
    const newGuess = {
      guess,
      id: crypto.randomUUID()
    }

    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
