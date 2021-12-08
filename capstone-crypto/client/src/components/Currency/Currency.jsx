import React from "react";
import "./Currency.scss";

function Currency({
  logo_url,
  name,
  currency,
  price,
  price_change,
  price_change_pct,
}) {
  return (
    <div className="currency">
      <div className="currency__container">
        <div className="currency__card">
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
          <div className="currency__mobile">
            <div className="currency__container2">
              <p className="currency__price">{price} USD</p>
              {price_change.includes("-") ? (
                <p className="currency__red">{price_change}</p>
              ) : (
                <p className="currency__green">{price_change}</p>
              )}
              {price_change_pct.includes("-") ? (
                <p className="currency__red">{price_change_pct}%</p>
              ) : (
                <p className="currency__green">{price_change_pct}%</p>
              )}
            </div>
            <div className="currency__mobileOnly">
              <p>Price</p>
              <p>Change</p>
              <p>Percentage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
