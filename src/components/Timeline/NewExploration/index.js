import React from 'react';
import Loader from 'src/components/Loader';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function NewExplo({ props }) {
  const {
    user: { avatar_url: avatar, id: userId, username },
    date: { locales: { fr: date } },
    exploration: { name, id, image_url: imageUrl },
    message,
    _id: idProps,
    exploration_date: { locales: { fr: dateExploration } },
  } = props;
  if (!idProps) {
    return <Loader />;
  }
  return (
    <div className="explo">
      <div className="explo__organized">
        <img src={avatar ?? 'https://explorastro-s3.s3.amazonaws.com/default.jpg'} alt="avatar" />
        <div className="explo__organized--title">
          <h3><Link to={`/profile/${userId}`}>{username}</Link> {message.fr}</h3>
          <h3 className="explo__organized__subtitle">"{name}"</h3>
          <p>{dateExploration ?? date}</p>
        </div>
      </div>
      <Link to={`/exploration/${id}`}>
        <div className="explo__image--large">
          <img src={imageUrl} alt="Add_image" />
        </div>
      </Link>
      <div className="explo__date">
        <p>Le {date}</p>
      </div>
    </div>
  );
}

NewExplo.propTypes = {
  props: PropTypes.object,
  user: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  exploration: PropTypes.string,
  _id: PropTypes.number,
  exploration_date: PropTypes.string,
};

NewExplo.defaultProps = {
  props: {},
  user: '',
  message: '',
  date: '',
  exploration: '',
  _id: 0,
  exploration_date: '',
};
