import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';

import logo from 'src/assets/images/logo-explorastro.png';

import mascot from 'src/assets/images/mascot-rocket.svg';
import mascotBg from 'src/assets/images/mascot-background.svg';

export default function Login() {
  return (
    <div className="login">
      <div className="login__images" id="login__images__scene">
        <img src={mascotBg} alt="Planète derrière la mascotte" className="login__images__mascotbg" />
        <img src={mascot} alt="Mascotte sur une fusée" className="login__images__mascot" />
      </div>
      <div className="login__main-content">
        <header className="login__main-content__header">
          <Link to="/">
            <img src={logo} alt="Logo Explorastro" className="login__main-content__header__logo" />
          </Link>
          <Link to="/" className="login__main-content__header__accueil">Retourner à l'accueil</Link>
        </header>
        <form action="POST" className="login__main-content__form">
          <div className="login__main-content__form__elem">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="login-mail">Adresse mail</label>
            <input className="login__main-content__form__elem__input" id="login-mail" type="email" />
          </div>
          <div className="login__main-content__form__elem">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="login-password">Mot de passe</label>
            <input className="login__main-content__form__elem__input" id="login-password" type="password" />
          </div>
          <div>
            <input type="checkbox" id="login-remember" name="remember" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="login-remember" className="login__main-content__form__remember">Se souvenir de moi</label>
          </div>
          <div className="login__main-content__form__submit">
            <button type="submit" className="login__main-content__form__submit__button login__main-content__form__submit__button--signin">
              Se connecter
            </button>
            <button type="submit" className="login__main-content__form__submit__button login__main-content__form__submit__button--signup">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
