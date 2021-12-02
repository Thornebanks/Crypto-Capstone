import React from "react";
import "./Currency.scss";

const Currency = ({
  logo_url,
  name,
  currency,
  price,
  price_change,
  price_change_pct,
}) => {
  return (
    <div className="currency">
      <div className="currency__container">
        <div className="currency__container1">
          <img
            className="currency__img"
            src={logo_url}
            alt="crypto currency logo"
          />
          <div className="currency__name">
            <h1 className="currency__title">{name}</h1>
            <p className="currency__ticker">{currency}</p>
          </div>
        </div>
        <div className="currency__container2">
          <p className="currency__price">{price}</p>
          <p className="currency__priceChange">{price_change}</p>
          <p className="currency__perentage">{price_change_pct}%</p>
        </div>
      </div>
    </div>
  );
};

export default Currency;
