import { Link } from 'react-router-dom';

function NavBar(params) {
    return (
        <div className="navbar">
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/coffees">
                <p>Shop</p>
            </Link>
            <Link to="/coffees">
                <p>Blog</p>
            </Link>
            <Link to="/coffees">
                <p>Contact</p>
            </Link>
        </div>
    )
}

export default NavBar;
