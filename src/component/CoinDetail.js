import axios from "axios";
import React, { useEffect } from "react";

const CoinDetail = () => {
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((res) => console.log(res.data));
  }, []);
  return <div>hkkkkkkkkkkkkkkk</div>;
};

export default CoinDetail;
