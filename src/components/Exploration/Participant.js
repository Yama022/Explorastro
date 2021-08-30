import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

import { Link } from 'react-router-dom';

const Participant = ({ participants }) => {
  const {
    max_participants: participantsMax,
    participants: participantsName,
  } = participants;
  if (!participants.id) {
    return (<Loader />);
  }
  return (
    <div className="Exploration__main__participants">
      <h3>Participants max : {participantsMax}</h3>
      <ul className="Exploration__main__participants__list">
        {participantsName.map((participant) => (
          <li key={participant.id}>
            <span className="icon">
              <img
                src={participant.avatar_url}
                alt="Avatar du participant"
              />
            </span>
            <span>{participant.username}</span>
            <span>
              <Link className="button --secondary" to={`/profile/${participant.id}`}>
                i
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Participant.propTypes = {
  participants: PropTypes.object.isRequired,
};

export default Participant;
