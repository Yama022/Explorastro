/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaUser, FaKey } from 'react-icons/fa';

export default function Settings({
  usernameChange,
  changeField,
  handleUsernameChange,
  password,
  newPassword,
  handlePasswordChange,
  handleDeleteAccount,
}) {
  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

  const handleUsernameForm = (event) => {
    if (window.confirm('Êtes-vous sûr de vouloir changer votre pseudo?')) {
      event.preventDefault();
      handleUsernameChange();
    }
  };

  const handlePasswordForm = (event) => {
    if (window.confirm('Êtes-vous sûr de vouloir changer votre mot de passe?')) {
      event.preventDefault();
      handlePasswordChange();
    }
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible.')) {
      handleDeleteAccount();
    }
  };

  return (
    <div className="settings">
      <h1 className="main-title">Paramètres</h1>
      <div className="settings__elems">
        <h2>Changer le pseudo</h2>
        <form className="settings__elems__form" onSubmit={handleUsernameForm}>

          <div className="field">
            <label className="label">Pseudo</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="ex: AstroCharles" value={usernameChange} name="usernameChange" onChange={handleChange} />
              <span className="icon is-small is-left">
                <FaUser />
              </span>
            </div>
          </div>
          <button type="button" className="button --outlined purple settings__elems__form__submit" onClick={handleUsernameForm}>Changer le pseudo</button>

        </form>
      </div>
      <div className="settings__elems">
        <h2>Changer le mot de passe</h2>
        <form className="settings__elems__form" onSubmit={handlePasswordForm}>

          <div className="field">
            <label className="label">Mot de passe actuel</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={password} name="password" onChange={handleChange} />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Nouveau mot de passe</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={newPassword} name="newPassword" onChange={handleChange} />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
          </div>

          <button type="submit" className="button --outlined purple settings__elems__form__submit">Changer le mot de passe</button>

        </form>
      </div>

      <div className="settings__elems">
        <h2>Supprimer le compte</h2>
        <button type="button" className="button is-danger is-small settings__elems__delete-button" onClick={handleDelete}>Supprimer le compte</button>
      </div>

    </div>
  );
}

Settings.propTypes = {
  usernameChange: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleDeleteAccount: PropTypes.func.isRequired,
};
