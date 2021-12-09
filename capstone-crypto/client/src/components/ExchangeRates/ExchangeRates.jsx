import "./ExchangeRates.scss";
import { useState } from "react";
import axios from "axios";

function ExchangeRate() {
  const currencies = ["BTC", "ETH", "USD", "CAD"];
  const [primaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [secondaryCurrency, setSecondaryCurrency] = useState("BTC");
  const [amount, setAmmount] = useState(1);
  const [exchange, setExchaneg] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: primaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: secondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY2,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchaneg(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="exchange">
        <h3 className="exchange__title">Crypto/Currency Converter</h3>
        <div className="exchange__box">
          <table className="exchange__tbl">
            <body className="exchange__bdy">
              <tr className="exchange__row">
                <td className="exchange__p">Primary Currency:</td>
                <div className="exchange__primary">
                  <td>
                    <input className="exchange__input"
                      type="number"
                      name="ammout-1"
                      value={amount}
                      onChange={(event) => setAmmount(event.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      className="exchange__options"
                      name="option-1"
                      value={primaryCurrency}
                      onChange={(event) => setPrimaryCurrency(event.target.value)}
                    >
                      {currencies.map((currency, i) => (
                        <option key={i}>{currency}</option>
                      ))}
                    </select>
                  </td>
                </div>
              </tr>
              <tr className="exchange__row">
                <td className="exchange__p exchange__p--secondary">Secondary Currency:</td>
                <div className="exchange__primary">
                  <td>
                    <input className="exchange__input"
                      type="number"
                      name="ammout-2"
                      value={result}
                      disabled={true}
                    />
                  </td>
                  <td>
                    <select
                      className="exchange__options"
                      name="option-2"
                      value={secondaryCurrency}
                      onChange={(event) =>
                        setSecondaryCurrency(event.target.value)
                      }
                    >
                      {currencies.map((currency, i) => (
                        <option key={i}>{currency}</option>
                      ))}
                    </select>
                  </td>
                </div>
              </tr>
            </body>
          </table>
          <button className="exchange__btn" onClick={convert}>
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExchangeRate;
