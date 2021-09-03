import React from 'react';
import PropTypes from 'prop-types';

import { FaSearchLocation, FaSearch } from 'react-icons/fa';

export default function Filter({ onSubmit, onChange, fieldZone }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target[0];

    // Récupération des coordonées de l'utilisateur
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        onSubmit({
          name: value,
          latitude,
          longitude,
          radius: fieldZone,
        });
      });
    }
  };
  const handleOnchange = (event) => {
    const { value } = event.target;
    const zone = parseInt(value, 10);
    onChange(zone);
  };
  return (
    <div className="discover__map__filter">
      <h2 className="discover__map__filter__title">Découvrir</h2>
      <form onSubmit={handleSubmit}>

        <div className="field discover__map__filter__exploration">
          <div className="control has-icons-left">
            <input className="input discover__map__filter__label__input" type="text" id="ville" placeholder="Nom de l'exploration" />
            <span className="icon is-small is-left"> <FaSearch /> </span>
          </div>
        </div>

        <label className="label discover__map__filter__label" htmlFor="km">Autour de moi sur {fieldZone} km
          <div className="field has-addons">
            <input type="range" id="km" name="distance" min="10" max="400" step="10" onChange={handleOnchange} />
          </div>
        </label>

        <button type="submit" className="button --secondary">
          <span className="icon"><FaSearchLocation /></span>
          <span>Rechercher</span>
        </button>

      </form>
    </div>
  );
}

Filter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldZone: PropTypes.number.isRequired,
};
