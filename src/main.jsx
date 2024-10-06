import React from "react";
import ReactDOM from "react-dom/client";
import PriceCard from "./Price Card/pricecard.jsx";
import "./Price Card/pricecard.css";
import jsonData from "./Price Card/data.json";

let data = jsonData;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main">
      {data.map((card) => (
        <PriceCard
          key={card.id}
          type={card.type}
          price={card.price}
          features={card.features}
        />
      ))}
    </div>
  </React.StrictMode>
);
