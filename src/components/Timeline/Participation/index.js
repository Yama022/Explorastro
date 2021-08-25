import React from 'react';

import defaultAvatar from 'src/assets/images/luffy.png';
import defaultExplo from 'src/assets/images/default-explo.jpg';

export default function JoinExplo() {
  return (
    <div className="explo">
      <div className="explo__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> Toto l'asticot participe à "La Nuit des Etoiles"</h3>
      </div>
      <div className="explo__organized">
        <div className="explo__organized--title">
          <h3 className="explo__organized__subtitle">"La Nuit des Etoiles"</h3>
          <p>Mardi 32 février 2021 à 20h45</p>
        </div>
      </div>

      <div className="explo__image">
        <img src={defaultExplo} alt="Add_image" />
      </div>

      <div className="explo__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}
