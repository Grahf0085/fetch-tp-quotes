import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text }) => {
  return <h1>{ text }</h1>;
};

Quote.propTypes = {
  text: PropTypes.string.isRequired
};

export default Quote;
