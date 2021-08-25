/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import mascotBackground from 'src/assets/images/mascot-background.svg';
import mascotRocket from 'src/assets/images/mascot-rocket.svg';
import mascotJetpack from 'src/assets/images/mascot-jetpack.svg';
import defaultExplo from 'src/assets/images/default-explo.jpg';

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__welcome">
        <div className="landing__welcome__images">
          <img className="landing__welcome__images__background" src={mascotBackground} alt="Planète avec anneaux derrière la mascotte" />
          <img className="landing__welcome__images__mascot" src={mascotRocket} alt="AstroCharles, mascotte d'ExplorAstro sur sa fusée" />
        </div>
        <div className="landing__welcome__description">
          <h2 className="landing__welcome__description__title">Participez à des observations astronomiques entre passionés</h2>
          <Link to="/login" className="button --secondary">Créer un compte</Link>
        </div>
      </div>
      <div className="landing__presentation">
        <div className="landing__presentation__paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare leo dapibus, sagittis
            lacus eu, mattis velit. Phasellus id mattis mauris, quis condimentum orci. Donec at arcu
            in neque ornare lacinia.
          </p>
          <p>
            Maecenas ac molestie nisl, vitae iaculis nisl. In porta ligula congue varius sollicitudin.
            Mauris eu metus aliquam, porta ante vel, sagittis risus. Nullam quis purus ut sapien
            malesuada placerat at vel mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque scelerisque erat nec diam pretium gravida. Etiam sed malesuada metus. Mauris
            nec lorem vestibulum sapien aliquam varius. Curabitur scelerisque pretium ipsum, vitae
            pretium orci interdum non. Vivamus scelerisque porta lacus vel varius.
          </p>
          <p>
            Nunc purus justo, accumsan a arcu at, volutpat rhoncus nisi. Maecenas ipsum mauris,
            pretium posuere velit vitae, tincidunt interdum est. Quisque venenatis magna quam,
            dignissim cursus tortor suscipit sed. Nullam vitae dolor arcu.
          </p>
        </div>
        <img className="landing__presentation__image" src={mascotJetpack} alt="AstroCharles, mascotte d'ExplorAstro volant avec une cape de super-héros" />
      </div>
      <h2 className="landing__middle-title">Envie de tenter l'expérience?</h2>
      <div className="landing__previews">
        <div className="landing__previews__card">
          <img src={defaultExplo} alt="Aperçu des fonctionnalités" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore corporis deleniti rem explicabo
            sit incidunt, impedit soluta sunt delectus reiciendis saepe tempore non numquam quidem! Sit
            necessitatibus quos temporibus placeat?
          </p>
          <Link to="/login" className="button --secondary">Découvrir les sorties autour de moi</Link>
        </div>
        <div className="landing__previews__card">
          <img src={defaultExplo} alt="Aperçu des fonctionnalités" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore corporis deleniti rem explicabo
            sit incidunt, impedit soluta sunt delectus reiciendis saepe tempore non numquam quidem! Sit
            necessitatibus quos temporibus placeat?
          </p>
          <Link to="/login" className="button --secondary">Créer une sortie</Link>
        </div>
      </div>
    </div>
  );
}
