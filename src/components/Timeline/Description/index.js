import React from 'react';

import defaultAvatar from 'src/assets/images/luffy.png';

export default function Description() {
  return (
    <div className="desc">
      <div className="desc__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> Toto l'asticot a mit à jour sa bio</h3>
      </div>
      <div className="desc__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          enim assumenda dolorum suscipit voluptatibus, consectetur minima
          nobis itaque ab laboriosam nihil asperiores repudiandae
          doloremque eius optio soluta, pariatur incidunt obcaecati?
          Dolorem sint recusandae corrupti harum repellendus, vitae
          molestias temporibus sed.
        </p>
      </div>

      <div className="desc__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}
