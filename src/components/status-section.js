import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

// number of guesses array and the aural status string are passed form Game.js
// and used to return the user's current status in the game.
export default function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}

