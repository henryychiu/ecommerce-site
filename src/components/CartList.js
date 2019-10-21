import React from 'react';
import { connect } from 'react-redux';
import CartListItem from './CartListItem';

export const CartList = (props) => (
  <div className="cartlist">
    <p className="list-header__title">Cart ({props.items.length})</p>
    <div className="cartlist">
      {
        props.items.length === 0 ? (
          <p className="list-item__title">There are no items in your cart.</p>
        ) : (
          props.items.map((item) => {
            return <CartListItem key={item.id} item={item} />;
          })   
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps)(CartList);