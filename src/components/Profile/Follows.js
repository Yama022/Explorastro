import React from 'react';

import mascot from 'src/assets/images/mascot-rocket.svg';

export default function Followers() {
  return (
    <div className="follows">
      <h2>Les personnes qui le suivent</h2>
      <div className="follows__detail">
        <img src={mascot} alt="Avatar d'un utilisateur" />
      </div>
    </div>
  );
}
