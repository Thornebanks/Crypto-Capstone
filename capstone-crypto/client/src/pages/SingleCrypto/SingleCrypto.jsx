import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SingleCrypto.scss";
import Chart from "../../components/Chart/Chart";
import Header from "../../components/Header/Header";

const key = process.env.REACT_APP_API_KEY;

function SingleCrypto(props) {
  const [coin, setCoin] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${props.match.params.id}&interval=1d,7d,30d,365d&per-page=100&page=1`
      )
      .then((response) => {
        console.log(response.data);
        setCoin(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!coin) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
        <Header />
      <div className="crypto">
          <div className="crypto__container1">
            <div className="crypto__card">
              <img
                className="crypto_logo"
                src={coin.logo_url}
                alt="coin logo"
                width="50px"
              />
              <div className="crypto__btc">
                <h2 className="crypto__name">{coin.name}</h2>
                <h6 className="crypto__currency">{coin.currency}</h6>
              </div>
            </div>
            <div className="crypto__container2">
              <h6 className="crypto__price">$ {coin.price} USD</h6>
              <div className="crypto__changeCard">
                <h6 className="crypto__change">$ {coin["1d"].price_change}</h6>
                <h6 className="crypto__pct">{coin["1d"].price_change_pct}%</h6>
                {/* {coin["id"].price_change.includes("-") ? (
                  <p className="currency__red">$ {coin["id"].price_change}</p>
                ) : (
                  <p className="currency__green">{coin["id"].price_change}</p>
                )}
                {coin["id"].price_change_pct.includes("-") ? (
                  <p className="currency__red">{coin["id"].price_change_pct}%</p>
                ) : (
                  <p className="currency__green">{coin["id"].price_change_pct}%</p>
                )} */}
              </div>
            </div>
          </div>
          <Chart coin={coin} />
          <div className="crypto__des">
              <h2>About {coin.name}</h2>
          </div>
          <div className="crypto__about">
              <div>
                  <div className="crypto__h6">
                      <h6>Market cap</h6>
                  </div>
                  <div className="crypto__value">
                      <h6>$ {coin.market_cap}</h6>
                      <p className="crypto__p">USD</p>
                  </div>
              </div>
              <div>
                  <div className="crypto__h6">
                      <h6>Volume (24 hrs)</h6>
                  </div>
                  <div className="crypto__value">
                      <h6>$ {coin["1d"].volume}</h6>
                      <p className="crypto__p">USD</p>
                  </div>
              </div>
              <div>
                  <div className="crypto__h6">
                      <h6>Circulation supply</h6>
                  </div>
                  <div className="crypto__value">
                      <h6>
                        {coin.circulating_supply}
                      </h6>
                      <p className="crypto__p">{coin.currency}</p>
                  </div>
              </div>
              <div>
                  <div className="crypto__h6">
                      <h6>All-time high</h6>
                  </div>
                  <div className="crypto__value">
                      <h6>$ {coin.high}</h6>
                      <p className="crypto__p">USD</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default SingleCrypto;
