import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import logo from 'src/assets/images/logo-explorastro.png';

import User from 'src/components/Header/User';

export default function Header({
  isLogged, username, isOpen, handleToggleDropdown, handleLogout,
}) {
  return (
    <header className="header">
      <Link to={isLogged ? '/timeline' : '/landing'} className="header__logo">
        <img src={logo} alt="logo ExplorAstro" />
      </Link>
      <nav className="header__nav">
        { isLogged
          ? (
            <>
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
            </>
          )
          : (
            <>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                to="/landing"
                exact
              >
                Accueil
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                to="/news"
                exact
              >
                Actualités
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                to="/aboutus"
                exact
              >
                Le projet
              </NavLink>
            </>
          )}
      </nav>
      {isLogged
        ? (
          <User
            username={username}
            isOpen={isOpen}
            onClickUser={handleToggleDropdown}
            handleLogout={handleLogout}
          />
        )
        : (
          <div className="header__login">
            <Link className="button" to="/login">
              Connexion
            </Link>
          </div>
        )}
    </header>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleToggleDropdown: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
