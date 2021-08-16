import React from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

export default function Map({ coord }) {
  return (
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
      />
      {/* Add Markers events astro on the map */}
      <MarkerClusterGroup
        key={uuid.v4()}
      >
        {coord.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <Marker position={[element.Latitude, element.Longitude]}>
              <Popup>Exploration vers {element.name}</Popup>
            </Marker>
          </div>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

Map.propTypes = {
  coord: PropTypes.arrayOf(PropTypes.object).isRequired,
};
