import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoffeeGrid from './components/CoffeeGrid/CoffeeGrid';
import NavBar from './pages/NavBar/NavBar';
import { coffees } from '../src/mock-data/coffees.json'

function App() {
  return (
    <Router>
      <div className="app">
      <h1 className="app__title">CoffeeShop</h1>
      <NavBar />
      <div>
        <Switch>
           <Route exact path='/'>
            <p>Hello</p>
          </Route>
          <Route exact path='/coffees'>
            <CoffeeGrid coffees={coffees} />
          </Route>
        </Switch>
      </div>
      </div>

    </Router>
  );
}

export default App;
