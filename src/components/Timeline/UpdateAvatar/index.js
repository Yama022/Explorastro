import React from 'react';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';

import { BiRightArrow } from 'react-icons/bi';

export default function Update() {
  return (
    <div className="update">

      <div className="update__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> John Doe à mit à jour sa photo de profil</h3>
      </div>

      <div className="update__content">
        <img src={defaultAvatar} alt="avatar" />
        <span className="update__content-buttonUpdate">
          <BiRightArrow />
        </span>
        <img src={satoru} alt="avatar" />
      </div>

      <div className="update__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}
