import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { addItem } from '../actions/items';
import Modal from './CheckoutModal';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    document.title = props.product.name;
  };
  onAddItem = () => {
    this.props.addItem(this.props.product);
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  toCheckout = () => {
    this.setState({ modalIsOpen: false });
    this.props.history.push('/checkout');
  }
  onImageClick = (image) => {
    const expandedImage = document.getElementById('expandedImage');
    expandedImage.src = image;
  }
  render() {
    return (
      <div className="content-container">
        <div className="product__content">
          <div className="product__image-list">
            {
              this.props.product.images.map((image) => {
                return <img
                  className="product__image-list-item"
                  key={this.props.product.images.indexOf(image)}
                  src={image}
                  onClick={() => this.onImageClick(image)}
                />
              })
            }
          </div>
          <div className="product__image-container">
            <img id="expandedImage" className="product__image" src={this.props.product.images[0]} />          
          </div>
          <div className="product-body">
            <p className="product-title">{this.props.product.name}</p>
            <p className="product-subtitle">{numeral(this.props.product.price / 100).format('$0,0.00')}</p>
            <button className="button" onClick={this.onAddItem}>ADD TO MY CART</button>
          </div>
        </div>
        <Modal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} toCheckout={this.toCheckout} product={this.props.product}/>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => {
  const replaceAll = (str, search, replacement) => {
    return str.split(search).join(replacement);
  };
  return {
    product: state.products.find((product) => replaceAll(product.name.toLowerCase(), ' ', '-') === props.match.params.name)
  }
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);