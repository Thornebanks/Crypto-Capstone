import axios from "axios";
import { useEffect, useState } from "react";
import "./Crypto.scss";
import Currency from "../Currency/Currency";

const key = process.env.REACT_APP_API_KEY;

function CryptoCurrency() {
  const [currency, setCurrency] = useState([]);
  const [currencySearch, setCurrencySearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1d,30d&convert=EUR&per-page=100&page=1`
      )
      .then((response) => {
        setCurrency(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setCurrencySearch(event.target.value);
    console.log(currencySearch);
  };

  return (
    <div className="crypto">
      <div className="crypto__container">
        <h1 className="crypto__title">Crypto Tracker</h1>
        <form className="crypto__form">
          <input
            className="crypto__input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      {currency
        .filter((obj) =>
          currencySearch
            ? obj.currency.toLowerCase() === currencySearch.toLowerCase()
            : obj
        )
        .slice(0, 5)
        .map((obj) => (
          <Currency
            key={obj.id}
            logo_url={obj.logo_url}
            name={obj.name}
            currency={obj.currency}
          />
        ))}
    </div>
  );
}

export default CryptoCurrency;
