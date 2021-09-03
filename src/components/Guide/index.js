/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { FcDownRight, FcAdvance } from 'react-icons/fc';
import { MdReportProblem } from 'react-icons/md';
import mascot from 'src/assets/images/mascot-superhero.svg';

export default function Guide() {
  return (
    // Div qui englobe l'ensemble des paragaphe
    <div className="guide">
      <div className="guide__avatar">
        <img src={mascot} alt="mascot" className="guide__presentation__avatar__avatar" />
      </div>
      <h1 className="main-title animate__animated animate__fadeInDown">Le guide de l'explorateur</h1>
      <div className="guide__presentation animate__animated animate__fadeInRight">
        <h2 className="guide__presentation__title"><FcAdvance /> Tu souhaites découvrir ce milieu fabuleux qu'est l'astronomie ?!</h2>
        <h3 className="guide__presentation__sous-title"> <FcDownRight /> Oui ? Alors t'es au bon endroit !</h3>
        <div className="guide__presentation__paragraphe">
          <p>Laisse moi t'expliquer un peu comment tout ce bazard, qu'est l'astronomie amateur, fonctionne ! (faut bien commencer quelque part non ?!)</p><br />
          <p>Dans le milieu de l'astronomie 'visuel' (Oui, j'ai bien dis visuel, ce détail a son importance !)</p>
          <p>Nous pouvons observer le ciel qui nous entoure à l'oeil nu (comme le faisaient nos ancêtres par exemple !)
            mais nous pouvons aussi utiliser du matériel pour cela. Comme tu t'en doutes on va surtout partir sur cette dernière !
          </p> <br />
          <p>De quoi qu'est qu'on peut utiliser comme matériel pour le visuel ?</p>
          <p>Eh bah tu fais bien de me demander Jean-Michel question (pardon pour les Jean-Michel)</p><br /><br />
          <p>MAIS avant tout, il faut habituer son oeil à l'obscurité, on est pas des chats avec vision nocturne intégrée !</p>
          <p>Pour cela, il faut se laisser environ 15 minutes pour que notre oeil se fasse à l'obscurité,
            la pupille va se dilater et son diamètre quadrupler pour laisser passer davantage de lumière.<br />
            L’astronomie demande de la patience mais aussi de l’entraînement.
            Au fil de vos observations, votre vision nocturne se fera meilleure.<br /><br />
            <em> <MdReportProblem /> Eviter d'allumer des lumières style flash, préférez la lumière rouge, sinon gare à l'éblouïssement ! <MdReportProblem /> </em>
          </p>
        </div>
      </div>
      {/* Création du 1er paragaphe pour expliquer ce qu'il est possible de voir suivant l'instrument utilisé */}
      <div className="guide__section animate__animated animate__fadeInLeft">
        <h2 className="guide__section__title"><FcAdvance /> On peut utiliser différents matériels pour du visuel !</h2>
        <div className="guide__section__paragraphe">

          <p>On peut par exemple utiliser des jumelles, un outil assez simple d'utilisation, rapide à mettre en place et peu chère !
            Le coût d'une paire de jumelle est d'environ une 50ène d'€. <br />
            Rien qu'avec des jumelles on peut déjà observer plusieurs objets du ciel (Mais quoi qu'est-ce qu'on peut voir aux jumelles me demanderez-vous ?
            Tu te calmes ! je vais te donner quelques exmples ! Eh oué, je fais les choses bien moi)
          </p>

          <p>Aux jumelles on peut, par exemple, observer ceci : </p>
          <div className="guide__section__paragraphe__images">
            <figure className="figGuide figGuide--main">
              <a href="https://www.astrobin.com/376656/C/" target="_blank" rel="noreferrer">
                <img src="https://cdn.astrobin.com/thumbs/wqt2g-yEXekS_1824x0_cczXV3LN.jpg" alt="M31 Andromède" />
              </a>
              <figcaption className="exemple"> Galaxie d'Andromède ! </figcaption>
            </figure>

            <figure className="figGuide figGuide--main">
              <a href="https://www.astrobin.com/e6l8jj/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.astrobin.com/thumbs/3BEFT17glT6__1824x0_kWXURFLk.jpg" alt="M42 Orion" />
              </a>
              <figcaption className="exemple">Grande Nébuleuse d'Orion ! </figcaption>
            </figure>

            <figure className="figGuide figGuide--main">
              <a href="https://www.astrobin.com/203597/B/" target="_blank" rel="noreferrer">
                <img src="https://cdn.astrobin.com/thumbs/jgTMJ0eMmTC-_1824x0_Yj9Sel4c.png" alt="Magellan" />
              </a>
              <figcaption className="exemple">Nuages de Magellan (si dans l'hémisphère SUD) ! </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Création du 1er paragaphe pour expliquer ce qu'il est possible de voir suivant l'instrument utilisé */}
      <div className="guide__section">
        <Link to="/guide/visuel">
          <h2 className="guide__section__title"><FcAdvance /> On peut aussi utiliser une lunette ou un téléscope pour du visuel ! Clique sur moi pour voir ça !</h2>
        </Link>

        <Link to="/guide/photo">
          <h2 className="guide__section__title"><FcAdvance /> Tu voudrais savoir comment on fait de la photo astro ? Clique sur moi pour voir ça !</h2>
        </Link>

      </div>

    </div>
  );
}
