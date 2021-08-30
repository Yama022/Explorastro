/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Map from './Map';

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
  getEvent,
  eventCreatedLastID,
  removEventCreatedLastID,

}) {
  useEffect(() => {
    removEventCreatedLastID();
  }, [eventCreatedLastID]);

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getEventsCreated(eventCreated);
  }, [eventCreated]);

  if (!eventCreated) {
    return (<Loader />);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitUpdateEvent(eventCreated.id);
    OnClickModal();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  const handleOnClick = () => {
    OnClick();
  };

  return (
    <>
      {modal
      && (
      <Modal
        OnClickModal={OnClickModal}
        modal={modal}
        titleEvent={titleEvent}
      />
      )}

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

          <h4>Description</h4>
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
          <Map getCoordLocation={getCoordLocation} coord={coord} />
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

          <input
            type="checkbox"
            name="published"
            className="createEventForm__form__checkbox"
            onClick={handleOnClick}
            value={published}
            disabled={!(dateEvent != null || coord != null)}
          />
          <label className="published" htmlFor="checkbox">{published ? 'Publié' : 'Non publié' } {dateEvent != null || coord != null ? '' : '(Veuillez indiquer une date et une adresse !)'}  </label>

          <div className="createEventForm__form__add-img">
            <h4>Ajouter une image ? </h4>
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
  eventCreated: PropTypes.object,
  OnClick: PropTypes.func.isRequired,
  getEventsCreated: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
  titleEvent: PropTypes.string,
  dateEvent: PropTypes.string,
  maxRateEvent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  descEvent: PropTypes.string,
  published: PropTypes.bool,
  coord: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  OnClickModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  eventCreatedLastID: PropTypes.number,
  removEventCreatedLastID: PropTypes.func.isRequired,
};

FormEvent.defaultProps = {
  descEvent: '',
  dateEvent: '',
  maxRateEvent: 0,
  coord: [],
  eventCreated: {},
  titleEvent: '',
  published: false,
  eventCreatedLastID: 0,
};
