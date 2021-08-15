import React from 'react';

export default function Filter() {
  return (
    <div className="map__filter">
      <h2 className="map__filter__h2">Décourir</h2>
      <form>
        <label className="label map__filter__label" htmlFor="ville">
          Par ville
          <div className="field has-addons">
            <div className="control width">
              <input className="input" type="text" id="ville" placeholder="Rechercher" />
            </div>
            <button type="submit" className="button is-primary">Rercher</button>
          </div>
        </label>
      </form>
      <form>
        <label className="label map__filter__label" htmlFor="ville">
          Par région / département
          <div className="field has-addons">
            <div className="select is-normal-test select is-fullwidth">
              <select>
                <option selected>Country</option>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
            <button type="submit" className="button is-primary">Rercher</button>
          </div>
        </label>
      </form>
      <form>
        <label className="label map__filter__label" htmlFor="km">Autour de moi
          <div className="field has-addons">
            <input type="range" id="km" name="cowbell" min="0" max="100" step="10" />
            <button type="submit" className="button is-primary">Rercher</button>
          </div>
        </label>
      </form>
    </div>
  );
}
