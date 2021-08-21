import React from 'react';

import avatar from 'src/assets/images/mascot-rocket.svg';
import { AiOutlineUserAdd, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';

import Follows from './Follows';

export default function Profile() {
  return (
    <div className="profile">

      <h1 className="main-title">Profil</h1>

      <div className="profile__header">

        <div className="profile__header__avatar">
          <div className="profile__header__avatar__background" />
          <img src={avatar} alt="Avatar de l'utilisateur" />
        </div>

        <div className="profile__header__description">
          <div className="profile__header__description__top">
            <div className="profile__header__description__top__left">
              <h2 className="profile__header__description__top__left__name">Nom prénom</h2>
              <div className="profile__header__description__top__left__stars">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
              </div>
            </div>
            <button type="button" className="button --secondary">
              <span className="icon is-small">
                <AiOutlineUserAdd />
              </span>
              <span>Suivre</span>
            </button>
          </div>
          <div className="profile__header__description__bio">
            <div>
              <BiMedal />
              125 explorations
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tortor a magna
              dapibusblanditac elementum massa.Morbi eget cursus massa. Integer elementum
              tincidunt magna viverra pharetra. Nam ac diam lobortis ex euismod ornare. Maecenas
              at ipsum velit. Proin bibendum eget mauris in imperdiet. Praesent interdum egestas
              magna nec dignissim. Nullam at sodales turpis. Suspendisse eleifend scelerisque
              iaculis.
            </p>
          </div>
        </div>

      </div>

      <ul className="profile__nav">
        <li>Main</li>
        <li>Followers</li>
        <li>Followed</li>
      </ul>

      <Follows />

    </div>
  );
}
