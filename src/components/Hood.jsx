import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-materialize';
import { v4 } from 'uuid';

function Interest({label, icon, list}){
  return(
    <div className='content content-body'>
      <Icon>{icon}</Icon>
      <h3>{label}</h3>
      <ul>
        {list.map((item) =>
          <li key={v4()}>{item}</li>
        )}
      </ul>
    </div>
  );
}

Interest.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default Interest;
