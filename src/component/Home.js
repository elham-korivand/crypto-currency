import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  console.log("coins :", coins);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterdCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-5 text-xl text-white">Search a currency</h1>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="search..."
            className=" p-2 border-2 border-blue-400 rounded-lg w-96 "
          />
        </form>
      </div>
      <div className="w-full flex flex-col justify-between">
        {filterdCoins.map((coin) => {
          return <Coin key={coin.id} {...coin} />;
        })}
      </div>
    </div>
  );
};

export default Home;
