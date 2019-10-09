import React from 'react';
import HeaderMessage from './HeaderMessage';
import ProductList from './ProductList';

const ShopPage = () => {
  document.title = "Shop";
  return (
    <div>
      <HeaderMessage />
      <div className="content-container">
        <ProductList />
      </div>
    </div>
  )
};

export default ShopPage;