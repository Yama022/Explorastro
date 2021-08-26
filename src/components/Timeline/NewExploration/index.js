import React from 'react';

import PropTypes from 'prop-types';

import defaultExplo from 'src/assets/images/default-explo.jpg';

export default function NewExplo({ props }) {
  const { user } = props;
  return (
    <div className="explo">
      <div className="explo__organized">
        <img src={user.avatar_url} alt="avatar" />
        <div className="explo__organized--title">
          <h3>{user.username} (el narcisista) organise</h3>
          <h3 className="explo__organized__subtitle">"La Nuit des Etoiles"</h3>
          <p>Mardi 32 février 2021 à 20h45</p>
        </div>
      </div>

      <div className="explo__image--large">
        <img src={defaultExplo} alt="Add_image" />
      </div>

      <div className="explo__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}

NewExplo.propTypes = {
  props: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
