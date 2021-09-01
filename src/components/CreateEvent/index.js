import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EventCreated from './EventCreated';
import Participate from './Participate';

export default function CreateEvent({
  getEvent,
  userEvents,
  onChangeInput,
  onFormSubmitCreate,
  onClickRemove,
  participate,
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

  return (

    <div className="createEvent">
      <section className="createEvent__container">
        <h1 className="main-title">J'organise</h1>
        <div className="createEvent__container__flex">
          <form className="createEvent__container__form" onSubmit={handleSubmit}>
            <div className="createEvent__container__form__title">
              <h2>Créer une sortie</h2>
            </div>
            <div className="createEvent__container__form__content">
              <label htmlFor="newTitle" className="createEvent__container__name">
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
      <section className="createEvent__container">
        <h1 className="main-title">Je participe</h1>
        <div className="createEvent__container__flex">
          {participate.map((element) => (
            <Participate onClick={onClickRemove} key={element.id} {...element} />
          ))}
        </div>
      </section>
    </div>

  );
}

CreateEvent.propTypes = {
  getEvent: PropTypes.func.isRequired,
  userEvents: PropTypes.arrayOf(PropTypes.object),
  onChangeInput: PropTypes.func.isRequired,
  onFormSubmitCreate: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  participate: PropTypes.arrayOf(PropTypes.object),
};

CreateEvent.defaultProps = {
  userEvents: [],
  participate: [],
};
