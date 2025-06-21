import React from 'react';

import Guess from '../Guess/Guess';

import { range } from '../../utils';

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map(({ guess, id }) => (
        <Guess key={id} word={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
