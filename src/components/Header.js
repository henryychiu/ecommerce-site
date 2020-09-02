import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  window.scrollTo(0, 0);
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            JAMES LOGAN YEARBOOKS
          </Link>
          <div className="header__links">
            <NavLink to="/shop" title="SHOP" className="header__link" activeClassName="header__link header__link--active">
              SHOP
          </NavLink>
            <NavLink to="/about" title="ABOUT" className="header__link" activeClassName="header__link header__link--active" exact={true}>
              ABOUT
          </NavLink>
            <NavLink to="/donate" title="DONATE" className="header__link" activeClassName="header__link header__link--active" exact={true}>
              DONATE
          </NavLink>
          </div>
          <NavLink to="/checkout" className="header__single-link" activeClassName="header__single-link header__link--active" exact={true}>
            CART
        </NavLink>
        </div>
      </div>
    </header>
  )
};

export default Header;