import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Follows({ users }) {
  return (
    <div className="profile__follows animate__animated animate__fadeIn">
      {users.length > 0
        ? users.map((user) => (
          <Link to={`/profile/${user.id}`} className="profile__follows__user" key={user.id}>
            <img src={user.avatar_url ?? 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg'} className="profile__follows__user__avatar" alt={`Avatar de ${user.username}`} />
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
