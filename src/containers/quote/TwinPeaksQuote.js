import React, { useState } from 'react';
import Load from '../../components/app/Load';
import Quote from '../../components/app/Quote';
import { tpApi } from '../../services/tpApi.js';

const TpQuote = () => {

  const [fetchedQuote, setQuote] = useState('You need to fetch a quote silly');

  const newerQuote = async () => {
    const res = await tpApi();
    setQuote(res.quoteTextOnly);
  };

  return (
    <section>
      <Quote text={fetchedQuote} />
      <Load onClick={newerQuote} />
    </section>
  );


};

export default TpQuote;
