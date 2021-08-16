/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { FcDownRight, FcAdvance } from 'react-icons/fc';
import { MdReportProblem } from 'react-icons/md';

export default function Guide() {
  return (
    <div className="guide">
      <div className="guide__presentation">
        <h1 className="guide__presentation__title"><FcAdvance /> Tu souhaites découvrir ce milieu fabuleux qu'est l'astronomie ?!</h1>
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
            <MdReportProblem /><em>Eviter d'allumer des lumières style flash, préférez la lumière rouge !</em>
          </p>
        </div>
      </div>
      <div className="guide__paraph__one">
        <h2 className="guide__paraph__one__title"><FcAdvance /> On peut utiliser différents matériels pour du visuel !</h2>
        <div className="guide__paraph__one__paragraphe">
          <p>On peut par exemple utiliser des jumelles, un outil assez simple d'utilisation, rapide à mettre en place et peu chère !
            Rien qu'avec des jumelles on peu déjà observer plusieurs objets du ciel (Mais quoi qu'est-ce qu'on peut voir aux jumelles me demanderez-vous ?
            Tu te calmes ! je vais te donner quelques exmples ! Eh oué, je fais les choses bien moi)
          </p>
          <p>Aux jumelles on peut, par exemple, observer ceci : </p>
        </div>

        <figure>
          <Link to="http://fr.wikipedia.org/wiki/Galaxie_d%27Andromède" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/280px-Andromeda_Galaxy_%28with_h-alpha%29.jpg" alt="M31 Andromède" />
          </Link>
          <figcaption className="exemple"> Galaxie d'Andromède ! </figcaption>
        </figure>

        <figure>
          <Link to="https://fr.wikipedia.org/wiki/N%C3%A9buleuse_d%27Orion" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/280px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg" alt="M42 Orion" />
          </Link>
          <figcaption className="exemple">Grande Nébuleuse d'Orion ! </figcaption>
        </figure>

        <figure>
          <Link to="https://fr.wikipedia.org/wiki/Nuages_de_Magellan" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Magellanic_Clouds_%E2%80%95_Irregular_Dwarf_Galaxies.jpg/330px-Magellanic_Clouds_%E2%80%95_Irregular_Dwarf_Galaxies.jpg" alt="Magellan" />
          </Link>
          <figcaption className="exemple">Nuages de Magellan (si dans l'hémisphère SUD) ! </figcaption>
        </figure>
      </div>

    </div>
  );
}
