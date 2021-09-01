import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import charlesOnPlanet from 'src/assets/images/login/1.png';
import planet2 from 'src/assets/images/login/2.png';
import planet3 from 'src/assets/images/login/3.png';
import planet4 from 'src/assets/images/login/4.png';
import planet5 from 'src/assets/images/login/5.png';
import logo from 'src/assets/images/logo-explorastro.png';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function Login({
  handleToggleSignup,
  firstname,
  lastname,
  username,
  email,
  password,
  passwordConfirmation,
  changeField,
  handleLogin,
  handleSignup,
  signup,
  loginError,
  fieldHasError,
  handleFieldHasError,
}) {
  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

  useEffect(() => {
    function parallax(e) {
      document.querySelectorAll('.object').forEach((move) => {
        const movingValue = move.getAttribute('data-value');
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener('mousemove', parallax);
  });

  return (
    <div className="login">
      <div className="login__parallax">
        <img src={charlesOnPlanet} className="object" data-value="-1" alt="" />
        <img src={planet2} className="object" data-value="2" alt="" />
        <img src={planet3} className="object" data-value="4" alt="" />
        <img src={planet4} className="object" data-value="-6" alt="" />
        <img src={planet5} className="object" data-value="5" alt="" />
      </div>
      <div className="login__container">
        <div className="login__container__form">
          <Link to="/landing">
            <img src={logo} alt="" />
          </Link>

          <LoginForm
            email={email}
            password={password}
            signup={signup}
            handleChange={handleChange}
            handleLogin={handleLogin}
            handleToggleSignup={handleToggleSignup}
            loginError={loginError}
            fieldHasError={fieldHasError}
            handleFieldHasError={handleFieldHasError}
          />

          <SignupForm
            firstname={firstname}
            lastname={lastname}
            username={username}
            email={email}
            password={password}
            signup={signup}
            passwordConfirmation={passwordConfirmation}
            handleChange={handleChange}
            handleSignup={handleSignup}
            handleToggleSignup={handleToggleSignup}
            signupError={loginError}
            fieldHasError={fieldHasError}
            handleFieldHasError={handleFieldHasError}
          />

        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleToggleSignup: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  signup: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  fieldHasError: PropTypes.object.isRequired,
  handleFieldHasError: PropTypes.func.isRequired,
};
