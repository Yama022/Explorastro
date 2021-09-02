import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';

const Information = ({
  information,
  getParticipate,
  notParticipate,
  loggedUserId,
}) => {
  const {
    author: { username },
    author_id: idAuthor,
    image_url: image,
    name,
    date,
    createdAt,
    id: explorationId,
    participants,
  } = information;
  const removePart = participants.some((part) => part.id === loggedUserId);
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
          {(!removePart)
            ? (

              <button
                onClick={() => {
                  getParticipate(explorationId);
                }}
                type="button"
                className="button --secondary"
              >
                <span className="icon is-small">
                  <AiOutlineUserAdd />
                </span>
                <span>Participer</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  notParticipate(explorationId);
                }}
                type="button"
                className="button --outlined"
              >
                <span className="icon is-small">
                  <BiCheck />
                </span>
                <span>Ne plus participer</span>
              </button>

            )}

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
  getParticipate: PropTypes.func.isRequired,
  notParticipate: PropTypes.func.isRequired,
  id: PropTypes.number,
  loggedUserId: PropTypes.number.isRequired,
};

Information.defaultProps = {
  information: {},
  image_url: '',
  name: '',
  id: 0,
};
