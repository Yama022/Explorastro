import React from 'react';
import PropTypes from 'prop-types';

import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import * as dayjs from 'dayjs';

export default function CreateEvent({ onChangeInput, onFormSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  const onImageChange = () => {
    console.log('Je change image');
    // onChangeImage(event);
  };

  return (
    <div className="container">
      <h1 className="main-title">Créer un événement</h1>
      <div className="createEvent">

        <div className="form__create">
          <form onSubmit={handleSubmit}>
            <h4 className="form__create__title">Nom de l'événement</h4>

            <input className="input is-link is-small" name="titleEvent" type="text" onChange={handleOnchange} placeholder="exemple : Rencontre nuit des étoiles" />

            <h4 className="form__create__title">Description</h4>
            <input className="input is-link is-small" name="descEvent" type="text" onChange={handleOnchange} placeholder="exemple : Rencontre nuit des étoiles" />

            <h4 className="form__create__title">Lieu</h4>
            <input className="input is-link is-small" name="locationEvent" type="text" onChange={handleOnchange} placeholder="exemple : 4 rue du Chemin, 60620 Betz" />
            <h4 className="form__create__title">Date de l'événement</h4>
            <input
              className="input is-link is-small"
              type="datetime-local"
              name="dateEvent"
              value={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
              min={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
              onChange={handleOnchange}
            />
            <h4 className="form__create__title">Nombre de personne(s) maximum
              <input name="maxRateEvent" type="number" onChange={handleOnchange} placeholder="0" />
            </h4>
            <div className="form__create__button">
              <button className="button is-link is-small" type="submit">Créer</button>
              <button className="button is-danger is-small" type="button">Annuler</button>
            </div>
          </form>
        </div>

        <div className="form__right">
          <div className="form__map">
            <MapContainer
          // Centering on the map of france
              center={[44.332192999999995, 1.309666999999996]}
              zoom={6.4}
              maxZoom={18}
              minZoom={3}
            >

              {/* Add layer dark map */}
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                name="tiles"
              />
              {/* Add Markers events astro on the map */}

            </MapContainer>
          </div>

          <div className="form__add__img">

            <div className="form__add__img__import">
              <div className="button-wrapper">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <input
                  accept="image/*"
                  onChange={onImageChange}
                  id="contained-button-file"
                  multiple
                  name="image"
                  type="file"
                  className="upload-box"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

CreateEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  // onImageChange: PropTypes.func.isRequired,
};
