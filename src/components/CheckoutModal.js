import React from 'react';
import Modal from 'react-modal';
import numeral from 'numeral';

const CheckoutModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    contentLabel="Added to Cart"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <p className="modal__header">ADDED TO CART</p>
    <div className="modal__body">
      <img className="modal__image" src={props.product.images[0]} />
      <div>
        <p className="modal__title">{props.product.name}</p>
        <p className="modal__subtitle">{numeral(props.product.price / 100).format('$0,0.00')}</p>
      </div>
    </div>
    <button className="modal__button" onClick={props.toCheckout}>VIEW MY CART</button>
    <button className="modal__button--secondary" onClick={props.closeModal}>CONTINUE SHOPPING</button>
  </Modal>
);

export default CheckoutModal;