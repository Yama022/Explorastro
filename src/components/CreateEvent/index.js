/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoTelescope } from 'react-icons/go';
import { AiOutlineWarning } from 'react-icons/ai';

import Loader from 'src/components/Loader';

import EventCreated from './EventCreated';
import Participate from './Participate';

export default function CreateEvent({
  getEvent,
  userEvents,
  onNewEventChange,
  onFormSubmitCreate,
  onClickRemove,
  participate,
  isLoading,
  fieldHasError,
  handleFieldHasError,
  newTitle,
}) {
  useEffect(() => {
    getEvent();
  }, []);
  const handleValidation = () => {
    const errors = {};
    let formIsValid = true;

    if (newTitle.length < 3) {
      errors.newTitle = 'Minimum 3 caractères';
      formIsValid = false;
    }

    if (newTitle.length > 60) {
      errors.newTitle = 'Maximum 60 caractères';
      formIsValid = false;
    }

    handleFieldHasError(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      onFormSubmitCreate();
    }
  };

  const handleOnchange = (event) => {
    onNewEventChange(event.target.value, event.target.name);
  };

  if (isLoading) {
    return <Loader />;
  }

  const authorID = userEvents[0]?.author_id;
  const participateFiltered = participate.filter(
    (event) => event.author_id !== authorID,
  );

  return (
    <div className="createEvent">
      <section className="createEvent__container">
        <h1 className="main-title">J'organise</h1>
        <div className="createEvent__container__flex animate__animated animate__fadeIn">
          <form className="createEvent__container__form" onSubmit={handleSubmit}>
            <div className="createEvent__container__form__title">
              <h2>Créer une sortie</h2>
            </div>
            <div className="createEvent__container__form__content">

              <div className="field">
                <label htmlFor="newTitle" className="createEvent__container__name">Nom de l'exploration</label>
                <div className="control has-icons-left has-icons-right">
                  <input className={fieldHasError.newTitle ? 'input is-danger' : 'input'} type="text" placeholder="Exemple: La Nuit des Étoiles" name="newTitle" value={newTitle} onChange={handleOnchange} />
                  <span className="icon is-small is-left">
                    <GoTelescope />
                  </span>
                  {fieldHasError.newTitle && (
                  <span className="icon is-small is-right">
                    <AiOutlineWarning />
                  </span>
                  )}
                </div>
                <p className="help is-danger">{fieldHasError.newTitle}</p>
              </div>
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
          {participateFiltered.map((element) => (
            <Participate key={element.id} {...element} />
          ))}
        </div>
      </section>
    </div>

  );
}

CreateEvent.propTypes = {
  getEvent: PropTypes.func.isRequired,
  userEvents: PropTypes.arrayOf(PropTypes.object),
  onNewEventChange: PropTypes.func.isRequired,
  onFormSubmitCreate: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  participate: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  fieldHasError: PropTypes.object,
  handleFieldHasError: PropTypes.func.isRequired,
  newTitle: PropTypes.string,
};

CreateEvent.defaultProps = {
  userEvents: [],
  participate: [],
  fieldHasError: {},
  newTitle: '',
};
