import Crypto from "../../components/Crypto/Crypto";
import ExchangeRate from "../../components/ExchangeRates/ExchangeRates";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Crypto />
      <ExchangeRate />
    </div>
  );
}

export default Home;
