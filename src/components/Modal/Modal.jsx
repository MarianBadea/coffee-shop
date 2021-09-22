import './Modal.scss'
import PropTypes from 'prop-types';

function getHeader(onClose, headerContent, title) {
    return (
        <div className="cf-modal__header">
            <div className="cf-modal__header-left">
                { headerContent }
            </div>
            <div className="cf-modal__header-center">
                <h1>{ title }</h1>
            </div>
            <div className="cf-modal__header-right">
                <button className="cf-modal_close-button" type="button" onClick={ onClose }>
                    Close
                </button>
            </div>
        </div>
    );
}

function Modal({
    isOpen,
    onClose,
    title,
    headerContent,
    children,
    footerContent,
  }) {
    return(
        <div className={`cf-modal-wrapper ${ isOpen ? '' : '--hidden' }`}>
        <div className="cf-modal-overlay" />
            <div className="cf-modal">
                <div className="cf-modal__content">
                    {getHeader(onClose, headerContent, title)}
                    <p>Body</p>
                    <p>Footer</p>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    headerContent: PropTypes.node,
    footerContent: PropTypes.node,
  };
  
  Modal.defaultProps = {
    headerContent: null,
    footerContent: null,
  };

export default Modal;
