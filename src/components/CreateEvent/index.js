import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import FormEvent from './FormEvent';
import EventCreated from './EventCreated';

export default function CreateEvent({
  getEvent, eventsCreated, onChangeInput,
  onFormSubmitCreate,
}) {
  useEffect(() => {
    getEvent();
  }, [eventsCreated]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitCreate();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };
  return (
    <div className="container">
      <div className="createEvent">
        <form className="form__create" onSubmit={handleSubmit}>
          <h4 className="form__create__title">Nom de l'événement à créer</h4>
          <input className="input is-link is-small" name="titleEvent" type="text" placeholder="Ex : Soirée nuit des étoiles" onChange={handleOnchange} />
          <button className="button is-link " type="submit">Créer</button>
        </form>

      </div>
      <h1 className="main-title">Mes événements créés</h1>
      <div className="eventCreated">

        { eventsCreated.map((element) => (

          <EventCreated key={element.id} {...element} />
        ))}

      </div>
    </div>
  );
}

CreateEvent.propTypes = {
  getEvent: PropTypes.func.isRequired,
  eventsCreated: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitCreate: PropTypes.func.isRequired,
};
