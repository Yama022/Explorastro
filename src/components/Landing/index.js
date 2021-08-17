import React from 'react';

import mascotRocket from 'src/assets/images/mascot-rocket.svg';

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="main-title">Bienvenue chez nous</h1>
      <img src={mascotRocket} alt="Belle mascotte" />
    </div>
  );
}
