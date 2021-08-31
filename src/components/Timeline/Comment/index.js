import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Comment({ props }) {
  const {
    author: { username, avatar_url: avatarUrl, id: authorId },
    message: { fr: messageFr },
    comment: { content },
    date: { fr: dateFr },
    exploration: { id: explorationId, name },
  } = props;
  return (
    <div className="comment">

      <div className="comment__title">
        <img src={avatarUrl ?? 'https://explorastro-s3.s3.amazonaws.com/default.jpg'} alt="avatar" />
        <h3><Link to={`/profile/${authorId}`}>{username}</Link> {messageFr} <Link to={`/exploration/${explorationId}`}>"{name}"</Link></h3>
      </div>

      <div className="comment__content">
        <p>
          {content}
        </p>
      </div>

      <div className="comment__date">
        <p>{dateFr}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  props: PropTypes.object,
  author: PropTypes.object,
  message: PropTypes.object,
  comment: PropTypes.object,
  date: PropTypes.object,
  exploration: PropTypes.object,
};

Comment.defaultProps = {
  props: {},
  author: {},
  message: {},
  comment: {},
  date: {},
  exploration: {},
};
