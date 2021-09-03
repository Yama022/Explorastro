/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import mascotBackground from 'src/assets/images/mascot-background.svg';
import mascotRocket from 'src/assets/images/mascot-rocket.svg';
import mascotJetpack from 'src/assets/images/mascot-jetpack.svg';
import mascotPen from 'src/assets/images/mascot/fly-on-pen.svg';
import mascotRead from 'src/assets/images/mascot/read-on-saturn.svg';

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__welcome">
        <div className="landing__welcome__images animate__animated animate__fadeInLeft">
          <img className="landing__welcome__images__background" src={mascotBackground} alt="Planète avec anneaux derrière la mascotte" />
          <img className="landing__welcome__images__mascot" src={mascotRocket} alt="AstroCharles, mascotte d'ExplorAstro sur sa fusée" />
        </div>
        <div className="landing__welcome__description animate__animated animate__fadeInRight">
          <h2 className="landing__welcome__description__title">Participez à des observations astronomiques entre passionnés</h2>
          <div className="landing__welcome__description__button">
            <Link to="/login" className="button --secondary">Créer un compte</Link>
            <Link to="/login" className="button --outlined">Se connecter</Link>
          </div>
        </div>
      </div>
      <div className="landing__presentation animate__animated animate__fadeInLeft">
        <div className="landing__presentation__paragraphs">
          <p>
            ExplorAstro est le premier réseau social qui vous permet de participer à des observations astronomiques organisées par la communauté.
            Apprenez à observer et reconnaître les constellations!
          </p>
          <p>
            Notre but est de vous faciliter l'organisation de rassemblement, d'y inviter vos amis, mais également de rencontrer d'autres passionés. La plateforme est accessible à tous que
            vous soyez Thomas Pesquet ou AstroCharles.
          </p>
          <p>
            Partagez vos connaissances et vos expériences avec les autres utilisateurs, initiez vous à la photographie astronomique en vous inscrivant sur ExplorAstro.
          </p>
        </div>
        <img className="landing__presentation__image animate__animated animate__fadeInRight" src={mascotJetpack} alt="AstroCharles, mascotte d'ExplorAstro volant avec une cape de super-héros" />
      </div>
      <h2 className="landing__middle-title">Envie de tenter l'expérience?</h2>
      <div className="landing__previews">
        <div className="landing__previews__card animate__animated animate__fadeInLeft">
          <img src={mascotRead} alt="Aperçu des fonctionnalités" />
          <p>Découvrez les sorties organisées par la communauté!
          </p>
          <Link to="/login" className="button --secondary">Go</Link>
        </div>
        <div className="landing__previews__card animate__animated animate__fadeInRight">
          <img src={mascotPen} alt="Aperçu des fonctionnalités" />
          <p>Organiser une sortie et transmettez vos connaissances!
          </p>
          <Link to="/login" className="button --secondary">Go</Link>
        </div>
      </div>
    </div>
  );
}
