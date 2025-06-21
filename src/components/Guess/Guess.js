import React from 'react';

function Guess({ word }) {
  return (
    <p className="guess">
      {word?.split('')?.map((letter) => (
        <span className='cell'>{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
