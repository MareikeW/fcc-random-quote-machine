import { useEffect, useState } from "react";
import "./styles.css";

import API_KEY from "./helper/API_KEY";
import API_URL from "./helper/API_URL";
//import NewQuoteButton from "./components/NewQuoteButton";
//import Quote from "./components/Quote";
//import QuoteSource from "./components/QuoteSource";

const App = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "quotes15.p.rapidapi.com"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  };

  return (
    <div className="App">
      {quote.length === undefined ? (
        <div>
          <blockquote>{quote.content}</blockquote>
          <cite>{quote.originator["name"]}</cite>
        </div>
      ) : null}

      <button onClick={() => getNewQuote()}>New Quote</button>
    </div>
  );
};

export default App;
