/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import { Link } from 'react-router-dom';

import { RiImageEditLine } from 'react-icons/ri';

import Modal from './Modal';
import Map from './Map';

export default function FormEvent({
  eventToModify,
  onFormSubmitUpdateEvent,
  onClickModal,
  onChangeInput,
  togglePublished,
  modal,
  getCoordLocation,
  getEventData,
  id,
  uploadIllustration,
}) {
  useEffect(() => {
    getEventData(id);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitUpdateEvent(eventToModify.id);
    onClickModal();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  const handleOnClick = () => {
    togglePublished();
  };

  const handleIllustrationUpload = (event) => {
    uploadIllustration(event.target.files[0], id);
  };

  if (!eventToModify.id) {
    return <Loader />;
  }

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
      <div className="createEventForm ">
        <form className="createEventForm__form ">
          <div className="left animate__animated animate__fadeInLeft">
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
            <div className="left__range-input field has-addons">
              <input type="range" id="km" name="max_participants" min="2" max="100" step="1" onChange={handleOnchange} value={eventToModify.max_participants} />
              <span className="left__participant-nbr">{eventToModify.max_participants}</span>
            </div>
            <div className="left__bottom">
              <div className="left__bottom__publish-switch">
                <h4>Publier l'exploration</h4>
                <label className="left__bottom__publish-switch__switch">
                  <input type="checkbox" onChange={handleOnClick} checked={eventToModify.is_published} />
                  <span className="left__bottom__publish-switch__slider round" />
                </label>
              </div>
              <div className="left__bottom__upload">
                {/* <h4>Ajouter une illustration</h4> */}
                <div className="left__bottom__upload__edit">
                  <label htmlFor="upload-illustration">
                    <RiImageEditLine className="left__bottom__upload__edit__icon" />
                    <input
                      type="file"
                      id="upload-illustration"
                      accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                      onChange={(event) => {
                        handleIllustrationUpload(event);
                      }}
                    />
                  </label>
                </div>
                <div className="left__bottom__upload__img">
                  <img
                    src={eventToModify.image_url}
                    alt="Illustration de la sortie"
                    className="left__bottom__upload__img__elem"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right animate__animated animate__fadeInRight"><Map getCoordLocation={getCoordLocation} coord={eventToModify.geog?.coordinates.reverse()} /></div>
        </form>
        <div className="createEventForm__form__validate">
          <Link className="button --secondary" to="/exploration/create">
            Annuler
          </Link>
          <button className="button --outlined" onClick={handleSubmit}>
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}

FormEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitUpdateEvent: PropTypes.func.isRequired,
  getCoordLocation: PropTypes.func.isRequired,
  togglePublished: PropTypes.func.isRequired,
  onClickModal: PropTypes.func.isRequired,
  modal: PropTypes.bool,
  eventToModify: PropTypes.object,
  getEventData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  uploadIllustration: PropTypes.func.isRequired,
};

FormEvent.defaultProps = {
  eventToModify: {},
  modal: false,
};
