import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import defaultExplo from 'src/assets/images/default-explo.jpg';

export default function NewExplo({ props }) {
  // const d = new Date();
  // const myDate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
  // console.log(myDate);

  const {
    user,
    date: { locales },
    exploration: { name, id },
    message,
  } = props;
  return (
    <Link to={`/exploration/${id}`}>
      <div className="explo">
        <div className="explo__organized">
          <img src={user.avatar_url} alt="avatar" />
          <div className="explo__organized--title">
            <h3><Link to={`/profile/${user.id}`}>{user.username}</Link> {message.fr}</h3>
            <h3 className="explo__organized__subtitle">"{name}"</h3>
            <p>{locales.fr}</p>
          </div>
        </div>

        <div className="explo__image--large">
          <img src={defaultExplo} alt="Add_image" />
        </div>

        <div className="explo__date">
          <p>Le Mardi 29 Août à 13h48</p>
        </div>
      </div>
    </Link>
  );
}

NewExplo.propTypes = {
  props: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  exploration: PropTypes.string.isRequired,
};
