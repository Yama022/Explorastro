/* eslint-disable max-len */
import React, { useState } from 'react';
import { BiGitPullRequest } from 'react-icons/bi';

export default function Report() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="patch-note animate__animated animate__fadeInLeft" onClick={toggleModal}>
        <span className="icon"><BiGitPullRequest /></span>
        <span>Patch-Note</span>
      </div>
      <div className={modal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card animate__animated animate__fadeInDown">
          <header className="modal-card-head">
            <p className="modal-card-title"><BiGitPullRequest /> Patch-Note</p>
            <button type="button" className="delete" aria-label="close" onClick={toggleModal} />
          </header>
          <section className="modal-card-body --patch">
            <h3>
              Version 1 - 05 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> de la réinitialisation du mot de passe
              </li>
              <li>
                <span>Amélioration</span> de la sécurité concernant le nombre de requête côté serveur
              </li>
              <li>
                <span>Ajout</span> de validations sur les champs de formulaire
              </li>
              <li>
                <span>Ajout</span> de la mise à jour des réseaux sociaux dans le profil
              </li>
              <li>
                <span>Ajout</span> d'un captcha dans le formulaire de connexion
              </li>
            </ul>
            <h3>
              Version 0.9.3 - 04 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> des conditions d'utilisation
              </li>
              <li>
                <span>Ajout</span> du composant que vous voyez actuellement
              </li>
              <li>
                <span>Ajout</span> d'un système de report
              </li>
            </ul>
            <h3>
              Version 0.9.2 - 03 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Amélioration</span> des animations sur le site
              </li>
              <li>
                <span>Amélioration</span> de la page 404
              </li>
              <li>
                <span>Amélioration</span> générale des styles du site
              </li>
              <li>
                <span>Amélioration</span> des visuels de la carte
              </li>
            </ul>
            <h3>
              Version 0.9.1 - 04 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> du composant création d'avatar
              </li>
              <li>
                <span>Ajout</span> du composant "Notre Projet"
              </li>
              <li>
                <span>Fix</span> le chargement infini sur la timeline lorsque vous n'avez pas d'amis
              </li>
            </ul>
            <h3>
              Version 0.9 - 03 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> de la météo dynamique sur le détail d'une exploration
              </li>
              <li>
                <span>Amélioration</span> du Header (Apparaît & disparait)
              </li>
              <li>
                <span>Ajout</span> de l'événément "A mis à jour son avatar" sur la timeline
              </li>
              <li>
                <span>Ajout</span> de la modification de commentaire
              </li>
            </ul>
            <h3>
              Version 0.8 - 02 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> de la mise à jour de l'avatar
              </li>
              <li>
                <span>Ajout</span> de la mise à jour de l'illustration
              </li>
              <li>
                <span>Ajout</span> de la recherche d'exploration
              </li>
              <li>
                <span>Ajout</span> de la recherche utilisateur
              </li>
              <li>
                <span>Ajout</span> de la suppression de commentaire
              </li>
            </ul>
            <h3>
              Version 0.7 - 01 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> de l'ajout de commentaire
              </li>
              <li>
                <span>Fix</span> du crash lorsque l'on allait sur une exploration sans coordonnées
              </li>
              <li>
                <span>Fix</span> suppression de l'exploration qui a des commentaires
              </li>
              <li>
                <span>Ajout</span> de la fonctionnalité commenter une exploration
              </li>
            </ul>
            <h3>
              Version 0.6 - 01 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Amélioration</span> de la couleur du badge en fonction du nombre de vos explorations
              </li>
              <li>
                <span>Retrait</span> des étoiles de notes dans les explorations et utilisateurs
              </li>
              <li>
                <span>Amélioration</span> de la page d'accueil
              </li>
              <li>
                <span>Ajout</span> de la fonctionnalité participer à une exploration
              </li>
            </ul>
            <h3>
              Version 0.5 - 29 Août 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> des réseaux sociaux sur la page profil
              </li>
              <li>
                <span>Ajout</span> de la liste d'ami sur la timeline
              </li>
              <li>
                <span>Ajout</span> des permissions administrateur
              </li>
              <li>
                <span>Ajout</span> d'un Loader sur tous les composants
              </li>
              <li>
                <span>Fix</span> des clés d'API pour la map en production
              </li>
              <li>
                <span>Update</span> des explorations sur le profil (seules celles publiées sont affichées)
              </li>
              <li>
                <span>Fix</span> en tant qu'auteur, vous êtes automatiquement participant à votre exploration
              </li>
              <li>
                <span>Ajout</span> de la géolocalisation sur Discover
              </li>
              <li>
                <span>Ajout</span> de la page profil
              </li>
              <li>
                <span>Ajout</span> de la page paramètres du profil
              </li>
              <li>
                <span>Amélioration</span> de la page Guide
              </li>
            </ul>
            <h3>
              Version 0.4 - 23 Août 2021
            </h3>
            <ul>
              <li>
                <span>Fix</span> Header
              </li>
              <li>
                <span>Ajout</span> de CRUD API.
              </li>
            </ul>
            <h3>
              Version 0.3 - 21 Août 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> d'un store Redux pour les données de l'application
              </li>
              <li>
                <span>Ajout</span> de middlewares Redux pour communiquer avec l'API
              </li>
              <li>
                <span>Ajout</span> de contraintes d'intégrité sur les données
              </li>
              <li>
                <span>Ajout</span> de Joi (validation pour les données)
              </li>
            </ul>
            <h3>
              Version 0.2 - 20 Août 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> d'un formulaire pour créer un événement
              </li>
              <li>
                <span>Ajout</span> d'une page de connexion / inscription
              </li>
              <li>
                <span>Ajout</span> de CRUD pour les événements et les utilisateurs
              </li>
            </ul>
            <h3>
              Version 0.1 - 19 Août 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> d'un header pour la navigation
              </li>
              <li>
                <span>Ajout</span> du composant "Le Guide de l'explorateur"
              </li>
              <li>
                <span>Ajout</span> du Footer
              </li>
              <li>
                <span>Mise en place</span> de la base de données
              </li>
              <li>
                <span>Déploiement</span> de l'API
              </li>
              <li>
                <span>Ajout</span> d'un système de login avec JWT
              </li>
            </ul>
            <h3>
              Version 0 - 17 Août 2021
            </h3>
            <ul>
              <li>
                <span>Création</span> du cahier des charges
              </li>
              <li>
                <span>Conception</span> du modèle conceptuel de données
              </li>
              <li>
                <span>Création</span> de la maquette du site et des wireframes
              </li>
              <li>
                <span>Création</span> de l'identité graphique
              </li>
            </ul>
          </section>
          <footer className="modal-card-foot">
            <button type="button" className="button --secondary" onClick={toggleModal}>Fermer</button>
          </footer>
        </div>
      </div>
    </>
  );
}
