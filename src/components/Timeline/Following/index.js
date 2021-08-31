import React from 'react';

import PropTypes from 'prop-types';

export default function Following({ following }) {
  return (
    <div className="timeline-left__follow">
      <h3>Personnes suivies</h3>
      {following.map((follow) => {
        const { firstname, lastname, avatar_url: avatar } = follow;
        return (
          <ul>
            <img src={avatar ?? 'https://explorastro-s3.s3.amazonaws.com/default.jpg'} alt="" />
            <p>{firstname} {lastname}</p>

          </ul>
        );
      })}
    </div>
  );
}

Following.propTypes = {
  following: PropTypes.array.isRequired,
};
