import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ onClick }) => {
  return <button onClick={ onClick }>Load</button>;
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired
};

export default Button;
