import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectItemsSubtotal from '../selectors/items-subtotal';
import selectItemsDiscount from '../selectors/items-discount';
import { startAddOrder } from '../actions/items';
import PaypalButton from './PaypalButton';

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
      total: props.itemsSubtotal - props.itemsDiscount
    };
  };
  onShippingChange = (e) => {
    e.target.value == 'pickup' && this.setState({ shippingMethod: 'pickup', total: this.props.itemsSubtotal - this.props.itemsDiscount })
    e.target.value == 'ship' && this.setState({ shippingMethod: 'ship', total: this.props.itemsSubtotal - this.props.itemsDiscount + this.state.shipping })
  }
  onSuccess = (payment) => {
    console.log('Successful payment!', payment);
    this.props.startAddOrder({
      items: JSON.stringify(this.props.items.map(item => item.name)),
      shippingMethod: this.state.shippingMethod,
      total: this.state.total,
      orderedAt: new Date().toLocaleString()
    });
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
            <PaypalButton
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={'USD'}
              total={this.state.total / 100}
              onSuccess={this.onSuccess}
              onError={this.onError}
              onCancel={this.onCancel}
            />
            <div />
          </div>
        </div>
        <p className="summary__message">*Pickup Location: James Logan High School, Room 67</p>
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
  startAddOrder: (orderData) => dispatch(startAddOrder(orderData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSummary);