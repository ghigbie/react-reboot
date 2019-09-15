import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' components={HomePage} />
        <Route path='/shop' components={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
