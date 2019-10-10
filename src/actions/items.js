import uuid from 'uuid';
import database from '../firebase/firebase';

export const addItem = ({ name, price, images } = {}) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    name, 
    price,
    images
  }
});

export const removeItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

export const clearItems = () => ({
  type: 'CLEAR_ITEMS'
})

export const startAddOrder = (orderData = {}) => {
  return () => {
    const {
      items,
      shippingMethod,
      total,
      orderedAt
    } = orderData;
    const order = { items, shippingMethod, total, orderedAt }
    return database.ref(`orders`).push(order);
  }
}