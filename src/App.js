import React from 'react';
import './App.scss';
import CoffeeGrid from './components/CoffeeGrid/CoffeeGrid';
import { coffees } from '../src/mock-data/coffees.json'

function App() {
  return (
    <div className="app">
    <h1 className="app__title">CoffeeShop</h1>
        <CoffeeGrid coffees={ coffees } />
    </div>
  );
}

export default App;
