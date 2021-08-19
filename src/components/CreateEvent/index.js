import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
// import logo from 'src/assets/images/placeholder_image.jpg';
import ControlGeocoder from './controlGeocoder';

export default function CreateEvent({ onChangeInput, onFormSubmit, getCoordLocation }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  // const onImageChange = () => {
  //   console.log('Je change image');
  //   onChangeImage(event);
  // };

  return (
    <div className="container">
      <h1 className="main-title">Créer un événement</h1>
      <div className="createEvent">

        <form className="form__create" onSubmit={handleSubmit}>
          <h4 className="form__create__title">Nom de l'événement</h4>

          <input className="input is-link is-small" name="titleEvent" type="text" onChange={handleOnchange} placeholder="Ex : Soirée nuit des étoiles" />

          <h4 className="form__create__title">Descirption</h4>
          <textarea
            name="descEvent"
            id="txtArea"
            rows="10"
            cols="70"
            onChange={handleOnchange}
            placeholder="Ex : J'organise une soirée pour la nuit des étoiles dans un endroit bien connu vers chez moi..."
          />

          <h4 className="form__create__title">Date de l'événement</h4>
          <input
            className="input is-link is-small"
            type="datetime-local"
            name="dateEvent"
            value={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
            min={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
            onChange={handleOnchange}
          />

          {/* <div className="form__right"> */}
          <div className="form__map">
            <MapContainer
          // Centering on the map of france
              center={[44.332192999999995, 1.309666999999996]}
              zoom={6}
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
              <ControlGeocoder coordLocation={getCoordLocation} />
            </MapContainer>
          </div>

          <h4 className="form__create__title">Nombre de personne(s) maximum
            <input className="maxRateEvent" name="maxRateEvent" type="number" onChange={handleOnchange} placeholder="0" />
          </h4>
          <div className="form__add__img">

            <div className="form__add__img__import">
              <h4 className="form__add__img__title">Souhaitez-vous ajouter une image ? </h4>
              <div className="button-wrapper">

                <input
                  accept="image/*"
                // onChange={onImageChange}
                  id="contained-button-file"
                  multiple
                  name="image"
                  type="file"
                  className="upload-box"
                />
              </div>
            </div>

          </div>
          <div className="form__create__button">
            <button className="button is-link " type="submit">Créer</button>
            <button className="button is-danger" type="button">Annuler</button>
          </div>
        </form>
      </div>
    </div>

  );
}

CreateEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  getCoordLocation: PropTypes.func.isRequired,
  // onImageChange: PropTypes.func.isRequired,
};
