import React from 'react';

import mascot from 'src/assets/images/mascot-rocket.svg';

export default function Followers() {
  return (
    <div className="followers">
      <h2>Les personnes qui le suivent</h2>
      <div className="followers__detail">
        <img src={mascot} alt="Avatar d'un utilisateur" />
      </div>
    </div>
  );
}
