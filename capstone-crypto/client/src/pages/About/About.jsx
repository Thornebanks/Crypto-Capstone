import "./About.scss";
import Header from "../../components/Header/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <p className="about__title">
          This is my Capstone project "Gemimine" and I choose to make an app
          that tracks cryptocurrency prices and data on day to day bases.
        </p>
        <h1 className="about__header">What is Cryptocurrency?</h1>
        <article className="about__des">
          Cryptocurrency is a form of payment that can be exchanged online for
          goods and services. Many companies have issued their own currencies,
          often called tokens, and these can be traded specifically for the good
          or service that the company provides. Think of them as you would
          arcade tokens or casino chips. You’ll need to exchange real currency
          for the cryptocurrency to access the good or service. Cryptocurrencies
          work using a technology called blockchain. Blockchain is a
          decentralized technology spread across many computers that manages and
          records transactions. Part of the appeal of this technology is its
          security.
        </article>
        <h3 className="about__function">Functionality to add:</h3>
        <article className="about__functionality">
          News Feed were you can read day to day news on your favorite crypto.
          Aother functionality was Exchange rate where you can conver BTC or ETH
          to USD and CAD or other way arround and Pagination.
        </article>
      </div>
    </div>
  );
}
export default About;
