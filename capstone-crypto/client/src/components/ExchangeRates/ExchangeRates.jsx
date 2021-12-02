import "./ExchangeRates.scss";

function ExchangeRate() {
  const currencies = ["BTC", "ETH", "USD", "CAD"];

  return (
    <div>
      <div>
        <h3>Crypto/Currency Converter</h3>
        <form>
          <div>
              <h6>From:</h6>
              <input type="number" placeholder="0"/>
          </div>
          <div>
              <select>
                  {currencies.map ((currency, i )=> (<option key={i}>{currency}</option>))}
                </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExchangeRate;
