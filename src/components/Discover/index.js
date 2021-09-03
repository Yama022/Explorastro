/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Map from './Map';
import Filter from './Filter';
import 'leaflet-control-geocoder/dist/Control.Geocoder';

export default function Discover({
  onFormSubmit,
  events,
  onChangeInput,
  zone,
  getEvents,
  address,
}) {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="discover">
      <div className="discover__list-events  animate__animated animate__fadeInLeft">
        {events.map((element) => (
          <div key={element.id} className="discover__list-events__box">
            <img className="discover__list-events__box__img" src={element.image_url} alt="" />
            <div className="discover__list-events__box__content">
              <h2 className="discover__list-events__box__content__h2">{element.name}</h2>
              <div className="discover__list-events__box__content__info">
                <div><span>{element.date ? dayjs(element.date).format('DD/MM/YYYY  mm:ss') : ''}</span></div>
                <div><span>{element.max_participants}</span> invités maximum</div>
              </div>
              <div className="discover__list-events__box__content__description">{element.description}</div>
              <Link className="button --secondary" to={`/exploration/${element.id}`}>Informations</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="discover__map">
        <Filter
          onSubmit={onFormSubmit}
          onChange={onChangeInput}
          fieldZone={zone}
        />
        <Map eventsList={events} fieldZone={zone} address={address} />
      </div>
    </div>
  );
}

Discover.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  zone: PropTypes.number.isRequired,
  getEvents: PropTypes.func.isRequired,
  address: PropTypes.array.isRequired,
};
