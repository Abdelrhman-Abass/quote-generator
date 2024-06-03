import React, { useState } from 'react';
import './App.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share'; // Import necessary components

const App = () => {
  const url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState({ content: "", author: "" });

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(`${quote.author} once said: ${quote.content}`);
    alert('Quote copied!');
  };

  // Define share URL with relevant quote information
  const shareUrl = `https://your-app-domain.com/?quote=${quote.content}&author=${quote.author}`;

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote} className="btn">
            Generate Another Quote
          </button>
          <div className="share-buttons">
            <FacebookShareButton url={shareUrl} quote={quote.content}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={quote.content}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={quote.content}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl} subject={`Quote by ${quote.author}`}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
