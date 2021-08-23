import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BiCog, BiUserCircle, BiPowerOff } from 'react-icons/bi';

export default function User({
  username, isOpen, onClickUser, handleLogout, loggedUserId,
}) {
  return (
    <div className="header__user">
      <div className="header__user__container" onClick={onClickUser}>
        <p className="header__user__container__pseudo">{username}</p>
        <img src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="Avatar de l'utilisateur" className="header__user__container__avatar" />
      </div>
      <ul className={isOpen ? 'header__user__dropdown header__user__dropdown--open' : 'header__user__dropdown'}>
        <li className="header__user__dropdown__username">{username}</li>
        <li className="header__user__dropdown__item">
          <Link to={`/profile/${loggedUserId}`} className="header__user__dropdown__item__link" onClick={onClickUser}>
            <BiUserCircle />
            <span> Profil </span>
          </Link>
        </li>
        <li className="header__user__dropdown__item">
          <Link to="/settings" className="header__user__dropdown__item__link" onClick={onClickUser}>
            <BiCog />
            <span> Paramètres </span>
          </Link>
        </li>
        <li className="header__user__dropdown__item">
          <Link
            to="/"
            className="header__user__dropdown__item__link"
            onClick={() => {
              onClickUser();
              handleLogout();
            }}
          >
            <BiPowerOff />
            <span> Déconnexion </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  loggedUserId: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickUser: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
