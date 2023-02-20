import React from "react";
import { NavLink } from "react-router-dom";

//

const Coin = ({
  image,
  name,
  symbol,
  current_price: price,
  market_cap: marketcap,
  price_change_percentage_24h: pricechange,
  total_volume: volume,
  id,
}) => {
  return (
    <div className="border-b-2 my-4 text-white ">
      <div className="flex flex-row items-center justify-around	  ">
        <NavLink to={`/coindetail/${id}`}>
          {" "}
          <img src={image} alt="crypto" className="w-10 h-10 " />
        </NavLink>
        <h1 className="m-5 font-bold w-5">{name}</h1>
        <p className="font-bold w-5">{symbol}</p>
        <p className="font-bold w-5">${price}</p>
        <p className="font-bold w-5">${marketcap}</p>
        {pricechange < 0 ? (
          <p className="text-red-400 mx-10 font-bold">
            {pricechange.toFixed(2)}%
          </p>
        ) : (
          <p className="text-green-400 mx-10 font-bold">
            {pricechange.toFixed(2)}%
          </p>
        )}
        <p className="font-bold">MKT Cap: ${marketcap}</p>
      </div>
    </div>
  );
};

export default Coin;
