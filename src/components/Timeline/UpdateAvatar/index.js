import React from 'react';

import PropTypes from 'prop-types';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';

import { BsArrowRightShort } from 'react-icons/bs';

export default function Update({ props }) {
  console.log('Update de Timeline', props);
  const {
    user,
    date: { locales },
  } = props;
  return (
    <div className="update">

      <div className="update__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> {user.username} à mit à jour sa photo de profil</h3>
      </div>

      <div className="update__content">
        <img src={defaultAvatar} alt="avatar" />
        <span className="update__content-buttonUpdate">
          <BsArrowRightShort />
        </span>
        <img src={satoru} alt="avatar" />
      </div>

      <div className="update__date">
        <p>Le {locales.fr}</p>
      </div>
    </div>
  );
}

Update.propTypes = {
  props: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
