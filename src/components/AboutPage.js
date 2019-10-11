import React from 'react';

const AboutPage = () => {
  document.title = 'About';
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">About</h1>
        </div>
      </div>
      <div className="content-container">
        <p>          
          The sale of these yearbooks will help fund both James Logan's yearbook and CyberPatriot programs.
          CyberPatriot is a team of James Logan students that competes against over 6000 other teams worldwide for honors in CyberSecurity. 
          By purchasing one of our yearbooks, you will be supporting James Logan students and gaining a beautiful time capsule.
        </p>
        <p>
          If you have any questions or concerns, email Charmaine Banther, CyberPatriot Teacher:
        </p>
        <p>
          <b>cbanther@nhusd.k12.ca.us</b>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;