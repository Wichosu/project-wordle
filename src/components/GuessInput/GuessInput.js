import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    addGuess(guess)

    setGuess('')
  }

  return (
    <form 
      className='guess-input-wrapper'
      onSubmit={handleSubmit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text' 
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
      />
    </form>
  );
}

export default GuessInput;
