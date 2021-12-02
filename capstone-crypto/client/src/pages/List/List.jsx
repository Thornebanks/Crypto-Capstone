import axios from "axios";
import { useEffect, useState } from "react";
import "./List.scss";
import Currency from "../../components/Currency/Currency";
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

function List() {
  const [currency, setCurrency] = useState([]);
  const [currencySearch, setCurrencySearch] = useState("");

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

  return (
    <div className="List">
      <div className="List__container">
        <h1 className="List__title">Top 100 Crypto</h1>
      </div>
      {currency
        .filter((obj) =>
          currencySearch
            ? obj.currency.toLowerCase() === currencySearch.toLowerCase()
            : obj
        )
        .map((obj) => (
          <Link key={obj.id} to={"/coin/" + obj.id}>
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

export default List;
