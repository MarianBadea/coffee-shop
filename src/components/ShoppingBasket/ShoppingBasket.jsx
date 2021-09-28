import { Cart2, House } from 'react-bootstrap-icons';
import Modal from '../Modal/Modal';
import './ShoppingBasket.scss'

function Header({ openModal, setOpenModal }) {
    return (
        <div className="header">
            <div className="header__basket">
                <button
                className="header__button"
                >
                <House />
                </button>
            </div>
            <div className="header__title">
                CoffeeShop
            </div>
            <div className="header__basket">
                <button
                className="header__button"
                onClick={ () => setOpenModal(true) }
                >
                <Cart2 />
                </button>
                <Modal 
                title="Shopping Baschet"
                isOpen={ openModal }
                onClose={ () => setOpenModal(false) }
                />
            </div>
        </div>
    );
}

export default Header;
