/* eslint-disable react/button-has-type */
import React from 'react';

import MarkerClusterGroup from 'react-leaflet-markercluster';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import coord from './data2.json';
import imageEvent from './bg.png';

export default function Map() {
  coord.forEach((element) => {
    element.desc = 'Venez decouvrir le ciel samedi 14/08/2021 !! ça va être trop bien !!';
    element.title = 'sortie astro entre poto !!';
  });
  return (
    <div className="map">
      <div className="list_events">
        {coord.map((x) => (
          <div className="list_events__box">
            <img src={imageEvent} alt="" />
            <div className="list_events__box__content">
              <h2>{x.title} vers {x.name}</h2>
              <p>{x.desc}</p>
              <button>Participer</button>
            </div>
          </div>
        ))}
      </div>
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
    </div>
  );
}
