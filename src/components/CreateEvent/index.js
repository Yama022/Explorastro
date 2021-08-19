import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import FormEvent from './FormEvent';
import EventCreated from './EventCreated';

export default function CreateEvent({
  getEvent, onChangeInput, onFormSubmit, getCoordLocation, eventsCreated,
}) {
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div className="container">
      <div className="createEvent">
        <form className="form__create">
          <h4 className="form__create__title">Nom de l'événement à créer</h4>
          <input className="input is-link is-small" name="titleEvent" type="text" placeholder="Ex : Soirée nuit des étoiles" />
        </form>

      </div>
      <h1 className="main-title">Mes événements créés</h1>
      <div className="eventCreated">

        { eventsCreated.map((element) => (

          <EventCreated key={element.id} name={element.name} />
        ))}

      </div>
    </div>
  );
}

CreateEvent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  getCoordLocation: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
  eventsCreated: PropTypes.arrayOf(PropTypes.object).isRequired,
};
