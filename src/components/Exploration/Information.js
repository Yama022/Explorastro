import React from 'react';
import { Link } from 'react-router-dom';
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
    getParticipate,
  } = information;

  console.log(information);

  const handleOnClickParticipate = () => {
    getParticipate();
  };
  return (

    <div className="Exploration__main__informations animate__animated animate__fadeIn">
      <div className="Exploration__main__informations__general">
        <div className="Exploration__main__informations__general__left">
          <div>
            <h2>{name}</h2>
            {date && (
              <p>
                Exploration le {dayjs(date).format('DD-MM-YYYY à HH:mm')}
              </p>
            )}
            <p>
              Créée par
              <Link to={`/profile/${idAuthor}`}> {username} </Link> le {dayjs(createdAt).format('DD-MM-YYYY')}
            </p>
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
          <button onClick={handleOnClickParticipate} type="button" className="button --secondary">
            Participer
          </button>
        </div>
      </div>
    </div>

  );
};
export default Information;

Information.propTypes = {
  information: PropTypes.object,
  image_url: PropTypes.string,
  name: PropTypes.string,
  getParticipate: PropTypes.func,
};

Information.defaultProps = {
  information: {},
  image_url: '',
  name: '',
  getParticipate: {},
};
