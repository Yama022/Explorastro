import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from 'src/assets/images/logo-explorastro.png';

import { BiCog, BiUserCircle, BiPowerOff } from 'react-icons/bi';

export default function Header() {
  return (
    <header className="header">
      <Link to="/timeline" className="header__logo">
        <img src={logo} alt="logo ExplorAstro" />
      </Link>
      <nav className="header__nav">
        <NavLink
          className="header__nav__link"
          activeClassName="header__nav__link--active"
          to="/timeline"
          exact
        >
          Fil d'actualités
        </NavLink>
        <NavLink
          className="header__nav__link"
          activeClassName="header__nav__link--active"
          to="/exploration/create"
          exact
        >
          Organiser
        </NavLink>
        <NavLink
          className="header__nav__link"
          activeClassName="header__nav__link--active"
          to="/discover"
          exact
        >
          Carte
        </NavLink>
        <NavLink
          className="header__nav__link"
          activeClassName="header__nav__link--active"
          to="/guide"
          exact
        >
          Le guide de l'explorateur
        </NavLink>
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
