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
          The sale of these brand new yearbooks will support both James Logan's yearbook and CyberPatriot programs.  Cyberpatriots are a team of Logan students that compete against over 6000 teams worldwide for honors in CyberSecurity. 
          You will be supporting Logan students and gaining a beautiful time capsule by purchasing one of our yearbooks.
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