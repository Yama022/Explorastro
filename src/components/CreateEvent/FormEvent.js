/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import { Link } from 'react-router-dom';
import mascotRocket from 'src/assets/images/mascot-rocket.svg';
import ControlGeocoder from './controlGeocoder';

export default function FormEvent({
  onChangeInput,
  onFormSubmitUpdateEvent,
  getCoordLocation,
  eventCreated,
  OnClick,
  getEventsCreated,
  titleEvent,
  dateEvent,
  maxRateEvent,
  descEvent,
  published,
  coord,
  OnClickModal,
  modal,
  imageUrl,
  saveAddress,

}) {
  useEffect(() => {
    getEventsCreated(eventCreated);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitUpdateEvent(eventCreated.id);
    OnClickModal();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  const handleOnClickModal = () => {
    OnClickModal();
  };

  const handleOnClick = () => {
    OnClick();
    console.log(published);
  };

  const coordTest = () => {
    let controlGeocoder;
    if (coord) {
      controlGeocoder = (
        <ControlGeocoder
          coordLocation={getCoordLocation}
          coord={coord.coordinates}
          // saveAddress={saveAddress}
        />
      );
    }
    else {
      controlGeocoder = (
        <ControlGeocoder
          coordLocation={getCoordLocation}
          // saveAddress={saveAddress}
        />
      );
    }
    return controlGeocoder;
  };

  return (
    <>
      {/* Modal */}
      <div className={modal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Exploration : {titleEvent}</p>
            <button className="delete" aria-label="close" onClick={handleOnClickModal} />
          </header>
          <section className="modal-card-body">
            <img className="modal-card-body-mascotte" src={mascotRocket} alt="Belle mascotte" />
            <p>"Vos modifications ont bien été pris en compte"</p>
          </section>
          <footer className="modal-card-foot">
            <Link className="button--modal" to="/exploration/create" onClick={handleOnClickModal}>Fermer </Link>
          </footer>
        </div>
      </div>
      {/* fin Modal */}

      <Header />

      <h1 className="main-title">Créer un événement</h1>
      <div className="createEventForm">

        <form className="createEventForm__form" onSubmit={handleSubmit}>
          <h4>Nom de l'événement</h4>

          <input
            className="input is-link is-small"
            name="titleEvent"
            type="text"
            value={titleEvent}
            onChange={handleOnchange}
            placeholder="Ex : Soirée nuit des étoiles"
          />

          <h4>Descirption</h4>
          <textarea
            name="descEvent"
            id="txtArea"
            rows="10"
            cols="70"
            onChange={handleOnchange}
            placeholder="Ex : J'organise une soirée pour la nuit des étoiles dans un endroit bien connu vers chez moi..."
            value={descEvent !== null ? descEvent : ''}
          />

          <h4>Date de l'événement</h4>
          <input
            className="input is-link is-small"
            type="datetime-local"
            name="dateEvent"
            value={dateEvent ? dayjs(dateEvent).format('YYYY-MM-DDTHH:mm:ss') : dayjs().format('YYYY-MM-DDTHH:mm:ss')}
              // min={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
            onChange={handleOnchange}
          />

          <div className="createEventForm__form__map">
            <MapContainer
          // Centering on the map of france
              center={[44.840291, 2.109375]}
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
              {coordTest()}
            </MapContainer>
          </div>

          <h4>Nombre de personne(s) maximum
            <input
              value={maxRateEvent !== null ? maxRateEvent.toString() : 0}
              className="maxRateEvent"
              name="maxRateEvent"
              type="number"
              onChange={handleOnchange}
              placeholder="0"
            />
          </h4>

          <input type="checkbox" name="published" className="checkbox" onClick={handleOnClick} value={published} />
          <label className="published" htmlFor="checkbox">{published ? 'Publié' : 'Non publié' } </label>

          <div className="form__add__img">

            <div className="createEventForm__form-add-img">
              <h4>Ajouter une image ? </h4>
              <div className="button-wrapper">

                <input
                  value={imageUrl !== 'undefined' ? imageUrl : 'src/assets/images/nigthSky.jpg'}
                    // accept="image/*"
                  onChange={handleOnchange}
                  id="contained-button-file"
                  multiple
                  name="imageUrl"
                  type="file"
                  className="upload-box"
                />
              </div>
            </div>

          </div>
          <div className="createEventForm__form__validate">
            <button className="button" type="submit">Modifier</button>
            <Link className="button" to="/exploration/create">Annuler </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

FormEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitUpdateEvent: PropTypes.func.isRequired,
  getCoordLocation: PropTypes.func.isRequired,
  eventCreated: PropTypes.object.isRequired,
  OnClick: PropTypes.func.isRequired,
  getEventsCreated: PropTypes.func.isRequired,
  titleEvent: PropTypes.string.isRequired,
  dateEvent: PropTypes.string,
  maxRateEvent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  descEvent: PropTypes.string,
  published: PropTypes.bool.isRequired,
  coord: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  OnClickModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  saveAddress: PropTypes.func.isRequired,
};

FormEvent.defaultProps = {
  descEvent: '',
  dateEvent: '',
  maxRateEvent: 0,
  coord: [],
};
