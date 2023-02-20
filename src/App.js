import React from "react";
import "./index.css";
import Home from "./component/Home";
import CoinDetail from "./component/CoinDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/coindetail/:id" element={<CoinDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
