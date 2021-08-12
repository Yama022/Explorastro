import React from 'react';

import logo from 'src/assets/images/logo-explorastro.png';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo ExplorAstro" className="footer-logo" />
      <div className="footer-description">
        <a href="#">CONDITIONS D'UTILISATION</a>
        <a href="#">A PROPOS</a>
        <a href="#">AIDE</a>
      </div>
      <p className="footer-copyright">Copyright 2021 ExplorAstro</p>
    </footer>
  );
}
