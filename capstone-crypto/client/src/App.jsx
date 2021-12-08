import React from 'react';
import './App.scss';
import Home from '../src/pages/Home/Home';
import About from './pages/About/About';
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleCrypto from './pages/SingleCrypto/SingleCrypto';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route  exact path="/" component={Home} />
       <Route path="/About" component={About} />
       <Route path="/Contact" component={Contact} />
       <Route path="/coin/:id" component={SingleCrypto} />
     </Switch>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
