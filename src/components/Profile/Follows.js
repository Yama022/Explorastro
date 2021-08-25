import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import mascot from 'src/assets/images/mascot-skating.svg';

export default function Follows({ users }) {
  return (
    <div className="profile__follows">
      {users.length > 0
        ? users.map((user) => (
          <Link to={`/profile/${user.id}`} className="profile__follows__user" key={user.id}>
            <img src={mascot} className="profile__follows__user__avatar" alt={`Avatar de ${user.username}`} />
            <span className="profile__follows__user__username">{user.username}</span>
          </Link>
        ))
        : <h2>Aucun utilisateur trouvé</h2>}
    </div>
  );
}

Follows.propTypes = {
  users: PropTypes.array.isRequired,
};
