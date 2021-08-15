import React from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
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
      minZoom={6.4}
    >
      {/* Add layer dark map */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {/* Add Markers events astro on the map */}
      <MarkerClusterGroup>
        {coord.map((x) => (
          <div>
            <Marker position={[x.Latitude, x.Longitude]}>
              <Popup>Exploration vers {x.name}</Popup>
            </Marker>
          </div>
        ))}

      </MarkerClusterGroup>
    </MapContainer>
  );
}

Map.propTypes = {
  coord: PropTypes.arrayOf.isRequired,
};
