import React from "react";

const DisplayQuote = (props) => {
  const { quote } = props;
  return (
    <div className="content" id="simpsonsQuote">
      <h2>
        <strong>{quote.quote}</strong>
      </h2>
      <p>{quote.character}</p>
      <img src={quote.image} alt={quote.character} />
    </div>
  );
};

export default DisplayQuote;
