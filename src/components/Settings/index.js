/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import {
  FaUser, FaKey, FaFacebookSquare, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { BiPlanet } from 'react-icons/bi';

import BackButton from 'src/components/BackButton';

export default function Settings({
  username,
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
  formError,
  newTwitter,
  newInstagram,
  newFacebook,
  newTiktok,
  newAstrobin,
  handleSocialChange,
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
    else if (!usernameChange.match(/^[a-z0-9]+$/i)) {
      formIsValid = false;
      errors.usernameChange = 'Merci de ne pas utiliser de caractère spécial.';
    }
    if (usernameChange === username) {
      formIsValid = false;
      errors.usernameChange = "Votre nouveau pseudo doit être différent de l'ancien.";
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
      errors.password = 'Veuillez renseigner le mot de passe.';
    }
    else if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Le mot de passe est trop court.';
    }

    // New password
    if (!newPassword) {
      formIsValid = false;
      errors.newPassword = 'Veuillez renseigner le mot de passe.';
    }
    else if (newPassword.length < 8) {
      formIsValid = false;
      errors.newPassword = 'Le mot de passe est trop court.';
    }
    if (password === newPassword) {
      formIsValid = false;
      errors.newPassword = "Le nouveau mot de passe doit être différent de l'ancien.";
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
      errors.passwordConfirmation = 'Veuillez renseigner le mot de passe.';
    }
    else if (passwordConfirmation.length < 6) {
      formIsValid = false;
      errors.passwordConfirmation = 'Le mot de passe est trop court.';
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleSocialValidation = () => {
    const errors = {};
    let formIsValid = true;

    if (newTwitter) {
      if (!(newTwitter.length === 0) && !/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i.test(newTwitter)) {
        formIsValid = false;
        errors.twitter = "Merci d'entrer un lien Twitter valide.";
      }
      else if (!(newTwitter.length === 0) && (newTwitter.length > 200)) {
        formIsValid = false;
        errors.twitter = 'Le lien Twitter est trop long';
      }
    }

    if (newInstagram) {
      if (!(newInstagram.length === 0) && !/^(https?:\/\/)?((w{3}\.)?)instagram.com\/.*/i.test(newInstagram)) {
        formIsValid = false;
        errors.instagram = "Merci d'entrer un lien Instagram valide.";
      }
      else if (!(newInstagram.length === 0) && (newInstagram.length > 200)) {
        formIsValid = false;
        errors.instagram = 'Le lien Instagram est trop long';
      }
    }

    if (newFacebook) {
      if (!(newFacebook.length === 0) && !/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(newFacebook)) {
        formIsValid = false;
        errors.facebook = "Merci d'entrer un lien Facebook valide.";
      }
      else if (!(newFacebook.length === 0) && (newFacebook.length > 200)) {
        formIsValid = false;
        errors.facebook = 'Le lien Facebook est trop long';
      }
    }

    if (newTiktok) {
      if (!(newTiktok.length === 0) && !/^(https?:\/\/)?((w{3}\.)?)tiktok.com\/.*/i.test(newTiktok)) {
        formIsValid = false;
        errors.tiktok = "Merci d'entrer un lien TikTok valide.";
      }
      else if (!(newTiktok.length === 0) && (newTiktok.length > 200)) {
        formIsValid = false;
        errors.tiktok = 'Le lien TikTok est trop long';
      }
    }

    if (newAstrobin) {
      if (!(newAstrobin.length === 0) && !/^(https?:\/\/)?((w{3}\.)?)astrobin.com\/.*/i.test(newAstrobin)) {
        formIsValid = false;
        errors.astrobin = "Merci d'entrer un lien Astrobin valide.";
      }
      else if (!(newAstrobin.length === 0) && (newAstrobin.length > 200)) {
        formIsValid = false;
        errors.astrobin = 'Le lien Astrobin est trop long';
      }
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleSocialForm = (event) => {
    event.preventDefault();
    if (handleSocialValidation()) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Confirmer les changements?')) {
        handleSocialChange();
      }
    }
  };

  const handleUsernameForm = (event) => {
    event.preventDefault();
    if (handleUsernameValidation()) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Êtes-vous sûr de vouloir changer votre pseudo?')) {
        handleUsernameChange();
      }
    }
  };

  const handlePasswordForm = (event) => {
    event.preventDefault();
    if (handlePasswordValidation()) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Êtes-vous sûr de vouloir changer votre mot de passe?')) {
        handlePasswordChange();
      }
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (handleDeleteValidation()) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible.')) {
        handleDeleteAccount();
      }
    }
  };

  let usernameChangeError;
  let passwordChangeError;
  let accountDeletionError;
  let socialsError;

  if (formError) {
    // Form validation for username change
    if (formError[0].includes('username')) {
      if (formError[1].includes('Password')) {
        usernameChangeError = 'Le mot de passe renseigné est incorrect.';
      }
      else if (formError[1].includes('Username')) {
        usernameChangeError = 'Ce pseudo est déjà utilisé.';
      }
      else {
        usernameChangeError = "Une erreur s'est produite.";
      }
    }
    // Form validation for password change
    if (formError[0].includes('password')) {
      if (formError[1].includes('Password')) {
        passwordChangeError = 'Le mot de passe renseigné est incorrect.';
      }
      else {
        passwordChangeError = "Une erreur s'est produite.";
      }
    }
    // Form validation for account deletion
    if (formError[0].includes('delete')) {
      if (formError[1].includes('Password')) {
        accountDeletionError = 'Le mot de passe renseigné est incorrect.';
      }
      else {
        accountDeletionError = "Une erreur s'est produite.";
      }
    }
    // Form validation for socials change
    if (formError[0].includes('Socials updated')) {
      socialsError = 'Vos modifications ont été prises en compte.';
    }
  }

  return (
    <div className="settings">
      <h1 className="main-title">Paramètres</h1>
      <BackButton />
      <div className="settings__elems">
        <h2>Changer les réseaux sociaux</h2>
        <form className="settings__elems__form" onSubmit={handleSocialForm}>
          <div className="settings__elems__form__error"> {socialsError} </div>
          <div className="field">
            <label className="label">Lien Twitter</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: https://twitter.com/" value={newTwitter ?? ''} name="newTwitter" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaTwitter />
              </span>
            </div>
            <span className="field__error">{fieldHasError.twitter}</span>
          </div>
          <div className="field">
            <label className="label">Lien Instagram</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: https://www.instagram.com/" value={newInstagram ?? ''} name="newInstagram" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaInstagram />
              </span>
            </div>
            <span className="field__error">{fieldHasError.instagram}</span>
          </div>
          <div className="field">
            <label className="label">Lien Facebook</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: https://www.facebook.com/" value={newFacebook ?? ''} name="newFacebook" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <FaFacebookSquare />
              </span>
            </div>
            <span className="field__error">{fieldHasError.facebook}</span>
          </div>
          <div className="field">
            <label className="label">Lien TikTok</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: https://www.tiktok.com/" value={newTiktok ?? ''} name="newTiktok" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <SiTiktok />
              </span>
            </div>
            <span className="field__error">{fieldHasError.tiktok}</span>
          </div>
          <div className="field">
            <label className="label">Lien Astrobin</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: https://www.astrobin.com/" value={newAstrobin ?? ''} name="newAstrobin" onChange={handleChange} autoComplete="off" />
              <span className="icon is-small is-left">
                <BiPlanet />
              </span>
            </div>
            <span className="field__error">{fieldHasError.astrobin}</span>
          </div>
          <button type="submit" className="button --secondary settings__elems__form__submit">Enregistrer</button>

        </form>
      </div>
      <div className="settings__elems">
        <h2>Changer le pseudo</h2>
        <form className="settings__elems__form" onSubmit={handleUsernameForm}>
          <div className="settings__elems__form__error"> {usernameChangeError} </div>
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
          <button type="submit" className="button --secondary settings__elems__form__submit">Changer le pseudo</button>

        </form>
      </div>
      <div className="settings__elems">
        <h2>Changer le mot de passe</h2>
        <form className="settings__elems__form" onSubmit={handlePasswordForm}>
          <div className="settings__elems__form__error"> {passwordChangeError} </div>
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
          <div className="settings__elems__form__error"> {accountDeletionError} </div>
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
  username: PropTypes.string.isRequired,
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
  newTwitter: PropTypes.string,
  newInstagram: PropTypes.string,
  newFacebook: PropTypes.string,
  newTiktok: PropTypes.string,
  newAstrobin: PropTypes.string,
  handleSocialChange: PropTypes.func.isRequired,
  formError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

Settings.defaultProps = {
  newTwitter: '',
  newInstagram: '',
  newFacebook: '',
  newTiktok: '',
  newAstrobin: '',
};
