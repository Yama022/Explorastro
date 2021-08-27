import React from 'react';
import Loader from 'src/components/Loader';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function NewExplo({ props }) {
  // const d = new Date();
  // const myDate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
  // console.log(myDate);
  const {
    user,
    date: { locales },
    exploration: { name, id, image_url: imageUrl },
    message,
    _id: idProps,
  } = props;
  if (!idProps) {
    return <Loader />;
  }
  return (
    <div className="explo">
      <div className="explo__organized">
        <img src={user.avatar_url} alt="avatar" />
        <div className="explo__organized--title">
          <h3><Link to={`/profile/${user.id}`}>{user.username}</Link> {message.fr}</h3>
          <h3 className="explo__organized__subtitle">"{name}"</h3>
          <p>{locales.fr}</p>
        </div>
      </div>
      <Link to={`/exploration/${id}`}>
        <div className="explo__image--large">
          <img src={imageUrl} alt="Add_image" />
        </div>
      </Link>
      <div className="explo__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}

NewExplo.propTypes = {
  props: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  exploration: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
};
