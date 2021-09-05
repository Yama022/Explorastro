/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import { FaKey, FaAt } from 'react-icons/fa';

const siteKey = process.env.RECAPTCHA_SITE_KEY;

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
  let topMessage;

  if (loginError.includes('Email has been sent.')) {
    topMessage = 'Un email de réinitialisation vous a été envoyé.';
  }
  else if (loginError.includes('email or username')) {
    topMessage = "L'email ou le pseudo n'existe pas.";
  }
  else if (loginError.includes('Password does not')) {
    topMessage = 'Le mot de passe est incorrect';
  }
  else {
    topMessage = `Erreur: ${loginError}`;
  }

  const recaptchaRef = createRef();

  const handleForm = () => {
    if (handleValidation()) {
      handleLogin();
    }
  };

  const showCaptcha = async (e) => {
    e.preventDefault();
    const div = document.getElementById('re-captcha');
    div.className = 're-captcha-active';

    const token = await recaptchaRef.current.getValue();

    if (token) {
      handleForm();
    }
  };

  function onChange() {
    handleForm();
  }

  return (
    <form onSubmit={showCaptcha} className={(signup === 2) ? 'login__container__form__elem' : 'login__container__form__elem--hidden'}>
      {loginError && <div className="login__container__form__elem__error">{topMessage}</div>}
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
      <span
        className="login__container__form__elem__forgot"
        onClick={() => {
          handleToggleSignup(3);
        }}
      >Mot de passe oublié ?
      </span>
      <div className="login__container__form__buttons-container">
        <button
          type="button"
          className="button --secondary"
          onClick={() => {
            handleToggleSignup(1);
          }}
        >Inscription
        </button>
        <button type="submit" className="button --outlined">Se Connecter</button>
      </div>
      <div className="re-captcha" id="re-captcha">
        <ReCAPTCHA
          ref={recaptchaRef}
        // eslint-disable-next-line no-return-assign
          sitekey={siteKey}
        // eslint-disable-next-line react/jsx-no-bind
          theme="dark"
          onChange={onChange}
        />
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
  signup: PropTypes.number.isRequired,
  loginError: PropTypes.string.isRequired,
  fieldHasError: PropTypes.object.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
};
