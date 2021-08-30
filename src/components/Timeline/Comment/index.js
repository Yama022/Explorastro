import React from 'react';
import PropTypes from 'prop-types';

import defaultAvatar from 'src/assets/images/luffy.png';

export default function Comment({ props }) {
  console.log('Je suis dans le composant Comment de Timeline', props);
  return (
    <div className="comment">

      <div className="comment__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3>Théo a commenté "La Nuit des Etoiles"</h3>
      </div>

      <div className="comment__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          enim assumenda dolorum suscipit voluptatibus, consectetur minima
          nobis itaque ab laboriosam nihil asperiores repudiandae
          doloremque eius optio soluta, pariatur incidunt obcaecati?
          Dolorem sint recusandae corrupti harum repellendus, vitae
          molestias temporibus sed.
        </p>
      </div>

      <div className="comment__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  props: PropTypes.object,
};

Comment.defaultProps = {
  props: {},
};
