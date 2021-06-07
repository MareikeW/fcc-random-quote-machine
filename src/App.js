import { useEffect, useState } from "react";
import "./styles.css";

import apiKey from "./helper/apiKey";
import NewQuoteButton from "./components/NewQuoteButton";
import Quote from "./components/Quote";
import QuoteSource from "./components/QuoteSource";

export default function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "quotes15.p.rapidapi.com"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);
  console.log(quote);

  return (
    <div className="App">
      <Quote quote={quote.content} />
      <QuoteSource source={quote.originator.name} />
      <NewQuoteButton />
    </div>
  );
}
