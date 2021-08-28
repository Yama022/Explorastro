/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaKey, FaAt } from 'react-icons/fa';

export default function LoginForm({
  handleToggleSignup,
  email,
  password,
  handleChange,
  handleSubmitLogin,
  signup,
}) {
  let passwordTooShort = false;
  const handleSubmitLoginForm = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      passwordTooShort = true;
    }
    else {
      handleSubmitLogin();
    }
  };
  return (
    <form onSubmit={handleSubmitLoginForm} className={signup ? 'login__container__form__elem--hidden' : 'login__container__form__elem'}>
      <div className="field">
        <label className="label">Email ou nom d'utilisateur</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" placeholder="ex: astroCharles@explorastro.com" value={email} name="email" onChange={handleChange} autoComplete="on" />
          <span className="icon is-small is-left">
            <FaAt />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Mot de Passe</label>
        <div className="control has-icons-left has-icons-right">
          <input className={passwordTooShort ? 'input is-danger' : 'input'} type="password" placeholder="ex: MyStr0ngP455sWoRD" value={password} name="password" onChange={handleChange} autoComplete="off" />
          <span className="icon is-small is-left">
            <FaKey />
          </span>
        </div>
      </div>
      <div className="login__container__form__buttons-container">
        <button type="button" className="button --outlined" onClick={handleToggleSignup}>Inscription</button>
        <button type="submit" className="button purple">Se Connecter</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleToggleSignup: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmitLogin: PropTypes.func.isRequired,
  signup: PropTypes.bool.isRequired,
};
