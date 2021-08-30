import React from 'react';

import PropTypes from 'prop-types';

import defaultAvatar from 'src/assets/images/luffy.png';

export default function Description({ props }) {
  const {
    content,
    message: { fr: message },
    date: { locales: { fr: date } },
    user: { username },
  } = props;
  return (
    <div className="desc">
      <div className="desc__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> {username} {message}</h3>
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
  props: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
