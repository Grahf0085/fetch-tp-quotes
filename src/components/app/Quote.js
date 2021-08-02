import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ textQuote }) => {
  return <h1>{ textQuote }</h1>;
};

Quote.propTypes = {
  textQuote: PropTypes.string.isRequired
};

export default Quote;
