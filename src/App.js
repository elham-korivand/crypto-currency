// import "./App.css";
import React from "react";
import "./index.css";
import Home from "./component/Home";
import CoinDetail from "./component/CoinDetail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/coindetail/:id" element={<CoinDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
