import './Modal.scss'
import PropTypes from 'prop-types';
import { XLg } from 'react-bootstrap-icons';

function getHeader(onClose, headerContent, title) {
    return (
        <div className="cf-modal__header">
            <div className="cf-modal__header-left">
                { headerContent }
            </div>
            <div className="cf-modal__header-center">
                <h1 className="cf-modal__title">{ title }</h1>
            </div>
            <div className="cf-modal__header-right">
                <button className="cf-modal__close-button" type="button" onClick={ onClose }>
                    <XLg />
                </button>
            </div>
        </div>
    );
}

function getBody(bodyContent){
    return (
        <div className="cf-modal__body">
            { bodyContent }
        </div>
    );
}

function getFooter(footerContent) {
    return (
        !!footerContent && (
        <div className="cf-modal__footer">
            { footerContent }
        </div>
      )
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
                    { getHeader(onClose, headerContent, title) }
                    { getBody(children) }
                    { getFooter(footerContent) }
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
