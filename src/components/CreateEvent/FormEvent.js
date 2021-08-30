/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Map from './Map';

export default function FormEvent({
  eventToModify,
  onFormSubmitUpdateEvent,
  onClickModal,
  onChangeInput,
  onClick,
  modal,
  getCoordLocation,
  getEventData,
  id,
}) {
  useEffect(() => {
    getEventData(id);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitUpdateEvent(eventToModify.id);
    onClickModal();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    onClick();
  };

  if (!eventToModify.id) {
    return <Loader />;
  }

  // eslint-disable-next-line no-console
  console.log('eventToModify', eventToModify);
  return (
    <div className="exploration">
      {modal && (
        <Modal
          onClickModal={onClickModal}
          modal={modal}
          titleEvent={eventToModify.name}
        />
      )}
      <h1 className="main-title">Créer un événement</h1>
      <div className="createEventForm">
        <form className="createEventForm__form">
          <div className="right">
            <h4>Nom de l'événement</h4>
            <input
              className="input"
              name="name"
              type="text"
              value={eventToModify.name}
              onChange={handleOnchange}
              placeholder="Ex : Soirée nuit des étoiles"
            />
            <h4>Description</h4>
            <textarea
              className="textarea"
              name="description"
              id="txtArea"
              rows="10"
              cols="70"
              onChange={handleOnchange}
              placeholder="Ex : J'organise une soirée pour la nuit des étoiles dans un endroit bien connu vers chez moi..."
              value={eventToModify.description !== null ? eventToModify.description : ''}
            />
            <h4>Date de l'événement</h4>
            <input
              className="input"
              type="datetime-local"
              name="date"
              value={
                eventToModify.date
                  ? dayjs(eventToModify.date).format('YYYY-MM-DDTHH:mm')
                  : dayjs().format('YYYY-MM-DDTHH:mm')
              }
              // min={dayjs().format('YYYY-MM-DDTHH:mm:ss')}
              onChange={handleOnchange}
            />
            <h4>Nombre de personne(s) maximum</h4>
            <input
              value={eventToModify.max_participants}
              className="maxRateEvent"
              name="max_participants"
              type="number"
              onChange={handleOnchange}
              placeholder="0"
            />
            {eventToModify.is_published ? (
              <button className="button is-danger" onClick={handleOnClick}>
                Rendre privée
              </button>
            ) : (
              <button className="button is-link" onClick={handleOnClick}>
                Publier
              </button>
            )}
          </div>
          <div className="right"><Map getCoordLocation={getCoordLocation} coord={eventToModify.geog?.coordinates} /></div>
        </form>
        <div className="createEventForm__form__validate">
          <button className="button is-success" onClick={handleSubmit}>
            Sauvegarder
          </button>
          <Link className="button is-danger" to="/exploration/create">
            Annuler{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

FormEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitUpdateEvent: PropTypes.func.isRequired,
  getCoordLocation: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickModal: PropTypes.func.isRequired,
  modal: PropTypes.bool,
  eventToModify: PropTypes.object,
  getEventData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

FormEvent.defaultProps = {
  eventToModify: {},
  modal: false,
};
