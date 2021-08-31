import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Following({ following }) {
  return (
    <div className="timeline-left__follow">
      <h3>Vos amis</h3>
      {following.map((follow) => {
        const {
          id, firstname, lastname, username, avatar_url: avatar,
        } = follow;
        return (
          <Link to={`/profile/${id}`}>
            <li>
              <img src={avatar ?? 'https://explorastro-s3.s3.amazonaws.com/default.jpg'} alt={username} />
              <p>{firstname} {lastname}</p>
            </li>
          </Link>
        );
      })}
    </div>
  );
}

Following.propTypes = {
  following: PropTypes.array.isRequired,
};
