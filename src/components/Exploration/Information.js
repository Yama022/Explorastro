import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';

const Information = ({ information }) => {
  const {
    author: { username },
    author_id: idAuthor,
    image_url: image,
    name,
    date,
    createdAt,
  } = information;

  return (

    <div className="Exploration__main__informations animate__animated animate__fadeIn">
      <div className="Exploration__main__informations__general">
        <div className="Exploration__main__informations__general__left">
          <div>
            <h2>{name} le {dayjs(date).format('DD-MM-YYYY à HH:mm')}</h2>
            <p>créé par
              <Link to={`/profile/${idAuthor}`}> {username} </Link> le {dayjs(createdAt).format('DD-MM-YYYY')}
            </p>
            <div className="Exploration__main__informations__general__left__title__stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <img
            src={image}
            alt={name}
            className="Exploration__main__informations__general__illustration"
          />
        </div>
        <div className="Exploration__main__informations__general__right">
          <h2>Informations</h2>
          <p>
            {information.description ? information.description : '' }
          </p>
          <button type="button" className="button --secondary">
            Participer
          </button>
        </div>
      </div>
    </div>

  );
};
export default Information;

Information.propTypes = {
  information: PropTypes.object.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
