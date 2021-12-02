import React from 'react';
import './App.scss';
import Home from '../src/pages/Home/Home';
import List from './pages/List/List';

import Footer from "../src/components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path="/" render={(routerProps) => <Home {...routerProps} />}/>
       <Route path="/List" render={(routerProps) => <List {...routerProps} />}/>
       
     </Switch>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
