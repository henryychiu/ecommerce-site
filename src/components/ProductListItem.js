import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ProductListItem = ({ name, price, images }) => {
  const replaceAll = (str, search, replacement) => {
    return str.split(search).join(replacement);
  };
  const formattedName = replaceAll(name.toLowerCase(), ' ', '-');
  return (
    <Link className="list-item" to={`/shop/${formattedName}`}>
      <img className="list-item__image" src={images[0]}/>
      <p className="list-item__title">{name}</p>
      <p className="list-item__subtitle">{numeral(price / 100).format('$0,0.00')}</p>
    </Link>
  )
};

export default ProductListItem;