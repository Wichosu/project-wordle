import React from 'react';

import Guess from '../Guess/Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer, handleGameStatus }) {
  console.log("Guesses length", guesses.length)

  if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    handleGameStatus("sad")
  }

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={guesses[num]?.id} word={guesses[num]?.guess} answer={answer} handleGameStatus={handleGameStatus} />
      ))}
    </div>
  );
}

export default GuessResults;
