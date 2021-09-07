/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil, ImCross, ImMan } from 'react-icons/im';
import { FaRegCalendarAlt, FaInfoCircle } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';

export default function EventCreated({
  name, id, onClick, date, max_participants, is_published, image_url,
}) {
  const handleOnClick = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette exploration?')) {
      onClick(id);
    }
  };
  return (
    <div className="createEvent__container__event-list animate__animated animate__fadeIn">
      <img src={image_url} alt={name} />
      <h2>{name}</h2>
      <div className="createEvent__container__event-list__content">
        <span>{date && <> <FaRegCalendarAlt /> {dayjs(date).format('DD/MM/YYYY')} </>}</span>
        <span className="createEvent__container__event-list__content__participants">{max_participants}<ImMan /></span>
      </div>
      <div className="published">
        <span>{is_published ? 'Publié' : 'Non publié'}</span>
      </div>
      <div className="createEvent__container__event-list__button">
        <Link className="button --secondary" to={`/exploration/${id}`}><FaInfoCircle /></Link>
        <Link className="button --secondary" to={`/formEvent/${id}`}><ImPencil /></Link>
        <button className="button is-danger" onClick={handleOnClick}><ImCross /></button>
      </div>
    </div>
  );
}

EventCreated.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  date: PropTypes.string,
  max_participants: PropTypes.number.isRequired,
  is_published: PropTypes.bool.isRequired,
  image_url: PropTypes.string.isRequired,
};

EventCreated.defaultProps = {
  date: dayjs().format('DD-MM-YY'),
};
