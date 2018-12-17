import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

// grabs feedback string and guesscount array from games.js  and inputs them
// into a section element with calls to pass on the props to their respective
// js files.
export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
