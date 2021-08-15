/* eslint-disable react/button-has-type */
import React from 'react';
import Map from './Map';
import Filter from './Filter';
import coord from './data.json';
import imageEvent from './bg.png';

export default function Discover() {
  coord.forEach((element) => {
    element.desc = 'Venez decouvrir le ciel samedi 14/08/2021 !! ça va être trop bien !!';
    element.title = 'sortie astro entre poto !!';
  });
  return (
    <div className="map">
      <div className="map__list_events">
        {coord.map((x) => (
          <div className="map__list_events__box">
            <img className="map__list_events__box__img" src={imageEvent} alt="" />
            <div className="map__list_events__box__content">
              <h2 className="map__list_events__box__content__h2">{x.title} vers {x.name}</h2>
              <p>{x.desc}</p>
              <button className="map__list_events__box__content__btn">Participer</button>
            </div>
          </div>
        ))}
      </div>
      <Filter />
      <Map coord={coord} />
    </div>
  );
}
