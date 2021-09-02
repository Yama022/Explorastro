import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function JoinExplo({ props }) {
  const {
    user: { id: userId, username, avatar_url: avatarURL },
    exploration: {
      id: explorationId, name, image_url: imageURL,
    },
    date: { fr: dateFr },
    message: { fr: messageFR },
    exploration_date: { locales: { fr: dateExploration } },
  } = props;
  return (
    <div className="explo">
      <div className="explo__title">
        <Link to={`/username/${userId}`}><img src={avatarURL ?? 'https://explorastro-s3.s3.amazonaws.com/default.jpg'} alt="avatar" /></Link>
        <h3> <Link to={`/username/${userId}`}>{username}</Link> {messageFR} <Link to={`/exploration/${explorationId}`}>"{name}"</Link></h3>
      </div>
      <div className="explo__organized">
        <div className="explo__organized--title">
          <h3 className="explo__organized__subtitle"><Link to={`/exploration/${explorationId}`}>"{name}"</Link></h3>
          <p>{dateExploration}</p>
        </div>
      </div>

      <div className="explo__image">
        <Link to={`/exploration/${explorationId}`}>
          <img src={imageURL} alt="Add_image" />
        </Link>
      </div>

      <div className="explo__date">
        <p>{dateFr}</p>
      </div>
    </div>
  );
}

JoinExplo.propTypes = {
  props: PropTypes.object,
  user: PropTypes.object,
  exploration: PropTypes.object,
  message: PropTypes.object,
  date: PropTypes.object,
  exploration_date: PropTypes.string,
};

JoinExplo.defaultProps = {
  props: {},
  user: {},
  exploration: {},
  message: {},
  date: {},
  exploration_date: '',
};
