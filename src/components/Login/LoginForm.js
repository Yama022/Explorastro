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
  return (
    <form onSubmit={handleSubmitLogin} className={signup ? 'login__container__form__elem--hidden' : 'login__container__form__elem'}>
      <div className="field">
        <label className="label">Email ou nom d'utilisateur</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" placeholder="ex: astroCharles@explorastro.com" value={email} name="email" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaAt />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Mot de Passe</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={password} name="password" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaKey />
          </span>
        </div>
      </div>
      <div className="login__container__form__buttons-container">
        <div className="button --outlined" onClick={handleToggleSignup}>Inscription</div>
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
