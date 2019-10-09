import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { removeItem } from '../actions/items';

const CartListItem = ({ item, removeItem }) => {
  const replaceAll = (str, search, replacement) => {
    return str.split(search).join(replacement);
  };
  const onRemove = () => {
    removeItem(item);
  };
  const formattedName = replaceAll(item.name.toLowerCase(), ' ', '-');
  return (
    <div className="cartlist-item">
      <Link to={`/shop/${formattedName}`}>
        <img className="cartlist-item__image" src={item.images[0]} />
      </Link>
      <div>
        <Link to={`/shop/${formattedName}`} className="cartlist-item__title">{item.name}</Link>
        <p className="cartlist-item__subtitle">{numeral(item.price / 100).format('$0,0.00')}</p>
        <button className="cartlist-item__button" onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (data) => dispatch(removeItem(data))
});

export default connect(undefined, mapDispatchToProps)(CartListItem);