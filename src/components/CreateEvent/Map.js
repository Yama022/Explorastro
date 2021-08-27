/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import ControlGeocoder from './controlGeocoder';

export default function Map({ getCoordLocation, coord }) {
  const coordTest = () => {
    let controlGeocoder;
    console.log(coord);

    if (coord) {
      console.log(coord.coordinates);
      controlGeocoder = (
        <ControlGeocoder
          coordLocation={getCoordLocation}
          coord={coord.coordinates}
        />
      );
    }
    else {
      console.log('ici');
      controlGeocoder = (
        <ControlGeocoder
          coordLocation={getCoordLocation}
        />
      );
    }
    return controlGeocoder;
  };
  return (
    <div className="createEventForm__form__map">
      <MapContainer
          // Centering on the map of france
        center={[44.840291, 2.109375]}
        zoom={6}
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
        {coordTest()}
      </MapContainer>
    </div>

  );
}

Map.propTypes = {
  getCoordLocation: PropTypes.func.isRequired,
  coord: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

Map.defaultProps = {
  coord: [],
};
