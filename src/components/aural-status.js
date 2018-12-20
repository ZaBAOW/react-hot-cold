import React from 'react';
import {connect} from 'react-redux';
import {setAuralStatus} from '../actions';
// AuralStatus recieves prop from header and returns
// an auralStatus element that conveys the correct 
// circumstance of the game to the user.
export function AuralStatus(props) {
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

export const mapStateToProps = state => ({
    auralStatus: state.auralStatus
});

export default connect(mapStateToProps)(AuralStatus);

