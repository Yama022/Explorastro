/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil, ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

import img from 'src/assets/images/nigthSky.jpg';

export default function EventCreated({ name, id, onClick }) {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div className="event__list">
      <img src={img} alt={img} />
      <h2 className="event__list__h2">{name}</h2>
      <div className="event__list__button">
        <div className="button_style btn btn-pulse"><Link className="btn_link" to={`/formEvent/${id}`}>Modifier <ImPencil /></Link></div>
        <div className="button_style btn btn-pulse" onClick={handleOnClick}>Supprimer <ImCross /></div>
      </div>
    </div>
  );
}

EventCreated.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,

};
