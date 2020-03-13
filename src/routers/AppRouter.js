import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ShopPage from '../components/ShopPage';
import ProductPage from '../components/ProductPage';
import AboutPage from '../components/AboutPage';
import DonatePage from '../components/DonatePage';
import CheckoutPage from '../components/CheckoutPage';
import NotFoundPage from '../components/NotFoundPage';
import HeaderMessage from '../components/HeaderMessage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <HeaderMessage/>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/shop" component={ShopPage} exact={true} />
        <Route path="/shop/:name" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/donate" component={DonatePage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;