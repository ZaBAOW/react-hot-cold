import React from 'react';

// AuralStatus recieves prop from header and returns
// an auralStatus element that conveys the correct 
// circumstance of the game to the user.
export defult function AuralStatus(props) {
    return(
        <p
          id='status-readout'
          className='visuallyhidden'    
          aria-live='assertive'
          aria-atomic='true'
        >
          {props.auralStatus}
        </p>
    )
}

