/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';
import imageEvent from 'src/assets/images/default-explo.jpg';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import Map from './Map';
import Filter from './Filter';
import 'leaflet-control-geocoder/dist/Control.Geocoder';

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
  // const geocoder = L.Control.Geocoder.arcgis();

  // const coord = eventsList.map((element) => {
  //   if (element.geog.coordinates) {
  //     const objCoord = {};
  //     const reverseTabCoord = element.geog.coordinates.reverse();
  //     [objCoord.lat, objCoord.lng] = [reverseTabCoord[0], reverseTabCoord[1]];
  //     const latLon = L.latLng(reverseTabCoord);
  //     console.log(latLon);
  //     return console.log(geocoder.reverse(latLon, 1, (resp) => (resp[0].name)));
  //   }
  // });

  return (
    <div className="discover">
      <div className="discover__list-events">
        {eventsList.map((element) => (
          <div key={element.id} className="discover__list-events__box">
            <img className="discover__list-events__box__img" src={imageEvent} alt="" />
            <div className="discover__list-events__box__content">
              <h2 className="discover__list-events__box__content__h2">{element.name}</h2>
              <div className="discover__list-events__box__content__info">
                <div><span>{element.date ? dayjs(element.date).format('DD/MM/YYYY  mm:ss') : ''}</span></div>
                <div><span>{element.max_participants}</span> invités maximum</div>
              </div>
              <div className="discover__list-events__box__content__description">{element.description}</div>
              <Link className="button --secondary" to={`/exploration/${element.id}`}>Participer</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="discover__map">
        <Filter onSubmit={onFormSubmit} onChange={onChangeInput} fieldZone={zone} />

        <Map eventsList={eventsList} fieldZone={zone} address={address} />
      </div>

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
