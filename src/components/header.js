import React from 'react';

import TopNav from './top-nav';

import './header.css';

// Header is recieving props from game.js and sending them downstream
// to TopNav. 

// There is no info the pass on to a restart game as this function will
// only cause values in game.js to be set back to their default values.
export default function Header(props) {
    return(
      <header> 
        <TopNav 
          onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
          onRestartGame={() => props.onRestartGame()}
        />
        <h1>HOT or COLD</h1>
      </header>
    )
}





