import React from "react";
import "./CoinPage.css";
import { useParams } from "react-router-dom";

function CoinPage() {
  let { id } = useParams();
  return (
    <div>
      <h1>Coin Page Bitch</h1>
      <h3>Coin chosen: {id}</h3>
    </div>
  );
}

export default CoinPage;
