import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./Main.css";
import Coin from "./Coin.js";

function Main() {
  const [cryptoList, setCryptoList] = useState([]);
  const [coinSearch, setCoinSearch] = useState("");
  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    ).then((response) => {
      setCryptoList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="mainBackground">
      <h1 className="mainTitle">Crypto Website</h1>
      <h3 className="mainText">Search for a coin</h3>
      <input
        type="text"
        placeholder="Search"
        className="mainInput"
        onChange={(event) => {
          setCoinSearch(event.target.value);
        }}
        onKeyDown={(event) => event.key === "Enter" && console.log("Funfou")}
      />
      {cryptoList.map((value, key) => {
        return (
          <div key={key}>
            <Coin
              name={value.name}
              price={value.current_price}
              image={value.image}
              symbol={value.symbol}
              dailypercentage={value.price_change_percentage_24h}
              dailypricechange={value.price_change_24h}
              rank={value.market_cap_rank}
              id={value.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
