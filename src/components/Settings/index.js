/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaUser, FaKey } from 'react-icons/fa';

import BackButton from 'src/components/BackButton';

export default function Settings({
  usernameChange,
  passwordForUsername,
  changeField,
  handleUsernameChange,
  password,
  newPassword,
  passwordConfirmation,
  handlePasswordChange,
  handleDeleteAccount,
  handleFieldHasError,
  fieldHasError,
}) {
  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

  const handleUsernameValidation = () => {
    const errors = {};
    let formIsValid = true;

    // Username
    if (!usernameChange) {
      formIsValid = false;
      errors.usernameChange = 'Veuillez renseigner votre pseudo.';
    }
    else if (usernameChange.length < 6) {
      formIsValid = false;
      errors.usernameChange = 'Le pseudo renseigné est trop court';
    }
    else if (!usernameChange.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.usernameChange = 'Merci de ne pas utiliser de caractère spécial.';
    }

    // password
    if (!passwordForUsername) {
      formIsValid = false;
      errors.passwordForUsername = 'Veuillez renseigner le mot de passe';
    }
    else if (passwordForUsername.length < 6) {
      formIsValid = false;
      errors.passwordForUsername = 'Le mot de passe est trop court';
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handlePasswordValidation = () => {
    const errors = {};
    let formIsValid = true;

    // Old password
    if (!password) {
      formIsValid = false;
      errors.password = 'Veuillez renseigner le mot de passe';
    }
    else if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Le mot de passe est trop court';
    }

    // New password
    if (!newPassword) {
      formIsValid = false;
      errors.newPassword = 'Veuillez renseigner le mot de passe';
    }
    else if (newPassword.length < 6) {
      formIsValid = false;
      errors.newPassword = 'Le mot de passe est trop court';
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleDeleteValidation = () => {
    const errors = {};
    let formIsValid = true;

    // password for deletion
    if (!passwordConfirmation) {
      formIsValid = false;
      errors.passwordConfirmation = 'Veuillez renseigner le mot de passe';
    }
    else if (passwordConfirmation.length < 6) {
      formIsValid = false;
      errors.passwordConfirmation = 'Le mot de passe est trop court';
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleUsernameForm = (event) => {
    event.preventDefault();
    if (handleUsernameValidation()) {
      if (window.confirm('Êtes-vous sûr de vouloir changer votre pseudo?')) {
        handleUsernameChange();
      }
    }
  };

  const handlePasswordForm = (event) => {
    event.preventDefault();
    if (handlePasswordValidation()) {
      if (window.confirm('Êtes-vous sûr de vouloir changer votre mot de passe?')) {
        handlePasswordChange();
      }
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (handleDeleteValidation()) {
      if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible.')) {
        handleDeleteAccount();
      }
    }
  };

  return (
    <div className="settings">
      <h1 className="main-title">Paramètres</h1>
      <BackButton />
      <div className="settings__elems">
        <h2>Changer le pseudo</h2>
        <form className="settings__elems__form" onSubmit={handleUsernameForm}>

          <div className="field">
            <label className="label">Nouveau pseudo</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: AstroCharles" value={usernameChange} name="usernameChange" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaUser />
              </span>
            </div>
            <span className="field__error">{fieldHasError.usernameChange}</span>
          </div>
          <div className="field">
            <label className="label">Mot de passe</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={passwordForUsername} name="passwordForUsername" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
            <span className="field__error">{fieldHasError.passwordForUsername}</span>
          </div>
          <button type="button" className="button --secondary settings__elems__form__submit" onClick={handleUsernameForm}>Changer le pseudo</button>

        </form>
      </div>
      <div className="settings__elems">
        <h2>Changer le mot de passe</h2>
        <form className="settings__elems__form" onSubmit={handlePasswordForm}>

          <div className="field">
            <label className="label">Mot de passe actuel</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={password} name="password" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
            <span className="field__error">{fieldHasError.password}</span>
          </div>

          <div className="field">
            <label className="label">Nouveau mot de passe</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={newPassword} name="newPassword" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
            <span className="field__error">{fieldHasError.newPassword}</span>
          </div>

          <button type="submit" className="button --secondary settings__elems__form__submit">Changer le mot de passe</button>

        </form>
      </div>

      <div className="settings__elems">
        <form className="settings__elems__form" onSubmit={handleDelete}>

          <h2>Supprimer le compte</h2>

          <div className="field">
            <label className="label">Mot de passe</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={passwordConfirmation} name="passwordConfirmation" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
            <span className="field__error">{fieldHasError.passwordConfirmation}</span>
          </div>

          <button type="submit" className="button --outlined is-danger settings__elems__form__submit">Supprimer le compte</button>
        </form>
      </div>

    </div>
  );
}

Settings.propTypes = {
  usernameChange: PropTypes.string.isRequired,
  passwordForUsername: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleDeleteAccount: PropTypes.func.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
  fieldHasError: PropTypes.object.isRequired,
};
