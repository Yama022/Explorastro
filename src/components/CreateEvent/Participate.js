/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { ImMan } from 'react-icons/im';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';

export default function Participate({
  name, id, date, max_participants: maxParticipants, is_published: isPublished, image_url: imageUrl,
}) {
  return (
    <div className="createEvent__container__event-list">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div className="createEvent__container__event-list__content">
        <span>{date ? `date : ${dayjs(date).format('DD-MM-YY')}` : 'date :'}</span>
        <span className="createEvent__container__event-list__content__participants">{maxParticipants}<ImMan /></span>
      </div>
      <div className="published">
        <span>{isPublished ? 'Publié' : 'Non publié'}</span>
      </div>
      <div className="createEvent__container__event-list__button">
        <Link className="button --secondary" to={`/exploration/${id}`}>
          <span className="icon is-small">
            <FaInfoCircle />
          </span>
          <span>Informations</span>
        </Link>
      </div>
    </div>
  );
}

Participate.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string,
  max_participants: PropTypes.number.isRequired,
  is_published: PropTypes.bool.isRequired,
  image_url: PropTypes.string.isRequired,
};

Participate.defaultProps = {
  date: dayjs().format('DD-MM-YY'),
};
