/* eslint-disable max-len */
import React from 'react';
import BackButton from 'src/components/BackButton';


import { FcDownRight, FcAdvance } from 'react-icons/fc';
import { MdReportProblem } from 'react-icons/md';

// import data from './Visuel/data';


export default function Photo() {

  return (
    <div className="photo">
    <BackButton />
      <div className="toto">


        <h1 className="toto__title"><FcAdvance /> Tu souhaites découvrir ce milieu fabuleux qu'est l'astronomie ?!</h1>
        <h3 className="toto__sous-title"> <FcDownRight /> Oui ? Alors t'es au bon endroit !</h3>
        <div className="toto__paragraphe">
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
            <em> <MdReportProblem /> Eviter d'allumer des lumières style flash, préférez la lumière rouge, sinon gare à l'éblouïssement ! <MdReportProblem /></em>
          </p>
        </div>
      </div>
    </div>
  );
}
