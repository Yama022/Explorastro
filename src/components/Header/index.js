import React from 'react';

import logo from 'src/assets/images/logo-explorastro.png';

import { BiCog, BiUserCircle, BiPowerOff } from 'react-icons/bi';

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="logo ExplorAstro" />
      </a>
      <nav className="header__nav">
        <a href="#">Fil d'actualités</a>
        <a href="#">Organiser</a>
        <a href="#">Carte</a>
      </nav>
      <div className="header__user">
        <div className="header__user__container">
          <p className="header__user__container__pseudo">Pseudo</p>
          <img src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="Avatar de l'utilisateur" className="header__user__container__avatar" />
        </div>
        <ul className="header__user__dropdown">
          <li className="header__user__dropdown__item">
            <a href="#" className="header__user__dropdown__item__link">
              <BiUserCircle />
              <span> Profil </span>
            </a>
          </li>
          <li className="header__user__dropdown__item">
            <a href="#" className="header__user__dropdown__item__link">
              <BiCog />
              <span> Paramètres </span>
            </a>
          </li>
          <li className="header__user__dropdown__item">
            <a href="#" className="header__user__dropdown__item__link">
              <BiPowerOff />
              <span> Déconnexion </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
