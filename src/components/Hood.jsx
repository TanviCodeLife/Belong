import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function Hood({hoodName, hoodCommuteTime, hoodDistance}){
  return(
    <div>
    <h3>{hoodName}</h3>
    <p>{hoodCommuteTime}</p>
    <p><strong>Distance:</strong> {hoodDistance}</p>
    </div>
  );
}

Hood.propTypes = {
  hoodName: PropTypes.string.isRequired,
  hoodCommuteTime: PropTypes.string.isRequired,
  hoodDistance: PropTypes.string.isRequired,
};

export default Hood;
