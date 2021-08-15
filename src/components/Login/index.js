/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

export default function Login() {
  useEffect(() => {
    (function () {
      const elem = document.querySelector('#parallax');

      function parallax(e) {
        const w = window.innerWidth / 2;
        const h = window.innerHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const depth1 = `${50 - ((mouseX - w) * 0.01)}% ${50 - ((mouseY - h) * 0.01)}%`;
        const depth2 = `${50 - ((mouseX - w) * 0.02)}% ${50 - ((mouseY - h) * 0.02)}%`;
        const depth3 = `${50 - ((mouseX - w) * 0.06)}% ${50 - ((mouseY - h) * 0.06)}%`;
        const x = `${depth3}, ${depth2}, ${depth1}`;
        elem.style.backgroundPosition = x;
      }

      document.addEventListener('mousemove', parallax);
    }());
  });

  const [login, setLogin] = React.useState('');

  return (
    <div className="login">
      <div className="login__illustration">
        <div id="parallax" />
      </div>
      <div className="login__container">
        <div className="login__container__form">
          <h2>Connexion</h2>
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
