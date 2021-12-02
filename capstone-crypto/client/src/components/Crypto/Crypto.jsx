import axios from "axios";
import { useEffect, useState } from "react";
import "./Crypto.scss";
import Currency from "../Currency/Currency";
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

function CryptoCurrency() {
  const [currency, setCurrency] = useState([]);
  const [currencySearch, setCurrencySearch] = useState("");
  // const [name , setName] = useState("")

  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1h,1d,7d,30d,365d,ytd&per-page=100&page=1`
      )
      .then((response) => {
        setCurrency(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setCurrencySearch(event.target.value);
    // setName(event.target.value);
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
        .slice(0, 7)
        .map((obj) => (
          <Link key={obj.id} to={"/currency/" + obj.currency}>
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

export default CryptoCurrency;
