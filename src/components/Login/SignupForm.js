/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import { FaKey, FaAt, FaUser } from 'react-icons/fa';

const siteKey = process.env.RECAPTCHA_SITE_KEY;

export default function SignupForm({
  handleToggleSignup,
  firstname,
  lastname,
  username,
  email,
  password,
  passwordConfirmation,
  handleChange,
  handleSignup,
  signup,
  signupError,
  fieldHasError,
  handleFieldHasError,
}) {
  const handleValidation = () => {
    const errors = {};
    let formIsValid = true;

    // First name
    if (!firstname) {
      formIsValid = false;
      errors.firstname = 'Veuillez renseigner votre prénom.';
    }
    if (/[ `!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(firstname)) {
      formIsValid = false;
      errors.firstname = 'Merci de ne pas utiliser de caractère spécial.';
    }
    if (firstname.length < 2) {
      formIsValid = false;
      errors.firstname = 'Le prénom renseigné est trop court';
    }
    if (firstname.length > 50) {
      formIsValid = false;
      errors.firstname = 'Le prénom renseigné est trop long.';
    }

    // Last Name
    if (!lastname) {
      formIsValid = false;
      errors.lastname = 'Veuillez renseigner votre nom.';
    }
    if (/[ `!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(lastname)) {
      formIsValid = false;
      errors.lastname = 'Merci de ne pas utiliser de caractère spécial.';
    }
    if (lastname.length < 2) {
      formIsValid = false;
      errors.lastname = 'Le nom renseigné est trop court';
    }
    if (lastname.length > 50) {
      formIsValid = false;
      errors.lastame = 'Le nom renseigné est trop long.';
    }

    // Username
    if (!username) {
      formIsValid = false;
      errors.username = 'Veuillez renseigner votre pseudo.';
    }
    if (!username.match(/^[a-z0-9]+$/i)) {
      formIsValid = false;
      errors.username = 'Merci de ne pas utiliser de caractère spécial.';
    }
    if (username.length < 3) {
      formIsValid = false;
      errors.username = 'Le pseudo renseigné est trop court.';
    }
    if (username.length > 50) {
      formIsValid = false;
      errors.username = 'Le pseudo renseigné est trop long.';
    }

    // password
    if (!password) {
      formIsValid = false;
      errors.password = 'Veuillez renseigner un mot de passe';
    }
    if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Le mot de passe renseigné est trop court';
    }
    if (password.length > 50) {
      formIsValid = false;
      errors.password = 'Le mot de passe renseigné est trop long';
    }

    // password confirmation
    if (!passwordConfirmation) {
      formIsValid = false;
      errors.passwordConfirmation = 'Veuillez confirmer votre mot de passe';
    }
    if (passwordConfirmation !== password) {
      formIsValid = false;
      errors.passwordConfirmation = 'Les mots de passe ne correspondent pas.';
    }

    // email
    if (!email) {
      formIsValid = false;
      errors.email = 'Veuillez renseigner une adresse mail.';
    }
    else {
      const lastAtPos = email.lastIndexOf('@');
      const lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors.email = "L'adresse email renseignée n'est pas valide.";
      }
    }
    if (/[ `!#$%^&*()+=[\]{};':"\\|,<>/?~]/.test(email)) {
      formIsValid = false;
      errors.email = 'Merci de ne pas utiliser de caractère spécial.';
    }
    if (email.length > 50) {
      formIsValid = false;
      errors.email = "L'adresse email renseignée est trop longue";
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const recaptchaRef = createRef();

  const handleForm = () => {
    if (handleValidation()) {
      handleSignup();
    }
  };

  async function onChange() {
    handleForm();
  }

  // eslint-disable-next-line consistent-return
  const showCaptcha = async (e) => {
    e.preventDefault();
    const div = document.getElementById('re-captcha-signup');
    div.className = 're-captcha-active';

    const token = await recaptchaRef.current.getValue();

    if (token) {
      handleForm();
    }
  };

  let errorMessage;

  if (signupError.includes('Username')) {
    errorMessage = 'Ce pseudo est déjà utilisé';
  }
  else if (signupError.includes('Email')) {
    errorMessage = 'Cette adresse mail est déjà utilisée';
  }
  else {
    errorMessage = `Erreur: ${signupError}`;
  }

  return (
    <form onSubmit={showCaptcha} className={(signup === 1) ? 'login__container__form__elem' : 'login__container__form__elem--hidden'}>
      {signupError && <div className="login__container__form__elem__error">{errorMessage}</div>}
      <div className="field">
        <label className="label">Prénom</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="ex: Jon" value={firstname} name="firstname" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
        <span className="field__error">{fieldHasError.firstname}</span>
      </div>
      <div className="field">
        <label className="label">Nom</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="ex: Osterman" value={lastname} name="lastname" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
        <span className="field__error">{fieldHasError.lastname}</span>
      </div>
      <div className="field">
        <label className="label">Pseudo</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="ex: AstroCharles" value={username} name="username" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
        <span className="field__error">{fieldHasError.username}</span>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="ex: astroCharles@explorastro.com" value={email} name="email" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaAt />
          </span>
        </div>
        <span className="field__error">{fieldHasError.email}</span>
      </div>
      <div className="field">
        <label className="label">Mot de Passe</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={password} name="password" onChange={handleChange} autoComplete="off" />
          <span className="icon is-small is-left">
            <FaKey />
          </span>
        </div>
        <span className="field__error">{fieldHasError.password}</span>
      </div>
      <div className="field">
        <label className="label">Confirmer le mot de passe</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={passwordConfirmation} name="passwordConfirmation" onChange={handleChange} autoComplete="off" />
          <span className="icon is-small is-left">
            <FaKey />
          </span>
        </div>
        <span className="field__error">{fieldHasError.passwordConfirmation}</span>
      </div>
      <div className="login__container__form__buttons-container">
        <button
          type="button"
          className="button --secondary"
          onClick={() => {
            handleToggleSignup(2);
          }}
        >Connexion
        </button>
        <button type="submit" className="button --outlined">S'inscrire</button>
      </div>
      <div className="re-captcha" id="re-captcha-signup">
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

SignupForm.propTypes = {
  handleToggleSignup: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  signup: PropTypes.number.isRequired,
  signupError: PropTypes.string.isRequired,
  fieldHasError: PropTypes.object.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
};
