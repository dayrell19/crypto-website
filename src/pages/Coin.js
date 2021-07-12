import React from "react";
import "./Coin.css";
import { useHistory } from "react-router-dom";

function Coin({
  name,
  price,
  image,
  symbol,
  dailypercentage,
  dailypricechange,
  rank,
  id,
}) {
  let history = useHistory();
  return (
    <div className="coinContainer">
      <p className="coinRank">{rank}</p>
      <img src={image} className="coinImage" alt="que buhao" />
      <p className="coinTitle">{name}</p>
      <p className="coinSymbol">{symbol}</p>
      <p className="coinPrice">$ {price}</p>
      <p
        className="coinPercentage"
        id={dailypercentage < 0 ? "redPercentage" : "greenPercentage"}
      >
        {dailypercentage}%
      </p>
      <p
        className="coinPriceVariation"
        id={dailypercentage < 0 ? "redPrice" : "greenPrice"}
      >
        ${dailypricechange.toFixed(5)}
      </p>
      <button
        className="coinButton"
        onClick={() => {
          history.push(`/CoinPage/${id}`);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Coin;
