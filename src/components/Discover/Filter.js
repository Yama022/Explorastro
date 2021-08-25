import React from 'react';
import PropTypes from 'prop-types';

import { FaSearchLocation } from 'react-icons/fa';

export default function Filter({ onSubmit, onChange, fieldZone }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target[0];
    onSubmit(value);
  };
  const handleOnchange = (event) => {
    // event.preventDefault();
    const { value } = event.target;
    const zone = parseInt(value, 10);
    onChange(zone);
  };
  return (
    <div className="discover__map__filter">
      <h2 className="discover__map__filter__title">Découvrir</h2>
      <form onSubmit={handleSubmit}>
        <label className="label discover__map__filter__label" htmlFor="ville">
          Par ville
          <div className="field">
            <div className="control">
              <input className="input discover__map__filter__label__input" type="text" id="ville" placeholder="Rechercher" />
            </div>
          </div>
        </label>
        <label className="label discover__map__filter__label" htmlFor="ville">
          Par département
          <div className="field">
            <div className="select discover__map__filter__label__input">
              <select defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>Choisir un département</option>
                <option value="1">Haut garonne</option>
                <option value="2">Ille-et-Vilaine</option>
                <option value="3">Lot</option>
                <option value="4">Tar</option>
              </select>
            </div>
          </div>
        </label>
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
