const NewQuoteButton = ({ getNewQuote }) => {
  return (
    <button onClick={() => getNewQuote()} id="new-quote">
      New Quote
    </button>
  );
};

export default NewQuoteButton;
