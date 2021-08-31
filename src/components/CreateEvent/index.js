import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EventCreated from './EventCreated';
import Loader from '../Loader';

export default function CreateEvent({
  getEvent, userEvents, onChangeInput,
  onFormSubmitCreate, onClickRemove,
}) {
  useEffect(async () => {
    getEvent();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmitCreate();
  };

  const handleOnchange = (event) => {
    onChangeInput(event.target.value, event.target.name);
  };

  if (userEvents.length === 0) {
    return (
      <Loader />
    );
  }

  return (
    <div className="main">
      <h1 className="main-title">J'organise</h1>
      <section className="container">
        <div className="createEvent">
          <form className="createEvent__form" onSubmit={handleSubmit}>
            <div className="createEvent__form__title">
              <h2>Créer une sortie</h2>
            </div>
            <div className="createEvent__form__content">
              <label htmlFor="newTitle" className="createEvent__form__content__name">
                <input className="input" name="newTitle" type="text" placeholder="Ex : Soirée nuit des étoiles" onChange={handleOnchange} />
              </label>
              <button className="button --secondary" type="submit">Créer</button>
            </div>
          </form>
          {userEvents.map((element) => (
            <EventCreated onClick={onClickRemove} key={element.id} {...element} />
          ))}
        </div>
      </section>
      <h1 className="main-title">Je participe</h1>
    </div>
  );
}

CreateEvent.propTypes = {
  getEvent: PropTypes.func.isRequired,
  userEvents: PropTypes.arrayOf(PropTypes.object),
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitCreate: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

CreateEvent.defaultProps = {
  userEvents: [],
};
