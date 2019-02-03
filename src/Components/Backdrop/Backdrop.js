import React from 'react';
import './Backdrop.sass';

const backdrop = props => (
  <div className="backdrop" onClick={props.click} />
);

export default backdrop;
