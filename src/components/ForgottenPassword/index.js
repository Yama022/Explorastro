/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';
import charlesOnPlanet from 'src/assets/images/login/1.png';
import planet2 from 'src/assets/images/login/2.png';
import planet3 from 'src/assets/images/login/3.png';
import planet4 from 'src/assets/images/login/4.png';
import planet5 from 'src/assets/images/login/5.png';
import logo from 'src/assets/images/logo-explorastro.png';

export default function ForgottenPassword() {
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
        <div className="login__container__form animate__animated animate__fadeInDown">
          <Link to="/landing">
            <img src={logo} alt="" />
          </Link>
          <form className="login__container__form__elem">
            <div className="field">
              <label className="label">Nouveau mot de passe</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  placeholder="ex: MyStr0ngP455sWoRD"
                  type="password"
                  name="password"
                  autoComplete="on"
                />
                <span className="icon is-small is-left">
                  <FaKey />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Confirmer</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="ex: MyStr0ngP455sWoRD"
                  name="confirm"
                  autoComplete="off"
                />
                <span className="icon is-small is-left">
                  <FaKey />
                </span>
              </div>
            </div>
            <div className="login__container__form__buttons-container">
              <button type="button" className="button --secondary">Changer mon mot de passe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
