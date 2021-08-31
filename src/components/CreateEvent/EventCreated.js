/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil, ImCross, ImMan } from 'react-icons/im';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';

export default function EventCreated({
  name, id, onClick, date, max_participants, is_published, image_url,
}) {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div className="createEvent__event-list">
      <img src={image_url} alt={name} />
      <h2>{name}</h2>
      <div className="createEvent__event-list__content">
        <span>{date ? `date : ${dayjs(date).format('DD-MM-YY')}` : 'date :'}</span>
        <span>{max_participants}<ImMan /></span>
      </div>
      <div className="published">
        <span>{is_published ? 'Publié' : 'Non publié'}</span>
      </div>
      <div className="createEvent__event-list__button">
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
