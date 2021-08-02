export const getQuote = async () => {
  const res = await fetch(
    'https://damp-cove-34137.herokuapp.com/api/quotes/45');

  const json = await res.json();

  return json;
};
