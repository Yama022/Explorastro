import React from 'react';

import logo from 'src/assets/images/logo-explorastro.png';

// import moon from 'src/assets/images/moon-footer.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} alt="Logo ExplorAstro" className="footer__container__logo" />
        <div className="footer__container__description">
          <a href="#">CONDITIONS D'UTILISATION</a>
          <a href="#">A PROPOS</a>
          <a href="#">AIDE</a>
        </div>
        <p className="footer__container__copyright">Copyright 2021 ExplorAstro</p>
      </div>
    </footer>
  );
}
