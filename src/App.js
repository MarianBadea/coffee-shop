import React from 'react';
import './App.css';
import CoffeeGrid from './components/CoffeeGrid/CoffeeGrid';
import { coffees } from '../src/mock-data/coffees.json'

function App() {
  return (
    <div className="App">
        <CoffeeGrid coffees={ coffees } />
    </div>
  );
}

export default App;
