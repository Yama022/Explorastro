import React from 'react';

import Footer from 'src/components/Footer';

import logo from 'src/assets/images/logo-explorastro.png';

export default function Signinup() {
  return (
    <div className="signinup">
      <header className="signinup__header">
        <img src={logo} alt="Logo Explorastro" />
        <button type="button">Retourner à l'accueil</button>
      </header>
      <Footer />
    </div>
  );
}
