import React from 'react';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';
import * as locale from 'dayjs/locale/fr';
import { Link } from 'react-router-dom';

export default function Comment({ props }) {
  const {
    author: { username, avatar_url: avatarUrl, id: authorId },
    message: { fr: messageFr },
    comment: { content },
    date: { createdAt },
    exploration: { id: explorationId, name },
  } = props;
  return (
    <div className="comment">

      <div className="comment__title">
        <Link to={`/profile/${authorId}`}><img src={avatarUrl ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" /></Link>
        <h3><Link to={`/profile/${authorId}`}>{username}</Link> {messageFr} <Link to={`/exploration/${explorationId}`}>"{name}"</Link></h3>
      </div>

      <div className="comment__content">
        <p>
          {content}
        </p>
      </div>

      <div className="comment__date">
        <p>Le {dayjs(createdAt).locale(locale).format('dddd DD MMMM YYYY à HH:mm')}</p>
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
