import { BagPlus } from 'react-bootstrap-icons';
import Modal from '../Modal/Modal';

function ShoppingBasket({ openModal, setOpenModal }) {
    return (
        <div className="app__title">
            CoffeeShop
            <button
            onClick={ () => setOpenModal(true) }
            >
            <BagPlus />
            </button>
            <Modal 
            title="Shopping Baschet"
            isOpen={ openModal }
            onClose={ () => setOpenModal(false) }
            />
        </div>
    );
}

export default ShoppingBasket;
