import React from 'react';

import './guess-list.css';


// grabs the guess array prop from status-section.js and inputs it into
// a listed element, which is then returned nested in an unlisted element
// to be viewed by the user.
export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
