import PropTypes from 'prop-types';
import CoffeeTile from '../CoffeeTile/CoffeeTile';
import './CoffeeGrid.scss'
import React from 'react';
import Select from 'react-select';
import { filters } from '../../mock-data/filters.json';

function CoffeeGrid({ coffees }) {
    const tiles = coffees.map((type) => (
        <CoffeeTile 
          id={ type.id }
          name={ type.name }
          picture={ type.picture }
          key={ type.id }
        />
      ));

      const filterOptions = filters.map((filter) => {
          return {
            value: filter.value,
            label: filter.name,
          }
        }
      );

      console.log(filterOptions)
    
    return (
        <div className="coffee-grid">
          <Select 
            placeholder="Sort by..."
            name="filters"
            options={filterOptions}
            className="coffee-grid__filter"
          />
          <div className="coffee-grid__tiles">{ tiles }</div>
        </div>
    );
}

CoffeeGrid.propTypes = {
    coffees: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture: PropTypes.string,
    })).isRequired,
  }
export default CoffeeGrid;
