import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AiOutlineUserAdd } from 'react-icons/ai';
// , AiFillStar, AiOutlineStar
import { GrTrophy } from 'react-icons/gr';
import {
  FaPen, FaFacebookSquare, FaTwitter, FaInstagram, FaCrown,
} from 'react-icons/fa';
import {
  BiMedal, BiCog, BiCheck, BiPlanet,
} from 'react-icons/bi';
import { RiImageEditLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { MdCheck } from 'react-icons/md';
import { SiTiktok } from 'react-icons/si';
import { HiOutlineTerminal } from 'react-icons/hi';

import Loader from 'src/components/Loader';

import Follows from './Follows';
import Explorations from './Explorations';

export default function Profile({
  firstName,
  lastName,
  username,
  role,
  avatarUrl,
  menuValue,
  changeMenuValue,
  profileId,
  loggedUserId,
  getInfo,
  followers,
  following,
  explorations,
  participatesTo,
  handleFollow,
  handleUnfollow,
  userFollowed,
  handleToggleBioEdit,
  bioEditIsOpen,
  biography,
  biographyEdit,
  changeField,
  handleBioEdit,
  userFound,
  handleAvatarUpload,
}) {
  const handleToggleNav = (event) => {
    changeMenuValue(event.target.dataset.toggle);
  };

  const handleChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

  const handleBioEditSubmit = (event) => {
    event.preventDefault();
    handleBioEdit();
    handleToggleBioEdit();
  };

  const handleAvatarUploadForm = (event) => {
    handleAvatarUpload(event.target.files[0]);
  };

  useEffect(() => {
    getInfo(profileId);
  }, [profileId]);

  if (!loggedUserId || !explorations || !profileId || !participatesTo) {
    return <Loader />;
  }

  if (!userFound) {
    return <div><h1 className="main-title" style={{ height: '80vh' }}>Utilisateur introuvable</h1></div>;
  }

  const publishedEvents = explorations.filter((evt) => evt.is_published === true);
  const totalExplorations = participatesTo.length + publishedEvents.length;

  return (
    <div className="profile">
      <div className="profile__header">

        <div className="profile__header__avatar animate__animated animate__bounceIn">
          {(profileId === loggedUserId)
              && (
                <form className="profile__header__avatar__edit">
                  <label htmlFor="upload-avatar">
                    <RiImageEditLine className="profile__header__avatar__edit__icon" />
                    <input
                      type="file"
                      name="avatarFile"
                      id="upload-avatar"
                      accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                      onChange={(event) => {
                        handleAvatarUploadForm(event);
                      }}
                    />
                  </label>
                </form>
              )}
          <div className="profile__header__avatar__img">
            <img
              src={avatarUrl}
              alt="Avatar de l'utilisateur"
              className={
                (profileId === loggedUserId) ? 'profile__header__avatar__img__elem profile__header__avatar__img__elem--logged' : 'profile__header__avatar__img__elem'
              }
            />
          </div>
        </div>

        <div className="profile__header__description animate__animated animate__fadeInDown">
          <div className="profile__header__description__top">
            <div className="profile__header__description__top__left">
              <h3 className="profile__header__description__top__left__name">{firstName} {lastName}</h3>
              <h2 className="profile__header__description__top__left__username">
                {username}
                {(role === 3) && <> <FaCrown title="Admin" className="admin-icon" />  <HiOutlineTerminal title="Developer" className="admin-icon" /> </>}
              </h2>
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
                      className={userFollowed ? 'profile__follows__button button --secondary' : 'profile__follows__button--active button --secondary'}
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
                      className={userFollowed ? 'profile__follows__button--active button --outlined' : 'profile__follows__button button --outlined'}
                      onClick={() => {
                        handleUnfollow(profileId);
                      }}
                    >
                      <span className="icon is-small">
                        <BiCheck />
                      </span>
                      <span>Suivi(e)</span>
                    </button>
                  </>
                )}
            </div>
          </div>
          <div className="profile__header__description__bio">
            {
              (() => {
                if (totalExplorations < 10) {
                  return (
                    <div className="profile__header__description__bio__explo">
                      <BiMedal className="profile__header__description__bio__explo__medal --bronze" />
                      <span>{totalExplorations} explorations</span>
                    </div>
                  );
                } if (totalExplorations < 20) {
                  return (
                    <div className="profile__header__description__bio__explo">
                      <BiMedal className="profile__header__description__bio__explo__medal --silver" />
                      <span>{totalExplorations} explorations</span>
                    </div>
                  );
                }
                return (
                  <div className="profile__header__description__bio__explo">
                    <GrTrophy className="profile__header__description__bio__explo__medal --gold" />
                    <span>{totalExplorations} explorations</span>
                  </div>
                );
              })()
          }
            {(profileId === loggedUserId && !bioEditIsOpen)
              && (
                <FaPen
                  className="profile__header__description__bio__edit"
                  onClick={() => {
                    handleToggleBioEdit();
                  }}
                />
              )}
            {bioEditIsOpen
              ? (
                <form
                  className="profile__header__description__bio__form"
                  onSubmit={handleBioEditSubmit}
                >
                  <textarea name="biographyEdit" onChange={handleChange} value={biographyEdit} />
                  <div className="profile__header__description__bio__form__buttons">
                    <button type="button" className="button --secondary" onClick={handleToggleBioEdit}>
                      <span className="icon"><IoClose /></span>
                    </button>
                    <button type="submit" className="button --secondary">
                      <span className="icon"><MdCheck /></span>
                    </button>
                  </div>
                </form>
              )
              : (
                <p className="profile__header__description__bio__paragraph">
                  {biography}
                </p>
              )}
            <div className="profile__header__description__bio__socials">
              <Link
                className="profile__header__description__bio__socials__item --twitter"
                to={{ pathname: 'https://twitter.com/' }}
                target="_blank"
                title="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="profile__header__description__bio__socials__item --instagram"
                to={{ pathname: 'https://www.instagram.com/' }}
                target="_blank"
                title="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="profile__header__description__bio__socials__item --facebook"
                to={{ pathname: 'https://www.facebook.com/' }}
                target="_blank"
                title="Facebook"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                className="profile__header__description__bio__socials__item --tiktok"
                to={{ pathname: 'https://www.tiktok.com/' }}
                target="_blank"
                title="TikTok"
              >
                <SiTiktok />
              </Link>
              <Link
                className="profile__header__description__bio__socials__item --astrobin"
                to={{ pathname: 'https://www.astrobin.com/' }}
                target="_blank"
                title="Astrobin"
              >
                <BiPlanet />
              </Link>
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
              case 1: return <> <h2 className="profile__content__title">Explorations publiées</h2> <Explorations explorations={publishedEvents} /> </>;
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
  role: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  menuValue: PropTypes.number.isRequired,
  changeMenuValue: PropTypes.func.isRequired,
  followers: PropTypes.array.isRequired,
  following: PropTypes.array.isRequired,
  explorations: PropTypes.array.isRequired,
  participatesTo: PropTypes.array.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
  userFollowed: PropTypes.bool.isRequired,
  handleToggleBioEdit: PropTypes.func.isRequired,
  bioEditIsOpen: PropTypes.bool.isRequired,
  biography: PropTypes.string,
  biographyEdit: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleBioEdit: PropTypes.func.isRequired,
  userFound: PropTypes.bool.isRequired,
  handleAvatarUpload: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  avatarUrl: '',
  biography: '',
  biographyEdit: '',
};
