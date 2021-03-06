import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BsArrowRightShort } from 'react-icons/bs';

export default function Update({ props }) {
  const {
    user: { id: userId, username, avatar_url: avatar },
    date: { locales: { fr } },
    lastAvatarURL,
  } = props;
  return (
    <div className="update">

      <div className="update__title">
        <Link to={`/profile/${userId}`}><img src={avatar ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" /></Link>
        <h3><Link to={`/profile/${userId}`}>{username}</Link> a mis à jour sa photo de profil</h3>
      </div>

      <div className="update__content">
        <Link to={`/profile/${userId}`}><img src={lastAvatarURL ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" /></Link>
        <span className="update__content-buttonUpdate">
          <BsArrowRightShort />
        </span>
        <Link to={`/profile/${userId}`}><img src={avatar ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" /></Link>
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
