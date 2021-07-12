import React from "react";
import "./CoinPage.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

function CoinPage() {
  let { id } = useParams();
  let history = useHistory();
  const [coinInfo, setCoinInfo] = useState(null);

  useEffect(() => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        setCoinInfo(response.data);
        console.log(response.data);
      })
      .catch(() => {
        history.push("/pagenotfound");
      });
  }, [history, id]);

  if (coinInfo) {
    return (
      <div className="coinPageContainer">
        <div className="wrap">
          <h1 className="coinPageName">{coinInfo.name}</h1>

          <img
            src={coinInfo.image.large}
            className="coinPageLogo"
            alt="que buhao"
          />

          <div className="row">
            <p className="coinPagePrice">
              Price: ${coinInfo.market_data.current_price.usd}
            </p>
            <p
              className="coinPagePercentage"
              id={
                coinInfo.market_data.market_cap_change_percentage_24h < 0
                  ? "redPercentage"
                  : "greenPercentage"
              }
            >
              {coinInfo.market_data.market_cap_change_percentage_24h}%
            </p>
            <p
              className="coinPagePriceChange"
              id={
                coinInfo.market_data.price_change_24h_in_currency.usd < 0
                  ? "redPrice"
                  : "greenPrice"
              }
            >
              $
              {coinInfo.market_data.price_change_24h_in_currency.usd.toFixed(5)}
            </p>
          </div>
          <div className="row">
            <p className="coinPageLow">
              Daily Low: ${coinInfo.market_data.low_24h.usd}
            </p>
            <p className="coinPageHigh">
              Daily High: ${coinInfo.market_data.high_24h.usd}
            </p>
          </div>
          <div className="row">
            <p className="coinPageCap">
              Market Cap: $
              {coinInfo.market_data.market_cap.usd.toLocaleString()}
            </p>
          </div>
          <div className="secondrow">
            <p className="coinPageSupply">
              Circulating Supply: {coinInfo.market_data.circulating_supply}/
              {coinInfo.market_data.max_supply == null
                ? "undetermined"
                : coinInfo.market_data.max_supply}
            </p>
          </div>
          <button
            class="goBackButton"
            onClick={() => {
              history.push("/");
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CoinPage;
