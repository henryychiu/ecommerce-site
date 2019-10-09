import React from 'react';

const DonatePage = () => {
  document.title = 'Donate';
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Donate</h1>
        </div>
      </div>
      <div className="content-container">
        <p className="">Support the James Logan yearbook and CyberPatriot programs by donating!</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="LHF8X2U67GGDE" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
};

export default DonatePage;