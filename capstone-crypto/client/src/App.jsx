import React from 'react';
import './App.scss';
import Home from '../src/pages/Home/Home';
import List from './pages/List/List';
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleCrypto from './pages/SingleCrypto/SingleCrypto';

function App() {
  return (
    <BrowserRouter>
     <Switch>
       {/* <Route exact path="/" render={(routerProps) => <Home {...routerProps} />}/> */}
       <Route  exact path="/" component={Home} />
       <Route  path="/List" component={List} />
       {/* <Route path="/List" render={(routerProps) => <List {...routerProps} />}/> */}
       <Route path="/coin/:id" component={SingleCrypto} />
     </Switch>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
