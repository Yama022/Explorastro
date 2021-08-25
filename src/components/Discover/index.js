/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';
import Map from './Map';
import Filter from './Filter';
import imageEvent from './bg.png';

export default function Discover({
  onFormSubmit,
  events,
  explorationsFilter,
  onChangeInput,
  zone,
  getEvents,
  address,
}) {
  useEffect(() => {
    getEvents();
  }, []);

  const eventsList = explorationsFilter.length > 0 ? explorationsFilter : events;

  return (
    <div className="map">
      <div className="map__list_events">
        {eventsList.map((element, index) => (
          <div key={index} className="map__list_events__box">
            <img className="map__list_events__box__img" src={imageEvent} alt="" />
            <div className="map__list_events__box__content">
              <h2 className="map__list_events__box__content__h2">{element.name}</h2>
              <ul>
                <li className="description">{element.description}</li>
                <li className="dateEvent">Date de la sortie :<span>{element.date ? dayjs(element.date).format('DD/MM/YYYY  mm:ss') : ''}</span></li>
                <li className="nbrPlace">Nombre de place : <span>{element.max_participants}</span></li>
              </ul>
              <div className="button_style btn btn-pulse">Participer</div>
            </div>
          </div>
        ))}
      </div>
      <Filter onSubmit={onFormSubmit} onChange={onChangeInput} fieldZone={zone} />

      <Map eventsList={eventsList} fieldZone={zone} address={address} />

    </div>
  );
}

Discover.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  explorationsFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  zone: PropTypes.number.isRequired,
  getEvents: PropTypes.func.isRequired,
  address: PropTypes.array.isRequired,
};
