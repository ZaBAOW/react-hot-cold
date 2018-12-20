import React from 'react';
import {connect} from 'react-reducx';
import './guess-count.css';

// grabs the guess array length prop from status-section.js and
// inputs it into a conditional statement which is then nested into
// a header element and returned to be view by the user.
export default function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}

cosnt mapStateToProps = state = ({
    guessCount: state.guessCount.length
});

export default connect(mapStateToProps)(GuessCount);