/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import { FaAt } from 'react-icons/fa';

const siteKey = process.env.RECAPTCHA_SITE_KEY;

export default function ForgotPassword({
  handleToggleSignup,
  handleForgot,
  email,
  handleChange,
  signup,
  forgotError,
  fieldHasError,
  handleFieldHasError,
}) {
  const handleValidation = () => {
    const errors = {};
    let formIsValid = true;

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
      handleForgot();
    }
  };

  async function onChange() {
    handleForm();
  }

  // eslint-disable-next-line consistent-return
  const showCaptcha = async (e) => {
    e.preventDefault();
    const div = document.getElementById('re-captcha-forgot');
    div.className = 're-captcha-active';

    const token = await recaptchaRef.current.getValue();

    if (token) {
      handleForm();
    }
  };

  return (
    <form onSubmit={showCaptcha} className={(signup === 3) ? 'login__container__form__elem' : 'login__container__form__elem--hidden'}>
      {forgotError && <div className="login__container__form__elem__error">L'adresse mail n'a pas été trouvée.</div>}
      <div className="field">
        <label className="label">Email</label>
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
      <div className="login__container__form__buttons-container">
        <button
          type="button"
          className="button --secondary"
          onClick={() => {
            handleToggleSignup(2);
          }}
        >Retour
        </button>
        <button type="submit" className="button --outlined">Réinitialiser</button>
      </div>
      <div className="re-captcha" id="re-captcha-forgot">
        <ReCAPTCHA
          ref={recaptchaRef}
      // eslint-disable-next-line no-return-assign
          sitekey={siteKey}
      // eslint-disable-next-line react/jsx-no-bind
          theme="dark"
          onChange={onChange}
          hl="fr"
        />
      </div>
    </form>
  );
}

ForgotPassword.propTypes = {
  handleToggleSignup: PropTypes.func.isRequired,
  handleForgot: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  signup: PropTypes.number.isRequired,
  forgotError: PropTypes.string.isRequired,
  fieldHasError: PropTypes.object.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
};
