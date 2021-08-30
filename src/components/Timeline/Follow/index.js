import React from 'react';
import Loader from 'src/components/Loader';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { RiUserFollowLine } from 'react-icons/ri';

export default function Follow({ props }) {
  const {
    _id: idFollow,
    date: { locales },
    follower: { username: usernameFollower, avatar_url: avatarFollower, id: idFollower },
    followed: { username: usernameFollowed, avatar_url: avatarFollowed, id: idFollowed },
    message,
  } = props;
  if (!idFollow) {
    return <Loader />;
  }
  return (
    <div className="follow">
      <div className="follow__title">
        {/* Avatar url TO ADD ! */}
        <img src={avatarFollower} alt="avatar" />
        <h3> <Link to={`/profile/${idFollower}`}>{usernameFollower}</Link> {message.fr} <Link to={`/profile/${idFollowed}`}>{usernameFollowed}</Link></h3>
      </div>

      <div className="follow__content">
        <Link to={`/profile/${idFollower}`} className="follow__content__image">
          <img src={avatarFollower} alt="avatar" />
        </Link>
        <span className="follow__content-buttonUpdate">
          <RiUserFollowLine />
        </span>
        <Link to={`/profile/${idFollowed}`} className="follow__content__image">
          <img src={avatarFollowed} alt="avatar" />
        </Link>

      </div>

      <div className="follow__date">
        <p>{locales.fr}</p>
      </div>
    </div>
  );
}

Follow.propTypes = {
  props: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  follower: PropTypes.object.isRequired,
  followed: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  _id: PropTypes.number.isRequired,
  avatar_url: PropTypes.string.isRequired,
};
