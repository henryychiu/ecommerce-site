import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import selectProducts from '../selectors/products';
import { setTextFilter } from '../actions/filters';

export const ProductList = (props) => {
  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  };
  return (
    <div>
      <div className="list-header">
        <p className="list-header__title">Products ({props.products.length})</p>
        <div className="input-group__item">
          <input
            type='text'
            className="text-input"
            placeholder="Search Products"
            value={props.filters.text}
            onChange={onTextChange}
          />
        </div>
      </div>
      <div className="list">
        {
          props.products.length === 0 ? (
            <div>
              <span>No products</span>
            </div>
          ) : (
              props.products.map((product) => {
                return <ProductListItem key={props.products.indexOf(product)} {...product} />;
              })
            )
        }
        <div className="list-item" />
        <div className="list-item" />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  products: selectProducts(state.products, state.filters),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);