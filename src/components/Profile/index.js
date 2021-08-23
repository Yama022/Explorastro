import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import avatar from 'src/assets/images/mascot-rocket.svg';
import { AiOutlineUserAdd, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { GrAchievement, GrTrophy } from 'react-icons/gr';
import { FaMedal } from 'react-icons/fa';
import { BiMedal, BiCog } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';

import Follows from './Follows';

export default function Profile({
  firstName,
  lastName,
  username,
  menuValue,
  changeMenuValue,
  profileId,
  loggedUserId,
  getInfo,
  followers,
  following,
  handleFollow,
  handleUnfollow,
  userFollowed,
}) {
  const handleToggleNav = (event) => {
    changeMenuValue(event.target.dataset.toggle);
  };

  useEffect(() => {
    getInfo(profileId);
  }, [profileId]);

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
              <h3 className="profile__header__description__top__left__name">{firstName} {lastName}</h3>
              <h2 className="profile__header__description__top__left__username">{username}</h2>
              <div className="profile__header__description__top__left__stars">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
              </div>
            </div>
            <div className="profile__header__description__top__right">
              {(profileId === loggedUserId)
                ? (
                  <Link to="/settings">
                    <BiCog className="profile__header__description__top__right__cog" />
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className={userFollowed ? 'follows__button button --secondary' : 'follows__button--active button --secondary'}
                      onClick={() => {
                        handleFollow(profileId);
                      }}
                    >
                      <span className="icon is-small">
                        <AiOutlineUserAdd />
                      </span>
                      <span>Suivre</span>
                    </button>

                    <button
                      type="button"
                      className={userFollowed ? 'follows__button--active button --outlined' : 'follows__button button --outlined'}
                      onClick={() => {
                        handleUnfollow(profileId);
                      }}
                    >
                      <span className="icon is-small">
                        <TiTick />
                      </span>
                      <span>Suivi(e)</span>
                    </button>
                  </>
                )}
            </div>
          </div>
          <div className="profile__header__description__bio">
            <div className="profile__header__description__bio__explo">
              <BiMedal className="profile__header__description__bio__explo__medal" />
              <span>25 explorations</span>
            </div>
            <p className="profile__header__description__bio__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tortor a magna
              dapibusblanditac elementum massa.Morbi eget cursus massa. Integer elementum
              tincidunt magna viverra pharetra. Nam ac diam lobortis ex euismod ornare. Maecenas
              at ipsum velit. Proin bibendum eget mauris in imperdiet. Praesent interdum egestas
              magna nec dignissim. Nullam at sodales turpis. Suspendisse eleifend scelerisque
              iaculis.
            </p>
            <div className="profile__header__description__bio__achievements">
              <FaMedal /> <GrAchievement /> <BiMedal /> <GrTrophy />
            </div>
          </div>
        </div>

      </div>

      <ul className="profile__nav">
        <li className={(menuValue === 1) ? 'profile__nav__elem profile__nav__elem--active' : 'profile__nav__elem'} data-toggle="1" onClick={handleToggleNav}>Informations</li>
        <li className={(menuValue === 2) ? 'profile__nav__elem profile__nav__elem--active' : 'profile__nav__elem'} data-toggle="2" onClick={handleToggleNav}>Suivi par</li>
        <li className={(menuValue === 3) ? 'profile__nav__elem profile__nav__elem--active' : 'profile__nav__elem'} data-toggle="3" onClick={handleToggleNav}>Suit</li>
      </ul>

      <div className="profile__content">
        {
          (() => {
            switch (menuValue) {
              case 1: return <h2 className="profile__content__title">Dernières explorations</h2>;
              case 2: return <> <h2 className="profile__content__title">Les personnes qui le suivent</h2> <Follows users={followers} /> </>;
              case 3: return <> <h2 className="profile__content__title">Les personnes qu'il suit</h2> <Follows users={following} /> </>;
              default: return <h2 className="profile__content__title">Une erreur est survenue</h2>;
            }
          })()
        }
      </div>

    </div>
  );
}

Profile.propTypes = {
  getInfo: PropTypes.func.isRequired,
  loggedUserId: PropTypes.number.isRequired,
  profileId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  menuValue: PropTypes.number.isRequired,
  changeMenuValue: PropTypes.func.isRequired,
  followers: PropTypes.array.isRequired,
  following: PropTypes.array.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
  userFollowed: PropTypes.bool.isRequired,
};
