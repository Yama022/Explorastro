import React from 'react';

import avatar from 'src/assets/images/mascot-rocket.svg';

export default function Profile() {
  return (
    <div className="profile">

      <h1 className="main-title">Profile</h1>

      <div className="profile__header">

        <div className="profile__header__avatar">
          <div className="profile__header__avatar__background" />
          <img src={avatar} alt="Avatar de l'utilisateur" />
        </div>

        <div className="profile__header__description">
          <div className="profile__header__description__top">
            <h2>Nom prénom</h2>
            <button type="button">Suivre</button>
          </div>
          <div className="profile__header__description__details">
            <div>
              <img src="" alt="Accomplissements de l'utilisateur" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt maxime
              alias, dolore soluta hic esse, odio quam provident praesentium, illum sunt vero
              consequuntur dignissimos? Dolore, iusto? Excepturi, velit facilis.
            </p>
          </div>
        </div>

      </div>

      <ul className="profile__nav">
        <li>Main</li>
        <li>Followers</li>
        <li>Followed</li>
      </ul>

      <div>
        <h2>test</h2>
      </div>

    </div>
  );
}
