import React from 'react';
import './App.scss';
import Home from '../src/pages/Home';
// import Crypto from "./components/Crypto/Crypto";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
