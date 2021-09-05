import React from 'react';

import PropTypes from 'prop-types';

import { BsArrowRightShort } from 'react-icons/bs';

export default function Update({ props }) {
  const {
    user: { username, avatar_url: avatar },
    date: { locales: { fr } },
    lastAvatarURL,
  } = props;
  return (
    <div className="update">

      <div className="update__title">
        <img src={avatar ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" />
        <h3> {username} a mis à jour sa photo de profil</h3>
      </div>

      <div className="update__content">
        <img src={lastAvatarURL ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" />
        <span className="update__content-buttonUpdate">
          <BsArrowRightShort />
        </span>
        <img src={avatar ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" />
      </div>

      <div className="update__date">
        <p>Le {fr}</p>
      </div>
    </div>
  );
}

Update.propTypes = {
  props: PropTypes.object.isRequired,
  user: PropTypes.string,
  date: PropTypes.string,
  lastAvatarURL: PropTypes.string,
};

Update.defaultProps = {
  user: '',
  date: '',
  lastAvatarURL: '',
};
