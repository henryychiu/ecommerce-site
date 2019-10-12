import React from 'react';
import CartList from './CartList';
import CheckoutSummary from './CheckoutSummary';

const CheckoutPage = (props) => {
  document.title = 'Checkout';
  return (
    <div className="content-container">
      <div className="checkout-container">
        <CartList />
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;