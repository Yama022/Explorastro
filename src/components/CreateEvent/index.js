import React from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import logo from 'src/assets/images/logo-explorastro.png';
import map from 'src/assets/images/France.png';

export default function CreateEvent() {
  return (
    <div className="container">
      <h1 className="main-title">Créer un événement</h1>
      <div className="createEvent">

        <div className="form__create">
          <form>
            <h4 className="form__create__title">Nom de l'événement</h4>

            <input className="input is-link is-small" type="text" />

            <h4 className="form__create__title">Descirption</h4>
            <input className="input is-link is-small" type="text" />

            <h4 className="form__create__title">Lieu</h4>
            <input className="input is-link is-small" type="text" />
            <h4 className="form__create__title">Date de l'événement</h4>
            <div className="form__create__title__calendar">
              <Calendar />
            </div>
            <h4 className="form__create__title">Nombre de personne(s) maximum
              <input type="number" />
            </h4>
            <div className="form__create__button">
              <button className="button is-link is-small" type="button">Créer</button>
              <button className="button is-danger is-small" type="button">Annuler</button>
            </div>
          </form>
        </div>

        <div className="form__right">
          <div className="form__map">
            <img src={map} alt={map} />
          </div>

          <div className="form__add__img">
            <div className="form__add__img__img">
              <img src={logo} alt={logo} />
            </div>
            <div className="form__add__img__import">
              <h1 className="form__add__img__import-title">Ajouter une image</h1>
              <div className="button-wrapper">
                <span className="label">
                  Ajouter une image
                </span>
                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Ajouter une image" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
