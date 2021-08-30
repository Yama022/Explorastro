import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

const Participant = ({ participants }) => {
  console.log(participants);
  const {
    max_participants: participantsMax,
    participants: participantsName,
    author: { username },
  } = participants;
  if (!participants.id) {
    return (<Loader />);
  }
  return (
    <div className="Exploration__main__participants">
      <h3>Participants max : {participantsMax}</h3>
      <ul className="Exploration__main__participants__list">
        <li className="Exploration__main__participants__list__item">
          <span className="icon">
            <img
              src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
              alt=""
            />
          </span>
          <span>{username}</span>
          <li>{participantsName}</li>
          <span>
            <button type="button" className="button --secondary">
              i
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

Participant.propTypes = {
  participants: PropTypes.object.isRequired,
};

export default Participant;
