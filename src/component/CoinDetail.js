import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  console.log("id", id);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      setDetail(response.data);
      console.log(response);
    } catch (error) {
      console.log("err in get data");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-red-100 ">
      <div className="w-1/2 my-20">
        <div className="border-gray-100 border-2 p-5 w-full text-center text-3xl">
          <h1>{detail.name}</h1>
        </div>
        <div className="border-gray-100 border-2 p-5 w-full text-center text-3xl my-10">
          <div>
            <div className="relative right-80 bottom-5">
              <span className="bg-fuchsia-900 p-1 rounded-lg text-base">
                Rank # {detail.market_cap_rank}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row items-center m">
                {detail.image ? (
                  <img src={detail.image.small} alt="" className="w-50" />
                ) : null}
                <p className="text-lg ml-5">{detail.name}</p>
                <p className="text-lg ml-3">[{detail.symbol}]</p>
              </div>
              <div className="relative right-20">
                {detail.market_data?.current_price ? (
                  <p>${detail.market_data.current_price.usd}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <table className=" w-1/2 text-center relative m-auto bottom-20  border-red border-2">
          <thead className="bg-red-900 ">
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {detail.market_data?.price_change_percentage_1h_in_currency ? (
                  <p>
                    {
                      detail.market_data.price_change_percentage_1h_in_currency
                        .usd
                    }
                  </p>
                ) : null}
              </td>
              <td>
                {detail.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {
                      detail.market_data.price_change_percentage_24h_in_currency
                        .usd
                    }
                  </p>
                ) : null}
              </td>
              <td>
                {detail.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {
                      detail.market_data.price_change_percentage_7d_in_currency
                        .usd
                    }
                  </p>
                ) : null}
              </td>
              <td>
                {detail.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {
                      detail.market_data.price_change_percentage_14d_in_currency
                        .usd
                    }
                  </p>
                ) : null}
              </td>
              <td>
                {detail.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {
                      detail.market_data.price_change_percentage_30d_in_currency
                        .usd
                    }
                  </p>
                ) : null}
              </td>
              <td>
                {detail.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {
                      detail.market_data.price_change_percentage_1y_in_currency
                        .usd
                    }
                  </p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="">
          <div>
            <div className="flex justify-between w-80 border-b-2 p-2">
              <h4>24 Hour Low</h4>
              {detail.market_data?.high_24h ? (
                <p>{detail.market_data.low_24h.usd}</p>
              ) : null}
            </div>
            <div className="flex justify-between w-80 border-b-2 p-2">
              <h4>24 Hour High</h4>
              {detail.market_data?.high_24h ? (
                <p>{detail.market_data.high_24h.usd}</p>
              ) : null}{" "}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <div className="flex justify-between  border-b-2 p-2 ">
              <h4>Market Cap</h4>
              {detail.market_data?.market_cap ? (
                <p>{detail.market_data.market_cap.usd}</p>
              ) : null}
            </div>
            <div className="flex justify-between w-80 border-b-2 p-2 ">
              <h4>Circulating Supply</h4>
              {detail.market_data?.market_cap ? (
                <p>{detail.market_data.circulating_supply.usd}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="p-5">
          <h3 className="my-2">About</h3>
          <p>{detail.description ? detail.description.en : null}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
