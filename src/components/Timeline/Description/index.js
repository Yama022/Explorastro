import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function Description({ props }) {
  const {
    content,
    message: { fr: message },
    date: { locales: { fr: date } },
    user: { username, avatar_url: avatar, id },
  } = props;
  return (
    <div className="desc">
      <Link to={`/profile/${id}`}>
        <div className="desc__title">
          <img src={avatar ?? 'https://explorastro-s3.s3.amazonaws.com/default.jpg'} alt="avatar" />
          <h3>
            {username} {message}
          </h3>
        </div>
      </Link>
      <div className="desc__content">
        <p>
          {content}
        </p>
      </div>

      <div className="desc__date">
        <p>Le {date}</p>
      </div>
    </div>
  );
}

Description.propTypes = {
  props: PropTypes.object,
  content: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.string,
};

Description.defaultProps = {
  props: {},
  content: '',
  message: '',
  date: '',
  user: '',
};
