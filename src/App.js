import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoffeeGrid from './components/CoffeeGrid/CoffeeGrid';
import NavBar from './pages/NavBar/NavBar';
import Home from './pages/Home/Home';
import { coffees } from '../src/mock-data/coffees.json'
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="app__title">CoffeeShop</h1>
          <NavBar />
          <div>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/coffees'>
                <CoffeeGrid coffees={coffees} />
              </Route>
            </Switch>
          </div>
          <Footer />
      </div>

    </Router>
  );
}

export default App;
