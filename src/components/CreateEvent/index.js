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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitCreate();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  if (eventCreatedLastID) {
    redirectForm = <Redirect to={`/formEvent/${eventCreatedLastID}`} />;
  }
  // useEffect(() => {
  //   removEventCreatedLastID();
  // }, [eventCreatedLastID]);

  return (
    <>
      {redirectForm}
      <div className="main">
        <h1 className="main__titlecreateEvent">J'organise</h1>
        <section className="container">
          <div className="createEvent">
            <form className="createEvent__form" onSubmit={handleSubmit}>
              <div className="createEvent__form__title">
                <h2>Créer une sortie</h2>
              </div>
              <label htmlFor="titleEvent" className="createEvent__form__name">Nom de la sortie :
                <input name="titleEvent" type="text" placeholder="Ex : Soirée nuit des étoiles" onChange={handleOnchange} />
              </label>
              <button className="button" type="submit">Créer</button>
            </form>

            { eventsCreated.map((element) => (

              <EventCreated onClick={onClickRemove} key={element.id} {...element} />
            ))}

          </div>
        </section>
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
