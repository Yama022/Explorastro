import React from 'react';
import PropTypes from 'prop-types';

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
    <div className="map__filter">
      <h2 className="map__filter__h2">Découvrir</h2>
      <form onSubmit={handleSubmit}>
        <label className="label map__filter__label" htmlFor="ville">
          Par ville
          <div className="field has-addons">
            <div className="control width">
              <input className="input" type="text" id="ville" placeholder="Rechercher" />
            </div>
            <button type="submit" className="button is-primary">Rerchercher</button>
          </div>
        </label>
      </form>
      <form>
        <label className="label map__filter__label" htmlFor="ville">
          Par région / département
          <div className="field has-addons">
            <div className="select is-normal-test select is-fullwidth">
              <select defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>Choose a salutation ...</option>
                <option value="1">Lot</option>
                <option value="2">Tar</option>
                <option value="3">Haut garonne</option>
              </select>
            </div>
            <button type="submit" className="button is-primary">Rerchercher</button>
          </div>
        </label>
      </form>
      <form>
        <label className="label map__filter__label" htmlFor="km">Autour de moi sur {fieldZone} km
          <div className="field has-addons">
            <input type="range" id="km" name="cowbell" min="0" max="100" step="10" onChange={handleOnchange} />

          </div>
        </label>
      </form>
    </div>
  );
}

Filter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldZone: PropTypes.number.isRequired,
};
