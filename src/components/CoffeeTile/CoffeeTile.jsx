import './CoffeeTile.scss';
import PropTypes from 'prop-types';

function CoffeeTile({ id, name, picture }) {
    return(
        <a className="coffee-tile" href={ `https://localhost:3000/coffes/${ id }` }>
            <img className="coffee-tile__img" src={ picture } alt="coffee"></img>
            <h1 className="coffee-tile__title">{ name }</h1>
        </a>
    )
}

CoffeeTile.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  };

export default CoffeeTile;