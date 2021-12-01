import React from 'react';
import './App.scss';
import Crypto from "./components/Crypto/Crypto"
import ExchangeRate from './components/ExchangeRates/ExchangeRates';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Crypto />
     <ExchangeRate />
    </BrowserRouter>
  );
}

export default App;
