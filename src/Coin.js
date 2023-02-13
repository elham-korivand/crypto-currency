import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  current_price: price,
  market_cap: marketcap,
  price_change_percentage_24h: pricechange,
  total_volume: volume,
}) => {
  return (
    <div className="border-b-2 my-4 bg-blue-100 ">
      <div className="flex flex-row items-center justify-around	  ">
        {/* <div className="flex flex-row items-center "> */}
        <img src={image} alt="crypto" className="w-10 h-10" />
        <h1 className="m-5">{name}</h1>
        <p>{symbol}</p>

        {/* <div className="flex flex-row justify-between "> */}
        <p>${price}</p>
        <p>${marketcap}</p>
        {pricechange < 0 ? (
          <p className="text-red-400 mx-10 ">{pricechange.toFixed(2)}%</p>
        ) : (
          <p className="text-green-400 mx-10 ">{pricechange.toFixed(2)}%</p>
        )}
        <p>MKT Cap:${marketcap}</p>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Coin;
