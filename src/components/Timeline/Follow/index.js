import React from 'react';

import { Link } from 'react-router-dom';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';

import { RiUserFollowLine } from 'react-icons/ri';

export default function Follow() {
  return (
    <div className="follow">
      <div className="follow__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> <Link to="/profile">John Doe</Link> à commencé à suivre <Link to="/profile">Baptiste</Link></h3>
      </div>

      <div className="follow__content">
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={defaultAvatar} alt="avatar" />
        {/* </Link> */}
        <span className="follow__content-buttonUpdate">
          <RiUserFollowLine />
        </span>
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={satoru} alt="avatar" />
        {/* </Link> */}

      </div>

      <div className="follow__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}
