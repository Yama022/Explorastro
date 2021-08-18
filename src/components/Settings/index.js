/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaUser, FaKey } from 'react-icons/fa';

export default function Settings({ usernameChange, changeField, handleUsernameChange }) {
  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

  const handleUsernameForm = (event) => {
    event.preventDefault();
    handleUsernameChange();
    console.log('Change username');
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    console.log('Change password');
  };

  const handleDelete = () => {
    console.log('Compte supprimé');
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
        <form className="settings__elems__form" onSubmit={handlePasswordChange}>

          <div className="field">
            <label className="label">Mot de Passe</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value="{password}" name="password" onChange={handleChange} />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Confirmer le mot de passe</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value="{passwordConfirmation}" name="passwordConfirmation" onChange={handleChange} />
              <span className="icon is-small is-left">
                <FaKey />
              </span>
            </div>
          </div>

          <button type="button" className="button --outlined purple settings__elems__form__submit" onClick={handlePasswordChange}>Changer le mot de passe</button>

        </form>
      </div>

      <div className="settings__elems">
        <h2>Supprimer le compte</h2>
        <button type="button" className="button is-danger is-small" onClick={handleDelete}>Supprimer le compte</button>
      </div>

    </div>
  );
}

Settings.propTypes = {
  usernameChange: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};
