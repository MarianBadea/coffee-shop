import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoffeeGrid from './components/CoffeeGrid/CoffeeGrid';
import NavBar from './pages/NavBar/NavBar';
import Home from './pages/Home/Home';
import { coffees } from '../src/mock-data/coffees.json'
import Footer from './pages/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  const [ openModal, setOpenModal ] = useState(false)

  return (
    <Router>
      <div className="app">
        <h1 className="app__title">CoffeeShop</h1>
        <button
          onClick={ () => setOpenModal(true) }
        >
          Baschet
        </button>
        <Modal 
          title="Shopping Baschet"
          isOpen={ openModal }
          onClose={ () => setOpenModal(false) }
        />
        <div className="app__content">
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
        </div>
        <div className="app__footer" >
        <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
