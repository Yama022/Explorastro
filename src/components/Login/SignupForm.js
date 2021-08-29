/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaKey, FaAt, FaUser } from 'react-icons/fa';

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

    // Username
    if (!username) {
      formIsValid = false;
      errors.username = 'Veuillez renseigner votre pseudo.';
    }
    if (!username.match(/^[a-z0-9]+$/i)) {
      formIsValid = false;
      errors.username = 'Merci de ne pas utiliser de caractère spécial.';
    }
    if (username.length < 6) {
      formIsValid = false;
      errors.username = 'Le pseudo renseigné est trop court';
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
        errors.email = "L'adresse email n'est pas valide.";
      }
    }
    if (/[ `!#$%^&*()+=[\]{};':"\\|,<>/?~]/.test(email)) {
      formIsValid = false;
      errors.email = 'Merci de ne pas utiliser de caractère spécial.';
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      handleSignup();
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
    <form onSubmit={handleFormSubmit} className={signup ? 'login__container__form__elem' : 'login__container__form__elem--hidden'}>
      {signupError && <div className="login__container__form__elem__error">{errorMessage}</div>}
      <div className="field">
        <label className="label">Prénom</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="ex: John" value={firstname} name="firstname" onChange={handleChange} />
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
        <button type="button" className="button purple" onClick={handleToggleSignup}>Connexion</button>
        <button type="submit" className="button --outlined">S'inscrire</button>
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
  signup: PropTypes.bool.isRequired,
  signupError: PropTypes.string.isRequired,
  fieldHasError: PropTypes.object.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
};
