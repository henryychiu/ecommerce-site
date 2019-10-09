import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  document.title = 'JLHS Vintage Yearbooks';
  return (
    <div className="box-layout">
      <div className="box-layout__title">
        THE JLHS VINTAGE <br/> YEARBOOK STORE
      </div>
      <Link className="box-layout__button" to="/shop">SHOP NOW</Link>
    </div>
  );
};

export default HomePage;