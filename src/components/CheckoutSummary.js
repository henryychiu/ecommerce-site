import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import PaypalButton from 'react-paypal-express-checkout';
import Modal from 'react-modal';
import selectItemsSubtotal from '../selectors/items-subtotal';
import selectItemsDiscount from '../selectors/items-discount';
import { startAddOrder, clearItems } from '../actions/items';

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class CheckoutSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingMethod: 'pickup',
      shippingPrice: 1435,
      total: props.itemsSubtotal - props.itemsDiscount,
      modalIsOpen: false
    };
  };
  componentDidUpdate() {
    if (this.state.shippingMethod == 'ship' && this.props.itemsSubtotal == 0) {
      this.setState({ total: 0, shippingMethod: 'pickup' });
    } else if (this.state.shippingMethod == 'pickup' && this.state.total !== this.props.itemsSubtotal - this.props.itemsDiscount) {
      this.setState({ total: this.props.itemsSubtotal - this.props.itemsDiscount })
    } else if (this.state.shippingMethod == 'ship' && this.state.total !== this.props.itemsSubtotal - this.props.itemsDiscount + this.state.shippingPrice) {
      this.setState({ total: this.props.itemsSubtotal - this.props.itemsDiscount + this.state.shippingPrice })
    }
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  onShippingChange = (e) => {
    e.target.value == 'pickup' && this.setState({ shippingMethod: 'pickup', total: this.props.itemsSubtotal - this.props.itemsDiscount })
    e.target.value == 'ship' && this.setState({ shippingMethod: 'ship', total: this.props.itemsSubtotal - this.props.itemsDiscount + this.state.shippingPrice })
  }
  onSuccess = (payment) => {
    console.log('Successful payment!', payment);
    this.props.startAddOrder({
      items: JSON.stringify(this.props.items.map(item => item.name)),
      shippingMethod: this.state.shippingMethod,
      total: this.state.total,
      orderedAt: new Date().toLocaleString()
    });
    this.props.clearItems();
    this.setState({ total: 0, modalIsOpen: true });
  }
  onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);
  onCancel = (data) =>
    console.log('Cancelled payment!', data);
  render() {
    return (
      <div>
        <div className="summary">
          <p className="summary__header">Summary</p>
          <div className="summary__row">
            <p className="summary__text">Subtotal</p>
            <p className="summary__text">{numeral(this.props.itemsSubtotal / 100).format('$0,0.00')}</p>
          </div>
          {
            this.props.itemsDiscount !== 0 &&
            <div className="summary__row">
              <p className="summary__text">Discount</p>
              <p className="summary__text">-{numeral(this.props.itemsDiscount / 100).format('$0,0.00')}</p>
            </div>
          }
          {
            this.props.itemsSubtotal !== 0 &&
            <div className="summary__row">
              <p className="summary__text">Shipping</p>
              <select
                className="summary__select"
                value={this.state.shippingMethod}
                onChange={this.onShippingChange}
              >
                <option value="pickup">*Pickup $0.00</option>
                <option value="ship">Ship {numeral(this.state.shippingPrice / 100).format('$0,0.00')}</option>
              </select>
            </div>
          }
          <div className="summary__row">
            <p className="summary__header">Total</p>
            <p className="summary__header">{numeral(this.state.total / 100).format('$0,0.00')}</p>
          </div>
          <div className="summary__row">
            <div />
            {/* <PaypalButton
              client={CLIENT}
              env={ENV}
              currency={'USD'}
              total={this.state.total / 100}
              onSuccess={this.onSuccess}
              onError={this.onError}
              onCancel={this.onCancel}
              style={{
                size: 'medium',
                color: 'gold',
                shape: 'rect',
                label: 'paypal'
              }}
              shipping={this.state.shippingMethod === 'pickup' ? 1 : 2}
            /> */}
            <div className="summary__alert">
              ALERT: NO ONLINE PURCHASES FOR THE TIME BEING.
            </div>
            <div />
          </div>
        </div>
        <p className="summary__message">*Pickup Location: James Logan High School, Room 67</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Order"
          closeTimeoutMS={200}
          className="modal"
          ariaHideApp={false}
        >
          <p className="modal__title">Your order has been placed.</p>
          <button className="modal__button" onClick={this.closeModal}>OKAY</button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  itemsSubtotal: selectItemsSubtotal(state.items),
  itemsDiscount: selectItemsDiscount(state.items)
});

const mapDispatchToProps = (dispatch) => ({
  startAddOrder: (orderData) => dispatch(startAddOrder(orderData)),
  clearItems: () => dispatch(clearItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSummary);