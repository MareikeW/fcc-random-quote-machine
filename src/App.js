import { useEffect, useState } from "react";
import "./styles.css";

import API_KEY from "./helper/API_KEY";
import API_URL from "./helper/API_URL";

import Twitter from "./components/Twitter";
import NewQuoteButton from "./components/NewQuoteButton";
import Quote from "./components/Quote";
import QuoteSource from "./components/QuoteSource";
import QuoteNotFound from "./components/QuoteNotFound";

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
    <main className="App" id="quote-box">
      {Object.keys(quote).length === 6 ? (
        <div className="quote-container">
          <Quote quote={quote.content} />
          <QuoteSource source={quote.originator["name"]} />
        </div>
      ) : (
        <QuoteNotFound />
      )}
      <Twitter />
      <NewQuoteButton getNewQuote={getNewQuote} />
    </main>
  );
};

export default App;
