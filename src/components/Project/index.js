import React from 'react';
import defaultAvatar from 'src/assets/images/PhotoAvatar.jpg';

export default function Project() {
  return (
    <div className="project">
      <div className="project__container">
        <div className="project__container__header">
          <h2 className="main-title">Qui sommes nous?</h2>
          <div className="project__container__header__content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corporis mollitia.
            Magni consequuntur voluptate reprehenderit. Cupiditate unde numquam porro eaque corporis
            soluta eligendi doloremque iste magni. Possimus vero error eveniet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corporis mollitia.
            Magni consequuntur voluptate reprehenderit.Cupiditate unde numquam porro eaque corporis
            soluta eligendi doloremque iste magni.Possimus vero error eveniet.
          </div>
        </div>
        <div className="project__container__developper">
          <div className="project__container__developer__avatar">
            <img src={defaultAvatar} alt="Profil de Théo" />
          </div>
          <div className="project__container__developper__content">
            <h3 className="project__container__developper__content__name">Théo BIET</h3>
            <h4 className="project__container__developper__content__job">Développeur Web</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
