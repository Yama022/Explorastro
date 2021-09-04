import React from 'react';
import theo from 'src/assets/images/avatar/theo.jpeg';
import remi from 'src/assets/images/avatar/remibis.PNG';
import pf from 'src/assets/images/avatar/pf.jpg';
import theoPass from 'src/assets/images/tickets/theo_pass.png';
import remiPass from 'src/assets/images/tickets/remi_pass.png';
import pfPass from 'src/assets/images/tickets/pierre_pass.png';
import { Link } from 'react-router-dom';

import { FaTwitter, FaLinkedinIn, FaGlobeEurope } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export default function Project() {
  return (
    <div className="project">
      <div className="project__container">
        <div className="project__container__header">
          <h2 className="main-title">Qui sommes nous?</h2>
          <div className="project__container__header__content">
            Nous sommes une équipe de 3 développeurs, anciennement 4 qui a été choisie par
            l'équipe d'o'Clock afin de réaliser ExplorAstro, après énormément de boulot,
            et des nuits, qui n'en étaient pas tellement, nous sommes fier de vous
            présenter notre projet. Scrollez vers le bas si vous voulez en
            apprendre plus à propos de chacun de nous.
          </div>
        </div>
        <div className="project__container__developper animate_animated">
          <div className="project__container__developper__avatar">
            <img src={theo} alt="Profil de Théo" className="avatar" />
            <img src={theoPass} alt="Pass de Théo" className="pass" />
          </div>
          <div className="project__container__developper__content">
            <div>
              <h3 className="project__container__developper__content__name">Théo BIET</h3>
              <h4 className="project__container__developper__content__job">Lead Dév Back & Git Master & Product Owner</h4>
            </div>
            <p className="project__container__developper__content__job__description">
              Passionné d’informatique, et de nouvelles technologies depuis mon plus jeune âge,
              je me suis découvert une passion pour le monde du développement et de la
              programmation. Je suis intéressé par mon métier et ma curiosité me permet d’apprendre
              de nouvelles choses chaque jour, je fais des obstacles ma force et essaye de donner
              mon maximum en toutes circonstances. 🌱
            </p>
            <div className="profile__header__description__bio__socials animate_animated">
              <Link className="profile__header__description__bio__socials__item --github" to={{ pathname: 'https://github.com/TheoBIET' }} target="_blank">
                <SiGithub />
              </Link>
              <Link className="profile__header__description__bio__socials__item --linkedin" to={{ pathname: 'https://www.linkedin.com/in/th%C3%A9obiet/' }} target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link className="profile__header__description__bio__socials__item --portfolio" to={{ pathname: 'https://theobiet.fr/' }} target="_blank">
                <FaGlobeEurope />
              </Link>
              <Link className="profile__header__description__bio__socials__item --twitter" to={{ pathname: 'https://twitter.com/DavDav_js' }} target="_blank">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="project__container__developper animate_animated">
          <div className="project__container__developper__avatar">
            <img src={remi} alt="Profil de Rémi" className="avatar" />
            <img src={remiPass} alt="Pass de Rémi" className="pass" />
          </div>
          <div className="project__container__developper__content">
            <div>
              <h3 className="project__container__developper__content__name">Rémi Jacquemin</h3>
              <h4 className="project__container__developper__content__job">Scrum Master & Product Owner</h4>
            </div>
            <p className="project__container__developper__content__job__description">
              Après plus de 10 ans dans le domaine de la sécurité incendie, de pompier volontaire
              ainsi que de formateur en secourisme, en pleine reconversion Pro afin de devenir
              Développeur Web / Web Mobile.
            </p>
            <div className="profile__header__description__bio__socials">
              <Link className="profile__header__description__bio__socials__item --github" to={{ pathname: 'https://github.com/Yama022' }} target="_blank">
                <SiGithub />
              </Link>
              <Link className="profile__header__description__bio__socials__item --linkedin" to={{ pathname: 'https://www.linkedin.com/in/remi-jacquemin/' }} target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link className="profile__header__description__bio__socials__item --twitter" to={{ pathname: 'https://twitter.com/Untitled77230' }} target="_blank">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="project__container__developper">
          <div className="project__container__developper__avatar">
            <img src={pf} alt="Profil de PF" className="avatar" />
            <img src={pfPass} alt="Pass de PF" className="pass" />
          </div>
          <div className="project__container__developper__content">
            <div>
              <h3 className="project__container__developper__content__name">Pierre-François Lainé</h3>
              <h4 className="project__container__developper__content__job">Lead Dév Front & Product Owner</h4>
            </div>
            <p className="project__container__developper__content__job__description">
              Les posts que Pierre-François a créés, partagés ou commentés au cours des 90 derniers
              jours sont affichés ici.
            </p>
            <div className="profile__header__description__bio__socials">
              <Link className="profile__header__description__bio__socials__item --github" to={{ pathname: 'https://github.com/JebNewman' }} target="_blank">
                <SiGithub />
              </Link>
              <Link className="profile__header__description__bio__socials__item --linkedin" to={{ pathname: 'https://www.linkedin.com/in/pierre-fran%C3%A7ois-lain%C3%A9-1983615a/' }} target="_blank">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
