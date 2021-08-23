import React from 'react';
import PropTypes from 'prop-types';

import mascot from 'src/assets/images/mascot-rocket.svg';

export default function Follows({ users }) {
  return (
    <div className="follows">
      {users.map((user) => (
        <div className="follows__user" key={user.id}>
          <img src={mascot} className="follows__user__avatar" alt={`Avatar de ${user.username}`} />
          <span className="follows__user__username">{user.username}</span>
        </div>
      ))}
    </div>
  );
}

Follows.propTypes = {
  users: PropTypes.array.isRequired,
};
