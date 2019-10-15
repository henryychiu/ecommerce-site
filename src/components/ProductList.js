import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';

export const ProductList = (props) => (
  <div>
    <p className="list-header">Products</p>
    <div className="list">
      {
        props.products.map((product) => {
          return <ProductListItem key={props.products.indexOf(product)} {...product} />;
        })
      }
      <div className="list-item" />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductList);