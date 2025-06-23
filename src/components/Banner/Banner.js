import React from 'react';

function Banner({ status, answer }) {
  return (
    <>
      { status === "happy" && <HappyBanner />}
      { status === "sad" && <SadBanner answer={answer} />}
    </>
  );
}

function HappyBanner() {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );
}

export default Banner;
