import axios from "axios";
import { useEffect, useState } from "react";
import "./Crypto.scss";
import Currency from "../Currency/Currency";
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

function Crypto() {
  const [currency, setCurrency] = useState([]);
  const [currencySearch, setCurrencySearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1h,1d,7d,30d,365d,ytd&per-page=100&page=1`
      )
      .then((response) => {
        setCurrency(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setCurrencySearch(event.target.value);
  };

  return (
    <div className="crypto">
      <div className="crypto__container">
        <form className="crypto__form">
          <input
            className="crypto__input"
            type="text"
            placeholder="Search Market"
            onChange={handleChange}
          />
        </form>
        <div className="crypto__tag">
          <h3 className="crypto__crypto">Cryptos</h3>
          <div className="crypto__tabel">
            <h3 className="crypto__prices">Price</h3>
            <h3 className="crypto__change crypto__change--modifier">24hr Change</h3>
            <h3 className="crypto__pct">% Change</h3>
          </div>
        </div>
      </div>
      {currency
        .filter((obj) =>
          currencySearch
            ? obj.currency.toLowerCase() === currencySearch.toLowerCase()
            : obj
        )
        .map((obj) => (
          <Link className="crypto__link" key={obj.id} to={"/coin/" + obj.id}>
            <Currency
              logo_url={obj.logo_url}
              name={obj.name}
              currency={obj.currency}
              price={obj.price}
              price_change={obj["1d"].price_change}
              price_change_pct={obj["1d"].price_change_pct}
            />
          </Link>
        ))}
    </div>
  );
}

export default Crypto;
