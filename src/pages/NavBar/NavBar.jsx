import { Link } from 'react-router-dom';
import './NavBar.scss'

function NavBar(params) {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__link">
                <p>Home</p>
            </Link>
            <Link to="/coffees" className="navbar__link">
                <p>Shop</p>
            </Link>
            <Link to="/blog" className="navbar__link">
                <p>Blog</p>
            </Link>
            <Link to="/contact" className="navbar__link">
                <p>Contact</p>
            </Link>
        </div>
    )
}

export default NavBar;
