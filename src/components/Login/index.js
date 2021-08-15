/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import planet1 from 'src/assets/images/login/1.png';
import planet2 from 'src/assets/images/login/2.png';
import planet3 from 'src/assets/images/login/3.png';
import planet4 from 'src/assets/images/login/4.png';
import planet5 from 'src/assets/images/login/5.png';
import planet6 from 'src/assets/images/login/6.png';
import planet7 from 'src/assets/images/login/7.png';
import planet8 from 'src/assets/images/login/8.png';
import planet9 from 'src/assets/images/login/9.png';
import logo from 'src/assets/images/logo-explorastro.png';

import { FaUser } from 'react-icons/fa';

export default function Login() {
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

  const [login, setLogin] = React.useState('');

  return (
    <div className="login">
      <img src={planet1} className="object" data-value="-2" alt="" />
      <img src={planet2} className="object" data-value="6" alt="" />
      <img src={planet3} className="object" data-value="4" alt="" />
      <img src={planet4} className="object" data-value="-6" alt="" />
      <img src={planet5} className="object" data-value="8" alt="" />
      <img src={planet6} className="object" data-value="-4" alt="" />
      <img src={planet7} className="object" data-value="5" alt="" />
      <img src={planet8} className="object" data-value="-9" alt="" />
      <img src={planet9} className="object" data-value="-5" alt="" />
      <div className="login__container">
        <div className="login__container__form">
          <img src={logo} alt="" />
          <form action="">
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="text" placeholder="ex: AstroCharles" value={login} name="login" onChange={(e) => setLogin(e.target.value)} />
                <span className="icon is-small is-left">
                  <FaUser />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Mot de Passe</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="password" placeholder="ex: MyStr0ngP455sWoRD" value={login} name="login" onChange={(e) => setLogin(e.target.value)} />
                <span className="icon is-small is-left">
                  <FaUser />
                </span>
              </div>
            </div>
          </form>

          <div className="login__container__form__buttons-container">
            <div className="button purple">Se Connecter</div>
            <div className="button --outlined">S'inscrire</div>
          </div>
        </div>
      </div>
    </div>
  );
}
