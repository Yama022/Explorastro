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
  handleSubmitSignup,
  signup,
}) {
  return (
    <form onSubmit={handleSubmitSignup} className={signup ? 'login__container__form__elem' : 'login__container__form__elem--hidden'}>
      <div className="field">
        <label className="label">Prénom</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="ex: John" value={firstname} name="firstname" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Nom</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="ex: Osterman" value={lastname} name="lastname" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Pseudo</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="ex: AstroCharles" value={username} name="username" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="ex: astroCharles@explorastro.com" value={email} name="email" onChange={handleChange} />
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
      <div className="field">
        <label className="label">Confirmer le mot de passe</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={passwordConfirmation} name="passwordConfirmation" onChange={handleChange} />
          <span className="icon is-small is-left">
            <FaKey />
          </span>
        </div>
      </div>
      <div className="login__container__form__buttons-container">
        <button type="button" className="button --outlined" onClick={handleToggleSignup}>Connexion</button>
        <button type="submit" className="button purple">S'inscrire</button>
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
  handleSubmitSignup: PropTypes.func.isRequired,
  signup: PropTypes.bool.isRequired,
};
