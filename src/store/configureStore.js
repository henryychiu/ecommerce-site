import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from '../reducers/items';
import productsReducer from '../reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      products: productsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

