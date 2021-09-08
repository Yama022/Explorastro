import React from 'react';
import logo from 'src/assets/images/logo-explorastro.png';
import { Link } from 'react-router-dom';

import background from 'src/assets/images/cropped-moon-footer.svg';

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: `url(${background}) no-repeat`,
        backgroundPosition: '50% 58%',
        backgroundSize: '800%',
      }}
    >
      <img src={logo} alt="Logo ExplorAstro" className="footer__logo" />
      <br />
      <Link to="/cgu">CONDITIONS D'UTILISATION</Link>
      <div className="footer__description">
        <p className="footer__copyright">Copyright 2021 ExplorAstro</p>
      </div>
    </footer>
  );
}
