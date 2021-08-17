import React from 'react';

import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import logo from 'src/assets/images/placeholder_image.jpg';

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
            <MapContainer
          // Centering on the map of france
              center={[46.232192999999995, 2.209666999999996]}
              zoom={6.4}
              maxZoom={18}
              minZoom={3}
            >

              {/* Add layer dark map */}
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                name="tiles"
              />
              {/* Add Markers events astro on the map */}

            </MapContainer>
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
