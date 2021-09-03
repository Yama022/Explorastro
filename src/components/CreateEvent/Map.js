/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import markerIcon from 'src/assets/images/map/telescope.png';
import ControlGeocoder from './controlGeocoder';

const telescopIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function Map({ getCoordLocation, coord }) {
  return (

    <div className="createEventForm__form__map">
      <MapContainer
        // Centering on the map of france
        center={coord.length === 2 ? coord : [44.840291, 2.109375]}
        zoom={6}
        maxZoom={18}
        minZoom={3}
      >
        {/* Add layer dark map */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.STADIA_API_KEY}`}
          name="tiles"
        />
        {/* Add Markers events astro on the map */}
        {coord.length === 2 ? (
          <ControlGeocoder coordLocation={getCoordLocation} />
        ) : (
          <ControlGeocoder coordLocation={getCoordLocation} coord={coord} />
        )}

        <Marker
          names="marker"
          position={coord.length === 2 ? coord : [44.840291, 2.109375]}
          icon={telescopIcon}
        />
      </MapContainer>
    </div>
  );
}

Map.propTypes = {
  getCoordLocation: PropTypes.func.isRequired,
  coord: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Map.defaultProps = {
  coord: [],
};
