import React from 'react';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';
import follow from 'src/assets/images/follow.png';

export default function Follow() {
  return (
    <div className="follow">
      <div className="follow__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3>John Doe à commencé à suivre Baptiste</h3>
      </div>

      <div className="follow__content">
        <img src={defaultAvatar} alt="avatar" />
        <img src={follow} alt="follow" />
        <img src={satoru} alt="avatar" />
      </div>

      <div className="follow__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
};
