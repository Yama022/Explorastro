/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import Map from './Map';
import Filter from './Filter';
import imageEvent from './bg.png';

export default function Discover({
  onFormSubmit,
  data,
  explorations,
}) {
  const tabSorties = explorations.length > 0 ? explorations : data;

  data.forEach((element) => {
    element.desc = 'Venez decouvrir le ciel samedi 14/08/2021 !! ça va être trop bien !!';
    element.title = 'sortie astro entre poto !!';
  });
  return (
    <div className="map">
      <div className="map__list_events">
        {tabSorties.map((element, index) => (
          <div key={index} className="map__list_events__box">
            <img className="map__list_events__box__img" src={imageEvent} alt="" />
            <div className="map__list_events__box__content">
              <h2 className="map__list_events__box__content__h2">{element.title} vers {element.name}</h2>
              <p>{element.desc}</p>
              <button className="map__list_events__box__content__btn">Participer</button>
            </div>
          </div>
        ))}
      </div>
      <Filter onSubmit={onFormSubmit} />

      <Map coord={tabSorties} />;

    </div>
  );
}

Discover.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  explorations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
