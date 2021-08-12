import React from 'react';

import './styles.scss';
import logo from 'src/assets/images/logo-explorastro.png';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo ExplorAstro" className="footer-logo" />
      <div className="footer-description">
        <p>CONDITIONS D'UTILISATION</p>
        <p>A PROPOS</p>
        <p>AIDE</p>
      </div>
      <p className="footer-copyright">Copyright 2021 ExplorAstro</p>
    </footer>
  );
}
