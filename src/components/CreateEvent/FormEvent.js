/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import { Link } from 'react-router-dom';
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

}) {
  console.log(titleEvent);
  useEffect(() => {
    getEventsCreated(eventCreated);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitUpdateEvent(eventCreated.id);
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  const handleOnClick = () => {
    OnClick();
  };
  // const onImageChange = () => {
  //   console.log('Je change image');
  //   onChangeImage(event);
  // };}

  const coordtest = () => {
    let controlGeocoder;
    if (coord) {
      controlGeocoder = (
        <ControlGeocoder
          coordLocation={getCoordLocation}
          coord={coord.coordinates}
        />
      );
    }
    else {
      controlGeocoder = (
        <ControlGeocoder coordLocation={getCoordLocation} />
      );
    }
    return controlGeocoder;
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="main-title">Créer un événement</h1>
        <div className="createEvent">

          <form className="form__create" onSubmit={handleSubmit}>
            <h4 className="form__create__title">Nom de l'événement</h4>

            <input
              className="input is-link is-small"
              name="titleEvent"
              type="text"
              value={titleEvent}
              onChange={handleOnchange}
              placeholder="Ex : Soirée nuit des étoiles"
            />

            <h4 className="form__create__title">Descirption</h4>
            <textarea
              name="descEvent"
              id="txtArea"
              rows="10"
              cols="70"
              onChange={handleOnchange}
              placeholder="Ex : J'organise une soirée pour la nuit des étoiles dans un endroit bien connu vers chez moi..."
              value={descEvent !== null ? descEvent : ''}
            />

            <h4 className="form__create__title">Date de l'événement</h4>
            <input
              className="input is-link is-small"
              type="datetime-local"
              name="dateEvent"
              value={dayjs(dateEvent).format('YYYY-MM-DDTHH:mm:ss')}
              // min={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
              onChange={handleOnchange}
            />

            {/* <div className="form__right"> */}
            <div className="form__map">
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
                {coordtest()}
              </MapContainer>
            </div>

            <h4 className="form__create__title">Nombre de personne(s) maximum
              <input
                value={maxRateEvent !== null ? maxRateEvent : 0}
                className="maxRateEvent"
                name="maxRateEvent"
                type="number"
                onChange={handleOnchange}
                placeholder="0"
              />
            </h4>

            <input type="checkbox" name="published" className="checkbox" id="checkbox" onClick={handleOnClick} value={published !== null ? published : false} />
            <label className="published" htmlFor="checkbox">{published ? 'Publié' : 'Non publié' } </label>

            <div className="form__add__img">

              <div className="form__add__img__import">
                <h4 className="form__add__img__title">Souhaitez-vous ajouter une image ? </h4>
                <div className="button-wrapper">

                  <input
                    // value={eventCreated.imageUrl}
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
              <button className="button_style btn btn-pulse" type="submit">Créer</button>
              <Link className="button_style btn btn-pulse" to="/exploration/create">Annuler </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

FormEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitUpdateEvent: PropTypes.func.isRequired,
  getCoordLocation: PropTypes.func.isRequired,
  // onImageChange: PropTypes.func.isRequired,
  eventCreated: PropTypes.object.isRequired,
  OnClick: PropTypes.func.isRequired,
  getEventsCreated: PropTypes.func.isRequired,
  titleEvent: PropTypes.string.isRequired,
  dateEvent: PropTypes.string,
  maxRateEvent: PropTypes.number,
  descEvent: PropTypes.string,
  published: PropTypes.bool,
  coord: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

FormEvent.defaultProps = {
  descEvent: '',
  dateEvent: '',
  maxRateEvent: 0,
  published: false,
  coord: [],
};
