import PropTypes from 'prop-types';
import CoffeeTile from '../CoffeeTile/CoffeeTile';
import './CoffeeGrid.scss'

function CoffeeGrid({ coffees }) {
    const tiles = coffees.map((type) => (
        <CoffeeTile 
          id={ type.id }
          name={ type.name }
          picture={ type.picture }
          key={ type.id }
        />
      ));
      console.log(tiles);
    
    return (
        <div className="coffee-tiles">
          { tiles }
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
