/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaKey, FaAt } from 'react-icons/fa';

export default function LoginForm({
  handleToggleSignup,
  email,
  password,
  handleChange,
  handleLogin,
  signup,
  loginError,
  fieldHasError,
  handleFieldHasError,
}) {
  const handleValidation = () => {
    const errors = {};
    let formIsValid = true;

    // password
    if (!password) {
      formIsValid = false;
      errors.password = 'Veuillez renseigner le mot de passe';
    }
    else if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Le mot de passe est trop court';
    }

    // email

    if (!email) {
      formIsValid = false;
      errors.email = 'Veuillez renseigner un identifiant/adresse mail.';
    }
    else if (email.length < 6) {
      formIsValid = false;
      errors.email = "L'identifiant/adresse mail est trop court(e).";
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      handleLogin();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={signup ? 'login__container__form__elem--hidden' : 'login__container__form__elem'}>
      {loginError && <div className="login__container__form__elem__error">Vos identifiants sont incorrects.</div>}
      <div className="field">
        <label className="label">Email ou nom d'utilisateur</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            placeholder="ex: astroCharles@explorastro.com"
            value={email}
            name="email"
            onChange={handleChange}
            autoComplete="on"
          />
          <span className="icon is-small is-left">
            <FaAt />
          </span>
        </div>
        <span className="field__error">{fieldHasError.email}</span>
      </div>
      <div className="field">
        <label className="label">Mot de Passe</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="ex: MyStr0ngP455sWoRD"
            value={password}
            name="password"
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="icon is-small is-left">
            <FaKey />
          </span>
        </div>
        <span className="field__error">{fieldHasError.password}</span>
      </div>
      <div className="login__container__form__buttons-container">
        <button type="button" className="button purple" onClick={handleToggleSignup}>Inscription</button>
        <button type="submit" className="button --outlined">Se Connecter</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleToggleSignup: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  signup: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  fieldHasError: PropTypes.object.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
};
