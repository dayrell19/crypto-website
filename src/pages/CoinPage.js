import React from "react";
import "./CoinPage.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

function CoinPage() {
  let { id } = useParams();
  let history = useHistory();
  const [coinInfo, setCoinInfo] = useState();

  useEffect(() => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        setCoinInfo(response.data);
        console.log(response.data);
      })
      .catch(() => {
        history.push("/pagenotfound");
      });
  }, []);

  return (
    <div>
      <h1>Coin Page Bitch</h1>
      <h3>Coin chosen: {id}</h3>
    </div>
  );
}

export default CoinPage;
