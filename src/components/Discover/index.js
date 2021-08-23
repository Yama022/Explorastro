/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
}) {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const tabSorties = explorationsFilter.length > 0 ? explorationsFilter : events;

  // events.forEach((element) => {
  //   element.name = 'Venez decouvrir le ciel samedi 14/08/2021 !! ça va être trop bien !!';
  //   element.title = 'sortie astro entre poto !!';
  // });
  return (
    <div className="map">
      <div className="map__list_events">
        {tabSorties.map((element, index) => (
          <div key={index} className="map__list_events__box">
            <img className="map__list_events__box__img" src={imageEvent} alt="" />
            <div className="map__list_events__box__content">
              <h2 className="map__list_events__box__content__h2">{element.name}</h2>
              <p>{element.description}</p>
              <button className="map__list_events__box__content__btn">Participer</button>
            </div>
          </div>
        ))}
      </div>
      <Filter onSubmit={onFormSubmit} onChange={onChangeInput} fieldZone={zone} />

      <Map coord={tabSorties} fieldZone={zone} />

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
};
