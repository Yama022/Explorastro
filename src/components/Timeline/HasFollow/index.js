import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';

import { RiUserFollowLine } from 'react-icons/ri';

// Must be changed by TERNAIRE on FOLLOW COMPONENT - RIP HasFollow !!
export default function HasFollow({ props }) {
  const {
    date: { locales },
    followed,
  } = props;
  return (
    <div className="follow">
      <div className="follow__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> <Link to={`/profile/${followed.id}`}>{followed.username}</Link> à commencé à vous suivre</h3>
      </div>

      <div className="follow__content">
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={defaultAvatar} alt="avatar" />
        {/* </Link> */}
        <span className="follow__content-buttonUpdate">
          <RiUserFollowLine />
        </span>
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={satoru} alt="avatar" />
        {/* </Link> */}

      </div>

      <div className="follow__date">
        <p>{locales.fr}</p>
      </div>
    </div>
  );
}

HasFollow.propTypes = {
  props: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  followed: PropTypes.object.isRequired,
};
