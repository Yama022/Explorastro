import React, { useEffect, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
// eslint-disable-next-line import/no-extraneous-dependencies
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';
import L from 'leaflet';
import home from './home.png';

export default function Map({ coord, fieldZone }) {
  // eslint-disable-next-line new-cap
  const newicon = new L.icon({
    iconUrl: home,
    iconSize: [30, 30],
  });
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
      // Localisation de l'utilisateur
      map.locate().on('locationfound', (e) => {
        setPosition(e.latlng);
        // Définit la vue de la carte (centre géographique et zoom)
        // map.flyTo(e.latlng, map.getZoom());
        // Précision de la localisation en mètres
        let circle;

        map.eachLayer((layer) => {
          if (layer.options.name !== 'tiles' && layer.name !== 'MarkerClusterGroup') {
            map.removeLayer(layer);
          }
        });

        const radius = fieldZone * 1000;
        circle = L.circle(e.latlng, radius);

        // rendu géométrique
        circle = L.circle(e.latlng, radius);
        circle.addTo(map);
      });
    }, [fieldZone]);

    return position === null ? null : (
      <MarkerClusterGroup
        name="MarkerClusterGroup"
        key={uuid.v4()}
      >
        {coord.map((element, index) => {
        // eslint-disable-next-line react/no-array-index-key

          const reverseTabCoord = element.geog.coordinates.reverse();
          console.log(reverseTabCoord);

          return (
            <div key={index}>
              <Marker names="marker" position={reverseTabCoord} id="foo">
                <Popup name="popup">Exploration vers {element.name}</Popup>
              </Marker>
            </div>
          );
        })}

        <Marker position={position} icon={newicon}>
          <Popup>
            tu es la :)
          </Popup>tiles
        </Marker>
      </MarkerClusterGroup>
    );
  }

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
        name="tiles"
      />
      {/* Add Markers events astro on the map */}

      <LocationMarker />

    </MapContainer>

  );
}

Map.propTypes = {
  coord: PropTypes.arrayOf(PropTypes.object).isRequired,
  fieldZone: PropTypes.number.isRequired,
};
