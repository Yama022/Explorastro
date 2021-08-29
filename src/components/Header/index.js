import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MouseContext } from 'src/context/mouse-context';

import { GiHamburgerMenu } from 'react-icons/gi';

import User from 'src/components/Header/User';

import logo from 'src/assets/images/logo-explorastro.png';

export default function Header({
  isLogged,
  username,
  avatarUrl,
  loggedUserId,
  burgerIsOpen,
  dropdownIsOpen,
  handleToggleDropdown,
  handleLogout,
  handleToggleBurger,
}) {
  const handleNavBurgerToggle = () => {
    if (burgerIsOpen) handleToggleBurger();
  };

  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <header className="header">
      <div className="header__burger" onClick={handleToggleBurger}>
        <GiHamburgerMenu className="header__burger__img" />
      </div>
      <Link to={isLogged ? '/timeline' : '/landing'} className="header__logo">
        <img src={logo} alt="logo ExplorAstro" />
      </Link>
      <nav className={burgerIsOpen ? 'header__nav header__nav--open' : 'header__nav'}>
        <div className={burgerIsOpen ? ' header__nav__burger header__nav__burger--active' : 'header__nav__burger'} onClick={handleToggleBurger}>
          <GiHamburgerMenu className="header__nav__burger__img" />
        </div>
        { isLogged
          ? (
            <>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                onClick={handleNavBurgerToggle}
                to="/timeline"
                exact
                onMouseEnter={() => cursorChangeHandler('hovered')}
                onMouseLeave={() => cursorChangeHandler('')}
              >
                Fil d'actualités
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                onClick={handleNavBurgerToggle}
                to="/exploration/create"
                exact
                onMouseEnter={() => cursorChangeHandler('hovered')}
                onMouseLeave={() => cursorChangeHandler('')}
              >
                Explorations
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                onClick={handleNavBurgerToggle}
                to="/discover"
                exact
                onMouseEnter={() => cursorChangeHandler('hovered')}
                onMouseLeave={() => cursorChangeHandler('')}
              >
                Carte
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                onClick={handleNavBurgerToggle}
                to="/guide"
                exact
                onMouseEnter={() => cursorChangeHandler('hovered')}
                onMouseLeave={() => cursorChangeHandler('')}
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
                onClick={handleNavBurgerToggle}
                to="/landing"
                exact
              >
                Accueil
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                onClick={handleNavBurgerToggle}
                to="/news"
                exact
              >
                Actualités
              </NavLink>
              <NavLink
                className="header__nav__link"
                activeClassName="header__nav__link--active"
                onClick={handleNavBurgerToggle}
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
            avatarUrl={avatarUrl}
            loggedUserId={loggedUserId}
            isOpen={dropdownIsOpen}
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
  loggedUserId: PropTypes.number,
  avatarUrl: PropTypes.string,
  burgerIsOpen: PropTypes.bool.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  handleToggleDropdown: PropTypes.func.isRequired,
  handleToggleBurger: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  loggedUserId: 0,
  avatarUrl: 'src/assets/image/defaultavatar.jpg',
};
