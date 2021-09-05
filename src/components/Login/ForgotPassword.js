/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function ForgotPassword() {
  return (
    <form className="login__container__form__elem">
      <div className="field">
        <label className="label">Mot de passe oublié</label>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="ex: astrocharles@mail.fr"
              name="confirm"
              autoComplete="off"
            />
            <span className="icon is-small is-left">
              <FaEnvelope />
            </span>
          </div>
        </div>
      </div>
      <div className="login__container__form__buttons-container">
        <button type="button" className="button --secondary">Changer mon mot de passe</button>
      </div>
    </form>
  );
}
