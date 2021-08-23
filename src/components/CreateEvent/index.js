import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import EventCreated from './EventCreated';

export default function CreateEvent({
  getEvent, eventsCreated, onChangeInput,
  onFormSubmitCreate, onClickRemove, eventCreatedLastID, removEventCreatedLastID,
}) {
  let redirectForm;
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

  if (eventCreatedLastID) {
    redirectForm = <Redirect to={`/formEvent/${eventCreatedLastID}`} />;
    removEventCreatedLastID();
  }

  return (
    <>
      {redirectForm}
      <div className="container">


        <h1 className="main-title">Organiser une sortie</h1>
        <div className="createEvent">
          <form className="form__create" onSubmit={handleSubmit}>
            <h2 className="eventCreatedTitle">Créer une sortie</h2>
            <h4 className="form__create__title">Nom de l'événement à créer</h4>
            <input className="input is-link is-small" name="titleEvent" type="text" placeholder="Ex : Soirée nuit des étoiles" onChange={handleOnchange} />
            <button className="button is-link" type="submit">Créer</button>
          </form>

        </div>

        <h2 className="eventCreatedTitle">Modifier mes événements</h2>
        <div className="eventCreated">

          { eventsCreated.map((element) => (

            <EventCreated onClick={onClickRemove} key={element.id} {...element} />
          ))}

        </div>
      </div>
    </>
  );
}

CreateEvent.propTypes = {
  getEvent: PropTypes.func.isRequired,
  eventsCreated: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitCreate: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  eventCreatedLastID: PropTypes.number,
  removEventCreatedLastID: PropTypes.func.isRequired,
};

CreateEvent.defaultProps = {
  eventCreatedLastID: 0,

};
