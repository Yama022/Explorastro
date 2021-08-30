import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function JoinExplo({ props }) {
  console.log('Participation', props);
  const {
    user: { id: userId, username, avatar_url: avatarURL },
    exploration: {
      id: explorationId, name, image_url: imageURL, date: { fr: explorationDateFr },
    },
    date: { fr: dateFr },
    message: { fr: messageFR },
  } = props;
  return (
    <div className="explo">
      <div className="explo__title">
        <img src={avatarURL} alt="avatar" />
        <h3> <Link to={`/username/${userId}`}>{username}</Link> {messageFR} à <Link to={`/exploration/${explorationId}`}>"{name}"</Link></h3>
      </div>
      <div className="explo__organized">
        <div className="explo__organized--title">
          <h3 className="explo__organized__subtitle"><Link to={`/exploration/${explorationId}`}>"La Nuit des Etoiles"</Link></h3>
          <p>{explorationDateFr}</p>
        </div>
      </div>

      <div className="explo__image">
        <img src={imageURL} alt="Add_image" />
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
};

JoinExplo.defaultProps = {
  props: {},
  user: {},
  exploration: {},
  message: {},
  date: {},
};
