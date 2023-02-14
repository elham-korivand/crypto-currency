import React from "react";
import { Link, useParams } from "react-router-dom";

//

const Coin = ({
  image,
  name,
  symbol,
  current_price: price,
  market_cap: marketcap,
  price_change_percentage_24h: pricechange,
  total_volume: volume,
}) => {
  const { id } = useParams();
  return (
    <div className="border-b-2 my-4 bg-blue-100 ">
      <div className="flex flex-row items-center justify-around	  ">
        <Link to={`coindetail/${id}`}>
          {" "}
          <img src={image} alt="crypto" className="w-10 h-10 " />
        </Link>
        <h1 className="m-5">{name}</h1>
        <p>{symbol}</p>
        <p>${price}</p>
        <p>${marketcap}</p>
        {pricechange < 0 ? (
          <p className="text-red-400 mx-10 ">{pricechange.toFixed(2)}%</p>
        ) : (
          <p className="text-green-400 mx-10 ">{pricechange.toFixed(2)}%</p>
        )}
        <p>MKT Cap:${marketcap}</p>
      </div>
    </div>
  );
};

export default Coin;
