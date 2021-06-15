const NewQuoteButton = ({ getNewQuote }) => {
  function handleClick() {
    
  }

  return (
    <div>
      <button className="new-quote__button" onClick={() => getNewQuote()} id="new-quote">
        New Quote
        <span className="btn-effect__container" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  );
};

export default NewQuoteButton;
