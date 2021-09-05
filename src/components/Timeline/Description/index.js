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
      <div className="desc__title">
        <Link to={`/profile/${id}`}>
          <img src={avatar ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} alt="avatar" />
        </Link>
        <h3>
          <Link to={`/profile/${id}`}>
            {username}&nbsp;
          </Link>
          {message}
        </h3>
      </div>
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
